'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1adda355e5f75eaa39a291a2f53fcffe",
"index2.html": "b1946ac92492d2347c6235b4d2611184",
"index.html": "3e8e75c51b0f92659cb673b5bfe1be8e",
"/": "3e8e75c51b0f92659cb673b5bfe1be8e",
"main.dart.js": "45878920fefa4d280988afbb583b869e",
"README.md": "d32ac3d03c6ed90300bab449377f389a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c81f25a8d1362ede544c1913a9c96ac1",
".git/config": "92c2495695aba2706ebe039f9bc406ae",
".git/objects/92/04b7e383be8cf8d27d2309dc94c1ec3c1bc206": "8ddb6ffa5a6d9a0f5943a07329a9aeb3",
".git/objects/0c/3a79dd111661c440d51bb5968b533f04926629": "9d5a5d12b2b2d16bfc2a7502ae2575be",
".git/objects/66/84b878a56adbf33ed6db9aca7e3d4242523499": "084e09ccb5309e1d6099530eef480a8e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/56/1350f6935465b604b8bdfbc37930665a2909e2": "5aeedd92779e4ef9d1ef477e30f0fd5b",
".git/objects/51/e0e86bd4174abf3a40f73014da315b49217275": "6e0e64fd4482037bc325729d2d98438a",
".git/objects/93/33d55b54c1e6662c8042f773930ef7eaa64641": "7e2a000bf75f7c2f0e7145a22d525495",
".git/objects/94/c18e6050d17b7c160602065187043dbb5a3562": "f18322b3ae8da9fda79154efe166fde9",
".git/objects/60/b8bb9582d339b036ac8c02adcfa7f44b493970": "5b6780892c529010f12f79856882fbec",
".git/objects/ac/f40384d54b1f7d17cf362482e19cba3ddc3ff5": "27ead09e5b756dff9d871f7e03d6ed3c",
".git/objects/be/4cdb3aeaf9a7bd79782d247c36bff6139b952f": "0b3b49cca3e96123dd6cad5047f3016f",
".git/objects/bd/d69b6d7760282b2f65c5b666bfa16590a840d1": "4afba888725fb9e3bee295acb2259ea9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/e1227ffe09f6d50d1d59badcc0646bee02a9d7": "c0d11c34de910ec17131181f1b883365",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/63b02e21fc109ad37765d201053a91cbf30b79": "55295774a1596feecf11b6493a8dc3eb",
".git/objects/c9/22fbffa997eca7cb9f63441128cc9a6dcc400a": "d1df8a99def5167e082958297ead91ad",
".git/objects/c9/5bf303f8d7706b0fb4ca5712b65566e8c939c8": "f309fd4a049603bba0ada52ef65cea39",
".git/objects/c6/e9a6d5fbdc65c0ef1a64a9e184822c66b7696a": "65fc9f5eaf3aed7c0af852962f311b70",
".git/objects/18/8d19f3def988d38cbe3a2638306724fcb4efad": "0569cd4c8acde6894fdc3b5fe89f7d14",
".git/objects/29/dc29b9ce7c84bb1e3b6e2f8da157f76c2e1def": "f102dc6b5aa08a5eb7d7277f151868f6",
".git/objects/42/9655c7fa94b725306fadcf31580f83ee24744b": "184fc7000b50ab02b98e96532bb060f2",
".git/objects/80/fa7742956b354e154e52cfe278da4635924136": "b5a735a1f0d45a2273c7cd5eaced1291",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/a7b15a18e95d0d4ab9436062abf7d8dfc4ac46": "b9c0da73eaf811acd2c36f7ff63b151d",
".git/objects/86/a88eed99894d80d28d5db80cd5ac83b54e4704": "e9accc46545ce4df412346b9f53a2006",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/dbd8357597c55cc8b86946f64a658835bea0a2": "ac9454f0697b5d690ec36885c6d74766",
".git/objects/62/c862fe1c64a42c2c04c4c75b5eeda9fd9e7536": "4ca81441a3af65ae073e749828d6c6e4",
".git/objects/0a/92e1e192637b528b4e6d3d0afdcb6b151747cf": "b2328e4ba8a5ffeac2bce5d66e753322",
".git/objects/d4/b79a08c49e1a6eb097ea65f1c8bbd3ddd9cd7a": "9eee4ed8c4c5a12e2f690b1902aa6ef3",
".git/objects/ba/3660769dde844e9afb3415f342655c4bdb1283": "cd121a5747ccb1f14a0635a3b84bd815",
".git/objects/ba/0b63675df296e9e697c5afe1d50261a6d62e4e": "87ac8155d03f5125f9dc3174fd1263c4",
".git/objects/b6/c6d2c0caec5366527db594b39a1dac4c999bb5": "4b65c9fffba82e9a6247ea7ea091a2d5",
".git/objects/a9/aabb4a1d6ed3ee346cae31bb3c53a347d47464": "b79886c5fb494f82b46fdf019c904e97",
".git/objects/aa/da6555a5d55a766ab797ec3c3992796cc43a7f": "b13cde7e5a8016de5355632da67feb1e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/29bf9c16a49b14a1172f4166922c51050438bd": "3d0a63e05c292f4df97b1e4e184304f0",
".git/objects/c5/dfce795812aa9937c15d12f210cd8318b37beb": "e5c2344f2d30ecb9f99efde1bd5719dc",
".git/objects/f6/c5d083f45f1aad3365f0fb02115c2f6b464598": "34664e5c8a4efe3c1a50ad430264b137",
".git/objects/ce/013625030ba8dba906f756967f9e9ca394464a": "f5a44d99efd93e4dbd057bc6f2e3618a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/969fa17083682f768df4de5d5349c42685636a": "f5483f188ec0a3c00fd161e388fe481a",
".git/objects/79/ee72295a4828060d08d6e9aca60dc1e5724cfe": "5796c53e46a91f711f0dc996426ddefa",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/67f2e6a2f98621582a493b206223148a9c8020": "22ada6ca79358084f981d831f73619d9",
".git/objects/23/8a284b959cb9479caae80f374ce077c5e717da": "c173eca53598899ee92bec8d6cd68cc7",
".git/objects/4f/09c25eba727d7a275175af12cddd637b033d19": "021189032a650aab7d5fa1f6510bffec",
".git/objects/8c/11ad174eebe5a8a22828310c955b2da4422206": "80ed71cd8f6cb338c65429e6ce0df8b8",
".git/objects/85/45d8e8b2469008e3f4d41b724e59d007f86b74": "3a7e6b04a5565324e3dd049e512ae5e9",
".git/objects/7f/43e75e6e004174d6fefc69d7bb9194c1b42ea3": "c5300809b0bcfb00f712acac79f3ccce",
".git/objects/7f/f99a49f92fc067c2776495d6e446b7eab5d2ed": "2553617fe40c131f329b153734a550e1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c2088bfe33de8577ba327889d3822e57",
".git/logs/refs/heads/main": "fa558fb9bb3a7de39198e0542de379fb",
".git/logs/refs/remotes/origin/main": "bbb33800dbcd401632ed56b0b61bacbc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "cddf78836d24a58956038f4fba460dca",
".git/refs/remotes/origin/main": "a30e7e7884b00028bd8ab5a5e4b69ecb",
".git/index": "015cc6a274576df18690abaedafa8d56",
".git/COMMIT_EDITMSG": "4f98f59e877ecb84ff75ef0fab45bac5",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "9ab439ec592e7163af146c95f92459cb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
