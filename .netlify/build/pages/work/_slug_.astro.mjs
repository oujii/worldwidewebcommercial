import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_ZXzqDlLt.mjs';
import 'piccolore';
import { $ as $$Layout, g as getCollection } from '../../chunks/_astro_content_DVuY8NLK.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://worldwidewebcommercial.com");
async function getStaticPaths() {
  const works = await getCollection("works");
  return works.map((work) => ({
    params: { slug: work.slug },
    props: work
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const work = Astro2.props;
  const { Content } = await work.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${work.data.title} | World Wide Web Commercial`, "data-astro-cid-by4zwojz": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="work-detail" data-astro-cid-by4zwojz> <a href="/" class="back-link" data-astro-cid-by4zwojz>← Back to works</a> <header class="work-header" data-astro-cid-by4zwojz> <h1 class="work-title" data-astro-cid-by4zwojz>${work.data.title}</h1> <p class="work-year" data-astro-cid-by4zwojz>${work.data.year}</p> ${work.data.description && renderTemplate`<p class="work-description" data-astro-cid-by4zwojz>${work.data.description}</p>`} </header> <div class="work-images" data-astro-cid-by4zwojz> ${work.data.images.map((img) => renderTemplate`<figure class="work-image" data-astro-cid-by4zwojz> <img${addAttribute(img.image, "src")}${addAttribute(img.alt || work.data.title, "alt")} data-astro-cid-by4zwojz> ${img.alt && renderTemplate`<figcaption data-astro-cid-by4zwojz>${img.alt}</figcaption>`} </figure>`)} </div> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-by4zwojz": true })} </section> ` })} `;
}, "/Users/carl/worldwidewebcommercial/src/pages/work/[slug].astro", void 0);

const $$file = "/Users/carl/worldwidewebcommercial/src/pages/work/[slug].astro";
const $$url = "/work/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
