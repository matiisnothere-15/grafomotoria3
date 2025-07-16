import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/grafomotoria3/', // 👈 Necesario para que GitHub Pages funcione
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      manifest: {
        name: 'GrafomotorIA',
        short_name: 'Grafomotor',
        start_url: '/grafomotoria3/', // 👈 También lo puedes ajustar si quieres navegación desde la raíz
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
