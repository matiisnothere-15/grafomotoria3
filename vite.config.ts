import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/grafomotoria3/', // 👈 ¡IMPORTANTE para funcionar en rutas distintas a raíz!
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      manifest: {
        name: 'GrafomotorIA',
        short_name: 'Grafomotor',
        start_url: '/grafomotoria3/', // 👈 También debe reflejar la ruta base
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#e30613',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
