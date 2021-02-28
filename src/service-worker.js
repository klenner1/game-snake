const cacheName = "v1.0.1";
const path = self.location.pathname.replace('sw.js','')
const cacheFiles = [
  path,
  path + "index.html",
  path + "main.js",
  path + "style.css",
  path + "favicon.ico",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open(cacheName).then(async (cache) => {
      const response = await cache.match(event.request);
      return (
        response ||
        fetch(event.request).then(function (response_1) {
          cache.put(event.request, response_1.clone());
          return response_1;
        })
      );
    })
  );
});
