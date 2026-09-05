export interface Principle {
  position: number;
  title: string;
  description: string;
}

export interface Person {
  position: number;
  role: string;
  name: string;
  bio: string;
  education: string | null;
  initials: string;
}

export interface Company {
  slug: string;
  sector: string;
  company: string;
  angle: string;
  writeup: string[];
  website: string | null;
}

export const principles: Principle[] = [
  {
    position: 1,
    title: 'Business quality',
    description: 'Strong competitive position, sound economics and room to compound.',
  },
  {
    position: 2,
    title: 'Capital allocation',
    description: 'Disciplined reinvestment, prudent balance sheets and sensible use of cash.',
  },
  {
    position: 3,
    title: 'Management & governance',
    description: 'Integrity, transparency and consistent execution across cycles.',
  },
  {
    position: 4,
    title: 'Growth runway',
    description: 'Long runways for growth mean decades of compounding ahead.',
  },
];

export const people: Person[] = [
  {
    position: 1,
    role: 'Founder',
    name: 'Sanjay Jain',
    bio: 'Four decades of experience investing in Indian equities across multiple business and market cycles, with an emphasis on business quality, management integrity, financial discipline and patient ownership.',
    education: null,
    initials: 'SJ',
  },
  {
    position: 2,
    role: 'Chief Investment Officer',
    name: 'Manas Jain',
    bio: 'Leads investment research, portfolio construction and company engagement for the family office from Chennai. Prior to this, Manas worked as a Research Analyst in the Quantitative Strategies Group at Sage Advisory Services, a $25 billion investment management firm based in Austin, Texas.',
    education: "Master's in Financial Engineering — UCLA Anderson School of Management\nBachelor's in Industrial Engineering — College of Engineering, Guindy",
    initials: 'MJ',
  },
];

export const companies: Company[] = [
  {
    slug: 'hdfc-bank',
    sector: 'Financial Services',
    company: 'HDFC Bank',
    angle: 'India\u2019s largest private-sector bank \u2014 a compounding machine with consistent deposit growth and prudent lending.',
    writeup: [
      'HDFC Bank is India\u2019s largest private-sector bank by market capitalisation, serving over 80 million customers across retail, wholesale, and digital banking segments.',
      'The investment thesis rests on three pillars: a structurally growing deposit franchise that funds lending at below-peer cost, a risk culture that has kept gross non-performing assets below the industry average through multiple credit cycles, and a technology platform that now processes the majority of transactions digitally.',
      'Following the merger with HDFC Ltd., the combined entity has expanded its balance sheet meaningfully. The key question for long-term investors is whether the bank can sustain its return-on-assets and net-interest-margin profile while absorbing the merged book \u2014 a transition we are monitoring closely through quarterly results and management commentary.',
      'We view HDFC Bank as a core compounder: a business whose competitive advantages have widened over two decades and whose management team has consistently allocated capital with discipline.',
    ],
    website: 'https://www.hdfcbank.com',
  },
  {
    slug: 'asian-paints',
    sector: 'Consumer',
    company: 'Asian Paints',
    angle: 'Dominant coatings player with a distribution moat and a decades-long track record of compounding returns.',
    writeup: [
      'Asian Paints is India\u2019s largest paint company, holding over 50% of the organised decorative coatings market. The company operates one of the most extensive distribution networks in Indian retail, reaching over 70,000 dealers.',
      'The competitive moat is built on three layers: a supply chain that delivers tinted paint to dealers within hours rather than days, a data-driven demand-forecasting engine that minimises inventory and working-capital costs, and brand equity built over seventy years of consistent advertising and product quality.',
      'Raw-material cost volatility (notably titanium dioxide and crude derivatives) drives short-term margin swings, but the company has historically passed through price increases without losing volume share. The emergence of new competitors with different cost structures is a development we are watching, though the distribution and service moats remain difficult to replicate.',
      'Asian Paints represents the kind of business we seek: a dominant market position, disciplined capital allocation, and a long runway for per-capita coatings consumption to grow in India.',
    ],
    website: 'https://www.asianpaints.com',
  },
  {
    slug: 'titan-company',
    sector: 'Consumer',
    company: 'Titan Company',
    angle: 'Jewellery and watches retailer riding India\u2019s formalisation and rising discretionary spending.',
    writeup: [
      'Titan Company is India\u2019s largest jewellery retailer (Tanishq) and the market leader in organised watches. The company also operates in eyewear (Titan Eye+) and fragrances, building a broader lifestyle portfolio.',
      'The core investment case is the formalisation of Indian jewellery \u2014 a shift from unorganised family jewellers to trusted branded chains as consumers prioritise hallmarked, certified products. Tanishq\u2019s store network has grown steadily, and the brand commands premium pricing and customer trust.',
      'Gold-price volatility and regulatory changes (customs duties, hallmarking mandates) create near-term noise, but the long-term trend toward branded jewellery is structural. Titan\u2019s management has demonstrated consistent execution in store expansion, same-store-sales growth, and margin improvement.',
      'We see Titan as a play on rising Indian discretionary spending, led by a management team with a long-term orientation and a track record of entering new categories successfully.',
    ],
    website: 'https://www.titancompany.in',
  },
];

export function getCompanyBySlug(slug: string): Company | undefined {
  return companies.find((c) => c.slug === slug);
}
