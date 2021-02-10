/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "27f144b6045bcbe767ef92dc7b18618c"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "0b234c1cf1ae1958f111579509cf52ee"
  },
  {
    "url": "android-chrome-256x256.png",
    "revision": "d257d914052dc3409eeeab27caa4267c"
  },
  {
    "url": "api/index.html",
    "revision": "5f8e7045e63cb0a06ba80931f4c9c003"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "b731ba118d89e5652404d9e9d82a219e"
  },
  {
    "url": "argdown-arrow-white.svg",
    "revision": "188460ee31d1efa9eda2e89c485777ca"
  },
  {
    "url": "argdown-arrow.png",
    "revision": "16eb1c797a9fabfb08ad373009309b26"
  },
  {
    "url": "argdown-map.css",
    "revision": "e14d7c464380b548f8a15fc9cf491075"
  },
  {
    "url": "argdown-map.js",
    "revision": "582802c82189ba101b23bcd6b1453fc0"
  },
  {
    "url": "argdown-mark.svg",
    "revision": "d3c4d784d8cc12c1cf9ccc4cdc149b13"
  },
  {
    "url": "argdown-viewer.js",
    "revision": "22c390fc8c2b3b18f4a837fd8e616656"
  },
  {
    "url": "assets/css/0.styles.94d8efd5.css",
    "revision": "d036b2dde535c549ff5bd9a36310e350"
  },
  {
    "url": "assets/img/argdown-vscode-greenspan-1.b6e85ee0.png",
    "revision": "b6e85ee01e7079435dfd9877642b01b0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c41a5e76.js",
    "revision": "4f8175fa07063e273a825e3d6869cc2d"
  },
  {
    "url": "assets/js/11.687f7fb2.js",
    "revision": "3e49ad97b39a431b4e5604ca105f79fe"
  },
  {
    "url": "assets/js/12.4f5de91f.js",
    "revision": "ec789874d39de2c39afdb75aa0c25222"
  },
  {
    "url": "assets/js/13.97f78873.js",
    "revision": "495b4c0c2be48fc92603d263796c4410"
  },
  {
    "url": "assets/js/14.e02c88da.js",
    "revision": "d37a08f11863a8b0909295ab510fecc4"
  },
  {
    "url": "assets/js/15.2f0b55c4.js",
    "revision": "db183a9b292ff8951e6eeb30bec81b13"
  },
  {
    "url": "assets/js/16.46fb4fda.js",
    "revision": "55c14b4f439715ba8f7ae15fc0f5bc45"
  },
  {
    "url": "assets/js/17.b9cff2bc.js",
    "revision": "ce3c2cdad099686ac21fcb29020c9bb3"
  },
  {
    "url": "assets/js/18.2fef400f.js",
    "revision": "6157ba76e7c8c67ffc3cafb2f0c03b67"
  },
  {
    "url": "assets/js/19.643d5d7f.js",
    "revision": "93687c2f16a0c026186de40de98f8705"
  },
  {
    "url": "assets/js/20.37f1c02a.js",
    "revision": "ad9bc64523c67b62669f143c2796bcbd"
  },
  {
    "url": "assets/js/21.1f9ceef7.js",
    "revision": "4f0f70405fb10a03d7442f88d21b6892"
  },
  {
    "url": "assets/js/22.73232771.js",
    "revision": "356a2a1ee02e2a540eff81eefaaa1187"
  },
  {
    "url": "assets/js/23.34a9fdd3.js",
    "revision": "95413383a08ce29bed43033e4c712438"
  },
  {
    "url": "assets/js/24.f9d57aa3.js",
    "revision": "ddbaa2f85e717c64edce51d10579251d"
  },
  {
    "url": "assets/js/25.fcdd0990.js",
    "revision": "4759376056a02fa8f27523e693e82856"
  },
  {
    "url": "assets/js/26.051b7e96.js",
    "revision": "6d65295425966d46170878f8d9f837ab"
  },
  {
    "url": "assets/js/27.82f920f0.js",
    "revision": "f499102f1dab2d4745e168687d6d2551"
  },
  {
    "url": "assets/js/28.1752ac50.js",
    "revision": "2180d702a3d4589a80182045134463e9"
  },
  {
    "url": "assets/js/29.7626b6fa.js",
    "revision": "6db91d31490a716c827f7d8e4adb0977"
  },
  {
    "url": "assets/js/3.d23a7962.js",
    "revision": "94fadf461499ec767d51eb43edd4d88f"
  },
  {
    "url": "assets/js/30.aff44869.js",
    "revision": "177fed0e72ed024d6e7d43f611a54d73"
  },
  {
    "url": "assets/js/31.f1351b6c.js",
    "revision": "14ea1355f3ea35ed74e140382b6a652d"
  },
  {
    "url": "assets/js/32.cfa8d53d.js",
    "revision": "a169b7b1d5da8e6a0977a30f21cc28dd"
  },
  {
    "url": "assets/js/33.ba34d06f.js",
    "revision": "0e4ed200b08e0b4b9bb5b0bb0c39d4d6"
  },
  {
    "url": "assets/js/34.a16c4da0.js",
    "revision": "2c99cd790202d24a0c846afa2d712a2b"
  },
  {
    "url": "assets/js/35.55bd6734.js",
    "revision": "94db731b6e333acdae934b653459df7c"
  },
  {
    "url": "assets/js/36.0745b3a8.js",
    "revision": "d9d30f9b519f21c5a2e55d5c8bcac003"
  },
  {
    "url": "assets/js/37.2fa8758b.js",
    "revision": "3acc2ac3f95e958f317bae6f33a875cc"
  },
  {
    "url": "assets/js/38.eaf928cf.js",
    "revision": "805ef516685e2761f5d9cf1f1ef15e84"
  },
  {
    "url": "assets/js/39.c377c01c.js",
    "revision": "408020ad893236b1883dba1f8d80747a"
  },
  {
    "url": "assets/js/4.2b017ef9.js",
    "revision": "0113f40e41e65057b3a7265a920a6164"
  },
  {
    "url": "assets/js/40.0490cf76.js",
    "revision": "2c9973bf9c39f3d59969638d7d24b3e6"
  },
  {
    "url": "assets/js/41.28cd0c3e.js",
    "revision": "7c92dc8d0d2713567c338d83f3b7d2e0"
  },
  {
    "url": "assets/js/42.958e9e2e.js",
    "revision": "971d22c2924163aa6e54ec445576e22c"
  },
  {
    "url": "assets/js/43.2aa74b0b.js",
    "revision": "0510702b2b0203dd842c95a47832b628"
  },
  {
    "url": "assets/js/44.becb3c51.js",
    "revision": "0172bf6d78e4518a5396e15ade3e9d14"
  },
  {
    "url": "assets/js/5.ff4b7393.js",
    "revision": "116397488b200b406a51a2a12e9741c9"
  },
  {
    "url": "assets/js/6.178bf874.js",
    "revision": "00e5d9a6437d5fb2948848586e6c00be"
  },
  {
    "url": "assets/js/7.f17073cb.js",
    "revision": "d9b4162329143dd0548892b231efabf4"
  },
  {
    "url": "assets/js/8.87d15634.js",
    "revision": "e60af2b477f7691b950ef4c811bd25b2"
  },
  {
    "url": "assets/js/9.dd3fb41a.js",
    "revision": "298b7c217ac5fe24bf921da14bb3a39b"
  },
  {
    "url": "assets/js/app.432d312f.js",
    "revision": "6d5a8f3565593cf09502daec53aa2a39"
  },
  {
    "url": "assets/js/vendors~docsearch.1e1e39cd.js",
    "revision": "899b4d61710a69ce763f87b9a976fa3e"
  },
  {
    "url": "changes/2018.html",
    "revision": "ef4667fe4cfd7358f919966cfc86e85e"
  },
  {
    "url": "changes/2019.html",
    "revision": "cff853f9d001fe5dfb4e071fd0742296"
  },
  {
    "url": "changes/index.html",
    "revision": "f322d0c340c434f63e3af163f7c8a210"
  },
  {
    "url": "compress.svg",
    "revision": "c5fefc2d5586fb61f5a709a6280b94c7"
  },
  {
    "url": "expand.svg",
    "revision": "651a07980327d5bcbb8851c06761dc74"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "0838bbbe758ce024287a339ce2f20026"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "9a454f3ef2a188c19ccae92bc59f975c"
  },
  {
    "url": "favicon.svg",
    "revision": "0f1956d1eb23e082af85d779ee3d56ba"
  },
  {
    "url": "googleb41049b30bb73985.html",
    "revision": "e3ed96111974b98cc5f9dbd3a9f4f5d9"
  },
  {
    "url": "guide/a-first-example.html",
    "revision": "94b3fde06dd7702e3951b7ada595262f"
  },
  {
    "url": "guide/changing-the-graph-layout.html",
    "revision": "2ad5b5fac340c2ee89144340b9bafc9e"
  },
  {
    "url": "guide/changing-the-node-size.html",
    "revision": "a8303d9bb42c05862633698c09464f84"
  },
  {
    "url": "guide/changing-the-node-style.html",
    "revision": "188f4967a07fae009416430b505f1bf9"
  },
  {
    "url": "guide/colorizing-maps.html",
    "revision": "70d39bccaff49c2dca872590a8296d07"
  },
  {
    "url": "guide/configuration-cheatsheet.html",
    "revision": "0060eacc862870805eb7cc0f30977edf"
  },
  {
    "url": "guide/configuration-in-the-frontmatter-section.html",
    "revision": "278832dba1ab4aae8c606c77569f1a8a"
  },
  {
    "url": "guide/configuration-with-config-files.html",
    "revision": "757882da2760531d0ec392c6bdb23fbe"
  },
  {
    "url": "guide/configuration.html",
    "revision": "fc762c760bf11d43710c31920108da7e"
  },
  {
    "url": "guide/creating-argument-maps.html",
    "revision": "3bfdfed555b436ec7d50b8cfb9ff425a"
  },
  {
    "url": "guide/creating-edges.html",
    "revision": "223c73e150e8155ec51780f0691bf55e"
  },
  {
    "url": "guide/creating-group-nodes.html",
    "revision": "778bacbb620bdd194b8e3624ab0442b2"
  },
  {
    "url": "guide/creating-statement-and-argument-nodes.html",
    "revision": "fe4ccfc93e52f98fc07b093f4088fcc4"
  },
  {
    "url": "guide/elements-of-an-argument-map.html",
    "revision": "a2d453e6256aee0fef9ba9cab221bb4d"
  },
  {
    "url": "guide/embedding-your-maps-in-a-webpage.html",
    "revision": "97e2798e0b8180489be44f285451b1d4"
  },
  {
    "url": "guide/extending-argdown.html",
    "revision": "e46385bbeabc4a41ff0f3e285fa517e6"
  },
  {
    "url": "guide/index.html",
    "revision": "43543aee7a061df7ba1ee9e0553322a3"
  },
  {
    "url": "guide/installing-the-commandline-tool.html",
    "revision": "8906f1c2565233b87a8550ae5d9b359d"
  },
  {
    "url": "guide/installing-the-vscode-extension.html",
    "revision": "b895a7eadbc279fe7d21f1a366c47d97"
  },
  {
    "url": "guide/integrating-argdown-markdown-into-applications.html",
    "revision": "4e7724f37dabcdbf0436a003d58d7a74"
  },
  {
    "url": "guide/loading-custom-plugins-in-a-config-file.html",
    "revision": "8cd6c1a01485d9620fcf2b957ca19f3a"
  },
  {
    "url": "guide/publishing-argdown-markdown-with-pandoc.html",
    "revision": "1a92b9895bea9922ec0a335eb8d6f248"
  },
  {
    "url": "guide/publishing-argument-maps.html",
    "revision": "760a0294169ef8747c332cc96832b90f"
  },
  {
    "url": "guide/running-custom-processes.html",
    "revision": "fba788c514244567a125a75329c82eae"
  },
  {
    "url": "guide/using-argdown-in-markdown.html",
    "revision": "37b9bc87b396855067bd534c11e84e53"
  },
  {
    "url": "guide/using-argdown-in-your-application.html",
    "revision": "ffb5f5b76ac97c7265b144e506bba682"
  },
  {
    "url": "guide/using-logical-symbols-and-emojis.html",
    "revision": "ff07faaf6c4af39bf29f36896ea8204a"
  },
  {
    "url": "guide/writing-custom-plugins.html",
    "revision": "979eda3d3aabd652f4e240d0b74cde2f"
  },
  {
    "url": "index.html",
    "revision": "8f92416d4ee5d7bded55afb1322a0689"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "f1e527365592a25dd0039f28b0e2ae3c"
  },
  {
    "url": "river-deep.argdown-theme.css",
    "revision": "1dde29f17b6306f7f4da8df080e7c32d"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "2c742637dbf81b39dfe0870701ba5a6d"
  },
  {
    "url": "snow-in-spring.argdown-theme.css",
    "revision": "10500bb1a5555592f94b762a44e85ca9"
  },
  {
    "url": "syntax/index.html",
    "revision": "446fedfe94dc974fa1ca72ce762cd8cf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
