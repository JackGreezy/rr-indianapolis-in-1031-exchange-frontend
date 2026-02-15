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

const propertyData: Record<string, { 
  name: string; 
  description: string; 
  benefits: string[]; 
  image: string;
  longDescription: string;
  marketInsights: string[];
  investmentConsiderations: string[];
  typicalReturns: string;
}> = {
  "nnn": {
    name: "NNN Properties",
    description: "Triple Net Lease properties are among the most popular choices for 1031 exchanges. The tenant is responsible for property taxes, insurance, and maintenance, providing predictable income with minimal landlord responsibilities.",
    benefits: ["Passive income stream", "Long-term tenant stability", "Minimal management required", "Predictable cash flow"],
    image: "/property-types/nnn/nnn-in.jpg",
    longDescription: "Triple Net Lease (NNN) properties represent one of the most sought-after investment types for 1031 exchanges in Indianapolis. In an NNN lease structure, tenants assume responsibility for property taxes, insurance, and maintenance expenses in addition to base rent. This arrangement creates a truly passive income stream for investors while transferring operational responsibilities to creditworthy tenants. Indianapolis's growing retail and commercial sectors offer excellent opportunities for NNN investments with national credit tenants.",
    marketInsights: [
      "Indianapolis NNN market features strong national tenant presence",
      "Typical lease terms range from 10-25 years providing stability",
      "Cap rates in Indianapolis average 5-7% depending on tenant credit",
      "Growing suburbs like Carmel and Fishers attract quality NNN tenants",
      "Healthcare and quick-service restaurant NNN properties particularly strong"
    ],
    investmentConsiderations: [
      "Tenant credit quality directly impacts property value",
      "Long-term leases provide stability but limit rent growth",
      "Location quality remains important for re-leasing",
      "Corporate guarantees provide additional security",
      "Lease renewal and reversion rights require careful review"
    ],
    typicalReturns: "5-7% cap rate with long-term appreciation potential"
  },
  "retail": {
    name: "Retail Properties",
    description: "Retail properties range from single-tenant storefronts to large shopping centers. These investments can offer strong returns in high-traffic locations with quality tenants.",
    benefits: ["High visibility locations", "Long-term lease agreements", "Percentage rent opportunities", "Diverse tenant mix options"],
    image: "/property-types/retail/retail-in.jpg",
    longDescription: "Indianapolis retail properties present diverse 1031 exchange opportunities ranging from neighborhood shopping centers to single-tenant retail buildings. The Indianapolis retail market benefits from strong demographics, growing population, and strategic location for distribution. Retail investments offer opportunities for both stable income through established tenants and value-add potential through repositioning. Key retail corridors in Carmel, Fishers, and suburban Indianapolis continue to attract quality national and regional retailers.",
    marketInsights: [
      "Indianapolis retail market shows resilience with strong grocery and service tenants",
      "Neighborhood and community centers outperform larger formats",
      "E-commerce resistant retailers (grocery, services, dining) perform best",
      "Suburban markets like Hamilton County see consistent retail demand",
      "Mixed-use retail developments gaining popularity in urban areas"
    ],
    investmentConsiderations: [
      "Tenant mix and credit quality critical to value",
      "Understand e-commerce impact on specific retail categories",
      "Location and visibility drive tenant demand",
      "Anchor tenant health impacts center performance",
      "Common area maintenance and operating expense recovery important"
    ],
    typicalReturns: "6-9% cap rate depending on location and tenant quality"
  },
  "office": {
    name: "Office Buildings",
    description: "Office properties provide stable income through multi-year leases with business tenants. Class A and B buildings in prime locations offer excellent 1031 exchange opportunities.",
    benefits: ["Multi-year lease terms", "Professional tenant base", "Value-add opportunities", "Strong appreciation potential"],
    image: "/property-types/office/office-in.jpg",
    longDescription: "Indianapolis office properties offer 1031 exchange investors access to a diverse and evolving market. Downtown Indianapolis features Class A office towers serving Fortune 500 companies and professional services firms. Suburban office markets in Carmel, Fishers, and the northwest corridor provide Class B and flex space opportunities. The Indianapolis office market is adapting to post-pandemic workplace trends, creating opportunities for value-add investors who understand modern workplace requirements.",
    marketInsights: [
      "Downtown Indianapolis maintains strong Class A office demand",
      "Suburban office markets show preference for modern, amenitized spaces",
      "Medical office continues as strong office sub-sector",
      "Flex office and coworking concepts gaining market share",
      "Flight to quality evident as tenants prioritize building amenities"
    ],
    investmentConsiderations: [
      "Understand tenant work-from-home policies and space needs",
      "Building systems and amenities critical to competitive positioning",
      "Parking ratios and accessibility important to tenants",
      "Lease expiration schedule and rollover risk",
      "Capital expenditure requirements for tenant improvements"
    ],
    typicalReturns: "6-8% cap rate with value-add potential in repositioning"
  },
  "industrial": {
    name: "Industrial Properties",
    description: "Industrial real estate, including warehouses and distribution centers, has seen tremendous growth. E-commerce demand continues to drive strong fundamentals in this sector.",
    benefits: ["E-commerce growth driver", "Lower maintenance costs", "Long-term tenants", "Strong market fundamentals"],
    image: "/property-types/industrial/industrial-in.webp",
    longDescription: "Indianapolis industrial properties represent one of the strongest 1031 exchange investment opportunities in the current market. Indianapolis's strategic location at the crossroads of America, excellent interstate access, and proximity to major population centers make it a premier distribution and logistics market. The explosive growth of e-commerce has driven unprecedented demand for warehouse and distribution facilities. Indianapolis industrial market features diverse options from small flex warehouses to large distribution centers serving national logistics operations.",
    marketInsights: [
      "Indianapolis ranks among top 10 U.S. logistics markets",
      "Extremely low vacancy rates create landlord-favorable conditions",
      "Strong rent growth driven by e-commerce and logistics demand",
      "New construction concentrated in northwest and southwest corridors",
      "Amazon, FedEx, and other major logistics users have significant presence"
    ],
    investmentConsiderations: [
      "Clear height and modern features command premium rents",
      "Proximity to major interstates and Indianapolis airport critical",
      "Parking and truck court capacity important for operations",
      "Understand tenant business model and supply chain role",
      "Environmental assessments particularly important for industrial"
    ],
    typicalReturns: "5-7% cap rate with strong rent growth potential"
  },
  "multifamily": {
    name: "Multifamily Properties",
    description: "Apartment buildings and multifamily complexes offer diversified income streams and strong appreciation potential. This sector remains resilient across economic cycles.",
    benefits: ["Diversified income streams", "Strong rental demand", "Value-add opportunities", "Recession-resilient"],
    image: "/property-types/multifamily/multifamily-in.jpg",
    longDescription: "Indianapolis multifamily properties provide 1031 exchange investors with stable, diversified income and strong appreciation potential. The Indianapolis apartment market benefits from population growth, strong employment, and affordable living costs compared to coastal markets. Multifamily investments range from small apartment buildings to large complexes, offering opportunities at various investment levels. The market shows particular strength in Class A suburban properties and value-add Class B/C repositioning opportunities.",
    marketInsights: [
      "Indianapolis multifamily market shows consistent rent growth",
      "Suburban markets in Hamilton County command premium rents",
      "Young professional and empty-nester demographics drive urban demand",
      "Value-add opportunities exist in aging Class B/C properties",
      "New luxury developments concentrated in Carmel, Fishers, and downtown"
    ],
    investmentConsiderations: [
      "Property condition and deferred maintenance impact value-add potential",
      "Local market rent comparables and absorption rates",
      "Amenity packages increasingly important to competitive positioning",
      "Property management quality critical to performance",
      "Understand local landlord-tenant laws and eviction processes"
    ],
    typicalReturns: "5-7% cap rate with value-add potential in Class B/C"
  },
  "medical": {
    name: "Medical Office Buildings",
    description: "Healthcare real estate offers stable, long-term tenants backed by the growing healthcare industry. Medical office buildings often feature higher-credit tenants and longer leases.",
    benefits: ["Healthcare industry growth", "High-credit tenants", "Extended lease terms", "Specialized tenant base"],
    image: "/property-types/medical/medical-in.jpg",
    longDescription: "Medical office buildings (MOB) represent premium 1031 exchange opportunities in Indianapolis. The city's strong healthcare sector, anchored by major health systems including IU Health, Ascension St. Vincent, and Community Health Network, creates sustained demand for medical office space. MOB properties typically feature longer lease terms, higher-credit tenants, and specialized build-outs that create tenant retention. On-campus and near-campus MOB properties command premium valuations due to patient referral patterns.",
    marketInsights: [
      "Indianapolis healthcare sector among largest regional employers",
      "On-campus MOB properties command premium rents and valuations",
      "Outpatient and ambulatory surgery centers experiencing strong growth",
      "Aging demographics support long-term healthcare real estate demand",
      "Health system affiliated properties offer credit enhancement"
    ],
    investmentConsiderations: [
      "Proximity to hospital campuses impacts property performance",
      "Understand tenant specialty and referral relationships",
      "Medical build-outs create both tenant retention and rollover costs",
      "HIPAA compliance and specialized systems requirements",
      "Health system changes and consolidation can impact tenant stability"
    ],
    typicalReturns: "6-8% cap rate with stability from healthcare tenants"
  },
  "hospitality": {
    name: "Hospitality Properties",
    description: "Hotels and hospitality properties can offer significant returns for investors seeking income and appreciation. Brand-affiliated properties often provide additional stability.",
    benefits: ["Revenue upside potential", "Brand recognition value", "Tourism market exposure", "Management flexibility"],
    image: "/property-types/hospitality/hospitality-in.jpg",
    longDescription: "Indianapolis hospitality properties offer unique 1031 exchange opportunities for sophisticated investors. As a major convention and sports destination, Indianapolis features diverse hotel products from limited-service properties to full-service convention hotels. The market benefits from Indianapolis Convention Center, Lucas Oil Stadium, and numerous sporting events and conventions. Hospitality investments can provide operational upside for experienced operators while brand-affiliated properties offer systems and quality standards.",
    marketInsights: [
      "Indianapolis hosts major conventions and sporting events driving demand",
      "Downtown market benefits from convention and corporate business",
      "Suburban markets serve interstate travelers and extended-stay guests",
      "Limited-service and extended-stay formats show strong performance",
      "Emerging experiential and boutique hotel concepts in urban areas"
    ],
    investmentConsiderations: [
      "Hospitality requires active management or quality operator",
      "Revenue highly correlated to economic conditions and events",
      "Brand affiliation provides systems but involves franchise fees",
      "Capital expenditure requirements for property improvement plans",
      "Understand market mix of convention, corporate, and leisure demand"
    ],
    typicalReturns: "7-10% cap rate with operational upside potential"
  },
  "student-housing": {
    name: "Student Housing",
    description: "Purpose-built student housing near universities offers unique investment opportunities with strong occupancy rates and predictable demand tied to enrollment cycles.",
    benefits: ["Consistent demand cycle", "Premium rental rates", "Parental guarantees", "University proximity value"],
    image: "/property-types/multifamily/multifamily-in.jpg",
    longDescription: "Indianapolis student housing investments provide 1031 exchange opportunities tied to major universities including IUPUI, Butler University, and other institutions. Purpose-built student housing features unit configurations and amenity packages designed for student lifestyles, typically commanding premium rents compared to conventional apartments. The sector benefits from consistent demand cycles tied to academic calendars and growing preference for off-campus living. Indianapolis student housing market offers opportunities at various scales from small properties near campuses to large managed communities.",
    marketInsights: [
      "IUPUI and Butler University anchor Indianapolis student housing demand",
      "Purpose-built student housing commands premium over conventional apartments",
      "Amenity-rich properties with individual leases perform best",
      "Pre-leasing cycles tied to academic calendar require understanding",
      "Parental guarantees provide income stability"
    ],
    investmentConsiderations: [
      "Understand university enrollment trends and housing policies",
      "Property location relative to campus critical to performance",
      "Individual lease-by-bedroom model impacts management",
      "Turnover and capital expenditures higher than conventional multifamily",
      "Summer vacancy periods require planning and potentially alternative uses"
    ],
    typicalReturns: "6-8% cap rate with premium rents offsetting higher operating costs"
  },
  "self-storage": {
    name: "Self-Storage Facilities",
    description: "Self-storage has proven to be one of the most resilient asset classes. Low operating costs and diverse revenue streams make these properties attractive for 1031 exchanges.",
    benefits: ["Recession-resistant", "Low operating costs", "Month-to-month flexibility", "Diverse customer base"],
    image: "/property-types/self-storage/self-storage-in.jpg",
    longDescription: "Indianapolis self-storage properties represent recession-resistant 1031 exchange investments with attractive operating characteristics. Self-storage facilities benefit from diverse customer bases including residential users during life transitions and commercial users for inventory and records storage. The asset class features low operating costs, minimal capital expenditures, and month-to-month rental structures providing revenue flexibility. Indianapolis's growing population and housing market create consistent demand for storage solutions.",
    marketInsights: [
      "Indianapolis self-storage market shows consistent demand growth",
      "Climate-controlled units command premium rates",
      "Suburban markets with growing populations see strong performance",
      "Modern facilities with online management systems competitive advantage",
      "Oversupply concerns in some submarkets require market analysis"
    ],
    investmentConsiderations: [
      "Supply and demand dynamics vary significantly by submarket",
      "Climate-controlled versus standard units impact revenue",
      "Modern revenue management systems important to optimization",
      "Marketing and online presence critical in competitive markets",
      "Zoning and entitlement for expansion creates value-add potential"
    ],
    typicalReturns: "7-9% cap rate with low operating expense ratios"
  },
  "senior-living": {
    name: "Senior Living Facilities",
    description: "With an aging population, senior living and assisted living facilities represent a growing sector with strong demographic tailwinds and increasing demand.",
    benefits: ["Demographic growth trends", "Specialized services premium", "Limited new supply", "Healthcare integration"],
    image: "/property-types/medical/medical-in.jpg",
    longDescription: "Indianapolis senior living properties offer 1031 exchange investors access to a growing sector driven by favorable demographics. The aging Baby Boomer generation creates sustained demand for independent living, assisted living, and memory care facilities. Indianapolis's affordable cost of living and strong healthcare infrastructure make it attractive for senior living development and operations. These investments typically feature premium pricing for specialized services and care, though they require experienced operators familiar with healthcare regulations.",
    marketInsights: [
      "Aging Baby Boomer population drives long-term demand growth",
      "Indianapolis's affordable costs attract retirees regionally",
      "Memory care and specialized care units command highest rates",
      "Quality operators critical to occupancy and financial performance",
      "Continuum of care campuses provide revenue stability"
    ],
    investmentConsiderations: [
      "Requires specialized operator with healthcare expertise",
      "Regulatory compliance and licensing requirements",
      "Staffing costs represent major operational expense",
      "Market absorption rates for new facilities",
      "Understanding acuity levels and care service models"
    ],
    typicalReturns: "6-8% cap rate with premium for quality operations"
  },
  "mixed-use": {
    name: "Mixed-Use Developments",
    description: "Mixed-use properties combine retail, office, and residential components. These developments offer diversified income streams and often benefit from urban revitalization.",
    benefits: ["Income diversification", "Urban location premiums", "Live-work-play appeal", "Multiple tenant types"],
    image: "/property-types/mixed-use/mixed-use-in.webp",
    longDescription: "Indianapolis mixed-use properties provide 1031 exchange investors with diversified income streams from multiple property types within single developments. Mixed-use developments combine residential, retail, office, and sometimes hospitality uses creating vibrant live-work-play environments. Indianapolis has embraced mixed-use development in areas like downtown, Mass Ave, Fountain Square, and suburban town centers in Carmel and Fishers. These properties benefit from synergies between uses and appeal to tenants seeking walkable, amenity-rich environments.",
    marketInsights: [
      "Downtown Indianapolis and Mass Ave feature successful mixed-use",
      "Suburban town centers in Carmel and Fishers embrace mixed-use concepts",
      "Residential components provide stable base income",
      "Retail and dining activate street level and drive foot traffic",
      "Parking and design integration critical to project success"
    ],
    investmentConsiderations: [
      "Multiple property types require diverse management expertise",
      "Component synergies important to overall project performance",
      "Complex financing and capital requirements",
      "Longer development and lease-up timelines",
      "Understanding each use category's market fundamentals"
    ],
    typicalReturns: "6-8% cap rate with value from component integration"
  },
  "land": {
    name: "Land",
    description: "Raw land and development sites offer unique 1031 exchange opportunities for investors with longer time horizons or specific development plans.",
    benefits: ["Development potential", "No depreciation recapture", "Flexibility of use", "Long-term appreciation"],
    image: "/property-types/land/land-in.avif",
    longDescription: "Indianapolis area land represents unique 1031 exchange opportunities for investors with development expertise or long-term appreciation strategies. Raw land and development sites in growing corridors offer potential for significant value creation through entitlement, infrastructure, and development. Indianapolis's expanding suburbs, particularly in Hamilton and Hendricks Counties, feature active land markets serving residential, commercial, and industrial development. Land exchanges require understanding of zoning, utilities, access, and development feasibility.",
    marketInsights: [
      "Hamilton County land markets remain active for residential development",
      "Industrial land near interstates commands premium pricing",
      "Carmel and Fishers feature scarce remaining development sites",
      "Agricultural land in outer counties offers long-term appreciation",
      "Entitlement and zoning significantly impact land values"
    ],
    investmentConsiderations: [
      "Land produces no income during holding period",
      "Zoning and entitlement risk impact development potential",
      "Utility availability and access critical to development",
      "Environmental assessments important for industrial land",
      "Market timing and holding period important to returns"
    ],
    typicalReturns: "Appreciation-focused with no current income"
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const property = propertyData[slug];
  
  if (!property) {
    return {
      title: "Property Types | Indianapolis 1031 Exchange",
      description: "Explore 1031 exchange opportunities across all property types in Indianapolis."
    };
  }

  return {
    title: `${property.name} 1031 Exchange | Indianapolis Investment Properties`,
    description: `${property.description} Explore ${property.name.toLowerCase()} 1031 exchange opportunities in Indianapolis, IN.`,
    keywords: [
      `${property.name} 1031 exchange`,
      `Indianapolis ${property.name.toLowerCase()}`,
      `${property.name} investment Indianapolis`,
      `1031 exchange ${property.name.toLowerCase()}`,
      `commercial ${property.name.toLowerCase()} Indianapolis`,
      `${property.name} tax deferred exchange`,
      `Indianapolis ${property.name.toLowerCase()} market`,
      `invest in ${property.name.toLowerCase()} Indianapolis`
    ],
    openGraph: {
      title: `${property.name} 1031 Exchange | Indianapolis`,
      description: property.description,
      type: "website",
      images: [property.image],
    },
    alternates: {
      canonical: `https://indy1031exchange.com/property-types/${slug}`
    }
  };
}

export default async function PropertyTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = propertyData[slug] || {
    name: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    description: "This property type qualifies for 1031 exchanges. Contact us to learn more about opportunities in this sector.",
    benefits: ["Tax-deferred exchange eligible", "Professional guidance available", "Market analysis provided", "Investment strategy support"],
    image: "/property-types/office/office-in.jpg",
    longDescription: "Explore 1031 exchange opportunities for this property type in Indianapolis.",
    marketInsights: ["Contact us for detailed market analysis"],
    investmentConsiderations: ["Professional guidance available"],
    typicalReturns: "Contact for market details"
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": property.name,
    "description": property.description,
    "category": "Commercial Real Estate",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "areaServed": {
        "@type": "City",
        "name": "Indianapolis",
        "state": "IN"
      }
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
        <Breadcrumb items={[{ label: "Property Types", href: "/property-types" }, { label: property.name }]} />
        {/* Hero */}
        <section className="relative min-h-[500px] flex items-center" style={{ backgroundImage: `url('${property.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative z-10 text-center">
            <SparkleIcon className="w-10 h-10 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-serif italic mb-6">
              {property.name}
            </h1>
            <p className="text-white/90 text-xl max-w-3xl mx-auto">
              1031 Exchange Investment Opportunities in Indianapolis
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 bg-paper">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl text-heading font-serif italic mb-8">
              Investing in {property.name}
            </h2>
            <p className="text-xl text-ink leading-relaxed mb-8">
              {property.description}
            </p>
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-ink leading-relaxed">
                {property.longDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl text-heading font-serif italic mb-6">
                  Investment Benefits
                </h3>
                <ul className="space-y-4">
                  {property.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-ink">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl text-heading font-serif italic mb-6">
                  Investment Considerations
                </h3>
                <ul className="space-y-4">
                  {property.investmentConsiderations?.map((consideration, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0" />
                      <span className="text-ink">{consideration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-cream p-8 mb-12">
              <h3 className="text-2xl text-heading font-serif italic mb-6">
                Indianapolis Market Insights
              </h3>
              <ul className="space-y-3">
                {property.marketInsights?.map((insight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <span className="text-ink">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {property.typicalReturns && (
              <div className="bg-teal/10 border-l-4 border-teal p-6 mb-12">
                <h4 className="text-lg text-heading font-semibold mb-2">
                  Typical Returns
                </h4>
                <p className="text-ink">
                  {property.typicalReturns}
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-solid">
                Inquire About {property.name}
              </Link>
              <Link href="/property-types" className="btn btn-outline">
                View All Property Types
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
