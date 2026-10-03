/* Service Worker — بيخزّن اللعبة كلها عشان تشتغل أوفلاين.
   مهم: كل ما تعدّل أي ملف (لاعبين، أندية، كود) زوّد رقم النسخة تحت (v1 -> v2 ...)
   عشان أصحابك ياخدوا التحديث. */
const VERSION = "v1";
const CACHE = "nogoom-kora-" + VERSION;

/* ملفات أساسية: لازم كلها تتخزن */
const CORE = [
  "./", "./index.html", "./style.css", "./mobile.css", "./fonts.css", "./manifest.json",
  "./players-data.js", "./competitions-data.js", "./clubs-data.js", "./records-scorers-data.js",
  "./ladder.js", "./app.js", "./bank.js", "./intruder.js"
];
/* خطوط وأيقونات: بتتخزن لو موجودة، ولو ناقصة مش بتعطّل التثبيت */
const EXTRA = [
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-512.png", "./icons/apple-touch-icon.png",
  "./fonts/el-messiri-arabic-600-normal.woff2", "./fonts/el-messiri-arabic-700-normal.woff2",
  "./fonts/el-messiri-latin-600-normal.woff2", "./fonts/el-messiri-latin-700-normal.woff2",
  "./fonts/ibm-plex-sans-arabic-arabic-400-normal.woff2", "./fonts/ibm-plex-sans-arabic-arabic-500-normal.woff2",
  "./fonts/ibm-plex-sans-arabic-arabic-600-normal.woff2", "./fonts/ibm-plex-sans-arabic-arabic-700-normal.woff2",
  "./fonts/ibm-plex-sans-arabic-latin-400-normal.woff2", "./fonts/ibm-plex-sans-arabic-latin-500-normal.woff2",
  "./fonts/ibm-plex-sans-arabic-latin-600-normal.woff2", "./fonts/ibm-plex-sans-arabic-latin-700-normal.woff2"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then(async (c) => {
      await c.addAll(CORE);
      await Promise.all(EXTRA.map((u) => c.add(u).catch(() => {})));
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("nogoom-kora-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
        return res;
      }).catch(() => (req.mode === "navigate" ? caches.match("./index.html") : Response.error()));
    })
  );
});
