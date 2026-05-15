/*
 * Cleanup service worker: unregisters itself and removes all Cache Storage entries.
 * This prevents stale shells/chunks from breaking routes after static deploy changes.
 */
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map((name) => caches.delete(name)));

      await self.registration.unregister();

      const clientsList = await self.clients.matchAll({
        type: 'window',
        includeUncontrolled: true
      });

      for (const client of clientsList) {
        client.navigate(client.url);
      }
    })()
  );
});

self.addEventListener('fetch', () => {
  // Intentionally no-op.
});
