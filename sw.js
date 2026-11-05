// Guarda la web, la librería 3D, las imágenes y las fuentes después de la primera visita,
// para que el modo presentación funcione aunque falle el wifi del lugar.
// Al cambiar imágenes o la librería, subir el número de CACHE.
const CACHE = 'mv-v1';
const CORE = [
  './', 'index.html', 'vendor/three.module.min.js', 'vendor/three.core.min.js',
  'img/fonevo.webp', 'img/gastro.webp', 'img/jardineria.webp', 'img/milo.webp',
  'img/pizza-antes.webp', 'img/pizza-despues.webp', 'img/marte.webp',
  'img/mariano.webp', 'img/qr-whatsapp.svg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // la página: primero la red (para ver siempre la última versión); sin conexión, la guardada
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put('index.html', copy));
      return res;
    }).catch(() => caches.match('index.html')));
    return;
  }

  // archivos propios y fuentes de Google: la copia guardada al instante, y se actualiza por detrás
  const own = url.origin === location.origin;
  const font = /^fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!own && !font) return;
  e.respondWith(caches.match(req).then(hit => {
    const net = fetch(req).then(res => {
      if (res.ok || res.type === 'opaque') {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    }).catch(() => hit);
    return hit || net;
  }));
});
