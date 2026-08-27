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
  test('accueil : notion du jour et 32 domaines en 8 familles', async ({ page }) => {
    await enter(page);
    await expect(page.getByRole('heading', { name: 'Notion du jour' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Les domaines' })).toBeVisible();
    // « 1 auteur » pour la sociologie rurale et les mobilités, « N auteurs » ailleurs.
    await expect(page.getByRole('link', { name: /auteurs?$/ })).toHaveCount(32);
    await expect(page.getByRole('heading', { name: 'Territoires et environnement' })).toBeVisible();
  });

  test('menu des fonctionnalités : catégories, navigation et fermeture', async ({ page }) => {
    await enter(page);
    const menuButton = page.getByRole('button', { name: 'Ouvrir le menu des fonctionnalités' });
    await menuButton.click();
    const dialog = page.getByRole('dialog', { name: 'Fonctionnalités de Sociologor' });
    await expect(dialog).toBeVisible();

    for (const cat of ['Explorer le corpus', 'Retrouver', 'Aide et réglages']) {
      await expect(dialog.getByText(cat, { exact: true })).toBeVisible();
    }
    await expect(dialog.getByRole('link')).toHaveCount(8);

    // Un item mène à l'écran attendu, et referme le menu.
    await dialog.getByRole('link', { name: /Carte des courants/ }).click();
    await expect(page).toHaveURL(/\/courants$/);
    await expect(page.getByRole('dialog', { name: 'Fonctionnalités de Sociologor' })).toHaveCount(0);

    // Rouvert sur /courants, l'entrée correspondante est mise en évidence.
    await menuButton.click();
    await expect(dialog.getByRole('link', { name: /Carte des courants/ })).toHaveAttribute('aria-current', 'page');

    // Échap ferme le menu et rend le focus au bouton qui l'a ouvert.
    await page.keyboard.press('Escape');
    await expect(dialog).toHaveCount(0);
    await expect(menuButton).toBeFocused();

    // Un clic sur le fond — hors du panneau, ancré à gauche — ferme aussi le menu.
    await menuButton.click();
    const { width } = page.viewportSize();
    await page.mouse.click(width - 10, 10);
    await expect(dialog).toHaveCount(0);
  });

  test('domaine → fiche auteur', async ({ page }) => {
    await enter(page);
    await page.getByRole('link', { name: /Déviance/ }).click();
    await expect(content(page).getByRole('heading', { name: 'Sociologie de la déviance' })).toBeVisible();
    await page.getByRole('link', { name: /Howard S\. Becker/ }).click();
    await expect(content(page).getByRole('heading', { name: 'Howard S. Becker', exact: true })).toBeVisible();
    await expect(page.getByText('Étiquetage').first()).toBeVisible();
  });

  test('domaine : paragraphe de contexte, au-delà de la phrase de présentation', async ({ page }) => {
    await enter(page, '/d/generale');
    await expect(content(page).getByRole('heading', { name: 'Sociologie générale' })).toBeVisible();
    // La phrase de présentation reste affichée…
    await expect(page.getByText("Avant de découper la société en objets", { exact: false })).toBeVisible();
    // … et un paragraphe plus long la complète, citant les auteurs listés plus bas.
    await expect(page.getByText('Comte fonde le mot et le projet', { exact: false })).toBeVisible();
  });

  test('domaine : inspirateurs hors corpus, non cliquables', async ({ page }) => {
    await enter(page, '/d/genre');
    await expect(content(page).getByRole('heading', { name: 'Sociologie du genre' })).toBeVisible();
    await expect(page.getByText('Inégalités et identités').first()).toBeVisible();
    // Intertitre `soc-kicker`, comme « Influences hors corpus » sur une fiche auteur.
    await expect(content(page).getByText('Inspirateurs hors corpus')).toBeVisible();
    // Un inspirateur est du texte : il ne doit exister aucun lien à son nom.
    await expect(page.getByText(/Judith Butler/)).toBeVisible();
    await expect(page.getByRole('link', { name: /Judith Butler/ })).toHaveCount(0);
  });

  test('domaine à un seul auteur : compteur au singulier', async ({ page }) => {
    await enter(page, '/d/rurale');
    await expect(content(page).getByRole('heading', { name: 'Sociologie rurale' })).toBeVisible();
    await expect(page.getByText('1 auteur de référence')).toBeVisible();
    await expect(page.getByText(/Henri Mendras/)).toBeVisible();
  });

  test('fiche : sections attendues et filiation cliquable', async ({ page }) => {
    await enter(page, '/a/bourdieu');
    for (const t of ['En une phrase', 'Repères', 'Concepts majeurs', 'Filiation', 'Œuvres principales', 'Citations', 'Critiques']) {
      await expect(page.getByRole('heading', { name: t })).toBeVisible();
    }
    await page.getByRole('link', { name: 'Max Weber' }).first().click();
    await expect(content(page).getByRole('heading', { name: 'Max Weber', exact: true })).toBeVisible();
  });

  test('fiche : portrait photographique chargé et crédité', async ({ page }) => {
    await enter(page, '/a/weber');
    const img = content(page).getByRole('img', { name: /Max Weber en 1894/ });
    await expect(img).toBeVisible();
    // Une image cassée se rend avec naturalWidth à 0 : on vérifie le décodage,
    // pas seulement la présence de la balise.
    await expect
      .poll(() => img.evaluate((el) => el.naturalWidth), { timeout: 5000 })
      .toBeGreaterThan(0);
    await expect(content(page).getByText('Domaine public')).toBeVisible();
  });

  test('fiche : monogramme assumé quand aucune image libre n’existe', async ({ page }) => {
    await enter(page, '/a/bourdieu');
    await expect(content(page).getByRole('img', { name: /Bourdieu/ })).toHaveCount(0);
    await expect(content(page).getByText('PB', { exact: true })).toBeVisible();
  });

  test('fiche : influences hors corpus, en texte et non cliquables', async ({ page }) => {
    // Marx n'a aucun prédécesseur dans le corpus : sans cette section, la fiche
    // laisserait croire qu'il n'hérite de personne.
    await enter(page, '/a/marx');
    await expect(content(page).getByText('Aucune fiche liée dans ce corpus')).toBeVisible();
    await expect(content(page).getByText('Influences hors corpus')).toBeVisible();
    const hegel = content(page).getByText(/^Hegel — /);
    await expect(hegel).toBeVisible();
    await expect(hegel.locator('a')).toHaveCount(0);
  });

  test('export Markdown : les influences hors corpus sont dans le fichier', async ({ page }) => {
    await enter(page, '/a/tocqueville');
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: /Exporter en Markdown/ }).click(),
    ]);
    const stream = await download.createReadStream();
    const chunks = [];
    for await (const c of stream) chunks.push(c);
    const md = Buffer.concat(chunks).toString('utf8');
    expect(md).toContain('### Influences hors corpus');
    expect(md).toContain('Montesquieu');
  });

  test('fiche concept : les dix rubriques sont présentes', async ({ page }) => {
    await enter(page, '/c/habitus');
    await expect(content(page).getByRole('heading', { name: 'Habitus', exact: true })).toBeVisible();
    // « En une phrase » est un intertitre `soc-kicker`, pas un <h3> — comme sur
    // la fiche auteur, dont cet écran reprend la mise en page.
    await expect(content(page).getByText('En une phrase')).toBeVisible();
    for (const t of [
      'Définition détaillée',
      'Origine',
      'Exemples concrets',
      'Œuvres où il apparaît',
      'Évolution historique',
      'Critiques',
      'Voisinage',
    ]) {
      await expect(content(page).getByRole('heading', { name: t })).toBeVisible();
    }
    // Auteur associé et définition courte, les deux rubriques hors titre.
    await expect(content(page).getByText('Concepts associés')).toBeVisible();
    await expect(content(page).getByText('Concepts opposés')).toBeVisible();
    await expect(content(page).getByText('Auteur associé')).toBeVisible();
  });

  test('fiche concept : exemples sans doublon', async ({ page }) => {
    // getConcept place l'exemple de la fiche auteur en tête ; le recopier dans
    // `exemples` l'afficherait deux fois — régression déjà survenue une fois.
    await enter(page, '/c/habitus');
    const items = content(page).locator('h3:has-text("Exemples concrets") + ul li');
    const texts = await items.allInnerTexts();
    expect(texts.length).toBeGreaterThan(1);
    expect(new Set(texts).size).toBe(texts.length);
  });

  test('navigation entre concepts : associé, opposé, puis retour à l’auteur', async ({ page }) => {
    await enter(page, '/c/habitus');
    await content(page).getByRole('link', { name: /Capital culturel/ }).first().click();
    await expect(content(page).getByRole('heading', { name: 'Capital culturel', exact: true })).toBeVisible();
    await content(page)
      .getByRole('link', { name: /Individualisme méthodologique/ })
      .first()
      .click();
    await expect(
      content(page).getByRole('heading', { name: 'Individualisme méthodologique', exact: true }),
    ).toBeVisible();
    await content(page).getByRole('link', { name: /Voir la fiche de Raymond Boudon/ }).click();
    await expect(content(page).getByRole('heading', { name: 'Raymond Boudon', exact: true })).toBeVisible();
  });

  test('les oppositions se parcourent dans les deux sens', async ({ page }) => {
    // La réciproque est calculée, pas recopiée : habitus déclare l'opposition,
    // individualisme-methodologique doit la porter aussi.
    await enter(page, '/c/individualisme-methodologique');
    await expect(content(page).getByRole('link', { name: /Habitus/ }).first()).toBeVisible();
  });

  test('fiche auteur : un concept mène à sa fiche', async ({ page }) => {
    await enter(page, '/a/bourdieu');
    await content(page).getByRole('link', { name: 'Fiche complète du concept →' }).first().click();
    await expect(content(page).getByRole('heading', { name: 'Habitus', exact: true })).toBeVisible();
  });

  test('recherche : un concept mène à sa fiche, une œuvre à celle de l’auteur', async ({ page }) => {
    await enter(page, '/recherche?q=anomie');
    await page.getByRole('link', { name: /Anomie/ }).first().click();
    await expect(page).toHaveURL(/\/c\/anomie$/);
    await expect(content(page).getByRole('heading', { name: 'Anomie', exact: true })).toBeVisible();
  });

  test('recherche : un phénomène mène à sa fiche', async ({ page }) => {
    await enter(page, '/recherche?q=gentrification');
    await expect(page.getByText('Phénomène', { exact: true })).toBeVisible();
    await page.getByRole('link', { name: /Gentrification/ }).click();
    await expect(page).toHaveURL(/\/p\/gentrification$/);
    await expect(content(page).getByRole('heading', { name: 'Gentrification', exact: true })).toBeVisible();
  });

  test('notion du jour : le bouton principal ouvre le concept', async ({ page }) => {
    await enter(page);
    await page.getByRole('link', { name: 'Ouvrir la fiche du concept' }).click();
    await expect(page).toHaveURL(/\/c\//);
    await expect(content(page).getByRole('heading', { name: 'Origine' })).toBeVisible();
  });

  test('concept inconnu : écran Introuvable', async ({ page }) => {
    await enter(page, '/c/nawak');
    await expect(content(page).getByText("Ce concept n'existe pas.")).toBeVisible();
  });

  test('export Markdown d’un concept : les dix rubriques sont dans le fichier', async ({ page }) => {
    await enter(page, '/c/habitus');
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      content(page).getByRole('button', { name: /Exporter en Markdown/ }).click(),
    ]);
    expect(download.suggestedFilename()).toBe('sociologor-concept-habitus.md');
    const stream = await download.createReadStream();
    const chunks = [];
    for await (const c of stream) chunks.push(c);
    const md = Buffer.concat(chunks).toString('utf8');
    for (const h of [
      '## Définition détaillée',
      '## Origine',
      '## Exemples concrets',
      '## Œuvres où il apparaît',
      '## Évolution historique',
      '## Critiques',
      '## Voisinage',
      '**Auteur associé**',
      '**Concepts associés**',
      '**Concepts opposés**',
    ]) {
      expect(md).toContain(h);
    }
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
    // Le filtre Phénomènes exclut un concept homonyme absent des phénomènes.
    await page.getByLabel('Rechercher dans les fiches').fill('chomage');
    await page.getByRole('button', { name: 'Phénomènes' }).click();
    await expect(page.getByRole('link', { name: /Chômage/ })).toHaveCount(1);
  });

  test('recherche sans résultat : message d\'aide', async ({ page }) => {
    await enter(page, '/recherche?q=zzzzzz');
    await expect(page.getByText(/Aucun résultat pour/)).toBeVisible();
  });

  test('graphe : nœuds cliquables et centrage depuis une fiche', async ({ page }) => {
    await enter(page, '/graphe');
    // Un nom d'auteur figure aussi comme sous-titre des nœuds de ses concepts,
    // dans le graphe des concepts plus bas : on cible le graphe des filiations.
    const filiation = page.locator('[aria-label="Graphe des filiations, défilement horizontal et vertical"]');
    await expect(filiation.getByRole('link', { name: /Pierre Bourdieu/ })).toBeVisible();
    await page.goto('/a/elias');
    await page.getByRole('link', { name: 'Situer dans le graphe' }).click();
    await expect(page).toHaveURL(/focus=elias/);
    await expect(page.locator('[data-active="true"]')).toHaveCount(1);
  });

  test('filiation : la fiche et le graphe annoncent les mêmes liens', async ({ page }) => {
    // Le bloc d'une filiation, désigné par son intitulé : « Max Weber » sous
    // « Hérite de » et sous « A influencé » ne veut pas dire la même chose.
    const bloc = (label) => page.getByText(label, { exact: true }).locator('xpath=following-sibling::div');

    await enter(page, '/a/boudon');
    await expect(bloc('Hérite de').getByRole('link', { name: 'Max Weber' })).toBeVisible();
    await page.goto('/a/weber');
    await expect(bloc('A influencé').getByRole('link', { name: 'Raymond Boudon' })).toBeVisible();
    await page.goto('/a/durkheim');
    await expect(bloc('Hérite de').getByRole('link', { name: 'Alexis de Tocqueville' })).toBeVisible();

    // Une arête par relation, réciproques comprises.
    await page.goto('/graphe');
    await expect(page.locator('svg[width="880"] path')).toHaveCount(19);
  });

  test('graphe des concepts : sous le graphe des filiations, un nœud par concept', async ({ page }) => {
    await enter(page, '/graphe');
    const concepts = page.locator('[aria-label="Graphe des concepts, défilement horizontal et vertical"]');
    await expect(concepts.getByRole('link')).toHaveCount(38);
    // Une arête par paire associée ou opposée, dédoublonnée : 64 + 36.
    await expect(concepts.locator('svg path')).toHaveCount(100);
    await concepts.getByRole('link', { name: /Habitus/ }).click();
    await expect(page).toHaveURL(/\/c\/habitus/);
    await expect(content(page).getByRole('heading', { name: 'Habitus', exact: true })).toBeVisible();
  });

  test('voisinage : un concept n\'est pas à la fois associé et opposé', async ({ page }) => {
    const bloc = (label) => page.getByText(label, { exact: true }).locator('xpath=following-sibling::div');

    await enter(page, '/c/anomie');
    await expect(bloc('Concepts opposés').getByRole('link', { name: /Solidarité organique/ })).toBeVisible();
    await expect(bloc('Concepts associés').getByRole('link', { name: /Solidarité organique/ })).toHaveCount(0);
  });

  test('carte des courants : périodes, filiation et renvoi vers une fiche', async ({ page }) => {
    await enter(page, '/courants');
    await expect(content(page).getByRole('heading', { name: 'Carte des courants' })).toBeVisible();
    for (const p of ['XIXᵉ siècle — les fondations', 'Tournant contemporain']) {
      await expect(page.getByRole('heading', { name: p })).toBeVisible();
    }
    // Le fonctionnalisme porte deux fiches, et descend de deux courants.
    const fonc = page.locator('#courant-fonctionnalisme');
    await expect(fonc.getByRole('link', { name: /Talcott Parsons/ })).toBeVisible();
    await expect(fonc.getByRole('link', { name: /Robert K\. Merton/ })).toBeVisible();
    await expect(fonc.getByRole('link', { name: /Holisme durkheimien/ })).toBeVisible();
    await fonc.getByRole('link', { name: /Talcott Parsons/ }).click();
    await expect(content(page).getByRole('heading', { name: 'Talcott Parsons', exact: true })).toBeVisible();
  });

  test('carte des courants : la descendance est déduite de l’amont', async ({ page }) => {
    // Seul `vientDe` est déclaré : « A donné » n'existe que si la réciproque
    // est calculée. Le fonctionnalisme déclare venir du holisme ; le holisme
    // doit donc l'annoncer en descendance sans que rien ne le déclare.
    await enter(page, '/courants');
    const holisme = page.locator('#courant-holisme');
    await expect(holisme.getByText('A donné')).toBeVisible();
    await expect(holisme.getByRole('link', { name: /Fonctionnalisme/ })).toBeVisible();
    await expect(holisme.getByRole('link', { name: /Structuralisme génétique/ })).toBeVisible();
  });

  test('courant sans fiche du corpus : le dit au lieu de paraître vide', async ({ page }) => {
    await enter(page, '/courants');
    const chicago = page.locator('#courant-ecole-de-chicago');
    await expect(chicago.getByText("Aucune fiche n'incarne ce courant dans le corpus")).toBeVisible();
    await expect(chicago.getByText(/Robert Park — /)).toBeVisible();
    await expect(chicago.getByText(/Robert Park — /).locator('a')).toHaveCount(0);
  });

  test('fiche → carte des courants, centrée sur son courant', async ({ page }) => {
    await enter(page, '/a/goffman');
    await page.getByRole('link', { name: 'Situer dans les courants' }).click();
    await expect(page).toHaveURL(/courants\?focus=interactionnisme/);
    await expect(page.locator('[data-active="true"]')).toHaveCount(1);
    await expect(page.locator('#courant-interactionnisme[data-active="true"]')).toBeVisible();
  });

  test('phénomènes sociaux : accueil → liste → fiche → concept du corpus', async ({ page }) => {
    await enter(page, '/');
    await page.getByRole('link', { name: /phénomènes sociaux/ }).click();
    await expect(page).toHaveURL(/\/phenomenes$/);
    await expect(content(page).getByRole('heading', { name: 'Phénomènes sociaux' })).toBeVisible();
    await expect(page.getByRole('link', { name: /Chômage/ })).toBeVisible();

    await page.getByRole('link', { name: /^Chômage/ }).click();
    await expect(page).toHaveURL(/\/p\/chomage$/);
    await expect(content(page).getByRole('heading', { name: 'Chômage', exact: true })).toBeVisible();
    await expect(page.getByText('Précarité — ', { exact: false })).toBeVisible();

    await page.getByRole('link', { name: /Classe sociale/ }).click();
    await expect(page).toHaveURL(/\/c\/classe-sociale$/);
    await expect(content(page).getByRole('heading', { name: 'Classe sociale', exact: true })).toBeVisible();
  });

  test('phénomène sans concept du corpus : le dit au lieu de paraître vide', async ({ page }) => {
    await enter(page, '/p/etalement-urbain');
    await expect(page.getByText(/Aucun concept des quinze fiches/)).toBeVisible();
    await expect(page.getByText("l'installation en dehors des villes", { exact: false })).toBeVisible();
  });

  test('export Markdown d’un phénomène : concepts et notions dans le fichier', async ({ page }) => {
    await enter(page, '/p/gentrification');
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      content(page).getByRole('button', { name: /Exporter en Markdown/ }).click(),
    ]);
    expect(download.suggestedFilename()).toBe('sociologor-phenomene-gentrification.md');
    const stream = await download.createReadStream();
    const chunks = [];
    for await (const c of stream) chunks.push(c);
    const md = Buffer.concat(chunks).toString('utf8');
    expect(md).toContain('## Concepts du corpus');
    expect(md).toContain('Capital culturel');
    expect(md).toContain('## Notions associées');
    expect(md).toContain('Ségrégation urbaine');
  });

  test('phénomène inconnu : écran Introuvable', async ({ page }) => {
    await enter(page, '/p/inexistant');
    await expect(page.getByText("Ce phénomène n'existe pas.")).toBeVisible();
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
    // Le portrait est précaché comme le reste : hors ligne, il se décode encore.
    await expect
      .poll(
        () =>
          content(page)
            .getByRole('img', { name: /Max Weber en 1894/ })
            .evaluate((el) => el.naturalWidth),
        { timeout: 5000 },
      )
      .toBeGreaterThan(0);
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
