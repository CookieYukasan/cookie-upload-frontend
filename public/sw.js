if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,n,a)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const i={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return r;case"module":return i;default:return e(s)}}))).then((e=>{const s=a(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts("fallback-rVyCp9zFmQYDsM6X2SlEq.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/169-e029466714514380a9a5.js",revision:"rVyCp9zFmQYDsM6X2SlEq"},{url:"/_next/static/chunks/1bfc9850-d5041042271983ba1dd5.js",revision:"rVyCp9zFmQYDsM6X2SlEq"},{url:"/_next/static/chunks/29107295-2648cb5e919f7c78c7cc.js",revision:"rVyCp9zFmQYDsM6X2SlEq"},{url:"/_next/static/chunks/55-7dbf261c7f09b3c28b67.js",revision:"rVyCp9zFmQYDsM6X2SlEq"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"rVyCp9zFmQYDsM6X2SlEq"},{url:"/_next/static/chunks/main-173e16f84e46bc18352f.js",revision:"rVyCp9zFmQYDsM6X2SlEq"},{url:"/_next/static/chunks/pages/_app-c2fc1ed1733eb16ac98b.js",revision:"rVyCp9zFmQYDsM6X2SlEq"},{url:"/_next/static/chunks/pages/_error-e69890b6db18dcbc6fa4.js",revision:"rVyCp9zFmQYDsM6X2SlEq"},{url:"/_next/static/chunks/pages/_offline-093e17431e09a94131b3.js",revision:"rVyCp9zFmQYDsM6X2SlEq"},{url:"/_next/static/chunks/pages/index-8f111c34260d8e095da9.js",revision:"rVyCp9zFmQYDsM6X2SlEq"},{url:"/_next/static/chunks/pages/send-files-2818b773811ea62562a0.js",revision:"rVyCp9zFmQYDsM6X2SlEq"},{url:"/_next/static/chunks/polyfills-eef578260fd80f8fff94.js",revision:"rVyCp9zFmQYDsM6X2SlEq"},{url:"/_next/static/chunks/webpack-277c75ec70a3d22a400d.js",revision:"rVyCp9zFmQYDsM6X2SlEq"},{url:"/_next/static/rVyCp9zFmQYDsM6X2SlEq/_buildManifest.js",revision:"rVyCp9zFmQYDsM6X2SlEq"},{url:"/_next/static/rVyCp9zFmQYDsM6X2SlEq/_ssgManifest.js",revision:"rVyCp9zFmQYDsM6X2SlEq"},{url:"/_offline",revision:"rVyCp9zFmQYDsM6X2SlEq"},{url:"/done-illustration.svg",revision:"03ea5a43b2d429e23af597cb3d04575e"},{url:"/favicon.ico",revision:"27bb4a7d24cfbd9487d50fadfd27ab05"},{url:"/home-illustration.svg",revision:"c3513ac14560018a8d1ac6ea11d940a7"},{url:"/icons/android-chrome-192x192.png",revision:"0bbd64d1ee937300fb1505ec5c88b154"},{url:"/icons/apple-touch-icon.png",revision:"7090a7b2693181947331e38efa4f3486"},{url:"/icons/icon-512x512.png",revision:"9312927ec9f042055794a59d924e8c03"},{url:"/link-illustration.svg",revision:"a0209a7d276391711ef22fc84f15665e"},{url:"/mail-illustration.svg",revision:"c6ccabd4c4df45f8a23c569a416a9591"},{url:"/manifest.json",revision:"0dd724c65335dc541e49972c2e5f3f4f"},{url:"/static/images/fallback.png",revision:"19ec25eae544c866296db7804d03c01f"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:r,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[{handlerDidError:async({request:e})=>self.fallback(e)},new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));