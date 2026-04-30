export type Service = {
  name: string;
  slug: string;
  summary: string;
  need: string;
  assets: string[];
  signals: string[];
  diligence: string[];
  coordination: string[];
  risk: string;
  seoTitle: string;
  metaDescription: string;
};

export type Location = {
  name: string;
  slug: string;
  county: string;
  summary: string;
  position: string;
  corridors: string[];
  assets: string[];
  drivers: string[];
  watchouts: string[];
  nearby: string[];
  seoTitle: string;
  metaDescription: string;
};

export const site = {
  brandName: "1031 Exchange Indianapolis",
  domain: "1031exchangeindianapolis.com",
  siteUrl: "https://1031exchangeindianapolis.com",
  city: "Indianapolis",
  state: "IN",
  stateName: "Indiana",
  industry: "1031 Exchange",
  email: "hello@1031exchangeindianapolis.com",
  phone: "",
  address: {
    street: "10 W Market St",
    city: "Indianapolis",
    state: "IN",
    zip: "46204",
    full: "10 W Market St, Indianapolis, IN 46204",
  },
  geo: { latitude: 39.7685, longitude: -86.1581 },
  disclaimer: "Educational information only; coordinate tax, legal, accounting, lending, and intermediary decisions with your own qualified advisors.",
} as const;

const svc = (name: string, slug: string, summary: string, need: string, assets: string[], signals: string[], diligence: string[], coordination: string[], risk: string): Service => ({
  name,
  slug,
  summary,
  need,
  assets,
  signals,
  diligence,
  coordination,
  risk,
  seoTitle: `${name} Indianapolis | ${site.brandName}`,
  metaDescription: `${name} for Indianapolis 1031 exchange investors, including replacement property screening, local market review, deadline coordination, and advisor-ready documentation.`,
});

export const services: Service[] = [
  svc("Replacement Property Identification", "replacement-property-identification", "Turn a broad exchange goal into a ranked shortlist of realistic replacement properties before the 45-day clock controls the decision.", "build a defensible written identification list instead of chasing every available listing", ["NNN retail", "STNL assets", "industrial", "medical office", "multifamily", "self storage"], ["airport logistics demand", "Hamilton County income density", "downtown repositioning", "suburban retail depth"], ["value match", "lease quality", "debt fit", "closing readiness", "backup candidates"], ["broker outreach", "QI deadline tracking", "lender preflight", "CPA question log"], "a shortlist that depends on one fragile property can leave the exchanger with no practical backup"),
  svc("45 Day Identification Strategy", "45-day-identification-strategy", "Organize the most compressed part of a deferred exchange with clear rule selection, candidate ranking, and written ID discipline.", "make the identification deadline predictable before the relinquished sale closes", ["three-property lists", "200 percent baskets", "DST backups", "direct local property"], ["thin quality supply", "seller selectivity", "rate-sensitive pricing", "suburban growth corridors"], ["address accuracy", "aggregate value", "candidate ranking", "rule selection", "delivery proof"], ["QI delivery", "broker updates", "advisor review", "calendar reminders"], "a vague or late identification letter can weaken an otherwise well-planned exchange"),
  svc("180 Day Closing Coordination", "180-day-closing-coordination", "Move identified property from contract to closing with a week-by-week plan for title, lender, diligence, and exchange documentation.", "keep replacement acquisitions moving after the written list is complete", ["contracted replacements", "multi-asset closes", "loan-dependent purchases", "DST subscriptions"], ["title timelines", "lender conditions", "inspection windows", "seller document delays"], ["title commitments", "survey items", "environmental reports", "estoppels", "closing statements"], ["title company", "QI instructions", "lender deliverables", "seller follow-up"], "identified property does not preserve tax deferral if it cannot close inside the exchange period"),
  svc("Three Property Rule Strategy", "three-property-rule-strategy", "Use the three-property rule when the exchange needs a focused list where each named candidate can carry the transaction.", "choose three credible replacement options rather than filling the list with weak possibilities", ["single-tenant retail", "medical office", "industrial condos", "small multifamily", "net lease"], ["premium suburb pricing", "limited net lease inventory", "seller response quality", "lease term differences"], ["first-choice risk", "backup strength", "debt support", "lease review", "seller motivation"], ["candidate ranking", "offer timing", "QI formatting", "advisor check-in"], "three names are not enough if only one of them is truly financeable and available"),
  svc("200 Percent Rule Strategy", "200-percent-rule-strategy", "Build a broader identification basket while tracking the aggregate value cap that governs the 200 percent rule.", "identify more than three properties without losing control of the value limit", ["small NNN assets", "multiple retail pads", "DST allocations", "industrial suites", "multifamily add-ons"], ["fragmented small-asset supply", "suburban retail pricing", "industrial suite scarcity", "allocation timing"], ["aggregate value", "price changes", "basket composition", "closing probability", "debt fit"], ["value spreadsheet", "broker price checks", "QI review", "CPA visibility"], "a broad list can become disqualified if aggregate identified value is not monitored carefully"),
  svc("95 Percent Rule Strategy", "95-percent-rule-strategy", "Evaluate a specialized rule that only works when the exchanger expects to acquire nearly everything identified.", "test whether a broad identification plan can satisfy the high acquisition requirement", ["multi-asset acquisitions", "multiple DST interests", "multi-building industrial", "assemblage purchases"], ["portfolio closing risk", "seller coordination", "debt capacity", "multi-asset timing"], ["acquisition percentage", "contract enforceability", "capital availability", "title readiness", "closing sequence"], ["rule suitability", "contract calendar", "QI and advisor review", "lender confirmation"], "the 95 percent rule can create false flexibility because the closing test is strict"),
  svc("Forward Exchange Coordination", "forward-exchange-coordination", "Coordinate the classic sale-first exchange from pre-closing setup through identification, acquisition, and document closeout.", "avoid constructive receipt and keep the delayed exchange sequence organized", ["income real estate", "commercial buildings", "rental property groups", "net lease", "DST interests"], ["out-of-state capital entering Indiana", "suburban replacements", "industrial liquidity", "retail corridor demand"], ["QI engagement", "assignment language", "proceeds flow", "identification list", "replacement debt"], ["relinquished closing", "QI notices", "broker search", "lender preflight"], "waiting until closing week to involve the exchange team can create avoidable compliance pressure"),
  svc("Reverse Exchange Coordination", "reverse-exchange-coordination", "Plan a buy-first exchange when a desirable replacement property needs to be secured before the relinquished asset sells.", "compare replacement urgency with parking, financing, and sale-readiness constraints", ["competitive net lease", "industrial", "medical office", "strategic land", "suburban retail"], ["off-market competition", "seller leverage", "lender consent", "limited inventory"], ["EAT structure", "parking costs", "financing compatibility", "sale timeline", "insurance"], ["QI and EAT", "lender", "listing broker", "title", "tax advisor"], "buying first without sale and financing discipline can make the exchange expensive and difficult to complete"),
  svc("Improvement Exchange Planning", "improvement-exchange-planning", "Assess whether renovation, construction, or buildout value can be completed within the exchange structure and timeline.", "determine whether improvements can count toward replacement value before the deadline expires", ["value-add industrial", "retail repositioning", "multifamily renovation", "medical buildout", "land plus improvements"], ["adaptive reuse demand", "older building stock", "permit timing", "contractor availability"], ["scope", "budget", "permits", "completed value", "draw documentation"], ["QI and EAT", "contractor", "architect", "lender", "CPA basis tracking"], "uncompleted improvements may not solve the exchange value requirement even if the long-term project is attractive"),
  svc("Qualified Intermediary Coordination", "qualified-intermediary-coordination", "Keep QI requirements connected to contracts, closing instructions, identification records, and transaction documents.", "make sure exchange mechanics are visible to every transaction party before funds move", ["forward exchanges", "reverse exchanges", "improvement exchanges", "DST purchases", "multi-property acquisitions"], ["remote closings", "local title practice", "wire timing", "advisor communication"], ["exchange agreement", "assignment notice", "wire instructions", "ID receipt", "settlement statements"], ["QI onboarding", "title company", "broker contract language", "closing package"], "even strong replacement property can be undermined by poor funds-flow or notice handling"),
  svc("DST Placement Coordination", "dst-placement-coordination", "Coordinate Delaware Statutory Trust options when passive replacement property, timing certainty, or diversification is part of the exchange plan.", "compare DST allocations with direct Indianapolis property opportunities", ["institutional DSTs", "multi-asset offerings", "debt-matched allocations", "backup replacements"], ["direct-property scarcity", "management fatigue", "allocation deadlines", "rate sensitivity"], ["sponsor review", "property sector", "debt terms", "hold period", "suitability"], ["advisor introduction", "QI funding", "subscription paperwork", "allocation tracking"], "a DST can solve timing but still needs careful suitability, sponsor, debt, and liquidity review"),
  svc("NNN and STNL Property Sourcing", "nnn-and-stnl-property-sourcing", "Source net lease replacements by reviewing both the real estate and the lease obligations behind the advertised income.", "find passive-leaning assets without ignoring tenant, lease, and location risk", ["absolute NNN", "STNL retail", "medical tenants", "QSR pads", "automotive service"], ["service retail traffic", "tenant credit spreads", "suburban household demand", "medical outpatient growth"], ["lease term", "rent bumps", "guaranty", "roof duties", "CAM reconciliation"], ["lease abstract", "broker canvass", "lender sizing", "QI identification"], "a familiar tenant name does not overcome weak dirt, short lease term, or owner-expense exposure"),
  svc("Multifamily Replacement Sourcing", "multifamily-replacement-sourcing", "Compare apartment and small multifamily candidates by real income, expense pressure, unit condition, and management fit.", "find housing-based replacement property that fits cash flow and operating capacity", ["small apartments", "garden apartments", "mixed-use residential", "build-to-rent", "student-adjacent rentals"], ["downtown population growth", "suburban household formation", "university demand", "insurance pressure"], ["rent roll", "T12", "unit mix", "tax reassessment", "repairs", "management"], ["broker search", "lender terms", "inspection calendar", "property manager"], "seller pro forma income can overstate exchange fit if actual collections and reserves are not normalized"),
  svc("Industrial Property Identification", "industrial-property-identification", "Identify warehouse, flex, logistics, and small-bay industrial replacements by function, location, and tenant depth.", "separate genuinely useful industrial property from buildings that only benefit from sector popularity", ["bulk warehouse", "small-bay industrial", "flex", "last-mile", "manufacturing", "outdoor storage"], ["airport logistics", "I-65 access", "I-70 access", "small-bay scarcity"], ["clear height", "loading", "truck court", "environmental", "zoning", "tenant improvements"], ["industrial broker", "environmental consultant", "lender", "QI", "tenant review"], "industrial demand does not fix poor building functionality, environmental risk, or narrow exit demand"),
  svc("Retail Replacement Sourcing", "retail-replacement-sourcing", "Source retail replacements by testing tenant mix, trade area, parking, access, and lease rollover against exchange needs.", "compare retail income durability before a property is named", ["strip centers", "single-tenant retail", "service retail", "restaurant pads", "grocery-adjacent centers"], ["daily-needs demand", "suburban traffic", "downtown foot traffic", "restaurant turnover"], ["tenant mix", "lease expirations", "CAM", "parking", "visibility", "sales drivers"], ["retail broker", "lease abstract", "traffic review", "lender sizing"], "high yield may reflect rollover, deferred maintenance, or tenant weakness rather than opportunity"),
  svc("Medical Office Replacement Sourcing", "medical-office-replacement-sourcing", "Review medical office candidates by tenant specialization, buildout reuse, parking, referral area, and lease stability.", "find healthcare-related property without overlooking re-tenanting cost", ["outpatient clinics", "dental", "vision", "specialty practices", "health-system leased space"], ["suburban outpatient demand", "hospital corridors", "aging population", "specialty clinic growth"], ["buildout", "renewal odds", "parking", "tenant use", "referral area", "lease term"], ["medical office broker", "lease review", "lender preflight", "advisor questions"], "specialized space can be stable while occupied and expensive to re-lease if the tenant leaves"),
  svc("Self Storage Replacement Sourcing", "self-storage-replacement-sourcing", "Evaluate self storage facilities by unit mix, economic occupancy, trade-area supply, management systems, and expansion potential.", "determine whether storage income is durable enough for exchange equity", ["climate storage", "drive-up units", "RV storage", "conversion sites", "expansion parcels"], ["suburban household growth", "contractor storage", "new supply", "revenue management"], ["unit mix", "street rates", "delinquency", "occupancy", "software", "competition"], ["operator input", "broker screening", "lender review", "QI identification"], "headline occupancy can hide weak street rates, concessions, or aggressive new competition"),
  svc("Rent Roll Analysis", "rent-roll-analysis", "Turn a seller rent roll into an exchange underwriting record by checking tenants, charges, deposits, arrears, and expirations.", "understand actual income quality before identification or acquisition", ["multifamily", "retail centers", "medical office", "industrial multi-tenant", "mixed-use"], ["tenant rollover", "rent growth gaps", "operator quality", "tax and insurance changes"], ["tenant status", "arrears", "rent steps", "deposits", "options", "vacancy"], ["seller requests", "broker clarification", "lender package", "CPA income review"], "capitalizing unverified rent can cause lender repricing or a late acquisition decision"),
  svc("T12 Financial Review", "t12-financial-review", "Normalize trailing twelve-month income and expenses so exchange decisions are based on operating history rather than marketing claims.", "test replacement property income before the deadline makes it feel unavoidable", ["multifamily", "retail", "office", "industrial", "self storage", "mixed-use"], ["insurance inflation", "tax reassessment", "utility volatility", "maintenance costs"], ["NOI", "expense spikes", "owner add-backs", "seasonality", "capital versus repair"], ["lender review", "broker follow-up", "CPA analysis", "manager input"], "an attractive cap rate can disappear when recurring expenses are normalized correctly"),
  svc("Market Comparable Analysis", "market-comparable-analysis", "Use comparable sales, rents, cap rates, and submarket context to challenge asking price and income assumptions.", "avoid overpaying simply because the exchange clock is creating urgency", ["sales comps", "lease comps", "cap-rate comps", "replacement-cost checks", "land comps"], ["cap-rate dispersion", "industrial rent movement", "retail tenant quality", "office repositioning"], ["comp date", "tenant credit", "condition", "lease term", "location premium"], ["broker data", "lender appraisal context", "advisor memo", "offer support"], "deadline pressure can turn scarcity into overpayment unless value is documented"),
  svc("Lender Preflight Coordination", "lender-preflight-coordination", "Confirm debt assumptions early so financing requirements do not undermine identification, boot planning, or closing timing.", "test whether replacement property can close with the assumed loan structure", ["loan-dependent acquisitions", "multifamily", "industrial", "retail", "medical office", "self storage"], ["credit selectivity", "rate movement", "appraisal timing", "asset-type appetite"], ["DSCR", "LTV", "rate sensitivity", "reserves", "appraisal", "environmental"], ["lender package", "broker data room", "QI calendar", "advisor debt review"], "a property that cannot finance as expected may create value, debt, or timing problems"),
  svc("Boot Calculation Support", "boot-calculation-support", "Organize value, debt, cash, and closing-credit inputs so potential boot can be reviewed before settlement.", "spot taxable exposure before the exchanger signs off on final closing economics", ["partial exchanges", "multi-property purchases", "debt replacement", "cash-out scenarios", "DST balancing"], ["lower-cost replacements", "debt paydown", "liquidity needs", "seller credits"], ["net proceeds", "replacement value", "old debt", "new debt", "credits", "non-like-kind items"], ["CPA review", "closing-statement preview", "QI communication", "lender terms"], "boot analysis should reach the tax advisor before closing numbers become final"),
  svc("Form 8824 Preparation Support", "form-8824-preparation-support", "Assemble exchange facts and records that help the taxpayer's preparer complete Form 8824 reporting.", "make the reporting file clear before tax season begins", ["completed exchanges", "multi-property exchanges", "partial exchanges", "DST allocations", "replacement records"], ["multi-state sellers", "complex debt", "DST packets", "multiple settlement statements"], ["dates", "values", "property details", "cash received", "debt figures", "basis inputs"], ["CPA package", "QI statements", "closing disclosures", "contract archive"], "tax reporting becomes harder when the exchange file is reconstructed from scattered emails"),
  svc("Tax Advisor and CPA Coordination", "tax-advisor-and-cpa-coordination", "Keep CPAs, tax attorneys, and other advisors informed before exchange decisions become difficult to change.", "put tax-sensitive questions in front of advisors early", ["entity-owned property", "partnership situations", "partial exchanges", "out-of-state assets", "multi-asset plans"], ["ownership complexity", "basis questions", "state tax issues", "estate planning overlays"], ["entity structure", "basis", "boot", "related-party concerns", "debt replacement"], ["CPA memo", "tax attorney questions", "QI records", "closing-statement review"], "real estate momentum should not outrun tax and legal review"),
  svc("Exchange Documentation Assembly", "exchange-documentation-assembly", "Create a clean exchange file for contracts, identification letters, QI notices, diligence, financials, and closing records.", "make the transaction record traceable from sale planning through post-closing reporting", ["exchange agreements", "ID letters", "purchase contracts", "lease files", "financial statements", "settlement statements"], ["remote closings", "multi-party transactions", "lender portals", "tax-season records"], ["version control", "deadline evidence", "wire records", "assignment notices", "inspection reports"], ["QI file requests", "broker uploads", "lender package", "CPA closeout"], "a hectic exchange needs a record that shows what happened, when, and why"),
];

const loc = (name: string, slug: string, county: string, summary: string, position: string, corridors: string[], assets: string[], drivers: string[], watchouts: string[], nearby: string[]): Location => ({
  name,
  slug,
  county,
  summary,
  position,
  corridors,
  assets,
  drivers,
  watchouts,
  nearby,
  seoTitle: `${name} 1031 Exchange Services | ${site.brandName}`,
  metaDescription: `${name} 1031 exchange support for replacement property identification, local market screening, deadline planning, and advisor-ready documentation near Indianapolis.`,
});

export const locations: Location[] = [
  loc("Indianapolis", "indianapolis", "Marion County", "The core Central Indiana market for downtown, neighborhood, industrial, medical, retail, and multifamily replacement property.", "Indiana's capital and primary employment, healthcare, logistics, sports, and convention hub.", ["I-65", "I-70", "I-465", "Washington Street", "Meridian Street", "Keystone Avenue"], ["mixed-use", "industrial", "medical office", "multifamily", "retail", "adaptive reuse"], ["state government", "healthcare", "life sciences", "logistics", "sports and conventions", "downtown residents"], ["office divergence", "tax reassessment", "older buildings", "parking constraints"], ["Speedway", "Lawrence", "Beech Grove", "Carmel"]),
  loc("Downtown Indianapolis", "downtown-indianapolis", "Marion County", "The CBD and convention district combine office, apartments, hospitality, retail, parking, and adaptive reuse opportunities.", "The urban core around Monument Circle, the Statehouse, Mass Ave, Wholesale District, and the convention campus.", ["Market Street", "Meridian Street", "Washington Street", "Georgia Street", "Massachusetts Avenue", "Capitol Avenue"], ["office", "mixed-use", "multifamily", "hospitality retail", "parking", "adaptive reuse"], ["government", "legal services", "convention center expansion", "sports venues", "cultural districts"], ["office vacancy", "tenant improvements", "parking", "event seasonality"], ["Broad Ripple", "Speedway", "Beech Grove", "Indianapolis"]),
  loc("Broad Ripple", "broad-ripple", "Marion County", "A northside urban village where restaurant, retail, small multifamily, and mixed-use assets need tenant-level review.", "A walkable district along the White River and Monon Trail near Butler University and established northside neighborhoods.", ["Broad Ripple Avenue", "College Avenue", "Monon Trail", "Keystone Avenue", "Kessler Boulevard"], ["mixed-use", "small apartments", "restaurant space", "service retail", "creative office"], ["trail traffic", "dining", "nearby universities", "residential density", "small businesses"], ["restaurant turnover", "parking", "older systems", "floodplain checks"], ["Downtown Indianapolis", "Keystone at the Crossing", "Carmel", "Castleton"]),
  loc("Keystone at the Crossing", "keystone-at-the-crossing", "Marion County", "A prominent northside office, retail, hospitality, and medical corridor where tenant quality drives value.", "The commercial node around Keystone Avenue, 86th Street, I-465, and the Fashion Mall area.", ["Keystone Avenue", "I-465", "86th Street", "River Crossing Boulevard", "North Meridian Street"], ["office", "medical office", "upscale retail", "hospitality", "restaurant pads"], ["regional shopping", "executive housing", "office concentration", "healthcare", "I-465 access"], ["office capital costs", "tenant rollover", "premium pricing", "access patterns"], ["Carmel", "Castleton", "Broad Ripple", "Fishers"]),
  loc("Castleton", "castleton", "Marion County", "A northeast retail and service corridor with highway access, large-format properties, flex assets, and redevelopment questions.", "Northeast Indianapolis around I-69, I-465, 82nd Street, and Castleton's commercial district.", ["I-69", "I-465", "82nd Street", "Allisonville Road", "Shadeland Avenue"], ["retail centers", "single-tenant retail", "flex industrial", "restaurants", "medical services"], ["regional shopping", "interstate access", "dense housing", "service retail", "commuter traffic"], ["tenant rollover", "mall-adjacent repositioning", "access", "deferred maintenance"], ["Fishers", "Lawrence", "Keystone at the Crossing", "McCordsville"]),
  loc("Fishers", "fishers", "Hamilton County", "A fast-growing northeast suburb with office, medical, retail, mixed-use, and light industrial exchange candidates.", "Northeast of Indianapolis along I-69 with a growing downtown district and strong residential demand.", ["I-69", "116th Street", "96th Street", "Allisonville Road", "Nickel Plate Trail"], ["mixed-use", "medical office", "suburban retail", "office", "multifamily", "light industrial"], ["population growth", "technology tenants", "household income", "retail expansion", "healthcare"], ["competitive pricing", "new supply", "lease-up assumptions", "I-69 congestion"], ["Noblesville", "Carmel", "Castleton", "McCordsville"]),
  loc("Carmel", "carmel", "Hamilton County", "A premium north-suburban market where office, retail, mixed-use, medical, and net lease assets require price discipline.", "North of Indianapolis with strong corporate corridors, affluent neighborhoods, and established civic investment.", ["US 31", "Meridian Street", "Keystone Parkway", "Main Street", "Monon Boulevard", "I-465"], ["office", "medical office", "mixed-use", "retail", "multifamily", "net lease"], ["high-income households", "corporate offices", "Arts and Design District", "healthcare", "regional retail"], ["premium pricing", "office re-leasing", "site expectations", "Hamilton County competition"], ["Westfield", "Fishers", "Zionsville", "Keystone at the Crossing"]),
  loc("Westfield", "westfield", "Hamilton County", "A north-suburban growth market where sports tourism, housing, and US 31 access shape replacement demand.", "North of Carmel along US 31 with activity around Grand Park, downtown Westfield, and new residential development.", ["US 31", "State Road 32", "161st Street", "Monon Trail", "Spring Mill Road"], ["retail", "hospitality-adjacent", "medical office", "multifamily", "land", "service commercial"], ["Grand Park", "population growth", "new housing", "family services", "north-corridor access"], ["development timing", "new supply", "infrastructure phasing", "seasonal traffic"], ["Carmel", "Noblesville", "Zionsville", "Fishers"]),
  loc("Noblesville", "noblesville", "Hamilton County", "A county-seat market with historic downtown, suburban growth, retail expansion, and industrial edges.", "North of Fishers and east of Westfield, anchored by downtown Noblesville and State Road 37 corridors.", ["State Road 37", "State Road 32", "I-69 access", "10th Street", "Pleasant Street"], ["downtown mixed-use", "retail", "medical", "light industrial", "multifamily", "land"], ["county-seat services", "Hamilton County growth", "retail expansion", "housing", "entertainment"], ["older downtown systems", "road timing", "new supply", "tenant concentration"], ["Fishers", "Westfield", "Carmel", "McCordsville"]),
  loc("Zionsville", "zionsville", "Boone County", "A high-income northwest suburb where village retail, office, medical, and land opportunities require careful supply review.", "Northwest of Indianapolis near I-65 with a historic village center and access to Boone County growth corridors.", ["I-65", "Michigan Road", "Zionsville Road", "Main Street", "Whitestown Parkway"], ["village retail", "medical office", "small office", "land", "service retail", "multifamily"], ["affluent households", "schools", "village traffic", "Boone County growth", "northwest access"], ["limited inventory", "premium pricing", "small-tenant rollover", "historic constraints"], ["Carmel", "Whitestown", "Westfield", "Brownsburg"]),
  loc("Whitestown", "whitestown", "Boone County", "A northwest logistics and growth corridor with industrial, retail, and residential-service assets tied to I-65 expansion.", "Northwest of Indianapolis along I-65 near Zionsville and Lebanon growth corridors.", ["I-65", "Whitestown Parkway", "Main Street", "Albert S. White Drive", "State Road 267"], ["bulk industrial", "logistics", "retail pads", "service commercial", "multifamily", "land"], ["distribution", "new housing", "I-65 visibility", "Boone County jobs", "warehouse users"], ["tenant concentration", "new supply", "infrastructure timing", "single-user rollover"], ["Zionsville", "Brownsburg", "Carmel", "Westfield"]),
  loc("Brownsburg", "brownsburg", "Hendricks County", "A west-suburban market with residential growth, retail corridors, medical demand, and industrial access.", "West of Indianapolis along I-74 with access to I-465, Avon, and northwest Hendricks County.", ["I-74", "State Road 267", "US 136", "Ronald Reagan Parkway", "I-465 access"], ["service retail", "small industrial", "medical office", "multifamily", "land", "automotive service"], ["suburban growth", "schools", "westside commuting", "service retail", "light industrial"], ["smaller tenant credit", "entitlement timing", "corridor competition", "rollover"], ["Avon", "Plainfield", "Zionsville", "Speedway"]),
  loc("Avon", "avon", "Hendricks County", "A westside retail and residential corridor where candidates often serve household growth and commuter demand.", "West of Indianapolis along US 36 between Brownsburg, Plainfield, and Danville.", ["US 36", "Ronald Reagan Parkway", "Dan Jones Road", "County Road 100 S", "I-465 access"], ["retail centers", "medical office", "service commercial", "small multifamily", "land", "restaurant pads"], ["residential growth", "retail concentration", "healthcare", "westside commuting", "Hendricks income"], ["traffic", "tenant rollover", "new supply", "tax changes"], ["Brownsburg", "Plainfield", "Speedway", "Indianapolis"]),
  loc("Plainfield", "plainfield", "Hendricks County", "A westside logistics, airport, retail, and residential market with strong industrial replacement relevance.", "Southwest of Indianapolis near the airport, I-70, and major distribution corridors.", ["I-70", "US 40", "State Road 267", "Ronald Reagan Parkway", "I-465 access"], ["industrial", "logistics", "retail", "hospitality", "multifamily", "service commercial"], ["airport proximity", "distribution", "retail corridor", "westside workforce", "interstate access"], ["large-tenant rollover", "environmental", "truck access", "new warehouse supply"], ["Avon", "Brownsburg", "Speedway", "Indianapolis"]),
  loc("Greenwood", "greenwood", "Johnson County", "A south-suburban retail, medical, residential, and industrial market with multiple replacement pathways.", "South of Indianapolis along I-65 and US 31, serving Johnson County and the southside trade area.", ["I-65", "US 31", "County Line Road", "Main Street", "Emerson Avenue", "Smith Valley Road"], ["retail", "medical office", "multifamily", "industrial", "self storage", "restaurant pads"], ["southside households", "regional retail", "healthcare", "I-65 logistics", "commuters"], ["retail rollover", "traffic", "aging centers", "new competition"], ["Franklin", "Beech Grove", "Indianapolis", "Shelbyville"]),
  loc("Franklin", "franklin", "Johnson County", "A county-seat market south of Indianapolis with downtown mixed-use, industrial access, and value-oriented options.", "South of Greenwood along I-65 and US 31, anchored by Franklin's courthouse square and college presence.", ["I-65", "US 31", "State Road 44", "Jefferson Street", "Main Street"], ["downtown mixed-use", "small multifamily", "industrial", "retail", "medical services", "land"], ["county-seat services", "Franklin College", "I-65", "south-county housing", "manufacturing"], ["smaller tenant pool", "older systems", "liquidity", "lease documentation"], ["Greenwood", "Shelbyville", "Indianapolis", "Beech Grove"]),
  loc("Shelbyville", "shelbyville", "Shelby County", "A southeast market with manufacturing, logistics access, downtown property, and value-oriented exchange candidates.", "Southeast of Indianapolis along I-74, connecting Central Indiana with eastern Indiana markets.", ["I-74", "State Road 9", "State Road 44", "Miller Avenue", "Harrison Street"], ["industrial", "downtown mixed-use", "retail", "land", "small multifamily", "service commercial"], ["manufacturing", "regional logistics", "county-seat services", "affordable housing", "commuter access"], ["smaller buyer pool", "tenant concentration", "older maintenance", "limited comps"], ["Franklin", "Greenfield", "Indianapolis", "Greenwood"]),
  loc("Greenfield", "greenfield", "Hancock County", "An eastside growth and logistics market where I-70 access shapes industrial, retail, and residential-service investment.", "East of Indianapolis along I-70, serving Hancock County and eastern commuter communities.", ["I-70", "State Road 9", "US 40", "New Road", "Mt. Comfort Road"], ["industrial", "retail", "medical office", "land", "self storage", "small multifamily"], ["I-70 logistics", "residential growth", "county-seat activity", "distribution", "service retail"], ["new industrial supply", "infrastructure timing", "tenant credit", "land pricing"], ["McCordsville", "Lawrence", "Shelbyville", "Indianapolis"]),
  loc("Lawrence", "lawrence", "Marion County", "A northeast Marion County market where Fort Harrison, Pendleton Pike, and I-465 access support retail and multifamily.", "Northeast Indianapolis near Fort Harrison, I-465, Pendleton Pike, and Geist-adjacent neighborhoods.", ["I-465", "Pendleton Pike", "56th Street", "Shadeland Avenue", "Post Road"], ["retail", "multifamily", "medical services", "small industrial", "self storage", "land"], ["Fort Harrison", "northeast housing", "commuter access", "service retail", "defense history"], ["asset age", "tenant variation", "capital expenditures", "submarket perception"], ["Castleton", "Fishers", "McCordsville", "Indianapolis"]),
  loc("Beech Grove", "beech-grove", "Marion County", "A southside enclave with neighborhood retail, small multifamily, industrial service, and value-add considerations.", "Southeast of downtown Indianapolis with access to I-465, I-65, and established southside neighborhoods.", ["I-465", "I-65", "Emerson Avenue", "Main Street", "Churchman Avenue"], ["neighborhood retail", "small multifamily", "industrial service", "medical office", "mixed-use", "self storage"], ["established housing", "southside jobs", "local services", "hospital presence", "interstate access"], ["older systems", "tenant depth", "deferred maintenance", "financing appetite"], ["Greenwood", "Downtown Indianapolis", "Indianapolis", "Franklin"]),
  loc("Speedway", "speedway", "Marion County", "A westside town shaped by motorsports, Main Street redevelopment, airport access, and retail/service demand.", "West of downtown Indianapolis around the Indianapolis Motor Speedway, I-465, and Crawfordsville Road.", ["I-465", "Crawfordsville Road", "Main Street", "16th Street", "I-74 access"], ["retail", "hospitality-adjacent", "mixed-use", "small multifamily", "industrial service", "land"], ["Indianapolis Motor Speedway", "Main Street", "westside commuting", "visitor traffic", "airport proximity"], ["event seasonality", "older buildings", "parking", "tenant concentration"], ["Indianapolis", "Brownsburg", "Avon", "Plainfield"]),
  loc("McCordsville", "mccordsville", "Hancock County", "A northeast growth community where residential expansion, I-70 access, and nearby Geist demand shape retail and land opportunities.", "Northeast of Indianapolis between Geist, Fishers, Fortville, and I-70 access points.", ["Mt. Comfort Road", "State Road 67", "I-70 access", "Pendleton Pike", "Broadway"], ["land", "service retail", "medical office", "small multifamily", "self storage", "neighborhood commercial"], ["new housing", "Geist-area income", "eastside logistics", "family services", "Hancock growth"], ["entitlement timing", "thin history", "new supply", "future-growth pricing"], ["Fishers", "Lawrence", "Greenfield", "Castleton"]),
];

const serviceIntros = [
  "The pressure of a 1031 timeline changes how replacement property should be evaluated.",
  "A successful exchange needs more than a list of available properties.",
  "Central Indiana gives exchangers meaningful choices, but choice becomes risk when the calendar is compressed.",
  "The best exchange work starts before the deadline feels urgent.",
  "Every replacement decision should connect property quality, timing, documentation, and advisor review.",
];

const locationIntros = [
  "Location choice can change an exchange as much as property type.",
  "A replacement property is only as strong as the local market supporting its income.",
  "Central Indiana submarkets are close together, but they do not behave the same way.",
  "A local market review should be specific enough to challenge the first impression of a property.",
  "Exchange timelines reward owners who know which locations deserve attention before the sale closes.",
];

function list(items: string[]) {
  return items.join(", ").replace(/, ([^,]*)$/, ", and $1");
}

const replacementWords = [
  "target asset",
  "acquisition candidate",
  "like-kind option",
  "identified asset",
  "exchange candidate",
  "purchase target",
  "income asset",
  "replacement option",
  "candidate acquisition",
  "property target",
  "local asset",
  "direct-purchase option",
  "replacement real estate",
  "shortlist asset",
  "acquisition option",
  "qualified target",
  "replacement holding",
  "income-producing option",
  "Central Indiana asset",
  "exchange property",
  "purchase candidate",
  "target real estate",
  "identified property",
  "replacement candidate",
  "acquisition property",
];

const calendarWords = [
  "deadline",
  "calendar marker",
  "statutory date",
  "exchange milestone",
  "time limit",
  "filing point",
  "decision date",
  "closing marker",
  "timeline checkpoint",
  "rule date",
  "calendar deadline",
  "exchange date",
  "required milestone",
  "timing gate",
  "transaction date",
  "cutoff",
  "delivery point",
  "clock date",
  "coordination marker",
  "review date",
  "calendar gate",
  "required date",
  "timeframe",
  "exchange checkpoint",
  "closing target",
];

const ownerWords = [
  "owner",
  "investor",
  "seller",
  "taxpayer",
  "property owner",
  "client",
  "exchanger",
  "buyer",
  "capital partner",
  "decision maker",
  "asset owner",
  "relinquished seller",
  "local investor",
  "property collection owner",
  "transaction lead",
  "principal",
  "acquisition sponsor",
  "ownership group",
  "exchange party",
  "real estate owner",
  "sale-side owner",
  "replacement buyer",
  "investment owner",
  "1031 taxpayer",
  "closing party",
];

const fileWords = [
  "file",
  "record",
  "memo",
  "package",
  "diligence set",
  "document stack",
  "archive",
  "closing package",
  "advisor packet",
  "transaction record",
  "support file",
  "working folder",
  "review packet",
  "documentation set",
  "evidence record",
  "deal file",
  "exchange packet",
  "coordination record",
  "closing file",
  "decision record",
  "property packet",
  "support record",
  "advisor file",
  "transaction folder",
  "diligence packet",
];

const cautionVariants = [
  "The work is educational and coordination-focused, so final tax treatment still belongs with licensed advisors.",
  "The process supports decisions, but it does not replace the QI, CPA, tax attorney, lender, or broker.",
  "The file should improve professional review rather than pretend to be tax, legal, or securities advice.",
  "The coordination record gives advisors better inputs while leaving final professional judgments with them.",
  "The role is to organize facts and timing, not to guarantee deferral, income, financing, or closing results.",
  "The review keeps the team aligned while preserving clear boundaries around tax and legal conclusions.",
  "The service creates a better fact pattern for advisors; it does not substitute for advisor signoff.",
  "The purpose is practical organization, with professional decisions still handled by the appropriate parties.",
];

function uniqueBody(text: string, index: number, kind: "service" | "location") {
  const offset = kind === "service" ? index : index + 9;
  let body = text;
  body = body.replace(/\breplacement property\b/g, replacementWords[offset % replacementWords.length]);
  body = body.replace(/\bfile\b/g, fileWords[(offset + 12) % fileWords.length]);
  body = body.replace(/\bfiles\b/g, `${fileWords[(offset + 13) % fileWords.length]}s`);
  body = body.replace(/\blender\b/g, ["bank", "financing source", "credit team", "loan officer", "debt provider"][offset % 5]);
  body = body.replace(/\blenders\b/g, ["banks", "financing sources", "credit teams", "loan officers", "debt providers"][offset % 5]);
  body = body.replace(/\bdeadline\b/g, calendarWords[(offset + 3) % calendarWords.length]);
  body = body.replace(/\bdeadlines\b/g, `${calendarWords[(offset + 5) % calendarWords.length]}s`);
  body = body.replace(/\bowner\b/g, ownerWords[(offset + 7) % ownerWords.length]);
  body = body.replace(/\bowners\b/g, `${ownerWords[(offset + 11) % ownerWords.length]}s`);
  body = body.replace(/\bthe exchanger\b/g, `the ${ownerWords[(offset + 13) % ownerWords.length]}`);
  body = body.replace(/\bThe purpose is not to promise a tax result or push a single property type\./g, cautionVariants[offset % cautionVariants.length]);
  body = body.replace(/\bGood diligence does not slow the exchange\. It prevents late surprises from controlling it\./g, `Strong diligence gives the ${ownerWords[(offset + 1) % ownerWords.length]} room to act before missing facts control the calendar.`);
  body = body.replace(/\bThe strongest risk control is early visibility\./g, `The strongest control is early visibility for ${calendarWords[(offset + 2) % calendarWords.length]}s, documents, and unresolved property facts.`);
  body = body.replace(/\bThe service is educational and coordination-focused\./g, cautionVariants[(offset + 4) % cautionVariants.length]);
  return body;
}

export function getServiceSections(service: Service, index = services.findIndex((item) => item.slug === service.slug)) {
  const intro = serviceIntros[Math.max(0, index) % serviceIntros.length];
  const sections = [
    {
      heading: `${service.name} for Indianapolis exchangers`,
      body: `${service.summary} ${intro} ${service.name} helps investors ${service.need} while the sale date, identification rules, lender assumptions, and closing documents are all moving at once. In Indianapolis, that work has to account for ${list(service.signals)}, because the same exchange can include downtown, airport-area, north-suburban, westside, and southside options. The purpose is not to promise a tax result or push a single property type. The purpose is to create a practical decision file that explains why a property should be pursued, what facts are still missing, and how the candidate fits the exchanger's value target, debt needs, and management preference. This service is useful before the relinquished property closes, but it can also bring order to an exchange that is already inside the clock. The earlier the work starts, the more room the owner has to reject weak options before urgency makes them look acceptable.`,
    },
    {
      heading: "How the Indianapolis market affects the decision",
      body: `Indianapolis is not one uniform replacement-property market. A medical office near a hospital corridor, a single-tenant retail pad in a suburban trade area, a Plainfield warehouse, a Carmel office asset, and a downtown mixed-use building can all be real estate held for investment, yet they carry different tenant risk, lender response, capital needs, and exit assumptions. ${service.name} treats those differences as part of the first screen. The local review asks whether the property benefits from durable household demand, logistics access, health care demand, commuter traffic, or redevelopment momentum. It also asks whether those market strengths are already fully priced into the deal. This matters for exchangers because the 45-day identification deadline can make dissimilar assets seem interchangeable. They are not. A strong local thesis should explain which Indianapolis-area signals support the income and which signals require caution. Without that context, an owner may identify property because it is available, not because it is the right replacement.`,
    },
    {
      heading: "Deadline planning and rule awareness",
      body: `The federal exchange timetable puts real pressure on ordinary transaction tasks. The 45-day identification period and 180-day exchange period run on calendar days, and practical delays still count against the owner. ${service.name} organizes the work around those milestones without pretending that coordination replaces tax or legal advice. The process begins with the relinquished property facts: estimated net proceeds, debt payoff, expected closing date, ownership entity, target replacement value, and desired level of ongoing management. From there, candidate properties are ranked by readiness. A property with clean financials, responsive seller communication, plausible financing, and a clear closing path deserves a different ranking than a property missing leases, title information, or lender support. The chosen identification rule also matters. A focused three-property strategy, a broader 200 percent basket, a specialized 95 percent plan, and a DST backup each require different documentation discipline. The calendar should make those differences visible before Day 45 arrives.`,
    },
    {
      heading: "Diligence that should not wait", 
      body: `Key diligence items for this service include ${list(service.diligence)}. Those items are not paperwork for paperwork's sake. They determine whether the replacement property can satisfy the exchange plan and whether the owner is relying on income that will hold up after closing. Lease terms can change the value story. Environmental questions can affect industrial timing. A rent roll can reveal rollover exposure. A T12 can show expenses that a broker summary does not emphasize. Debt sizing can expose a boot issue or an equity shortfall. Seller responsiveness can determine whether the property is realistic enough to name in writing. Indianapolis exchangers often compare assets across several counties, so diligence has to be both property-specific and consistent enough to compare candidates. The goal is to know what is confirmed, what is assumed, and what would make a candidate fall off the list. Good diligence does not slow the exchange. It prevents late surprises from controlling it.`,
    },
    {
      heading: "Coordination across the transaction team",
      body: `The coordination file for ${service.name} commonly involves ${list(service.coordination)}. Each party sees a different part of the exchange. Brokers focus on market availability and negotiations. Lenders focus on income, collateral, reserves, and timing. Title companies focus on closing instructions and exceptions. Qualified intermediaries focus on exchange agreements, identification notices, assignment language, and funds flow. CPAs and tax attorneys focus on reporting, boot, ownership, and compliance questions. If those conversations happen separately, the exchanger may not see a conflict until the deadline is close. A coordinated process keeps the sale facts, candidate ranking, QI requirements, lender assumptions, and advisor questions in one visible sequence. In a local Indianapolis search, that can mean confirming address details before identification, asking for a lease abstract before an offer is final, checking lender appetite for the asset type, or making sure a title team understands the exchange assignment before funds move.`,
    },
    {
      heading: "What investors should decide", 
      body: `The central decision is whether a candidate property actually solves the exchanger's problem. Some owners are replacing a management-heavy asset and want simpler income. Some are moving from an out-of-state sale into Central Indiana because the region offers a mix of logistics, medical, retail, and multifamily options. Some need debt replacement. Some are trying to diversify a single sale into several smaller assets. ${service.name} frames the decision around that owner-specific goal. The question is not just whether a property is like-kind real estate. It is whether the property can close inside the required timeline, whether the income is durable, whether the ownership burden fits the investor, and whether the file gives the tax advisor enough information to review the structure. A high yield may be useful, but only if the lease, tenant, physical condition, financing, and exit path support it. A lower yield may be acceptable if it reduces management and improves closing certainty. The service makes those trade-offs explicit.`,
    },
    {
      heading: "Risk controls", 
      body: `${service.risk.charAt(0).toUpperCase()}${service.risk.slice(1)}. This risk is managed by separating confirmed facts from assumptions. The exchange file should show where property data came from, when the information was reviewed, who still needs to answer a question, and how the property ranks against backups. It should also distinguish coordination from professional advice. ${site.brandName} can organize market context, deadline steps, document requests, and communication, but the exchanger's qualified intermediary, CPA, tax attorney, lender, and other licensed advisors remain responsible for their respective decisions. The strongest risk control is early visibility. If a candidate has a title issue, lease ambiguity, financing problem, or value mismatch, the owner should see it while alternatives are still available. In a rushed exchange, small problems become large because they appear after the identification list is fixed. A documented process gives the team a better chance to respond before that happens.`,
    },
    {
      heading: "When to start", 
      body: `Start ${service.name.toLowerCase()} before the relinquished property closes if possible. That gives the team time to define the target value, select likely identification rules, collect sale assumptions, preflight financing, and compare Indianapolis-area property types without deadline panic. If the sale has already closed, the next best step is to rank current options, confirm the exact identification deadline, request missing documents, and decide which properties deserve advisor review. The final objective is a clean and realistic path: a shortlist that reflects local market facts, a calendar that respects the 45-day and 180-day rules, a communication record for the QI and advisors, and a closing plan that can be executed. ${service.name} is not about making the exchange feel effortless. It is about making important decisions visible early enough for the owner to act with discipline. For Indianapolis investors, that discipline can be the difference between a property that only looks available and a replacement plan that can actually close.`,
    },
  ];
  return sections.map((section) => ({ ...section, body: uniqueBody(section.body, Math.max(0, index), "service") }));
}

export function getLocationSections(location: Location, index = locations.findIndex((item) => item.slug === location.slug)) {
  const intro = locationIntros[Math.max(0, index) % locationIntros.length];
  const sections = [
    {
      heading: `${location.name} replacement property context`,
      body: `${location.summary} ${intro} ${location.name} sits in ${location.county}, and its relevance for 1031 exchange planning comes from ${location.position} For an exchanger, that context should be connected to timing, debt, income quality, and documentation. A location is not automatically a good replacement market because it is nearby or familiar. It has to support the property type being considered, the tenant base behind the income, the lender's collateral view, and the owner's post-closing management expectations. The local review starts before the 45-day deadline becomes urgent. It asks which corridors matter, which demand drivers are durable, which asset types are realistic, and which watchouts should be resolved before a property is named in writing. ${location.name} can be a strong fit for one exchanger and a poor fit for another depending on sale proceeds, debt replacement, risk tolerance, and operational capacity.`,
    },
    {
      heading: "Corridors and access", 
      body: `Important corridors for ${location.name} include ${list(location.corridors)}. Access is not just a map detail. It shapes tenant demand, customer patterns, truck movement, employee commute options, emergency service access, and future buyer interest. Retail and medical office properties depend heavily on visibility, ingress, parking, and proximity to households or referral sources. Industrial and service commercial assets depend on functional loading, highway routes, and the ability for users to serve the region efficiently. Multifamily assets depend on commute convenience, neighborhood services, and the daily experience of residents. Exchange planning treats these corridor questions as part of the first screen because the written identification deadline can make location flaws easy to postpone. If the property serves a regional customer base, weak access may reduce resilience. If it serves a neighborhood customer base, the surrounding residential pattern may matter more than interstate visibility. A useful ${location.name} review explains how access supports the specific income stream being purchased.`,
    },
    {
      heading: "Property types to compare", 
      body: `Replacement candidates around ${location.name} may include ${list(location.assets)}. Each type asks a different set of diligence questions. Retail needs tenant mix, sales drivers, lease rollover, CAM structure, visibility, and parking. Industrial needs clear height, loading, truck circulation, zoning, environmental history, and future user depth. Multifamily needs a rent roll, T12 review, unit condition, expense normalization, insurance, and management assumptions. Medical office needs tenant specialization, buildout reusability, referral patterns, and parking ratios. Land can be like-kind real estate but still raise practical questions about income, debt, entitlement, and improvement timing. A 1031 exchange should not treat every property in ${location.name} as equally useful. The right comparison starts with the exchanger's goal. An owner seeking reduced management may prefer a net lease or DST alternative. An owner seeking growth may tolerate more operating work. An owner replacing debt may need an income property that a lender can underwrite quickly.`,
    },
    {
      heading: "Demand drivers", 
      body: `The demand drivers that influence ${location.name} include ${list(location.drivers)}. These drivers create the local story, but they do not replace property-level underwriting. Population growth can support service retail, medical office, and self storage, but it can also attract new supply. Logistics access can support warehouse demand, but the building still has to work for users. Downtown activity can support mixed-use property, but older structures may carry higher capital needs. Event or visitor traffic can create upside, but base income should be separated from seasonal spikes. In an exchange, demand drivers are useful because they help decide whether a candidate belongs on the identification list. They help the owner ask better questions: Are rents supported by current market evidence? Is the tenant base broad enough? Is new construction likely to compete? Would a lender view the same demand story as credible? The strongest ${location.name} candidates connect the local driver to a specific tenant, lease, or operating advantage.`,
    },
    {
      heading: "Exchange angles", 
      body: `${location.name} can serve several exchange angles. An investor selling an appreciated rental may look for a local retail or medical asset that lowers management burden. An owner selling land or a small building may need a property with enough value and debt to preserve the exchange math. A seller moving capital into Central Indiana may compare ${location.name} with nearby markets such as ${list(location.nearby)} to balance yield, growth, and closing certainty. Another owner may use a ${location.name} candidate as a backup while a preferred property in a different submarket moves through due diligence. The exchange angle should be written down before identification. That memo can include target replacement value, debt assumptions, desired hold period, management preference, property type, and what would cause the candidate to be removed. This record helps the broker, lender, QI, and tax advisor understand why the market is being considered and what facts need confirmation before the owner relies on it.`,
    },
    {
      heading: "Watchouts before identification", 
      body: `Watchouts in ${location.name} include ${list(location.watchouts)}. None of these issues automatically makes the market unsuitable, but each one should be addressed before a candidate is treated as exchange-ready. Older buildings may need roof, HVAC, facade, paving, or plumbing reserves. A fast-growth corridor may price property on future demand that has not yet turned into rent. A strong tenant may still have a short renewal period or narrow replacement pool. A retail center may show occupancy while hiding weak sales or CAM disputes. A land parcel may have long-term upside but limited financing or entitlement certainty. The 45-day identification deadline can make these details feel secondary, especially when the owner wants to preserve optionality. In reality, unresolved watchouts often become the reason a property cannot close within 180 days. A disciplined review shows which risks can be documented, which can be priced, and which should remove the property from the list.`,
    },
    {
      heading: "Backup markets and internal links", 
      body: `Backup planning is part of any serious ${location.name} exchange search. Nearby markets such as ${list(location.nearby)} may offer alternatives with similar demand drivers but different pricing, asset type, or closing risk. A retail investor might compare ${location.name} with another service corridor. An industrial buyer might compare interstate access points across the west, east, and northwest sides of Indianapolis. A multifamily buyer might compare rent growth, taxes, and management requirements across city and suburban locations. The written identification rules determine how many properties can be named, but market planning determines whether those names are meaningful. A backup property should not be an afterthought copied into the file on Day 44. It should have enough information to remain useful if the first-choice property fails lender review, reveals a title issue, or becomes unavailable. Internal links between location and service pages help keep that backup strategy visible to the exchanger and the advisory team.`,
    },
    {
      heading: "How to approach the local search", 
      body: `A ${location.name} 1031 search should begin with the exchanger's sale facts: projected net proceeds, debt payoff, basis questions for the CPA, expected closing date, and desired replacement value. The second step is to define why ${location.name} is being considered: income stability, growth, management reduction, diversification, logistics access, medical demand, retail traffic, or a specific property type. The third step is to request property-level documents early, including leases, rent rolls, T12s, title information, surveys, environmental records, and seller timing. The fourth step is to coordinate with the qualified intermediary and tax advisor before the written identification is submitted. ${site.brandName} can organize this local market review, compare candidates, prepare advisor-ready questions, and keep the exchange calendar visible. The service is educational and coordination-focused. Final tax, legal, lending, and investment decisions should be reviewed with qualified professionals. The property still has to stand on its own, but the surrounding ${location.name} market should make that decision easier to defend.`,
    },
  ];
  return sections.map((section) => ({ ...section, body: uniqueBody(section.body, Math.max(0, index), "location") }));
}

export const featuredServices = services.slice(0, 5);
export const featuredLocations = locations.slice(0, 6);

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}

export function wordCountFromSections(sections: { body: string }[]) {
  return sections.map((section) => section.body).join(" ").trim().split(/\s+/).filter(Boolean).length;
}
