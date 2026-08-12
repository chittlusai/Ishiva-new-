import { COLOR_PALETTES } from "./colorPalettes";
import { CUSTOM_ECOMMERCE_TEMPLATES } from "./ecommerceTemplates";

// ═══════════════════════════════════════════════════
// LAYOUT BLUEPRINTS — 10 per category
// ═══════════════════════════════════════════════════

const HERO_TYPES = ["centered","split-left","split-right","fullscreen","minimal","gradient-wave","angled","overlay","stacked","bold-type"];
const CARD_STYLES = ["rounded","sharp","minimal","bordered","glass","elevated","outlined","flat","gradient","shadow"];
const NAV_STYLES = ["transparent","solid","glass","minimal","centered"];

const makeBP = (i, category, sections) => ({
  layoutIndex: i,
  category,
  heroType: HERO_TYPES[i],
  cardStyle: CARD_STYLES[i],
  navStyle: NAV_STYLES[i % 5],
  gridCols: [2,3,4,3,2,4,3,2,3,4][i],
  sections,
});

// 10 blueprints per category — each with different hero/card/section combos
const BLUEPRINTS = {
  Ecommerce: Array.from({length:10},(_,i) => makeBP(i,"Ecommerce",
    [["hero","featured-products","categories","sale-banner","testimonials","newsletter","footer"],
     ["hero","categories","product-grid","sale-banner","testimonials","footer"],
     ["hero","product-grid","features","testimonials","newsletter","footer"],
     ["hero","sale-banner","featured-products","categories","footer"],
     ["hero","product-grid","testimonials","newsletter","footer"],
     ["hero","categories","featured-products","sale-banner","testimonials","newsletter","footer"],
     ["hero","featured-products","sale-banner","product-grid","footer"],
     ["hero","product-grid","categories","testimonials","footer"],
     ["hero","sale-banner","product-grid","newsletter","footer"],
     ["hero","featured-products","categories","testimonials","newsletter","footer"]][i]
  )),
  Blog: Array.from({length:10},(_,i) => makeBP(i,"Blog",
    [["hero","featured-posts","categories","newsletter","footer"],
     ["hero","post-grid","sidebar","newsletter","footer"],
     ["hero","featured-posts","post-grid","newsletter","footer"],
     ["hero","post-grid","categories","footer"],
     ["hero","featured-posts","newsletter","footer"],
     ["hero","categories","post-grid","newsletter","footer"],
     ["hero","post-grid","featured-posts","footer"],
     ["hero","featured-posts","categories","newsletter","footer"],
     ["hero","post-grid","newsletter","footer"],
     ["hero","categories","featured-posts","post-grid","footer"]][i]
  )),
  Portfolio: Array.from({length:10},(_,i) => makeBP(i,"Portfolio",
    [["hero","project-grid","about","skills","contact","footer"],
     ["hero","project-grid","skills","testimonials","footer"],
     ["hero","about","project-grid","contact","footer"],
     ["hero","project-grid","testimonials","footer"],
     ["hero","skills","project-grid","about","footer"],
     ["hero","project-grid","about","skills","testimonials","contact","footer"],
     ["hero","about","skills","project-grid","footer"],
     ["hero","project-grid","contact","footer"],
     ["hero","skills","project-grid","testimonials","footer"],
     ["hero","project-grid","about","contact","footer"]][i]
  )),
  SaaS: Array.from({length:10},(_,i) => makeBP(i,"SaaS",
    [["hero","features","how-it-works","pricing","testimonials","cta","footer"],
     ["hero","features","pricing","testimonials","footer"],
     ["hero","how-it-works","features","cta","footer"],
     ["hero","features","pricing","footer"],
     ["hero","features","testimonials","pricing","cta","footer"],
     ["hero","how-it-works","features","pricing","testimonials","footer"],
     ["hero","pricing","features","cta","footer"],
     ["hero","features","how-it-works","testimonials","footer"],
     ["hero","features","pricing","cta","footer"],
     ["hero","how-it-works","pricing","testimonials","cta","footer"]][i]
  )),
  Business: Array.from({length:10},(_,i) => makeBP(i,"Business",
    [["hero","services","about","stats","team","testimonials","contact","footer"],
     ["hero","services","stats","testimonials","footer"],
     ["hero","about","services","team","footer"],
     ["hero","services","stats","contact","footer"],
     ["hero","services","testimonials","cta","footer"],
     ["hero","about","services","stats","team","contact","footer"],
     ["hero","stats","services","testimonials","footer"],
     ["hero","services","about","contact","footer"],
     ["hero","team","services","stats","footer"],
     ["hero","services","about","stats","testimonials","footer"]][i]
  )),
  "Landing Page": Array.from({length:10},(_,i) => makeBP(i,"Landing Page",
    [["hero","features","benefits","social-proof","pricing","cta","footer"],
     ["hero","features","pricing","cta","footer"],
     ["hero","benefits","features","social-proof","footer"],
     ["hero","features","cta","footer"],
     ["hero","social-proof","features","pricing","footer"],
     ["hero","features","benefits","pricing","cta","footer"],
     ["hero","pricing","features","cta","footer"],
     ["hero","features","social-proof","footer"],
     ["hero","benefits","pricing","cta","footer"],
     ["hero","features","benefits","social-proof","cta","footer"]][i]
  )),
  Agency: Array.from({length:10},(_,i) => makeBP(i,"Agency",
    [["hero","services","portfolio","process","team","testimonials","contact","footer"],
     ["hero","services","portfolio","testimonials","footer"],
     ["hero","portfolio","services","team","footer"],
     ["hero","services","process","contact","footer"],
     ["hero","portfolio","testimonials","cta","footer"],
     ["hero","services","portfolio","process","team","contact","footer"],
     ["hero","portfolio","services","testimonials","footer"],
     ["hero","services","team","contact","footer"],
     ["hero","process","portfolio","testimonials","footer"],
     ["hero","services","portfolio","team","cta","footer"]][i]
  )),
  Photography: Array.from({length:10},(_,i) => makeBP(i,"Photography",
    [["hero","gallery","about","services","testimonials","contact","footer"],
     ["hero","gallery","testimonials","contact","footer"],
     ["hero","about","gallery","services","footer"],
     ["hero","gallery","contact","footer"],
     ["hero","gallery","about","testimonials","footer"],
     ["hero","services","gallery","about","contact","footer"],
     ["hero","gallery","services","footer"],
     ["hero","about","gallery","contact","footer"],
     ["hero","gallery","testimonials","footer"],
     ["hero","gallery","about","services","contact","footer"]][i]
  )),
  Restaurant: Array.from({length:10},(_,i) => makeBP(i,"Restaurant",
    [["hero","menu","about","specials","testimonials","reservation","footer"],
     ["hero","menu","specials","reservation","footer"],
     ["hero","about","menu","testimonials","footer"],
     ["hero","menu","reservation","footer"],
     ["hero","specials","menu","about","footer"],
     ["hero","menu","about","specials","reservation","footer"],
     ["hero","menu","testimonials","reservation","footer"],
     ["hero","about","specials","menu","footer"],
     ["hero","menu","about","reservation","footer"],
     ["hero","specials","menu","testimonials","footer"]][i]
  )),
  Corporate: Array.from({length:10},(_,i) => makeBP(i,"Corporate",
    [["hero","services","about","stats","team","clients","contact","footer"],
     ["hero","services","stats","clients","footer"],
     ["hero","about","services","team","footer"],
     ["hero","services","clients","contact","footer"],
     ["hero","stats","services","testimonials","footer"],
     ["hero","services","about","stats","team","contact","footer"],
     ["hero","clients","services","stats","footer"],
     ["hero","services","about","contact","footer"],
     ["hero","team","services","clients","footer"],
     ["hero","services","stats","about","clients","footer"]][i]
  )),
};

// ═══════════════════════════════════════════════════
// NAME GENERATOR — unique names per template
// ═══════════════════════════════════════════════════

const ADJ = ["Luxe","Nova","Apex","Velvet","Prime","Stellar","Vivid","Bold","Pure","Zen",
             "Neon","Aura","Eclipse","Ember","Frost","Onyx","Prism","Radiant","Sigma","Titan"];
const NOUN = {
  Ecommerce:    ["Shop","Store","Mart","Bazaar","Market","Boutique","Cart","Commerce","Trade","Outlet"],
  Blog:         ["Post","Journal","Press","Daily","Chronicle","Digest","Write","Stories","Column","Verse"],
  Portfolio:    ["Folio","Studio","Canvas","Gallery","Showcase","Works","Creative","Space","Vision","Craft"],
  SaaS:         ["Cloud","Stack","Flow","Metric","Suite","Dash","Sync","Base","Wave","Logic"],
  Business:     ["Corp","Firm","Group","Global","Partners","Enterprise","Venture","Capital","Forge","Alliance"],
  "Landing Page":["Launch","Spark","Impulse","Signal","Beacon","Horizon","Gateway","Catalyst","Ascend","Ignite"],
  Agency:       ["Agency","Hub","Lab","Forge","Collective","Bureau","Atelier","Guild","Nexus","Circle"],
  Photography:  ["Lens","Frame","Snap","Focus","Shutter","Pixel","Capture","Expose","Aperture","Flash"],
  Restaurant:   ["Bistro","Kitchen","Table","Dine","Cuisine","Platter","Tavern","Grill","Spice","Feast"],
  Corporate:    ["Tower","Shield","Pinnacle","Summit","Matrix","Citadel","Dynasty","Legacy","Monarch","Empire"],
};

// ═══════════════════════════════════════════════════
// TEMPLATE GENERATOR — 10 blueprints × 10 palettes = 100 per category
// ═══════════════════════════════════════════════════

const CATEGORIES_LIST = Object.keys(BLUEPRINTS);

function generateAllTemplates() {
  const all = [];
  let globalId = 1;

  CATEGORIES_LIST.forEach((cat) => {
    const bps = BLUEPRINTS[cat];
    const nouns = NOUN[cat];

    bps.forEach((bp, bpIdx) => {
      COLOR_PALETTES.forEach((palette, palIdx) => {
        const adj = ADJ[(bpIdx * 3 + palIdx * 7) % ADJ.length];
        const noun = nouns[(bpIdx + palIdx) % nouns.length];
        const name = `${adj} ${noun}`;
        const rating = (3.5 + ((bpIdx * 3 + palIdx * 2) % 15) / 10).toFixed(1);
        const reviews = 200 + ((bpIdx * 137 + palIdx * 89) % 4800);

        all.push({
          id: globalId++,
          name,
          category: cat,
          style: palette.name,
          paletteId: palette.id,
          palette,
          blueprint: bp,
          rating,
          reviews,
          type: "generated",
          isPremium: true,
          desc: `${name} — a premium ${bp.heroType} layout with ${bp.gridCols}-column grid, ${bp.cardStyle} cards, and ${bp.sections.length} sections.`,
        });
      });
    });
  });

  // Merge custom non-premium e-commerce templates
  CUSTOM_ECOMMERCE_TEMPLATES.forEach((ct) => {
    all.push({
      id: ct.id,
      name: ct.name,
      category: "Ecommerce",
      style: ct.niche,
      niche: ct.niche,
      rating: ct.rating,
      reviews: ct.reviews,
      type: "custom",
      isPremium: false,
      previewUrl: ct.previewUrl,
      colors: ct.colors,
      desc: ct.description,
    });
  });

  return all;
}

export const ALL_TEMPLATES = [];
export const TEMPLATE_CATEGORIES = ["All", ...CATEGORIES_LIST];
export const TEMPLATE_STYLES = ["All", ...COLOR_PALETTES.map(p => p.name)];
