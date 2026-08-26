import { expect, test } from '@playwright/test';

const NOTICE = '⚠️ Information importante';

test.describe('Avertissement légal du premier lancement', () => {
  test('1re ouverture → avertissement affiché', async ({ page }) => {
    await page.goto('/');
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole('heading', { name: NOTICE })).toBeVisible();
  });

  test('« J\'ai compris » → avertissement disparaît, application accessible', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: "J'ai compris" }).click();
    await expect(page.getByRole('dialog')).toHaveCount(0);
    await expect(page.getByRole('heading', { name: 'Sociologor' })).toBeVisible();
  });

  test('rechargement → avertissement ne réapparaît pas', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: "J'ai compris" }).click();
    await page.reload();
    await expect(page.getByRole('dialog')).toHaveCount(0);
  });

  test('nouvelle ouverture → arrivée directe sur l\'écran principal', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: "J'ai compris" }).click();
    await page.goto('/a/bourdieu');
    await expect(page.getByRole('dialog')).toHaveCount(0);
    await expect(page.locator('#contenu').getByRole('heading', { name: 'Pierre Bourdieu', exact: true })).toBeVisible();
  });

  test('« Voir les détails » → mentions complètes accessibles dans la modale', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Voir les détails' }).click();
    const dialog = page.getByRole('dialog');
    await expect(dialog.getByRole('heading', { name: 'Mentions légales' })).toBeVisible();
    await expect(dialog.getByRole('heading', { name: 'Limitation de responsabilité' })).toBeVisible();
    await expect(dialog.getByRole('heading', { name: 'Politique de confidentialité' })).toBeVisible();
    // Chaque champ est lu dans sa ligne de définition : « Swinux » apparaît
    // deux fois — éditeur et directeur de la publication —, un texte nu ne
    // suffirait plus à le désigner.
    const champ = (label) => dialog.locator('dl > div').filter({ hasText: label }).locator('dd');
    await expect(champ('Éditeur')).toHaveText('Swinux');
    await expect(champ('Directeur de la publication')).toHaveText('Swinux');
    await expect(champ('Hébergeur')).toHaveText('Netlify, Inc.');
    await expect(champ('Domaine de publication')).toHaveText('sociologor.netlify.app');
    // Plus aucun champ en attente : c'est la condition de publication.
    await expect(dialog.getByText('[À COMPLÉTER]')).toHaveCount(0);
  });

  test('retour navigateur ferme les détails avant de quitter la page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Voir les détails' }).click();
    await expect(page.getByRole('dialog').getByRole('heading', { name: 'Mentions légales' })).toBeVisible();
    await page.goBack();
    await expect(page.getByRole('dialog').getByRole('heading', { name: NOTICE })).toBeVisible();
  });

  test('suppression du stockage → avertissement réapparaît', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: "J'ai compris" }).click();
    await expect(page.getByRole('dialog')).toHaveCount(0);
    await page.evaluate(() => window.localStorage.clear());
    await page.reload();
    await expect(page.getByRole('dialog').getByRole('heading', { name: NOTICE })).toBeVisible();
  });

  test('action principale visible sans défiler', async ({ page }) => {
    await page.goto('/');
    const primary = page.getByRole('button', { name: "J'ai compris" });
    await expect(primary).toBeInViewport();
    const box = await primary.boundingBox();
    expect(box.height).toBeGreaterThanOrEqual(44); // cible tactile
  });

  test('mentions accessibles en permanence depuis les Paramètres', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: "J'ai compris" }).click();
    await page.goto('/parametres');
    await page.getByRole('link', { name: 'Informations légales' }).click();
    await expect(page.locator('#contenu').getByRole('heading', { name: 'Mentions légales' }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Limitation de responsabilité' })).toBeVisible();
  });

  test('aucune section « Précision de la localisation » (app sans position)', async ({ page }) => {
    await page.goto('/documentation/legal/mentions-legales');
    await expect(page.getByText('Précision de la localisation')).toHaveCount(0);
  });

  test('aucun débordement horizontal', async ({ page }) => {
    await page.goto('/');
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
    );
    expect(overflow).toBe(false);
    await page.getByRole('button', { name: "J'ai compris" }).click();
    const overflowAfter = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
    );
    expect(overflowAfter).toBe(false);
  });
});
