import { defineConfig, devices } from '@playwright/test';

/**
 * Parcours navigateur. Ce qui est vérifié ici ne se teste pas unitairement :
 * l'avertissement doit apparaître sur un appareil qui n'a jamais vu l'app,
 * disparaître pour de bon, et rester consultable ensuite.
 * Un contexte navigateur neuf *est* un appareil neuf.
 *
 * Les tests tournent sur le build de production (`npm run build` puis
 * `vite preview`) : c'est le seul mode où le service worker est actif.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: process.env.CI ? 'list' : [['list']],
  use: {
    baseURL: 'http://localhost:4173',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 5'] } },
  ],
  webServer: {
    command: 'npm run build && npx vite preview --port 4173 --strictPort',
    url: 'http://localhost:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
