
self.addEventListener("install", event=>{
event.waitUntil(
caches.open("shaun-v1").then(cache=>{
return cache.addAll([
"/shaun-study-world/"
]);
})
);
});

self.addEventListener("fetch", event=>{
event.respondWith(
caches.match(event.request).then(res=>{
return res||fetch(event.request);
})
);
});
