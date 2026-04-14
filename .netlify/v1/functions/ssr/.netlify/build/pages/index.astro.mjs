import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_ZXzqDlLt.mjs';
import 'piccolore';
import { g as getCollection, $ as $$Layout } from '../chunks/_astro_content_DVuY8NLK.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allWorks = (await getCollection("works")).sort((a, b) => b.data.year - a.data.year || a.data.title.localeCompare(b.data.title));
  const groupedByYear = allWorks.reduce((acc, work) => {
    const year = work.data.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(work);
    return acc;
  }, {});
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Works | World Wide Web Commercial", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="works-section" data-astro-cid-j7pv25f6> ${Object.entries(groupedByYear).reverse().map(([year, works]) => renderTemplate`<div class="year-group" data-astro-cid-j7pv25f6> <h2 class="year-title" data-astro-cid-j7pv25f6>${year}</h2> <div class="works-grid" data-astro-cid-j7pv25f6> ${works.map((work) => renderTemplate`<article class="work-card" data-astro-cid-j7pv25f6> <a${addAttribute(`/work/${work.slug}`, "href")} class="work-link" data-astro-cid-j7pv25f6> ${work.data.images[0]?.image && renderTemplate`<div class="work-image" data-astro-cid-j7pv25f6> <img${addAttribute(work.data.images[0].image, "src")}${addAttribute(work.data.images[0].alt || work.data.title, "alt")} loading="lazy" data-astro-cid-j7pv25f6> </div>`} <h3 class="work-title" data-astro-cid-j7pv25f6>${work.data.title}</h3> </a> </article>`)} </div> </div>`)} </section> ` })} `;
}, "/Users/carl/worldwidewebcommercial/src/pages/index.astro", void 0);

const $$file = "/Users/carl/worldwidewebcommercial/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
