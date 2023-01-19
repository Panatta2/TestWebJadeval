'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7cd6a41407e3ce7ca7e1a9f156efa75f",
"index.html": "bc1719ba00843dcd2718125fa84d31ad",
"/": "bc1719ba00843dcd2718125fa84d31ad",
"main.dart.js": "1fdaa92b86dcb2797dca631517400c16",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "70930e270e802437d62d7aa24e96d02a",
".git/config": "a3893ba7bb5d9da6450b5e0c920191ea",
".git/objects/61/0fc80b6e0db67e1e43c3acac4b3608bc6037d5": "ee54c445e8531ed813b595a79996bbb1",
".git/objects/3e/89cf7348c43308a29c6503b783ed8801401f24": "b1ea8ad43a332472d9fe34c713c59903",
".git/objects/03/fd8eaab4516f10db4feaafbe142a4bc1359eab": "12c0b181bcb6e99f79ea9f4541b56630",
".git/objects/03/3a068e335463fd8879671b77a77abb58a1f144": "c2bdd2b7b6a75d45e28adca03b2cbb4f",
".git/objects/04/ef810b4ad0b14e4384d6eb8921db9e147e0fed": "57659f972f372139d96f562de48f3f18",
".git/objects/5a/8c85de1e21189a17dfa18503ed6ea832afbdee": "903080dd70e36e93babde655d4547130",
".git/objects/5f/aee9e1c2c98bc5aa301b03c5551e5526866f64": "4fd9588dbd7493ff58d679a51a572c95",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/ac/b6ac53f2c542f90d73766c56230fd4cb69e22c": "7899a64f9ec445081f7045721ed3f54d",
".git/objects/ad/263ae85b11f38a4d1ec273376ba7c847afa9ea": "8675b0bfb87fda41674a321dad32c016",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/b3/cf84303ccb22a147db0f315b76e3e0e766efad": "3d5b0cd287614cd03ae031f5640952a3",
".git/objects/da/cc34a3eba87a6a1fb4af30c3d672525bb65790": "73767d43128a9426e94abc52c99c3a4f",
".git/objects/bd/82542d1f9d5ea2bd9515cff2916615694dbd89": "e11ddbdb7a5d4be32f08b57374b20991",
".git/objects/d8/70f6677572d8122fcf208461023cec692c04e1": "929fdb3e70aeb93ac81aa2d9bcf7bef8",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/c91be4e4d7a528c5a56797b33240d143942107": "608da9c7efe16a7fb36dc1db07318eb4",
".git/objects/c9/1b472151cac6200041bbc83dc32d9548b31616": "8ddadc80f4a99b2f34e3da42f9ea07d4",
".git/objects/fd/2b3dacf890836fe7d379fcb831bd7b583aa838": "4aa403bcefe6808d34af0e37d008c335",
".git/objects/e4/448d4d4cac133995c75660e1e0b8491f512b27": "6356428dc25a313e5b8bedc9b0279a66",
".git/objects/fe/c2653af7a925aa75aa11e8d49fb267deb96daf": "d81d96453f3dde30d8ceb77224acbdff",
".git/objects/ed/6eab322b1686cf8f0722b0435cf770fbcad9f9": "2a726b0c602cb407420de9605b513134",
".git/objects/ed/1916820f7b23084d7a7e03894d13f83e6156ee": "250e3325bc150fc27e59258a62a71d2f",
".git/objects/c1/9ba9af19742df077d4bc229b06fb3189cd0a78": "6400a0aea75328ae6abf77ee49fdf681",
".git/objects/c6/73a6d545d25696190e8b2ac26b4304121cdbe0": "c2055b40ef3795b1fcb8b4b01e4a61d2",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/29/a1e55d30ac21580e0d6d2c15b43c7c50258f69": "030caed54d51bac176ea968dc889f67c",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/42/02386f3e6b2e06ab99316952b5626f6ce09648": "596085c500251c9af4b257be8fcfbade",
".git/objects/42/a410c21b6f0791640605c7bb2224ea9a582d26": "9e57ca9acec5904dc81631a86129ce87",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/80/b8db39fe465c1a02e1c5830fdf16d4b0870b94": "658c7dcba044c49004577cf70492f795",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/611447f364d76720d449cd49ef391d53769434": "72c83c1a6c7f53ccbec18bb8cfb6c9db",
".git/objects/9a/a9928ac8c8f2537d48074ea715d41dfa71e39a": "b6dbef5a06452df56abce0b5368861d1",
".git/objects/65/8169372f69b4131bce874e27cf8c00f69f602a": "748155b21d564769f35565a6ec09a2a6",
".git/objects/62/6afd3a77c0236a0b188ae3457270d42340503c": "6020fc64ba883b6c6b8312894f23af3c",
".git/objects/3a/fd11720fb35dc0817ed86ca2de701c8a83f83a": "a8871aaab168a96ba120e60bca9577b6",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/30/0efaefa7d2bd34a221ffad6d778922d14bceb1": "d50b8515ecf3b28528b1d55b9128382e",
".git/objects/06/1e94f524aafe062b3c21a19fcfc989fd6fa2ac": "ed1daaa2f6b28693524e14735466e3a0",
".git/objects/52/b0dc1ba686576c3e2e8a83e360c78dfe630608": "17b8571de8c6caac17ff7ca3b4e7f580",
".git/objects/97/a4bc76f8dd04d9c0e3c3a18afbedb2c73e54c5": "aeb2bc83cc0be148b377fe51e1eba249",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/c66e88ff2c934d0a55dce89570aff90c26b1fa": "85ae25c1b695adbb339ef4b7009b7108",
".git/objects/0f/c15726ac67f0b9ac2c17372d9cc115b5e31455": "5455291735e62e3cd848a6e330ec0f6f",
".git/objects/b1/3ac2125e800a2970acb8e6cbaa8443f69a2ed7": "419c3f30b9382f4f1f3e4f13b8456687",
".git/objects/b6/692b9207d5d222621d58ca16d6ac0ab7a20b96": "58fdfdee2322fe24e2e2105f079de17f",
".git/objects/aa/30d32aac1d0d071b9797dfdd718a4ba8adc1c6": "d59cdc73daa4b394099e5c293a9ae870",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/473a4278142a037e0cfd1d6123cf8503372442": "bfbe9111b67cb67d968c54274727ac93",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/0a20374ccef7bb559a528d609721fdaac360d8": "413ac58b5ac650dd7e6dbf31784b526c",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/fa/3f40c79be12623ce3f5156cb6761455f177dd5": "ac301c689ed042e98822a7340f0d717f",
".git/objects/f6/e58f4e8d971114bcaf195292bbcf9d729151cb": "b374f6fb56fc58b286d574080d142548",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/2c/38b0bd7570d3e08a7e39d286b6998c2ad2f1a7": "328c7bda948e7db8c13f2be9509460e6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/48/de18019c5a6745c9722e5cebeaf8423fba4015": "6100049c6a13242becf76f9fefa5f26f",
".git/objects/1e/c432610524b4748f446869d41429137079ed78": "1a1417b2501d60456531b65ae64d8c4d",
".git/objects/24/e26b0ea88bac9fbe008d2329b7ce7d011accc8": "9aaef55fc3b04cec8a1bd24e71d7fc6f",
".git/objects/8c/f129cb34c9658546589dd251b61ced9e5280cf": "df2c1268f50db5edde5143a140451ddc",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1ba097f414420d653604ed3ff9858ac2",
".git/logs/refs/heads/main": "9066410ef20047351434414697784d39",
".git/logs/refs/remotes/origin/main": "2d0d170e9223e7eabb75fd765d266d66",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2dfcc25d4793eb6b00b7470e015125fe",
".git/refs/remotes/origin/main": "2dfcc25d4793eb6b00b7470e015125fe",
".git/index": "0da30fd430c360dfc4cc4ad96506fd13",
".git/COMMIT_EDITMSG": "e9227ec2f90549abed018e79fa7d6db9",
"assets/AssetManifest.json": "1c285707946847e6e0e4e9783eca6860",
"assets/NOTICES": "d64956e2304ce79d28cf9a04f4ec614e",
"assets/FontManifest.json": "fdb16fa5a241f69713c054de19a9ca3f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/flutter_credit_card/icons/discover.png": "ea70c496dfa0169f6a3e59412472d6c1",
"assets/packages/flutter_credit_card/icons/visa.png": "9db6b8c16d9afbb27b29ec0596be128b",
"assets/packages/flutter_credit_card/icons/amex.png": "dad771da6513cec63005d2ef1271189f",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/shaders/ink_sparkle.frag": "2fff1df4d57082fd7313fd192dd284a2",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/empresaSalud.jpeg": "ea12391fd5285fa0ab207303e50f3b77",
"assets/assets/images/paqueteFlores.png": "e02da4e4579b3ef1bc78e3262c0a07be",
"assets/assets/images/logoMonte.png": "6982482d2fe1bb88daade27a490e1bb2",
"assets/assets/images/apoyo.jpeg": "c10724ebf7679ab404f16f18f4a45dc7",
"assets/assets/images/medicina_general.jpeg": "ceb2ee20829335b02f11cce18ec9b72c",
"assets/assets/images/app_launcher_icon.png": "6982482d2fe1bb88daade27a490e1bb2",
"assets/assets/images/cuidado.webp": "0b4ec5347e777373ea3b6ce693436a8e",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/empresaVida.jpeg": "93e4d521107913e8bdd210a9db9ce5ea",
"assets/assets/images/salud.jpeg": "5169b44de73b51ed60d0a2689fa3c8da",
"assets/assets/images/empresavehiculos.jpeg": "63c31783e8f2f4dcf71c4174defcf8df",
"assets/assets/images/espacios-en-jardin-monteolivo-01.webp": "d232192d253949306d9d2c6beebb8103",
"assets/assets/images/moteolivio.jpeg": "f866978168488199cffd79b1abbabe29",
"assets/assets/images/capilla-monteolivo.webp": "e63474c4ded14b50d6c2b718fb47f4d2",
"assets/assets/images/camposantomonteolivo.jpg": "8f5b54fb3e0641c59d3df34a9ed31539",
"assets/assets/images/illi_2@2x.png": "b8fbe66f8ca7579c11b257b255cd9233",
"assets/assets/images/empresa_vida.jpeg": "f8b4196023861968d1c63e06b69ab484",
"assets/assets/images/paquetesFlores.jpeg": "3e541b46f696262d4a7bed17b7280b63",
"assets/assets/images/perfil.webp": "849c29fe823fcbc573db99daf2f5b798",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Lexend%2520Deca-SemiBold.ttf": "4e35c5c5270efa6aed1b719e6708ac24",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
