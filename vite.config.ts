import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/element-quiz/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: "What's Your Element? — Herbal Rhymes",
        short_name: 'Element Quiz',
        description: 'Discover your Five Element type with this Traditional Chinese Medicine personality quiz.',
        theme_color: '#22573E',
        background_color: '#FDF8F0',
        display: 'standalone',
        scope: '/element-quiz/',
        start_url: '/element-quiz/',
        icons: [
          { src: 'pwa-192x192.svg', sizes: '192x192', type: 'image/svg+xml' },
          { src: 'pwa-192x192.svg', sizes: '512x512', type: 'image/svg+xml' },
          { src: 'pwa-192x192.svg', sizes: '512x512', type: 'image/svg+xml', purpose: 'any maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        navigateFallback: '/element-quiz/index.html',
      },
    }),
  ],
})
