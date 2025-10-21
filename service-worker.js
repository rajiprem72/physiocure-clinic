const CACHE_NAME = "physiocure-cache-v1";

const urlsToCache = [
  "/physiocure-clinic/",
  "/physiocure-clinic/index.html",
  "/physiocure-clinic/contact.html",
  "/physiocure-clinic/profile.html",
  "/physiocure-clinic/services.html",
  "/physiocure-clinic/testimonials.html",
  "/physiocure-clinic/style.css",
  "/physiocure-clinic/script.js",
  "/physiocure-clinic/images/banner.jpg",
  "/physiocure-clinic/images/icons/icon-192x192.png"
];

// Install service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  console.log("Service Worker installed.");
});

// Activate service worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      )
    )
  );
  console.log("Service Worker activated.");
});

// Fetch resources
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
