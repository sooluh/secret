import { defineConfig, loadEnv } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    plugins: [
      react(),
      VitePWA({
        registerType: 'autoUpdate',
        workbox: {
          cleanupOutdatedCaches: false,
          sourcemap: true,
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fontbit\.io\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'fontbit-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365
                },
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              urlPattern: /^https:\/\/[a-z0-9]+\.supabase\.co\/?.*/i,
              handler: 'NetworkFirst',
              options: {
                networkTimeoutSeconds: 20,
                cacheName: 'supabase-cache',
                cacheableResponse: {
                  statuses: [0, 200]
                }
              }
            },
            {
              handler: 'NetworkOnly',
              urlPattern: /^https:\/\/[a-z0-9]+\.supabase\.co\/?.*/i,
              options: {
                backgroundSync: {
                  name: 'supabase-queue',
                  options: {
                    maxRetentionTime: 24 * 60
                  }
                }
              }
            }
          ]
        },
        manifest: {
          name: process.env.VITE_APP_TITLE,
          short_name: process.env.VITE_APP_NAME,
          description: process.env.VITE_APP_DESCRIPTION,
          icons: [
            {
              src: '/assets/android-chrome-36x36.png',
              sizes: '36x36',
              type: 'image/png'
            },
            {
              src: '/assets/android-chrome-48x48.png',
              sizes: '48x48',
              type: 'image/png'
            },
            {
              src: '/assets/android-chrome-72x72.png',
              sizes: '72x72',
              type: 'image/png'
            },
            {
              src: '/assets/android-chrome-96x96.png',
              sizes: '96x96',
              type: 'image/png'
            },
            {
              src: '/assets/android-chrome-144x144.png',
              sizes: '144x144',
              type: 'image/png'
            },
            {
              src: '/assets/android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/assets/android-chrome-256x256.png',
              sizes: '256x256',
              type: 'image/png'
            },
            {
              src: '/assets/android-chrome-384x384.png',
              sizes: '384x384',
              type: 'image/png'
            },
            {
              src: '/assets/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
            }
          ],
          theme_color: '#ea2d49',
          background_color: '#ea2d49',
          start_url: '/',
          display: 'standalone',
          orientation: 'portrait',
          lang: 'id'
        }
      })
    ],
    assetsInclude: ['public/*'],
    server: {
      host: '0.0.0.0'
    },
    worker: {
      format: 'es'
    }
  })
}
