self.__precacheManifest = [].concat(self.__precacheManifest || []);

const cacheName = 'base-site';
const cacheVersion = '';
const cacheKey = cacheName + cacheVersion;
const urlsToCache = self.__precacheManifest.map(cacheItem => cacheItem.url);

self.addEventListener('install', (installEvent) => {
  self.skipWaiting();

  // add cache
  installEvent.waitUntil(caches.open(cacheKey).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('activate', (activateEvent) => {
  // delete old caches
  activateEvent.waitUntil(caches.keys().then(cacheNames => Promise.all(cacheNames.filter(cacheName => cacheName !== cacheKey).map(cacheName => caches.delete(cacheName)))).then(() => { self.clients.claim(); }));
});

self.addEventListener('fetch', (fetchEvent) => {
  const { request } = fetchEvent;

  if (request.url.startsWith('chrome-extension') || request.url.includes('vimeo') || (request.cache === 'only-if-cached' && request.mode !== 'same-origin')) {
    return;
  }

  if (request.headers.get('Accept').includes('text/html')) {
    // Try to fetch page from network, otherwise server offline page
    fetchEvent.respondWith(fetch(request).catch(() => caches.match('/static/offline.html')));
    return;
  }

  if (request.headers.get('Accept').includes('image')) {
    // Try to fetch image from cache, if not in cache and can request, cache it, otherwise serve blank SVG
    fetchEvent.respondWith(caches.match(request).then((responseFromCache) => {
      if (responseFromCache) {
        return responseFromCache;
      }

      return fetch(request).then((responseFromFetch) => {
        const responseCopy = responseFromFetch.clone();

        fetchEvent.waitUntil(caches.open(cacheKey).then(cache => cache.put(request, responseCopy)));

        return responseFromFetch;
      }).catch(() => caches.match('/static/offline.svg'));
    }));

    return;
  }

  fetchEvent.respondWith(caches.match(request).then((responseFromCache) => {
    if (responseFromCache) {
      return responseFromCache;
    }

    return fetch(request).then((responseFromFetch) => {
      const responseCopy = responseFromFetch.clone();

      fetchEvent.waitUntil(caches.open(cacheKey).then(cache => cache.put(request, responseCopy)));

      return responseFromFetch;
    });
  }));
});
