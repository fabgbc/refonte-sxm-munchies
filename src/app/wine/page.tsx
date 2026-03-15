"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ServiceContactForm from "@/components/ui/ServiceContactForm";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  heroTextContainer,
  heroTextItem,
} from "@/lib/animations";

interface WineItem {
  name: string;
  price: number;
}

interface WineGroup {
  name: string;
  subtitle?: string;
  wines: WineItem[];
}

interface WineSection {
  id: string;
  name: string;
  groups: WineGroup[];
}

const wineHighlights: WineSection[] = [
  {
    id: "champagnes",
    name: "Champagnes & Sparkling",
    groups: [
      {
        name: "Bernard Robert",
        subtitle: "Maison d'excellence depuis 1945",
        wines: [
          { name: "Réserve Brut Côte des Bar", price: 33.60 },
          { name: 'Réserve "Demi-sec"', price: 34.35 },
        ],
      },
      {
        name: "Canard-Duchêne",
        subtitle: "Maison fondée en 1868",
        wines: [
          { name: '"Cuvée Léonie Iconic" Brut', price: 46.80 },
          { name: "Brut Rosé Essentiel", price: 50.25 },
        ],
      },
      {
        name: "Laurent-Perrier",
        subtitle: "Maison fondée en 1812",
        wines: [
          { name: 'Brut "La Cuvée"', price: 68.85 },
          { name: "Brut Cuvée Rosé", price: 122.85 },
          { name: "Grand Siècle Grande Cuvée 100% Grands Crus", price: 240.00 },
        ],
      },
      {
        name: "Louis Roederer",
        subtitle: "Maison fondée en 1776",
        wines: [
          { name: "Brut Collection", price: 74.25 },
          { name: "Cristal Vintage 2015", price: 363.00 },
          { name: "Cristal Rosé 2013/14", price: 652.50 },
        ],
      },
      {
        name: "Gosset",
        subtitle: "La plus ancienne Maison — Aÿ 1584",
        wines: [
          { name: "Grande Réserve Brut", price: 64.50 },
          { name: "Célébris Vintage 2012 Brut", price: 202.50 },
        ],
      },
      {
        name: "Bruno Paillard",
        subtitle: "Reims",
        wines: [
          { name: "Première Cuvée Extra-Brut", price: 71.85 },
          { name: "N.P.U. 2009 Grand Cru", price: 307.50 },
        ],
      },
    ],
  },
  {
    id: "roses",
    name: "Rosé Wines",
    groups: [
      {
        name: "Provence",
        wines: [
          { name: "Maison Charlotte Belle Cuvée Méditerranée IGP", price: 8.25 },
          { name: "Château Gabriel Cannet des Maures", price: 15.15 },
          { name: "Domaine Siouvette L'Exception — La Mole", price: 16.65 },
          { name: "Château de Pampelonne Ramatuelle", price: 21.60 },
        ],
      },
      {
        name: "Château Saint-Maur",
        subtitle: "Cru Classé",
        wines: [
          { name: "Excellence Cru Classé Grimaud", price: 27.90 },
          { name: "Clos de Capelune Cru Classé Grimaud", price: 57.90 },
        ],
      },
      {
        name: "Domaines Ott*",
        wines: [
          { name: "By.Ott* Sélection Taradeau", price: 21.90 },
          { name: "Château de Selle Cru Classé Taradeau", price: 41.25 },
          { name: "Étoile — Assemblage du Clos Mireille", price: 136.50 },
        ],
      },
      {
        name: "Château d'Esclans",
        subtitle: "Domaines Sacha Lichine",
        wines: [
          { name: "Whispering Angel", price: 27.75 },
          { name: "Rock Angel", price: 38.85 },
          { name: "Château d'Esclans La Motte", price: 43.50 },
          { name: '"Garrus" La Motte', price: 148.50 },
        ],
      },
    ],
  },
  {
    id: "whites",
    name: "White Wines",
    groups: [
      {
        name: "Alsace",
        wines: [
          { name: "Crémant d'Alsace Comtes d'Isenbourg", price: 22.20 },
          { name: "Gewurztraminer Grand Cru Kirchberg de Barr 2020 Klipfel", price: 28.20 },
        ],
      },
      {
        name: "Vallée de la Loire",
        wines: [
          { name: 'Sancerre "Les Baronnes" 2023/24 Henri Bourgeois', price: 27.75 },
          { name: "Pouilly Fumé La Moynerie 2022/23 Michel Redde & Fils", price: 25.65 },
        ],
      },
      {
        name: "Bourgogne",
        wines: [
          { name: "Pouilly-Fuissé 2023 Jean-Claude Boisset", price: 39.75 },
          { name: "Chablis 1er Cru Vaillons 2022 William Fèvre", price: 65.25 },
          { name: "Meursault 2020 Château de Pommard", price: 85.50 },
          { name: "Puligny-Montrachet 2023/24 Maison Louis Latour", price: 124.65 },
        ],
      },
      {
        name: "Vallée du Rhône",
        wines: [
          { name: "Châteauneuf-du-Pape 2023/24 Château Mont Redon", price: 44.25 },
          { name: "Condrieu Chery 2022/23 Domaine André Perret", price: 81.00 },
        ],
      },
    ],
  },
  {
    id: "reds",
    name: "Red Wines",
    groups: [
      {
        name: "Vallée du Rhône",
        wines: [
          { name: "Côtes du Rhône Réserve Mont-Redon", price: 12.90 },
          { name: "Châteauneuf-du-Pape 2020 Château Mont Redon", price: 48.45 },
          { name: "Côte-Rôtie Laurus 2022 Gabriel Meffre", price: 74.85 },
          { name: "Hermitage La Chapelle 2022 Domaine de la Chapelle", price: 286.50 },
        ],
      },
      {
        name: "Bourgogne",
        wines: [
          { name: "Bourgogne Pinot Noir 2022/23 Millebuis", price: 19.35 },
          { name: "Gevrey-Chambertin 2020 Bouchard Père & Fils", price: 85.35 },
          { name: "Clos des Lambrays 2023 Domaine des Lambrays", price: 823.50 },
          { name: "Vosne-Romanée 2022 Bouchard Père & Fils", price: 94.50 },
        ],
      },
      {
        name: "Bordeaux",
        wines: [
          { name: "Château Pey la Tour 2019/20 Réserve du Château", price: 15.75 },
          { name: "Château Gloria 2020 Saint-Julien", price: 67.50 },
          { name: "Château Lagrange 2017 3ème Cru Classé Saint-Julien", price: 79.50 },
          { name: "Pauillac de Latour 2019/20 3ème Vin du Cru Classé", price: 114.00 },
        ],
      },
    ],
  },
  {
    id: "american",
    name: "American Wines",
    groups: [
      {
        name: "California",
        wines: [
          { name: "J. Lohr Cabernet Sauvignon Hilltop 2022/23 Paso Robles", price: 40.95 },
          { name: "Silver Oak Cabernet Sauvignon 2021 Alexander Valley", price: 109.50 },
          { name: "Opus One 2021 Napa Valley", price: 586.50 },
          { name: "Screaming Eagle Cabernet Sauvignon 2021 Oakville", price: 3462.00 },
        ],
      },
      {
        name: "Oregon & Washington",
        wines: [
          { name: "Duck Pond Pinot Noir 2023/24 Willamette Valley", price: 25.50 },
          { name: "Cristom Chardonnay Eola-Amity Hills 2021/22", price: 54.00 },
          { name: "Château Ste. Michelle Chardonnay Columbia Valley", price: 20.25 },
        ],
      },
    ],
  },
  {
    id: "world",
    name: "World Wines",
    groups: [
      {
        name: "Italy",
        wines: [
          { name: "Montelvini Prosecco Brut DOC Treviso", price: 13.35 },
          { name: "Bertani Amarone della Valpolicella Classico 2015", price: 166.50 },
          { name: "Barolo Ratti Marcenasco 2019/20 DOCG", price: 74.40 },
          { name: "Sassicaia 2020 Tenuta San Guido DOC", price: 567.00 },
        ],
      },
      {
        name: "Spain",
        wines: [
          { name: "Rueda Blanco Verdejo 2024/25 Marqués de Riscal", price: 13.35 },
          { name: "Rioja Reserva 2020/21 Marqués de Riscal", price: 22.95 },
          { name: "Mas La Plana Cabernet Sauvignon 2018/19 Torres", price: 76.50 },
        ],
      },
      {
        name: "Chile",
        wines: [
          { name: "Viña Santa Rita Cabernet Sauvignon 120 Valle Central", price: 9.45 },
          { name: "Almaviva 2022 Puente Alto", price: 280.50 },
        ],
      },
      {
        name: "Argentina",
        wines: [
          { name: "Domaine Bousquet Malbec 2024 Tupungato Uco Valley", price: 11.10 },
          { name: "Cheval des Andes 2020 Mendoza", price: 148.50 },
        ],
      },
    ],
  },
  {
    id: "spirits",
    name: "Spirits & Digestifs",
    groups: [
      {
        name: "Cognac",
        wines: [
          { name: 'Lheraud VS "Terres Et Bois" 3yo 40%', price: 33.00 },
          { name: "Frapin VSOP Grande Champagne", price: 43.50 },
          { name: "Frapin XO Carafe VIP", price: 147.00 },
        ],
      },
      {
        name: "Rhum Agricole",
        wines: [
          { name: "Reimonenq Blanc Cœur de Chauffe 50% (Guadeloupe)", price: 17.25 },
          { name: "St James Vieux VO 42% (Martinique)", price: 14.85 },
          { name: "J. Bally Vieux Pyramide 3 Ans 45% (Martinique)", price: 37.50 },
        ],
      },
      {
        name: "Grappa",
        wines: [
          { name: "Nonino della Tradizione Friulana 43%", price: 22.50 },
          { name: "Gaja Barbaresco (Nebbiolo) Piemonte 45°", price: 63.00 },
        ],
      },
    ],
  },
];

const categoryIcons: Record<string, React.ReactNode> = {
  "champagnes": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 22h8M12 11v11M12 11a4 4 0 0 0 4-4V3H8v4a4 4 0 0 0 4 4z" />
    </svg>
  ),
  "roses": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3c-1.5 2-3 3.5-3 6 0 2.5 1.5 4 3 4s3-1.5 3-4c0-2.5-1.5-4-3-6z" />
      <path d="M8 22h8M12 13v9" />
    </svg>
  ),
  "whites": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 3h4l2 4v4h-8V7l2-4z" />
      <path d="M8 22h8M12 11v11" />
    </svg>
  ),
  "reds": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 22h8M12 15v7" />
      <path d="M17 3H7v5c0 3.5 2 5 5 7 3-2 5-3.5 5-7V3z" />
    </svg>
  ),
  "american": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  "world": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  "spirits": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 22h8M12 11v11" />
      <path d="M7 2v9a5 5 0 0 0 10 0V2" />
      <path d="M7 6h10" />
    </svg>
  ),
};

function formatPrice(price: number): string {
  return price.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }) + " €";
}

export default function WinePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 vignette">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-menus/Wine.jpg"
              alt="Fine Wines"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A09]/80 via-[#0C0A09]/60 to-[#0C0A09]/95" />
          </div>

          <div className="absolute top-24 left-8 lg:left-16 w-20 h-20 border-t border-l border-[var(--color-accent)]/30 z-10" />
          <div className="absolute top-24 right-8 lg:right-16 w-20 h-20 border-t border-r border-[var(--color-accent)]/30 z-10" />
          <div className="absolute bottom-8 left-8 lg:left-16 w-20 h-20 border-b border-l border-[var(--color-accent)]/30 z-10" />
          <div className="absolute bottom-8 right-8 lg:right-16 w-20 h-20 border-b border-r border-[var(--color-accent)]/30 z-10" />

          <div className="container relative z-10">
            <motion.div
              variants={heroTextContainer}
              initial="hidden"
              animate="visible"
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                variants={heroTextItem}
                className="flex items-center justify-center gap-4 mb-6"
              >
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                <span className="section-number">Curated Selection</span>
                <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
              </motion.div>

              <motion.h1
                variants={heroTextItem}
                className="mb-6 golden-glow-text"
              >
                Fine Wines
              </motion.h1>

              <motion.p
                variants={heroTextItem}
                className="text-[var(--color-text-secondary)] text-lg lg:text-xl mb-10 max-w-2xl mx-auto font-[family-name:var(--font-cormorant)] italic"
              >
                Over 750 wines curated by our sommelier — from prestigious
                Champagnes to rare Californian vintages.
              </motion.p>

              <motion.a
                variants={heroTextItem}
                href="/wine-list.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg-primary)] font-medium tracking-wider uppercase text-sm hover:bg-[var(--color-accent-hover)] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Full Wine List (PDF)
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          >
            <span className="text-xs tracking-widest uppercase text-[var(--color-text-secondary)]">
              Discover
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </section>

        {/* Wine Highlights Section */}
        <section className="section bg-[var(--color-bg-primary)] relative">
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23D4A574' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />

          <div className="container relative">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-5xl mx-auto"
            >
              <motion.div variants={staggerItem} className="text-center mb-16">
                <span className="section-number">Highlights</span>
                <h2 className="font-[family-name:var(--font-cormorant)] mt-4">A Taste of Our Selection</h2>
                <p className="text-[var(--color-text-secondary)] mt-4 max-w-xl mx-auto">
                  A curated preview of our extensive collection. Download our full catalog for the complete list of over 750 references.
                </p>
              </motion.div>

              {/* Wine Sections */}
              <div className="space-y-16">
                {wineHighlights.map((section) => (
                  <motion.div
                    key={section.id}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    {/* Section Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 flex items-center justify-center border border-[var(--color-accent)] rounded-full text-[var(--color-accent)]">
                        {categoryIcons[section.id]}
                      </div>
                      <h3 className="text-2xl font-[family-name:var(--font-cormorant)] text-[var(--color-accent)]">
                        {section.name}
                      </h3>
                      <span className="flex-1 h-[1px] bg-[var(--color-accent)]/20" />
                    </div>

                    {/* Groups */}
                    <div className="space-y-8">
                      {section.groups.map((group, gi) => (
                        <div key={gi} className="pl-4 lg:pl-16">
                          {/* Producer/Region Name */}
                          <div className="mb-3">
                            <h4 className="text-lg font-[family-name:var(--font-cormorant)] text-[var(--color-text-primary)] font-semibold">
                              {group.name}
                            </h4>
                            {group.subtitle && (
                              <p className="text-sm text-[var(--color-text-secondary)] italic font-[family-name:var(--font-cormorant)]">
                                {group.subtitle}
                              </p>
                            )}
                          </div>

                          {/* Wine Items */}
                          <div className="space-y-2">
                            {group.wines.map((wine, wi) => (
                              <div
                                key={wi}
                                className="group flex items-baseline gap-2 py-1 hover:bg-[var(--color-accent)]/5 px-2 -mx-2 transition-colors rounded"
                              >
                                <span className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors text-sm lg:text-base">
                                  {wine.name}
                                </span>
                                <span className="flex-1 border-b border-dotted border-[var(--color-accent)]/20 min-w-[2rem] translate-y-[-4px]" />
                                <span className="text-[var(--color-accent)] font-medium whitespace-nowrap text-sm lg:text-base">
                                  {formatPrice(wine.price)}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Download CTA Section */}
        <section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23D4A574' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />

          <div className="container relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="p-10 lg:p-16 bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] relative">
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[var(--color-accent)]" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[var(--color-accent)]" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[var(--color-accent)]" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[var(--color-accent)]" />

                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center border border-[var(--color-accent)] rounded-full">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>

                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl lg:text-4xl mb-4 golden-glow-text">
                  Full Wine Catalog
                </h2>
                <p className="text-[var(--color-text-secondary)] text-lg mb-4">
                  Over 750 wines from France, Italy, Spain, USA, Chile, Argentina, and more.
                </p>
                <p className="text-[var(--color-text-secondary)] text-sm mb-8">
                  Prices valid from October 1st, 2025 to September 30th, 2026
                </p>

                <a
                  href="/wine-list.pdf"
                  download
                  className="inline-flex items-center gap-3 px-10 py-4 bg-[var(--color-accent)] text-[var(--color-bg-primary)] font-medium tracking-wider uppercase text-sm hover:bg-[var(--color-accent-hover)] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Complete Wine List (PDF)
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pairing Section */}
        <section className="section bg-[var(--color-bg-primary)] relative">
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23D4A574' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />

          <div className="container relative">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={staggerItem} className="text-center mb-12">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-accent)]" />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                    <path d="M8 22h8M12 11v11M12 11a4 4 0 0 0 4-4V3H8v4a4 4 0 0 0 4 4z" />
                  </svg>
                  <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-accent)]" />
                </div>
                <span className="section-number block mb-4">Expert Pairing</span>
                <h2 className="font-[family-name:var(--font-cormorant)]">Perfect Pairings</h2>
              </motion.div>
              <motion.div
                variants={staggerItem}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="group p-8 bg-[var(--color-bg-secondary)] border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all duration-300 relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--color-accent)]" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[var(--color-accent)]" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[var(--color-accent)]" />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--color-accent)]" />

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center border border-[var(--color-accent)] rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    </div>
                    <h4 className="text-[var(--color-accent)] text-xl font-[family-name:var(--font-cormorant)]">
                      Pre-Dinner Selection
                    </h4>
                  </div>
                  <p className="text-[var(--color-text-secondary)]">
                    Let us know your menu in advance and we will recommend the
                    perfect wines to accompany each course.
                  </p>
                </div>
                <div className="group p-8 bg-[var(--color-bg-secondary)] border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all duration-300 relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--color-accent)]" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[var(--color-accent)]" />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[var(--color-accent)]" />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--color-accent)]" />

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center border border-[var(--color-accent)] rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <h4 className="text-[var(--color-accent)] text-xl font-[family-name:var(--font-cormorant)]">
                      Personal Consultation
                    </h4>
                  </div>
                  <p className="text-[var(--color-text-secondary)]">
                    Schedule a consultation with our chef to discuss your
                    preferences and create a custom wine list.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Good to Know Section */}
        <section className="py-20 lg:py-28 bg-[var(--color-bg-secondary)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--color-accent)]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="container relative">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4M12 8h.01" />
                  </svg>
                  <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                </div>
                <h3 className="text-[var(--color-accent)] text-2xl font-[family-name:var(--font-cormorant)]">
                  Good to Know
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-[var(--color-accent)] rounded-full">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                      <path d="M8 22h8M12 11v11M12 11a4 4 0 0 0 4-4V3H8v4a4 4 0 0 0 4 4z" />
                    </svg>
                  </div>
                  <h4 className="text-[var(--color-text-primary)] mb-2">750+ References</h4>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    From everyday wines to rare vintages and Grand Crus
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-[var(--color-accent)] rounded-full">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                    </svg>
                  </div>
                  <h4 className="text-[var(--color-text-primary)] mb-2">Advance Notice</h4>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    Special orders require 1-2 weeks notice
                  </p>
                </div>
                <div className="text-center p-6">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-[var(--color-accent)] rounded-full">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h4 className="text-[var(--color-text-primary)] mb-2">Premium Imports</h4>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    Partnered with premium importers worldwide
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="section bg-[var(--color-bg-primary)]">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-accent)]" />
                <span className="section-number">Gallery</span>
                <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-accent)]" />
              </div>
              <h2 className="font-[family-name:var(--font-cormorant)] mt-4">
                Wine Collection Moments
              </h2>
              <p className="text-[var(--color-text-secondary)] mt-4 max-w-xl mx-auto">
                A glimpse into our carefully curated wine selection and the elegant experiences we create
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            >
              <motion.div
                variants={staggerItem}
                className="relative aspect-[4/3] overflow-hidden group image-premium"
              >
                <Image
                  src="/images/wine/5-2.jpg"
                  alt="Wine selection"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-4 border border-[var(--color-accent)]/0 group-hover:border-[var(--color-accent)]/50 transition-all duration-500 pointer-events-none" />
              </motion.div>
              <motion.div
                variants={staggerItem}
                className="relative aspect-[4/3] overflow-hidden group image-premium"
              >
                <Image
                  src="/images/wine/9.jpg"
                  alt="Wine pairing"
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-4 border border-[var(--color-accent)]/0 group-hover:border-[var(--color-accent)]/50 transition-all duration-500 pointer-events-none" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="section bg-[var(--color-bg-secondary)] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-accent) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />

          <div className="container relative">
            <div className="max-w-4xl mx-auto">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="text-center mb-16"
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
                    <path d="M8 22h8M12 11v11M12 11a4 4 0 0 0 4-4V3H8v4a4 4 0 0 0 4 4z" />
                  </svg>
                  <span className="w-12 h-[1px] bg-[var(--color-accent)]" />
                </div>
                <h2 className="mb-4 golden-glow-text">Interested in Our Wine Selection?</h2>
                <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
                  Let us curate the perfect wine pairing for your private dining experience
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
              >
                <motion.a
                  variants={staggerItem}
                  href="tel:+590690535739"
                  className="group p-8 bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-[var(--color-accent)] rounded-full group-hover:bg-[var(--color-accent)] transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent)] group-hover:text-[var(--color-bg-primary)] transition-colors">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[var(--color-accent)] block mb-2">Call Us</span>
                  <span className="text-xl font-[family-name:var(--font-cormorant)] group-hover:text-[var(--color-accent)] transition-colors">
                    +590 690 53.57.39
                  </span>
                </motion.a>

                <motion.a
                  variants={staggerItem}
                  href="mailto:sxmprivatechef@gmail.com"
                  className="group p-8 bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] hover:border-[var(--color-accent)] transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-[var(--color-accent)] rounded-full group-hover:bg-[var(--color-accent)] transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent)] group-hover:text-[var(--color-bg-primary)] transition-colors">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[var(--color-accent)] block mb-2">Email Us</span>
                  <span className="text-lg font-[family-name:var(--font-cormorant)] group-hover:text-[var(--color-accent)] transition-colors">
                    sxmprivatechef@gmail.com
                  </span>
                </motion.a>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="bg-[var(--color-bg-tertiary)] border border-[var(--color-accent-light)] p-8 lg:p-12 relative"
              >
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[var(--color-accent)]" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[var(--color-accent)]" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[var(--color-accent)]" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[var(--color-accent)]" />

                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-center mb-8">
                  Send Us a Message
                </h3>

                <ServiceContactForm serviceType="wine" placeholder="Tell us about your wine preferences..." buttonText="Request Wine Consultation" />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
