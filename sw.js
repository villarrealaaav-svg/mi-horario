const CACHE = 'horario-v4';
const ASSETS = ['./mi-horario.html', './logo-av.png', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('message', e => {
  if(e.data&&e.data.type==='NOTIF'){
    const{title,body,tag,icon}=e.data;
    self.registration.showNotification(title,{body,icon,tag,badge:icon,vibrate:[200,100,200]});
  }
});

self.addEventListener('fetch', e => {
  // Solo cachear assets locales, pasar Firebase y Fonts directo a la red
  if (e.request.url.includes('firebase') || e.request.url.includes('fonts.g')) {
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      });
    })
  );
});
