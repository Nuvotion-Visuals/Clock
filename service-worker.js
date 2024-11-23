const CACHE_NAME = "clock-cache-v1";
const ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/orbit.min.css",
  "/orbit.min.js",
  "/fontawesome.min.css",
  "/solid.min.css",
  "/Nuvo.woff2",
  "/fa-solid-900.ttf",
  "/fa-solid-900.woff2",
  "/favicon.ico",
  "/favicon.svg",
  "/favicon-96x96.png",
  "/apple-touch-icon.png",
  "/web-app-manifest-192x192.png",
  "/web-app-manifest-512x512.png"
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});