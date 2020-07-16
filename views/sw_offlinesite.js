var offlineSiteCache = "offlineSite";
var resourcesToCache = [
  "/",
  "/distribudor-digi-oficial",
  "/lowi",
  "/lowcost",
  "/finetwork",
  "/republica-movil",
  "/abaout",
  "/contacto",
  "/configurador-digi",
  "/dist/js/digi.js",
  "/dist/js/finetwork.js",
  "/dist/js/index.js",
  "/dist/js/lowi.js",
  "/dist/js/republica.js",
  "/dist/css/main.css",
  "/dist/css/abaout.css",
  "/dist/css/bg-colors.css",
  "/dist/css/digi.css",
  "/dist/css/finetwork.css",
  "/dist/css/lowi.css",
  "/dist/css/republica.css",
  "/dist/css/logo.ttf",
  "/dist/css/logo1.ttf",
  "/dist/css/Misstral.ttf",
  "/dist/css/Roboto-Bold.woff",
  "/dist/img/check-symbol.svg",
  "/dist/img/digi.png",
  "/dist/img/Digi_white-background.png",
  "/dist/img/finetwork-350x183.png",
  "/dist/img/finetwork_logo.svg",
  "/dist/img/finetwork_portada.jpg",
  "/dist/img/header.jpg",
  "/dist/img/header1.jpg",
  "/dist/img/header2.jpg",
  "/dist/img/header3.jpg",
  "/dist/img/horizontal_carlos_bcn.jpg",
  "/dist/img/lope.jpg",
  "/dist/img/lowi-350x183.png",
  "/dist/img/republica-movil-350x183_0.png",
  "/dist/img/service-428539_640.jpg",
  "/dist/img/shop-val.jpeg",
  "/dist/img/val.jpg",
  "/dist/img/val1.jpg"

];

this.addEventListener("install", function (event) {
  console.log("Instalando Service Worker");

  event.waitUntil(
    caches
      .open(offlineSiteCache)
      .then(function (cache) {
        return cache.addAll(resourcesToCache);
      })
      .then(function () {
        return self.skipWaiting();
      })
  );
});

this.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(function () {
      return caches.match(event.request);
    })
  );
});
