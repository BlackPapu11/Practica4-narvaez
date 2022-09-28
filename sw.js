
self.addEventListener('install', (event) => {
    console.log("SW: Install");
    const cachePromise = caches.open('cache-v1').then((cache) => {
        return cache.addAll(
            [
                './',
                './index.html',
                './html/dividir.html',
                './html/multiplicar.html',
                './html/restar.html',
                './html/sumar.html',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css',
                'https://fonts.googleapis.com/icon?family=Material+Icons',
                'https://code.jquery.com/jquery-3.6.1.js',
                './sw.js',
                './css/style.css',
                './js/app.js'
            ]
        )
    })
    event.waitUntil(cachePromise);
});

self.addEventListener('fetch', (event) => {
    const cacheRes = caches.match(event.request);
    event.respondWith(cacheRes);
});