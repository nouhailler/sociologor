import { expect, test } from '@playwright/test';

/** Le titre d'un écran apparaît dans l'en-tête ET dans le corps : on vise le corps. */
const content = (page) => page.locator('#contenu');

/** Passe l'avertissement du premier lancement : l'app est déjà « connue » de l'appareil. */
async function enter(page, path = '/') {
  await page.addInitScript(() => {
    window.localStorage.setItem('legal_notice_acknowledged', 'true');
    window.localStorage.setItem('legal_notice_acknowledged_version', '"1.0"');
  });
  await page.goto(path);
}

test.describe('Parcours principal', () => {
  test('accueil : notion du jour et 14 domaines', async ({ page }) => {
    await enter(page);
    await expect(page.getByRole('heading', { name: 'Notion du jour' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Les domaines' })).toBeVisible();
    await expect(page.getByRole('link', { name: /auteurs$/ })).toHaveCount(14);
  });

  test('domaine → fiche auteur', async ({ page }) => {
    await enter(page);
    await page.getByRole('link', { name: /Déviance/ }).click();
    await expect(content(page).getByRole('heading', { name: 'Déviance', exact: true })).toBeVisible();
    await page.getByRole('link', { name: /Howard S\. Becker/ }).click();
    await expect(content(page).getByRole('heading', { name: 'Howard S. Becker', exact: true })).toBeVisible();
    await expect(page.getByText('Étiquetage').first()).toBeVisible();
  });

  test('fiche : sections attendues et filiation cliquable', async ({ page }) => {
    await enter(page, '/a/bourdieu');
    for (const t of ['En une phrase', 'Repères', 'Concepts majeurs', 'Filiation', 'Œuvres principales', 'Citations', 'Critiques']) {
      await expect(page.getByRole('heading', { name: t })).toBeVisible();
    }
    await page.getByRole('link', { name: 'Max Weber' }).first().click();
    await expect(content(page).getByRole('heading', { name: 'Max Weber', exact: true })).toBeVisible();
  });

  test('paramètre « Afficher les citations » masque la section et persiste', async ({ page }) => {
    await enter(page, '/parametres');
    // L'input est visuellement masqué par le design system (le libellé le pilote).
    await expect(page.getByRole('checkbox', { name: /Afficher les citations/ })).toBeChecked();
    await page.getByText('Afficher les citations').click();
    await expect(page.getByRole('checkbox', { name: /Afficher les citations/ })).not.toBeChecked();
    await page.goto('/a/bourdieu');
    await expect(page.getByRole('heading', { name: 'Citations' })).toHaveCount(0);
    await page.reload();
    await expect(page.getByRole('heading', { name: 'Citations' })).toHaveCount(0);
  });

  test('épingler une fiche la fait apparaître dans « Mes fiches » et survit au rechargement', async ({ page }) => {
    await enter(page, '/a/goffman');
    await page.getByRole('button', { name: 'Épingler dans mes fiches' }).click();
    await page.goto('/mes-fiches');
    await expect(page.getByRole('link', { name: /Erving Goffman/ })).toBeVisible();
    await page.reload();
    await expect(page.getByRole('link', { name: /Erving Goffman/ })).toBeVisible();
  });

  test('recherche : accents ignorés et filtres', async ({ page }) => {
    await enter(page, '/recherche');
    await page.getByLabel('Rechercher dans les fiches').fill('emile');
    await expect(page.getByRole('link', { name: /Émile Durkheim/ }).first()).toBeVisible();
    await page.getByLabel('Rechercher dans les fiches').fill('habitus');
    await page.getByRole('button', { name: 'Concepts' }).click();
    await expect(page.getByText('Habitus').first()).toBeVisible();
    await expect(page).toHaveURL(/q=habitus/);
  });

  test('recherche sans résultat : message d\'aide', async ({ page }) => {
    await enter(page, '/recherche?q=zzzzzz');
    await expect(page.getByText(/Aucun résultat pour/)).toBeVisible();
  });

  test('graphe : nœuds cliquables et centrage depuis une fiche', async ({ page }) => {
    await enter(page, '/graphe');
    await expect(page.getByRole('link', { name: /Pierre Bourdieu/ })).toBeVisible();
    await page.goto('/a/elias');
    await page.getByRole('link', { name: 'Situer dans le graphe' }).click();
    await expect(page).toHaveURL(/focus=elias/);
    await expect(page.locator('[data-active="true"]')).toHaveCount(1);
  });

  test('export Markdown : téléchargement d\'un fichier nommé', async ({ page }) => {
    await enter(page, '/a/durkheim');
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: 'Exporter en Markdown' }).click(),
    ]);
    expect(download.suggestedFilename()).toBe('sociologor-emile-durkheim.md');
  });

  test('adresse inconnue : écran Introuvable', async ({ page }) => {
    await enter(page, '/a/inexistant');
    await expect(page.getByText("Cette fiche n'existe pas.")).toBeVisible();
    await enter(page, '/d/inexistant');
    await expect(page.getByText("Ce domaine n'existe pas.")).toBeVisible();
  });

  test('effacer les données locales vide « Mes fiches »', async ({ page }) => {
    await enter(page, '/a/marx');
    await page.getByRole('button', { name: 'Épingler dans mes fiches' }).click();
    await page.goto('/parametres');
    await page.getByRole('button', { name: 'Effacer mes données locales' }).click();
    await page.getByRole('button', { name: "Confirmer l'effacement" }).click();
    await page.goto('/mes-fiches');
    await expect(page.getByText('Rien encore.')).toBeVisible();
  });
});

test.describe('Documentation intégrée', () => {
  test('sommaire en accordéon : chapitres repliés, dépliables', async ({ page }) => {
    await enter(page, '/documentation');
    const chapter = page.getByRole('button', { name: /Dépannage/ });
    await expect(chapter).toHaveAttribute('aria-expanded', 'false');
    await chapter.click();
    await expect(chapter).toHaveAttribute('aria-expanded', 'true');
    await expect(page.getByRole('link', { name: /ne s'ouvre pas hors ligne/ })).toBeVisible();
  });

  test('recherche documentaire', async ({ page }) => {
    await enter(page, '/documentation');
    await page.getByLabel('Rechercher dans la documentation').fill('hors connexion');
    await expect(page.getByRole('link', { name: /Fonctionnement hors connexion/ }).first()).toBeVisible();
  });

  test('page de doc : fil d\'Ariane, lien interne et suivant', async ({ page }) => {
    await enter(page, '/documentation/features/favoris');
    await expect(content(page).getByRole('heading', { name: 'Fiches épinglées', level: 1 })).toBeVisible();
    await page.getByRole('link', { name: 'Stockage local' }).first().click();
    await expect(page).toHaveURL(/\/documentation\/data\/stockage-local/);
    await expect(content(page).getByRole('heading', { name: 'Stockage local', level: 1 })).toBeVisible();
  });
});

test.describe('PWA', () => {
  test('manifest et icônes servis', async ({ page, request }) => {
    await enter(page);
    const manifest = await request.get('/manifest.webmanifest');
    expect(manifest.ok()).toBeTruthy();
    const json = await manifest.json();
    expect(json.name).toContain('Sociologor');
    expect(json.display).toBe('standalone');
    for (const icon of json.icons) {
      const res = await request.get(icon.src);
      expect(res.ok(), `icône ${icon.src}`).toBeTruthy();
    }
  });

  test('service worker enregistré, puis application utilisable hors ligne', async ({ page, context }) => {
    await enter(page);
    // `registerType: 'prompt'` n'appelle ni skipWaiting ni clientsClaim : le
    // worker ne prend la main qu'au chargement suivant. C'est le comportement
    // décrit dans docs/offline/index.md (« rechargez la page une fois »).
    await page.evaluate(() => navigator.serviceWorker.ready);
    await page.reload();
    await page.waitForFunction(() => navigator.serviceWorker.controller !== null, null, { timeout: 20000 });

    await context.setOffline(true);
    await page.goto('/a/weber');
    await expect(content(page).getByRole('heading', { name: 'Max Weber', exact: true })).toBeVisible();
    // La recherche et la documentation sont servies depuis le cache elles aussi.
    await page.goto('/recherche?q=anomie');
    await expect(page.getByText('Anomie').first()).toBeVisible();
    await page.goto('/documentation/offline/index');
    await expect(content(page).getByRole('heading', { name: 'Fonctionnement hors connexion', level: 1 })).toBeVisible();

    await context.setOffline(false);
  });

  test('bandeau « Hors connexion » à la perte du réseau', async ({ page }) => {
    await enter(page);
    // Le signal fiable en session vivante est l'événement du navigateur :
    // dans un document servi par le service worker, `navigator.onLine` peut
    // encore répondre `true` juste après une navigation hors ligne.
    await page.evaluate(() => {
      Object.defineProperty(window.navigator, 'onLine', { get: () => false, configurable: true });
      window.dispatchEvent(new Event('offline'));
    });
    await expect(page.getByText(/Hors connexion/)).toBeVisible();

    await page.evaluate(() => {
      Object.defineProperty(window.navigator, 'onLine', { get: () => true, configurable: true });
      window.dispatchEvent(new Event('online'));
    });
    await expect(page.getByText(/Hors connexion/)).toHaveCount(0);
  });
});
