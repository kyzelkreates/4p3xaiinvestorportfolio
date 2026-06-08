/**
 * 4P3X Verse™ Service Worker
 * Powered by 4P3X Intelligent AI™ · Created by Kyzel Kreates™
 *
 * Caches the portfolio shell for offline investor review.
 * Increment CACHE_VERSION when deploying major updates.
 */

const CACHE_VERSION = 'v3';
const CACHE_NAME = `4p3x-investor-portfolio-${CACHE_VERSION}`;

const CORE_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.webmanifest',
  '/assets/4p3x-landscape-logo.png',
  '/assets/4p3x-square-logo.png',
  '/4p3x-verse-investor-info-pack.json'
];

// Install: cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting()) // Don't block install on cache failure
  );
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch: cache-first for assets, network-first for HTML
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // Skip API calls — never cache serverless routes
  if (url.pathname.startsWith('/api/')) return;

  // Network-first for navigation (HTML pages) — ensures fresh content
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match('/offline.html'))
    );
    return;
  }

  // Cache-first for all other GET requests (assets, scripts, styles)
  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) return cached;
        return fetch(event.request)
          .then(response => {
            if (response && response.status === 200 && response.type !== 'opaque') {
              const copy = response.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
            }
            return response;
          })
          .catch(() => caches.match('/offline.html'));
      })
  );
});
