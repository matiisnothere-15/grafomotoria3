import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/grafomotoria3/', 
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg',
        'robots.txt',
        'screenshot1.png',
        'screenshot2.png'
      ],
      manifest: {
        id: '/grafomotoria3/',
        name: 'GrafomotorIA',
        short_name: 'Grafomotor',
        description: 'App terapéutica para niños con dificultades grafomotoras.',
        start_url: '/grafomotoria3/',
        scope: '/grafomotoria3/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#e30613',
        orientation: 'portrait',
        launch_handler: {
          client_mode: 'focus-existing'
        },
        categories: ['education', 'health', 'productivity'],
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        screenshots: [
          {
            src: 'screenshot1.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'screenshot2.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        related_applications: [],
        scope_extensions: []
      }
    })
  ]
});
