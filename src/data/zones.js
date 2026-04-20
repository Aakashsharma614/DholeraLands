const zoneImageIds = [
  "1448630360428-65456885c650",
  "1477959858617-67f85cf4f1df",
  "1500530855697-b586d89ba3ee",
  "1511818966892-d7d671e672a2",
  "1513828583688-c52646db42da",
  "1497366754035-f200968a6e72",
  "1489515217757-5fd1be406fef",
  "1494526585095-c41746248156",
  "1460317442991-0ec209397118",
  "1509395176047-4a66953fd231",
  "1500534623283-312aade485b7",
  "1518005020951-eccb494ad742",
  "1506744038136-46273834b3fb",
  "1494526585095-c41746248156",
];

const zones = [
  {
    slug: "agriculture-zone",
    title: "Agriculture Zone",
    tagline: "Preserve productive farmland while managing urban development pressure.",
    summary:
      "This zone is intended to protect farmland that remains suitable for agricultural use and to limit incompatible urban expansion around actively cultivated land.",
    intent: [
      "Protect active farmland from pressure caused by surrounding urban growth.",
      "Preserve continued farming activity across designated agricultural land.",
    ],
    sections: [
      {
        title: "Permitted Uses",
        items: ["Ancillary farm sheds", "Farmhouse structures up to the permitted built area", "Support spaces for farm owners and agricultural labourers"],
      },
    ],
  },
  {
    slug: "city-center-zone",
    title: "City Center Zone",
    tagline: "Concentrate commercial, civic, institutional, and higher-density mixed urban activity.",
    summary:
      "The city center is designed as a high-intensity mixed-use core with office, retail, institutional, health, and civic uses arranged around a more pedestrian-friendly public realm.",
    intent: [
      "Promote a concentration of commercial, office, retail, institutional, health, civic, and medium to high-density residential uses.",
      "Create a more vibrant urban environment with stronger public-realm and streetscape quality.",
      "Support walkability, cycling, and public transport movement.",
    ],
    sections: [
      {
        title: "Commercial Uses",
        items: ["Integrated office developments", "Banking and financial institutions", "Retail stores and department stores", "Restaurants, cinemas, malls, and structured parking"],
      },
      {
        title: "Public Buildings",
        items: ["Administrative complexes", "Police headquarters and city courts", "Post office and telephone exchange", "Research, training, and passenger transport hubs"],
      },
      {
        title: "Community And Health Facilities",
        items: ["Libraries, museums, theatres, and sports complexes", "Places of worship and regional parks", "Polyclinics, hospitals, and diagnostic centres"],
      },
    ],
  },
  {
    slug: "green-space-zone",
    title: "Green Space Zone",
    tagline: "Protect environmentally sensitive land and maintain natural open buffers.",
    summary:
      "The green space zone acts as an ecological protection band around natural streams, river systems, and other sensitive landscape conditions where permanent development is intentionally restricted.",
    intent: [
      "Provide a protective buffer along natural streams and rivers.",
      "Preserve environmentally sensitive ecological areas.",
      "Restrict built development and construction activity within the zone.",
    ],
    sections: [
      {
        title: "Permitted Uses",
        items: ["Open parks without permanent structures", "Nature trails", "Botanical gardens"],
      },
    ],
  },
  {
    slug: "high-access-corridor-zone",
    title: "High Access Corridor Zone",
    tagline: "Create residential and community development along high-access movement corridors.",
    summary:
      "This zone supports residential growth supported by community, education, service, and health uses so development along major access corridors can still function as a balanced neighborhood system.",
    intent: [
      "Promote residential development across multiple building typologies on undeveloped land.",
      "Provide recreational, religious, and educational facilities as part of a balanced community.",
      "Protect residential communities from incompatible nuisance-causing uses.",
    ],
    sections: [
      {
        title: "Community Facilities",
        items: ["Banquet and community halls", "Libraries, gardens, and playgrounds", "Club houses, places of worship, and swimming or health clubs", "Crèche and day-care centres"],
      },
      {
        title: "Education",
        items: ["Kindergarten and anganwadi", "Primary and secondary schools", "Special schools", "Coaching centres and higher education campuses"],
      },
      {
        title: "Service, Commercial, And Health Uses",
        items: ["Neighbourhood retail and commercial centres", "Service shops, workshops, and fuel stations", "Restaurants, banks, hotels, and multiplex uses", "Dispensaries, nursing homes, hospitals, diagnostics, and veterinary clinics"],
      },
    ],
  },
  {
    slug: "industrial-zone",
    title: "Industrial Zone",
    tagline: "Support manufacturing, engineering, logistics support, and industrial convenience uses.",
    summary:
      "The industrial zone is structured to create a suitable environment for core employment sectors while still controlling nuisance and edge conditions around adjoining non-industrial land uses.",
    intent: [
      "Create a conducive industrial environment for automobile, electronics, engineering, metallurgical, agro-processing, and pharma sectors.",
      "Provide convenience and retail uses that support industrial establishments.",
      "Reduce nuisance impacts on adjacent non-industrial uses.",
    ],
    sections: [
      {
        title: "Permitted Uses",
        items: ["Light and service industry or workshop uses", "Fuel and service stations", "Truck terminals with amenities", "Warehousing, storage, fire stations, canteens, and industrial convenience centres", "Retail and banking that support the industrial district"],
      },
      {
        title: "Regulatory Notes",
        items: ["Orange and green-category industries are generally permissible.", "Red-category industries require special approval.", "Landscape buffer planting is required along edges adjoining non-industrial uses."],
      },
    ],
  },
  {
    slug: "knowledge-and-it-zone",
    title: "Knowledge And IT Zone",
    tagline: "Build business parks, education campuses, and supporting mixed-use research environments.",
    summary:
      "This zone is intended for business parks, educational campuses, research institutions, and the residential and commercial support uses required to make those campuses function effectively.",
    intent: [
      "Create a conducive environment for business parks, IT campuses, and education campuses.",
      "Allow supporting campus residences such as hostels, guest houses, and staff housing.",
      "Permit limited commercial, civic, and service uses that support the primary campus functions.",
    ],
    sections: [
      {
        title: "Core Non-Residential Uses",
        items: ["Office complexes", "Business and IT park campuses", "Educational uses", "Supporting commercial uses"],
      },
      {
        title: "Education And Research Uses",
        items: ["Integrated educational campuses", "Junior, senior, and professional colleges", "Medical colleges with attached hospitals", "Research centres, technical institutes, and vocational training centres", "Integrated K-12 schools with or without hostel support"],
      },
      {
        title: "Supporting Amenities",
        items: ["Hotels, neighbourhood retail, and restaurants", "Gardens, clubs, places of worship, and day-care", "Polyclinics and diagnostic facilities"],
      },
    ],
  },
  {
    slug: "logistic-zone",
    title: "Logistic Zone",
    tagline: "Create an integrated logistics and warehousing backbone for industrial movement.",
    summary:
      "The logistics zone is suited for freight movement, warehousing, truck support, container operations, and centralized supply-chain functions that serve the wider industrial region.",
    intent: [
      "Establish a centralized logistics hub serving industrial areas within Dholera.",
      "Support storage, freight handling, and multimodal goods movement.",
      "Allow infrastructure that improves supply-chain efficiency and transport access.",
    ],
    sections: [
      {
        title: "Logistics Infrastructure",
        items: ["Large-format warehousing", "Logistics parks and freight handling yards", "Container and storage yards", "Truck terminals and service stations", "Rail-linked and road-linked transport support facilities"],
      },
      {
        title: "Supporting Uses",
        items: ["Cold-chain and storage support", "Fuel and maintenance facilities", "Driver amenities, food courts, and operational support spaces", "Administrative and inventory management offices"],
      },
    ],
  },
  {
    slug: "public-facilities-zone",
    title: "Public Facilities Zone",
    tagline: "Reserve land for city-scale civic, health, education, sports, and open-space functions.",
    summary:
      "This zone keeps Dholera self-contained by reserving strategically important land for major public-serving institutions and catalyst civic projects.",
    intent: [
      "Make the wider region self-contained in health, education, culture, government, sports, and open-space facilities.",
      "Reserve key land parcels for major city-level facilities and catalyst projects.",
    ],
    sections: [
      {
        title: "Facility Focus",
        items: ["Health and hospital infrastructure", "Education and training institutions", "Cultural and government uses", "Sports and open-space amenities", "Large public-serving civic facilities"],
      },
    ],
  },
  {
    slug: "residential-zone",
    title: "Residential Zone",
    tagline: "Promote a balanced community with housing and compatible support uses.",
    summary:
      "The residential zone is primarily intended for different housing formats while also permitting community facilities and smaller compatible non-residential uses that support everyday neighborhood life.",
    intent: [
      "Promote residential development across a range of building types on undeveloped land.",
      "Provide recreational, religious, and educational facilities as part of a balanced community.",
      "Protect residential communities from incompatible uses.",
    ],
    sections: [
      {
        title: "Primary Residential Uses",
        items: ["Site-and-services formats", "Housing schemes for economically weaker sections", "Multi-storey apartments", "Row houses and terraced housing", "Villas, bungalows, and old-age homes"],
      },
      {
        title: "Complementary Uses",
        items: ["Banquet and community halls", "Libraries and playgrounds", "Recreational clubs and places of worship", "Night shelters and neighbourhood retail"],
      },
    ],
  },
  {
    slug: "solar-park-zone",
    title: "Solar Park Zone",
    tagline: "Reserve land for utility-scale renewable energy generation and support systems.",
    summary:
      "The solar park zone is meant for large-format solar infrastructure and the limited operational facilities required to generate and maintain renewable power at scale.",
    intent: [
      "Provide land for large-scale solar power generation.",
      "Protect the solar park from incompatible urban development pressure.",
    ],
    sections: [
      {
        title: "Permitted Uses",
        items: ["Solar generation fields", "Administrative blocks", "Maintenance equipment storage", "Operational structures shown on approved site plans", "Transmission and plant support infrastructure"],
      },
    ],
  },
  {
    slug: "strategic-infrastructure-zone",
    title: "Strategic Infrastructure Zone",
    tagline: "Reserve land for essential utility and city-serving infrastructure systems.",
    summary:
      "This zone is intended for critical infrastructure facilities that support city operations, including water, sewage, solid waste, and power-related utility systems.",
    intent: [
      "Provide land for strategic infrastructure such as water treatment, sewage treatment, power stations, and solid waste management facilities.",
    ],
    sections: [
      {
        title: "Permitted Uses",
        items: ["Administrative blocks", "Maintenance and equipment storage", "Operational structures needed to run the utility facility", "Site-plan-based support infrastructure"],
      },
    ],
  },
  {
    slug: "recreation-sports-and-entertainment-zone",
    title: "Recreation, Sports And Entertainment Zone",
    tagline: "Support land-intensive tourism, sports, and leisure destinations.",
    summary:
      "The recreation, sports, and entertainment zone is intended for larger-format leisure destinations and public recreation uses that benefit from generous land allocation.",
    intent: [
      "Provide space for specialized large-scale tourism, sports, and entertainment activities.",
    ],
    sections: [
      {
        title: "Permitted Uses",
        items: ["Theme parks", "Outdoor adventure sports", "Film city development", "Sports complexes and stadiums", "Parks, botanical gardens, zoos, and nature parks"],
      },
    ],
  },
  {
    slug: "tourism-and-resorts-zone",
    title: "Tourism & Resorts Zone",
    tagline: "Allow visitor-oriented resort and hospitality development in designated areas.",
    summary:
      "The tourism and resorts zone is intended for visitor accommodation and resort uses, subject to the specific environmental and regulatory conditions that apply to the designated area.",
    intent: [
      "Permit beach resorts and hotel development within the designated area, subject to the required environmental approvals.",
    ],
    sections: [
      {
        title: "Typical Hospitality Focus",
        items: ["Visitor accommodation", "Resort-format hospitality", "Short-stay tourism support amenities"],
      },
    ],
  },
  {
    slug: "village-buffer-zone",
    title: "Village Buffer Zone",
    tagline: "Protect village edges while allowing compatible residential and local-support uses.",
    summary:
      "The village buffer zone is intended to preserve the immediate setting of village settlements while allowing controlled residential growth and everyday-support facilities around those edges.",
    intent: [
      "Demarcate a boundary for town-planning implementation around village settlements.",
      "Protect continued agriculture-based activity around villages.",
      "Ease long-term integration between village settlements and surrounding urban land uses.",
      "Prevent over-development around sensitive village fabric.",
      "Allow residential premises with supporting community facilities.",
    ],
    sections: [
      {
        title: "Residential Uses",
        items: ["Townhouses and row houses", "Independent detached houses and villas"],
      },
      {
        title: "Supporting Non-Residential Uses",
        items: ["Neighbourhood retail and restaurants", "Hawker zones and vegetable markets", "Schools and multi-purpose grounds", "Repair shops and public utility buildings", "Nursing homes, dispensaries, veterinary clinics, and health clubs", "Places of worship, community halls, gardens, and fuel pumps"],
      },
    ],
  },
].map((zone, index) => ({
  ...zone,
  image: `https://images.unsplash.com/photo-${zoneImageIds[index]}?auto=format&fit=crop&w=1200&q=80`,
}));

export const zoneDirectory = zones;

export function getZoneBySlug(slug) {
  return zoneDirectory.find((zone) => zone.slug === slug);
}
