import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

function SparkleIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <path d="M20 4L22 16L34 20L22 24L20 36L18 24L6 20L18 16L20 4Z" fill="#C9A065" />
      <circle cx="10" cy="10" r="2" fill="#C9A065" />
      <circle cx="30" cy="10" r="2" fill="#C9A065" />
      <circle cx="10" cy="30" r="2" fill="#C9A065" />
      <circle cx="30" cy="30" r="2" fill="#C9A065" />
    </svg>
  );
}

const neighborhoodData: Record<string, { name: string; description: string; image: string; detailedDescription: string; benefits: string[]; demographics: { population?: string; medianIncome?: string; medianHomeValue: string; }; nearby: string[]; }> = {
  "meridian-hills": {
    name: "Meridian Hills",
    description: "One of Indianapolis's most prestigious neighborhoods, Meridian Hills offers exceptional luxury properties with tree-lined streets and expansive estates. This exclusive enclave is known for its privacy, excellent schools, and proximity to downtown.",
    image: "/neighborhoods/meridian-hills/meridian-hills-in.avif",
    detailedDescription: "Meridian Hills represents the pinnacle of Indianapolis luxury real estate and investment opportunities. This prestigious neighborhood, incorporated as a town within Indianapolis, features sprawling estates on large lots with mature landscaping and exceptional architectural character. The area's quiet, tree-lined streets and proximity to downtown Indianapolis make it ideal for high-value 1031 exchange properties. Investors seeking premium residential real estate in Indianapolis will find Meridian Hills offers unmatched stability and appreciation potential.",
    benefits: ["Premium property values with strong appreciation", "Exclusive residential character", "Top-rated school district access", "Proximity to Meridian Street corridor", "Low crime and high security"],
    demographics: { medianHomeValue: "$650,000", medianIncome: "$150,000+", population: "1,800" },
    nearby: ["Butler University", "Broad Ripple Village", "Downtown Indianapolis"]
  },
  "geist": { 
    name: "Geist", 
    description: "Centered around the beautiful Geist Reservoir, this community offers waterfront living at its finest. Properties here range from lakefront estates to golf course homes, making it ideal for investors seeking premium residential opportunities.", 
    image: "/neighborhoods/geist/geist-in.jpg",
    detailedDescription: "The Geist area represents one of Indianapolis's most desirable luxury real estate markets for 1031 exchange investors. Situated around the 1,900-acre Geist Reservoir in northeast Indianapolis, this community offers waterfront estates, golf course properties, and luxury homes with resort-style amenities. The area attracts high-income professionals and executives, creating a stable market for investment properties. Geist properties consistently command premium prices and demonstrate strong appreciation, making them excellent candidates for tax-deferred exchanges.",
    benefits: ["Waterfront and water-view properties", "Strong property appreciation", "High-income demographic", "Exclusive marina and yacht club access", "Premium golf course communities"],
    demographics: { medianHomeValue: "$525,000", medianIncome: "$125,000+" },
    nearby: ["Fishers", "McCordsville", "Lawrence"]
  },
  "carmel": { 
    name: "Carmel", 
    description: "Consistently ranked among America's best places to live, Carmel combines small-town charm with urban amenities. The Arts & Design District, excellent schools, and strong property values make it a top choice for 1031 exchanges.", 
    image: "/neighborhoods/carmel/carmel-in.jpg",
    detailedDescription: "Carmel has established itself as one of the premier investment markets for 1031 exchanges in the Indianapolis metropolitan area. This affluent city consistently ranks among the best places to live in America, offering investors access to diverse property types including luxury residential, mixed-use developments in the Arts & Design District, and commercial properties. Carmel's commitment to infrastructure, highly-rated schools, and strong municipal governance create an environment of sustained property value growth. The city's business-friendly policies and high quality of life attract corporations and affluent residents, ensuring strong demand for investment properties.",
    benefits: ["Consistently ranked top city in America", "Arts & Design District development", "Exceptional school system", "Strong commercial real estate market", "Low property taxes relative to value"],
    demographics: { medianHomeValue: "$485,000", medianIncome: "$110,000+", population: "100,000+" },
    nearby: ["Westfield", "Noblesville", "Indianapolis"]
  },
  "zionsville": { 
    name: "Zionsville", 
    description: "Known for its charming brick-paved Main Street and historic downtown, Zionsville offers a blend of rural tranquility and suburban convenience. Excellent schools and a strong sense of community make this area highly desirable.", 
    image: "/neighborhoods/zionsville/zionsville-in.jpg",
    detailedDescription: "Zionsville presents exceptional 1031 exchange opportunities for investors seeking stable, high-value residential and commercial properties in the Indianapolis market. This charming town, located northwest of Indianapolis, features a historic village atmosphere with brick-paved streets while offering modern luxury homes and excellent commercial investment opportunities. Zionsville's highly-rated schools, affluent demographics, and strong community identity create sustained demand for real estate. The downtown area's unique retail environment and the surrounding luxury residential developments make Zionsville an attractive market for diversified 1031 exchange portfolios.",
    benefits: ["Historic downtown with unique character", "Top-rated school district", "Affluent, stable demographics", "Mix of historic and modern properties", "Strong retail and commercial sector"],
    demographics: { medianHomeValue: "$475,000", medianIncome: "$115,000+" },
    nearby: ["Carmel", "Whitestown", "Indianapolis"]
  },
  "fishers": { 
    name: "Fishers", 
    description: "One of the fastest-growing cities in Indiana, Fishers offers modern amenities, excellent schools, and a thriving business district. The diverse housing options and strong job market make it attractive for various property investments.", 
    image: "/neighborhoods/fishers/fishers-in.jpg",
    detailedDescription: "Fishers represents one of the most dynamic 1031 exchange markets in the Indianapolis metropolitan area. As one of the fastest-growing cities in Indiana, Fishers offers investors access to diverse property types including residential, commercial, mixed-use, and industrial properties. The city's Nickel Plate District and downtown development have created significant opportunities for commercial real estate investment. Fishers' strong employment base, featuring major employers like Roche Diagnostics, creates sustained demand for all property types. The city's business-friendly environment and continued infrastructure investment make it an ideal market for tax-deferred exchanges.",
    benefits: ["Rapid growth and development", "Diverse property investment options", "Strong employment base", "Modern infrastructure", "Family-friendly amenities"],
    demographics: { medianHomeValue: "$385,000", medianIncome: "$95,000+", population: "95,000+" },
    nearby: ["Noblesville", "Carmel", "Indianapolis"]
  },
  "noblesville": { 
    name: "Noblesville", 
    description: "The Hamilton County seat combines historic charm with modern growth. Downtown Noblesville features a vibrant square, while surrounding areas offer new developments and established neighborhoods perfect for investment.", 
    image: "/neighborhoods/noblesville/noblesville-in.jpg",
    detailedDescription: "Noblesville offers 1031 exchange investors a unique combination of historic charm and modern growth potential. As the Hamilton County seat, Noblesville features a revitalized downtown square with thriving retail and restaurant establishments, creating opportunities for commercial property investment. The city's diverse residential market ranges from historic homes to new master-planned communities, providing options for various investment strategies. Noblesville's strong school system, growing employment base, and continued development make it an attractive market for investors seeking appreciation potential in the Indianapolis metropolitan area.",
    benefits: ["Historic downtown with modern amenities", "County government presence", "Diverse residential options", "Strong school system", "Growing commercial sector"],
    demographics: { medianHomeValue: "$340,000", medianIncome: "$80,000+" },
    nearby: ["Fishers", "Westfield", "Carmel"]
  },
  "westfield": { 
    name: "Westfield", 
    description: "Home to Grand Park Sports Campus, Westfield is experiencing rapid growth and development. New commercial and residential projects make this an exciting area for forward-thinking investors.", 
    image: "/neighborhoods/westfield/westfield-in.webp",
    detailedDescription: "Westfield has emerged as one of the Indianapolis area's most promising markets for 1031 exchange investment. The development of Grand Park Sports Campus, one of the largest youth sports facilities in the nation, has catalyzed significant commercial and residential growth. This growth creates opportunities for investors in hospitality, retail, residential, and mixed-use properties. Westfield's strategic location along US 31 and its business-friendly policies attract new development and employers. The city's continued infrastructure investment and planned growth make it an ideal market for investors seeking appreciation potential through tax-deferred exchanges.",
    benefits: ["Grand Park Sports Campus economic driver", "Rapid commercial development", "New construction opportunities", "Strategic location", "Business-friendly environment"],
    demographics: { medianHomeValue: "$380,000", medianIncome: "$90,000+" },
    nearby: ["Carmel", "Noblesville", "Zionsville"]
  },
  "brownsburg": { 
    name: "Brownsburg", 
    description: "Located in Hendricks County, Brownsburg offers affordable housing options and a family-friendly atmosphere. Strong schools and community events make this area increasingly popular for residential investments.", 
    image: "/neighborhoods/brownsburg/brownsburg-in.jpeg",
    detailedDescription: "Brownsburg provides 1031 exchange investors with access to affordable property markets in the Indianapolis metropolitan area. This Hendricks County community offers investors opportunities in residential properties, retail centers, and light industrial facilities. Brownsburg's proximity to Indianapolis International Airport and major transportation corridors enhances its appeal for commercial and industrial investment. The town's strong school system and family-oriented amenities create sustained demand for residential properties. Brownsburg's relative affordability compared to northern suburbs, combined with steady appreciation, makes it attractive for investors seeking value in the Indianapolis market.",
    benefits: ["Affordable property entry points", "Strong school system", "Proximity to Indianapolis airport", "Growing retail sector", "Family-friendly community"],
    demographics: { medianHomeValue: "$295,000", medianIncome: "$75,000+" },
    nearby: ["Avon", "Plainfield", "Indianapolis"]
  },
  "avon": { 
    name: "Avon", 
    description: "Avon provides excellent value with quality housing and top-rated schools. The Avon Town Hall Park and growing retail corridors make this area attractive for both residential and commercial investments.", 
    image: "/neighborhoods/avon/avon-in.webp",
    detailedDescription: "Avon represents a balanced 1031 exchange market in the Indianapolis metropolitan area, offering investors access to both residential and commercial properties at competitive price points. Located in Hendricks County, Avon features strong retail corridors along US 36 and growing residential communities. The town's highly-rated school system attracts families, creating sustained demand for residential investment properties. Avon's proximity to Indianapolis while maintaining lower property taxes and living costs makes it attractive for diverse investment strategies. The community's continued growth and development create opportunities for investors seeking appreciation in an established suburban market.",
    benefits: ["Competitive property pricing", "Strong retail presence", "Highly-rated schools", "Growing residential market", "Lower tax burden"],
    demographics: { medianHomeValue: "$310,000", medianIncome: "$78,000+" },
    nearby: ["Plainfield", "Brownsburg", "Indianapolis"]
  },
  "greenwood": { 
    name: "Greenwood", 
    description: "South of Indianapolis, Greenwood offers a mix of established neighborhoods and new developments. The area's commercial growth and affordable prices make it an excellent choice for diverse investment portfolios.", 
    image: "/neighborhoods/greenwood/greenwood-in.jpg",
    detailedDescription: "Greenwood offers 1031 exchange investors strategic access to the southern Indianapolis market with diverse property investment opportunities. This growing city features established commercial centers, including Greenwood Park Mall, alongside new residential developments. Greenwood's location along I-65 and major state routes provides excellent accessibility for commercial and industrial properties. The city's balanced mix of residential, retail, and industrial properties allows investors to diversify within a single market. Greenwood's more affordable property prices compared to northern suburbs, combined with steady growth, create attractive opportunities for value-oriented 1031 exchange investors.",
    benefits: ["Diverse property types", "Established retail market", "Strategic interstate location", "Affordable entry points", "Steady appreciation"],
    demographics: { medianHomeValue: "$275,000", medianIncome: "$70,000+" },
    nearby: ["Indianapolis", "Franklin", "Bargersville"]
  },
  "downtown": { 
    name: "Downtown Indianapolis", 
    description: "The heart of Indianapolis offers unparalleled urban investment opportunities. From luxury condos to mixed-use developments, downtown properties benefit from major employers, sports venues, and cultural attractions.", 
    image: "/neighborhoods/downtown/downtown-in.jpg",
    detailedDescription: "Downtown Indianapolis presents premium 1031 exchange opportunities in the urban core of Indiana's capital city. This dynamic market offers investors access to luxury residential condominiums, mixed-use developments, office buildings, retail spaces, and hospitality properties. The downtown area benefits from major employers including Eli Lilly, Salesforce, and numerous healthcare systems, creating sustained demand for all property types. Downtown Indianapolis features world-class sports and convention facilities, cultural attractions, and continued urban development including the 16 Tech Innovation District. The area's dense concentration of employment, entertainment, and residential uses creates a robust market for commercial and residential investment properties.",
    benefits: ["Urban core location", "Major employer presence", "Sports and convention business", "Cultural attractions", "High-density mixed-use development"],
    demographics: { medianHomeValue: "$295,000", medianIncome: "$55,000+" },
    nearby: ["Fountain Square", "Mass Ave", "IUPUI"]
  },
  "broad-ripple": { 
    name: "Broad Ripple", 
    description: "This eclectic neighborhood is known for its arts scene, dining, and entertainment. The Monon Trail and proximity to Butler University make Broad Ripple attractive for young professionals and investors alike.", 
    image: "/neighborhoods/broad-ripple/broad-ripple-in.jpeg",
    detailedDescription: "Broad Ripple offers unique 1031 exchange opportunities in one of Indianapolis's most distinctive neighborhoods. This vibrant community, located along the White River, features a mix of arts, entertainment, dining, and retail establishments that create opportunities for commercial property investment. The neighborhood's eclectic character attracts young professionals, Butler University students, and creative professionals, sustaining demand for residential and mixed-use properties. Broad Ripple's location along the Monon Trail, one of the nation's most popular urban rail trails, enhances property values. The area's established character combined with ongoing revitalization creates investment opportunities in both existing and redevelopment properties.",
    benefits: ["Arts and entertainment district", "Monon Trail access", "Butler University proximity", "Eclectic retail and dining", "Young professional demographic"],
    demographics: { medianHomeValue: "$325,000", medianIncome: "$65,000+" },
    nearby: ["Butler-Tarkington", "Meridian-Kessler", "Downtown Indianapolis"]
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const neighborhood = neighborhoodData[slug];
  
  if (!neighborhood) {
    return {
      title: "Neighborhood | Indianapolis 1031 Exchange",
      description: "Discover 1031 exchange opportunities in Indianapolis neighborhoods."
    };
  }

  return {
    title: `${neighborhood.name} 1031 Exchange Properties | Indianapolis IN`,
    description: `Explore ${neighborhood.name} 1031 exchange opportunities in Indianapolis, IN. ${neighborhood.description.substring(0, 120)}...`,
    keywords: [
      `${neighborhood.name} 1031 exchange`,
      `${neighborhood.name} investment property`,
      `${neighborhood.name} real estate Indianapolis`,
      `1031 exchange ${neighborhood.name}`,
      `${neighborhood.name} commercial property`,
      `Indianapolis ${neighborhood.name} investment`,
      `tax deferred exchange ${neighborhood.name}`,
      `${neighborhood.name} property investment`
    ],
    openGraph: {
      title: `${neighborhood.name} 1031 Exchange Properties | Indianapolis`,
      description: neighborhood.description,
      type: "website",
      images: [neighborhood.image],
    },
    alternates: {
      canonical: `https://indy1031exchange.com/neighborhoods/${slug}`
    }
  };
}

export default async function NeighborhoodPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const neighborhood = neighborhoodData[slug] || { 
    name: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()), 
    description: "Discover exceptional investment opportunities in this Indianapolis neighborhood. Our team specializes in identifying properties ideal for 1031 exchanges in this area.", 
    image: "/neighborhoods/downtown/downtown-in.jpg",
    detailedDescription: "This Indianapolis neighborhood offers diverse investment opportunities for 1031 exchange investors.",
    benefits: ["Strategic location", "Growing property values", "Investment potential"],
    demographics: { medianHomeValue: "Contact for details" },
    nearby: []
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": neighborhood.name,
    "description": neighborhood.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": neighborhood.name,
      "addressRegion": "IN",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressLocality": neighborhood.name
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pt-20">
        <Breadcrumb items={[{ label: "Neighborhoods", href: "/neighborhoods" }, { label: neighborhood.name }]} />
        {/* Hero */}
        <section className="relative min-h-[500px] flex items-center" style={{ backgroundImage: `url('${neighborhood.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative z-10 text-center">
            <SparkleIcon className="w-10 h-10 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-serif italic mb-6">
              {neighborhood.name}
            </h1>
            <p className="text-white/90 text-xl max-w-3xl mx-auto">
              1031 Exchange Investment Opportunities
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 bg-paper">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl text-heading font-serif italic mb-8">
              About {neighborhood.name}
            </h2>
            <p className="text-xl text-ink leading-relaxed mb-10">
              {neighborhood.description}
            </p>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-ink leading-relaxed">
                {neighborhood.detailedDescription}
              </p>
            </div>

            {neighborhood.benefits && neighborhood.benefits.length > 0 && (
              <>
                <h3 className="text-2xl text-heading font-serif italic mb-6">
                  Investment Benefits
                </h3>
                <ul className="space-y-4 mb-12">
                  {neighborhood.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-ink">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {neighborhood.demographics && (
              <div className="bg-cream p-8 mb-12">
                <h3 className="text-2xl text-heading font-serif italic mb-6">
                  Market Demographics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {neighborhood.demographics.medianHomeValue && (
                    <div>
                      <div className="text-sm text-ink/60 mb-1">Median Home Value</div>
                      <div className="text-2xl text-heading font-serif">{neighborhood.demographics.medianHomeValue}</div>
                    </div>
                  )}
                  {neighborhood.demographics.medianIncome && (
                    <div>
                      <div className="text-sm text-ink/60 mb-1">Median Income</div>
                      <div className="text-2xl text-heading font-serif">{neighborhood.demographics.medianIncome}</div>
                    </div>
                  )}
                  {neighborhood.demographics.population && (
                    <div>
                      <div className="text-sm text-ink/60 mb-1">Population</div>
                      <div className="text-2xl text-heading font-serif">{neighborhood.demographics.population}</div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {neighborhood.nearby && neighborhood.nearby.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl text-heading font-serif italic mb-4">
                  Nearby Areas
                </h3>
                <div className="flex flex-wrap gap-3">
                  {neighborhood.nearby.map((area, index) => (
                    <span key={index} className="bg-teal/10 text-teal px-4 py-2 text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-solid">
                Inquire About Properties
              </Link>
              <Link href="/neighborhoods" className="btn btn-outline">
                View All Neighborhoods
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
