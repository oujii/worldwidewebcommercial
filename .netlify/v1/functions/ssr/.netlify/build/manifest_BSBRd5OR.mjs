import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, j as decodeKey } from './chunks/astro/server_ZXzqDlLt.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/carl/worldwidewebcommercial/","cacheDir":"file:///Users/carl/worldwidewebcommercial/node_modules/.astro/","outDir":"file:///Users/carl/worldwidewebcommercial/dist/","srcDir":"file:///Users/carl/worldwidewebcommercial/src/","publicDir":"file:///Users/carl/worldwidewebcommercial/public/","buildClientDir":"file:///Users/carl/worldwidewebcommercial/dist/","buildServerDir":"file:///Users/carl/worldwidewebcommercial/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".site-header[data-astro-cid-sckkx6r4]{padding:2rem 0;border-bottom:1px solid var(--border)}.site-title[data-astro-cid-sckkx6r4]{margin:0;font-size:2rem;font-weight:400}.site-title[data-astro-cid-sckkx6r4] a[data-astro-cid-sckkx6r4]{color:var(--text)}.site-subtitle[data-astro-cid-sckkx6r4]{margin:.5rem 0 0;color:var(--accent);font-weight:400}main[data-astro-cid-sckkx6r4]{min-height:calc(100vh - 300px)}.site-footer[data-astro-cid-sckkx6r4]{padding:2rem 0;border-top:1px solid var(--border);text-align:center;color:var(--accent)}.site-footer[data-astro-cid-sckkx6r4] p[data-astro-cid-sckkx6r4]{margin:0}:root{--bg: #fafafa;--text: #444444;--accent: #74828b;--border: #e0e0e0}*{box-sizing:border-box}body{margin:0;font-family:Gibson,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;background:var(--bg);color:var(--text);line-height:1.6}.container{max-width:1400px;margin:0 auto;padding:0 2rem}img{max-width:100%;height:auto;display:block}a{color:var(--text);text-decoration:none}a:hover{color:var(--accent)}\n.work-detail[data-astro-cid-by4zwojz]{padding:2rem 0 4rem;max-width:1200px;margin:0 auto}.back-link[data-astro-cid-by4zwojz]{display:inline-block;margin-bottom:2rem;color:var(--accent)}.back-link[data-astro-cid-by4zwojz]:hover{text-decoration:underline}.work-header[data-astro-cid-by4zwojz]{margin-bottom:3rem}.work-title[data-astro-cid-by4zwojz]{font-size:3rem;font-weight:300;margin:0}.work-year[data-astro-cid-by4zwojz]{font-size:1.5rem;color:var(--accent);margin:.5rem 0}.work-description[data-astro-cid-by4zwojz]{font-size:1.1rem;color:var(--text);margin:1rem 0 0;max-width:700px}.work-images[data-astro-cid-by4zwojz]{display:flex;flex-direction:column;gap:2rem}.work-image[data-astro-cid-by4zwojz]{margin:0}.work-image[data-astro-cid-by4zwojz] img[data-astro-cid-by4zwojz]{width:100%;height:auto}figcaption[data-astro-cid-by4zwojz]{text-align:center;color:var(--accent);font-size:.9rem;margin-top:.5rem}@media(max-width:768px){.work-title[data-astro-cid-by4zwojz]{font-size:2rem}.work-year[data-astro-cid-by4zwojz]{font-size:1.2rem}}\n"}],"routeData":{"route":"/work/[slug]","isIndex":false,"type":"page","pattern":"^\\/work\\/([^/]+?)\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/work/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".site-header[data-astro-cid-sckkx6r4]{padding:2rem 0;border-bottom:1px solid var(--border)}.site-title[data-astro-cid-sckkx6r4]{margin:0;font-size:2rem;font-weight:400}.site-title[data-astro-cid-sckkx6r4] a[data-astro-cid-sckkx6r4]{color:var(--text)}.site-subtitle[data-astro-cid-sckkx6r4]{margin:.5rem 0 0;color:var(--accent);font-weight:400}main[data-astro-cid-sckkx6r4]{min-height:calc(100vh - 300px)}.site-footer[data-astro-cid-sckkx6r4]{padding:2rem 0;border-top:1px solid var(--border);text-align:center;color:var(--accent)}.site-footer[data-astro-cid-sckkx6r4] p[data-astro-cid-sckkx6r4]{margin:0}:root{--bg: #fafafa;--text: #444444;--accent: #74828b;--border: #e0e0e0}*{box-sizing:border-box}body{margin:0;font-family:Gibson,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;background:var(--bg);color:var(--text);line-height:1.6}.container{max-width:1400px;margin:0 auto;padding:0 2rem}img{max-width:100%;height:auto;display:block}a{color:var(--text);text-decoration:none}a:hover{color:var(--accent)}\n.works-section[data-astro-cid-j7pv25f6]{padding:3rem 0}.year-title[data-astro-cid-j7pv25f6]{font-size:3rem;font-weight:300;margin:0 0 2rem;color:var(--accent)}.works-grid[data-astro-cid-j7pv25f6]{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:2rem;margin-bottom:4rem}.work-link[data-astro-cid-j7pv25f6]{display:block;text-decoration:none;color:var(--text);transition:opacity .2s}.work-link[data-astro-cid-j7pv25f6]:hover{opacity:.8}.work-image[data-astro-cid-j7pv25f6]{aspect-ratio:500/750;overflow:hidden;background:var(--border)}.work-image[data-astro-cid-j7pv25f6] img[data-astro-cid-j7pv25f6]{width:100%;height:100%;object-fit:cover;transition:transform .3s}.work-link[data-astro-cid-j7pv25f6]:hover .work-image[data-astro-cid-j7pv25f6] img[data-astro-cid-j7pv25f6]{transform:scale(1.05)}.work-title[data-astro-cid-j7pv25f6]{font-size:1.1rem;font-weight:400;margin:1rem 0 0}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://worldwidewebcommercial.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/carl/worldwidewebcommercial/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/carl/worldwidewebcommercial/src/pages/work/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/work/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/work/[slug]@_@astro":"pages/work/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BSBRd5OR.mjs","/Users/carl/worldwidewebcommercial/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","/Users/carl/worldwidewebcommercial/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","\u0000astro:assets":"chunks/_astro_assets_ByC7ht9F.mjs","/Users/carl/worldwidewebcommercial/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_CHRFC5xT.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg","/admin/config.yml","/admin/index.html","/images/0474da82c3f0b344ab3da9726c6743c238d50bbb.jpg","/images/19d8c7119c37e108b2e53bd71fb1d2b40d7cede8.jpg","/images/2b76008eba548a2a6afa251b3284d6d35fd427ed.jpg","/images/2fe47f102b8ac5ed2128877bfaa37a8f31d8d662.jpg","/images/30b4a34dc8cf0a41937bc57f091979e936a84617.jpg","/images/39cc03157b568d6ae9ecf66634390041fc1a2cae.jpg","/images/5169a665e21bc903dd0651ef69fd665aeb0f39d6.jpg","/images/52d0dbbdd0ce9a8bdd1d3ecfdb187ad98ee15661.jpg","/images/68294634969f3b662b0f54d1f3f5a017d78d4916.jpg","/images/7241b2949a672b65ece348fdebb8d26d45df9b4f.jpg","/images/7a157e6ef3be74c8bc5ef9c274ce4581564fbef3.jpg","/images/7c752a8b6e3fd0ff547ff5774d9dbead937b6895.jpg","/images/817aaab69bbe6addf5c2a39e1e9bbb93bd508424.jpg","/images/8502e24d05787dfc41404c9fd2de7a078f88b7c7.jpg","/images/874081af1dd11f4a7ecdc96042cbb2bbe94519ee.jpg","/images/9619f8298bbf3b3d4a142bb914eadc42399ff58e.jpg","/images/9864e360ee5561d6cd4b43035254c993ea98aef6.jpg","/images/b998bb8c58d45539941c2684e09b9524bade7aab.jpg","/images/bd1454aa1cc48d654b4add66df6c6e3490984cfb.jpg","/images/c3adac4c81f5df806f39e94944e835db938eed16.jpg","/images/d2309bdeeedb6e0570138e622e59c21bfb131a4c.jpg","/images/d3f1258473bb7ddb15baa6b4272b849ff7049808.jpg","/images/d8396a89d7635ef67b316b9dd9c0fa39706d09e1.jpg","/images/dc36731eb602a6348a8e8eb437654345dbb3d659.jpg","/images/de7544382c28b1cbd5d10560fe98e65279341159.jpg","/images/dee456417ea3b68825f15f86ee1065adcd87ccc6.jpg","/images/eb3579206a14b593e93911ee1d8feafd7621a22d.jpg","/images/ed7a6735093ba3522872a274d89bfc6630117755.jpg","/images/f64255c215de9193e793e068d77ea70b3d275c69.jpg","/images/f80957182e9d0a96d0da4f2e19818d6876fe373d.jpg","/images/fde1ace3ff98c9cef7292f43605e89b9c66c154b.jpg"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"fRYftNFdzD0hM9f3r6nWxTgKGUj4rf5dH1rt25rTgGw=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
