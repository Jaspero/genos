/**
 * The page-builder blocks are custom elements. The small blocks are defined straight away, as
 * before. The large ones (services, team, projects and publications carry their content with them)
 * and the ones that need Firebase are only loaded on pages whose HTML uses them, so that other
 * pages, the home page among them, do not download them. Such a block is drawn as soon as its
 * module has loaded; each is the only large block on its page.
 */
import './MobileMenu.svelte';
import './Navigation.svelte';
import './Footer.svelte';
import './Intro.svelte';
import './About.svelte';
import './Automated.svelte';
import './Collaboration.svelte';
import './Contact.svelte';
import './GoogleMap.svelte';
import './ImageGallery.svelte';
import './Labs.svelte';
import './Leaders.svelte';
import './Plug.svelte';
import './PriceList.svelte';
import './Resources.svelte';
import './Submit.svelte';
import './WeAre.svelte';

const lazyBlocks: Record<string, () => Promise<unknown>> = {
  'pb-blog': () => import('./Blog.svelte'),
  'pb-featured-blog-articles': () => import('./FeaturedBlogArticles.svelte'),
  'pb-news': () => import('./News.svelte'),
  'pb-popup': () => import('./Popup.svelte'),
  'pb-product-card': () => import('./ProductCard.svelte'),
  'pb-products': () => import('./Products.svelte'),
  'pb-projects': () => import('./projects/Projects.svelte'),
  'pb-publications': () => import('./publications/Publications.svelte'),
  'pb-services': () => import('./Services.svelte'),
  'pb-team': () => import('./team/Team.svelte')
};

/** Loads (once) the large blocks whose tags appear in the given page HTML. */
export function loadBlocks(html: string) {
  const tags = new Set(html.match(/<pb-[a-z-]+/g)?.map((tag) => tag.slice(1)));

  return Promise.all(
    [...tags]
      .filter((tag) => lazyBlocks[tag])
      .map((tag) => lazyBlocks[tag]().catch((e) => console.error(e)))
  );
}
