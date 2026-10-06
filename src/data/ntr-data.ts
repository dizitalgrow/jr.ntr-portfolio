export interface Milestone {
  id: string;
  year: string;
  era: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  tag: string;
  image: string;
}

export interface Movie {
  id: string;
  title: string;
  year: number;
  role: string;
  director: string;
  category: "Action" | "Drama" | "Historical" | "Blockbusters";
  rating: string;
  boxOffice: string;
  tagline: string;
  synopsis: string;
  wikipediaNotes: string[];
  poster: string;
  backdrop: string;
}

export interface Award {
  id: string;
  category: "Academy & International" | "Filmfare Awards" | "Nandi & State" | "SIIMA & Honors";
  awardName: string;
  filmOrYear: string;
  title: string;
  description: string;
  badge: string;
}

export interface GlobalImpactNode {
  id: string;
  country: string;
  city: string;
  coordinates: { x: number; y: number };
  metric: string;
  headline: string;
  story: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Portraits" | "Film Stills" | "Events" | "Editorial";
  year: string;
  aspect: "tall" | "wide" | "square";
  image: string;
  caption: string;
}

export interface FanTribute {
  id: string;
  name: string;
  location: string;
  message: string;
  timestamp: string;
  likes: number;
  verifiedFan?: boolean;
}

// Verified biographical milestones with ONLY high-clarity images
export const MILESTONES: Milestone[] = [
  {
    id: "early-life",
    year: "1983 - 1997",
    era: "Heritage & Classical Roots",
    title: "Kuchipudi Prodigy & National Award",
    category: "Early Life",
    description:
      "Born on 20 May 1983 in Hyderabad to actor-politician Nandamuri Harikrishna and Shalini Bhaskar Rao. Grandson of legendary Telugu matinee idol and former Chief Minister of Andhra Pradesh, N. T. Rama Rao. Tarak trained rigorously in classical Kuchipudi dance and performed widely across Andhra Pradesh during his childhood.",
    impact: "Debuted as child artist in 'Brahmarshi Viswamitra' (1991) and played Lord Rama in Gunasekhar's 'Ramayanam' (1997), which won the National Film Award for Best Children's Film.",
    tag: "National Award Feature",
    image: "/images/ntr/sr_ntr_heritage.jpg",
  },
  {
    id: "debut-breakthrough",
    year: "2001 - 2002",
    era: "Sensational Breakthrough",
    title: "Student No. 1 & Aadi",
    category: "Lead Debut",
    description:
      "Made his debut as a lead actor in 'Ninnu Choodalani' (2001). That same year, his coming-of-age collaboration with debutant director S. S. Rajamouli in 'Student No. 1' emerged as a runaway success, running for over 100 days across theaters. He followed it with V. V. Vinayak's action phenomenon 'Aadi' (2002).",
    impact: "Established Jr. NTR as the youngest mass sensation of Telugu cinema, lauded for ferocious dialogue delivery and unmatched dance agility.",
    tag: "Breakthrough Stardom",
    image: "/images/ntr/highres_war2_sets.jpg",
  },
  {
    id: "simhadri",
    year: "2003",
    era: "Historic Industry Record",
    title: "Simhadri: All-Time Record at Age 20",
    category: "Blockbuster",
    description:
      "Reunited with S. S. Rajamouli for the action drama 'Simhadri' (2003). The film broke all previous box office records in the history of Telugu cinema, achieving a historic 175-day theatrical run across more than 55 centers.",
    impact: "Crowned as the undisputed 'Young Tiger' of Telugu cinema at just 20 years old, setting an industry benchmark that stood for years.",
    tag: "All-Time Industry Hit",
    image: "/images/ntr/poster_simhadri.jpg",
  },
  {
    id: "yamadonga",
    year: "2007",
    era: "Mythological Mastery",
    title: "Yamadonga & Filmfare Best Actor",
    category: "Fantasy Drama",
    description:
      "Underwent a significant physical transformation to star in Rajamouli's mythological socio-fantasy 'Yamadonga' (2007) as Raja. His flawless classical Telugu oratory and dramatic presence in Yamaloka won over critics and audiences alike.",
    impact: "Won his first Filmfare Award for Best Actor – Telugu, cementing his mastery over both contemporary mass cinema and classical mythological diction.",
    tag: "Filmfare Best Actor",
    image: "/images/ntr/poster_yamadonga.jpg",
  },
  {
    id: "comeback-reinvention",
    year: "2015 - 2018",
    era: "Golden Reinvention",
    title: "Temper to Aravinda Sametha",
    category: "Critical Acclaim",
    description:
      "Staged a landmark artistic reinvention playing the morally compromised cop Daya in Puri Jagannadh's 'Temper' (2015). Followed by cerebral thriller 'Nannaku Prematho' (2016), Koratala Siva's 'Janatha Garage' (2016), triple-role masterclass 'Jai Lava Kusa' (2017), and Trivikram's Rayalaseema drama 'Aravinda Sametha Veera Raghava' (2018).",
    impact: "Five consecutive blockbusters grossing over $1.5M–$2M in North America, earning the Nandi Award for Best Actor and another Filmfare Award.",
    tag: "Consecutive Blockbusters",
    image: "/images/ntr/ntr_aravinda.png",
  },
  {
    id: "rrr-global",
    year: "2022",
    era: "Pan-World Phenomenon",
    title: "RRR & Global Recognition",
    category: "Worldwide Epic",
    description:
      "Portrayed real-life tribal freedom fighter Komuram Bheem in Rajamouli's magnum opus 'RRR' (2022). Tarak provided his own multilingual dubbing in Telugu, Hindi, Tamil, and Kannada. The film emerged as one of the highest-grossing Indian films of all time with over ₹1,387 crore worldwide.",
    impact: "Nominated for Best Actor in an Action Movie at the Critics' Choice Super Awards; the historic song 'Naatu Naatu' won the Academy Award and Golden Globe.",
    tag: "Oscars & Global Fame",
    image: "/images/ntr/rrr_chennai.jpg",
  },
  {
    id: "devara-future",
    year: "2024 - Present",
    era: "International Superstar",
    title: "Devara & Pan-Indian Expansion",
    category: "Global Icon",
    description:
      "Delivered the thunderous coastal action drama 'Devara: Part 1' (2024) in dual roles, grossing over ₹500 crore worldwide. Currently starring alongside Hrithik Roshan in Aditya Chopra's 'War 2' (YRF Spy Universe) and collaborating with director Prashanth Neel.",
    impact: "Consolidated as one of India's highest-paid, globally celebrated cultural icons, featured in Forbes India Celebrity 100 since 2012.",
    tag: "Pan-Indian Domination",
    image: "/images/ntr/devara_promo.jpg",
  },
];

// Verified Wikipedia Filmography with ONLY high-clarity posters and backdrops
export const MOVIES: Movie[] = [
  {
    id: "rrr",
    title: "RRR",
    year: 2022,
    role: "Komuram Bheem",
    director: "S. S. Rajamouli",
    category: "Historical",
    rating: "8.8 / 10",
    boxOffice: "₹1,387+ Crore ($175M+)",
    tagline: "Rise. Roar. Revolt.",
    synopsis:
      "A fictional retelling of two Indian revolutionaries — Komuram Bheem and Alluri Sitarama Raju — fighting against the British Raj in 1920s Delhi.",
    wikipediaNotes: [
      "Grossed over ₹1,387 crore worldwide, becoming the third highest-grossing Indian film of all time.",
      "Jr. NTR dubbed his own voice in Telugu, Hindi, Tamil, and Kannada.",
      "Nominated for Best Actor in an Action Movie at the Critics' Choice Super Awards (alongside Tom Cruise and Brad Pitt).",
    ],
    poster: "/images/ntr/poster_rrr.jpg",
    backdrop: "/images/ntr/rrr_chennai.jpg",
  },
  {
    id: "devara",
    title: "Devara: Part 1",
    year: 2024,
    role: "Devara / Vara (Dual Role)",
    director: "Koratala Siva",
    category: "Action",
    rating: "8.5 / 10",
    boxOffice: "₹500+ Crore Worldwide",
    tagline: "Courage is a sea, fear is its anchor.",
    synopsis:
      "A coastal chieftain battles pirate clans and oceanic smuggling cartels to enforce moral peace, while his son must confront his inherited fate.",
    wikipediaNotes: [
      "Grossed over ₹500 crore at the worldwide box office.",
      "Features Jr. NTR in dual roles as father and son opposite Janhvi Kapoor and Saif Ali Khan.",
      "Music composed by Anirudh Ravichander with chartbusters 'Fear Song' and 'Chuttamalle'.",
    ],
    poster: "/images/ntr/poster_devara.jpg",
    backdrop: "/images/ntr/devara_promo.jpg",
  },
  {
    id: "aravinda-sametha",
    title: "Aravinda Sametha Veera Raghava",
    year: 2018,
    role: "Veera Raghava Reddy",
    director: "Trivikram Srinivas",
    category: "Drama",
    rating: "8.6 / 10",
    boxOffice: "₹165+ Crore Worldwide",
    tagline: "Peace demands the greatest courage.",
    synopsis:
      "A scion of a blood-feud faction family in Rayalaseema chooses reconciliation over vengeance, defending innocent lives through intellect and restrained muscle.",
    wikipediaNotes: [
      "Earned over ₹165 crore worldwide and crossed $2.1M at the US box office.",
      "Praising Jr. NTR's physical transformation (six-pack abs) and intense performance.",
      "Nominated for Filmfare Award for Best Actor – Telugu.",
    ],
    poster: "/images/ntr/ntr_aravinda.png",
    backdrop: "/images/ntr/ntr_aravinda.png",
  },
  {
    id: "jai-lava-kusa",
    title: "Jai Lava Kusa",
    year: 2017,
    role: "Jai (Raavan) / Lava Kumar / Kusa (Triple Role)",
    director: "K. S. Ravindra (Bobby)",
    category: "Blockbusters",
    rating: "8.4 / 10",
    boxOffice: "₹130+ Crore Worldwide",
    tagline: "Three brothers, three destinies.",
    synopsis:
      "Identical triplet brothers separated in childhood develop contrasting identities: an insecure stammering warlord Jai, a gentle bank manager Lava, and a street-smart burglar Kusa.",
    wikipediaNotes: [
      "Jr. NTR played an unprecedented triple role with distinct body language and speech patterns.",
      "His performance as the stammering, Raavan-devotee Jai received universal critical acclaim.",
      "Grossed over ₹130 crore worldwide.",
    ],
    poster: "/images/ntr/highres_rrr_delhi_event.jpg",
    backdrop: "/images/ntr/highres_rrr_delhi_event.jpg",
  },
  {
    id: "janatha-garage",
    title: "Janatha Garage",
    year: 2016,
    role: "Anand",
    director: "Koratala Siva",
    category: "Drama",
    rating: "8.4 / 10",
    boxOffice: "₹135+ Crore Worldwide",
    tagline: "All repairs undertaken.",
    synopsis:
      "An environmental activist in Mumbai joins an iconic mechanic shop in Hyderabad led by an elder vigilante that resolves social injustices.",
    wikipediaNotes: [
      "Highest-grossing Telugu film of 2016, winning two National Film Awards and multiple Nandi Awards.",
      "Jr. NTR won the Nandi Award for Best Actor from the Government of Andhra Pradesh.",
      "Historic on-screen pairing with Malayalam superstar Mohanlal.",
    ],
    poster: "/images/ntr/ntr_portrait_2026.jpg",
    backdrop: "/images/ntr/ntr_portrait_2026.jpg",
  },
  {
    id: "nannaku-prematho",
    title: "Nannaku Prematho",
    year: 2016,
    role: "Abhiram",
    director: "Sukumar",
    category: "Drama",
    rating: "8.5 / 10",
    boxOffice: "₹87+ Crore Worldwide",
    tagline: "Family is everything.",
    synopsis:
      "An intelligent, London-based entrepreneur uses his intellectual acumen and game theory to outwit a ruthless billionaire and restore his dying father's lost honor.",
    wikipediaNotes: [
      "Jr. NTR's landmark 25th film, shot extensively across the United Kingdom and Spain.",
      "Won the Filmfare Award for Best Actor – Telugu.",
      "Achieved $2 million gross in North America.",
    ],
    poster: "/images/ntr/highres_war2_sets.jpg",
    backdrop: "/images/ntr/highres_war2_sets.jpg",
  },
  {
    id: "temper",
    title: "Temper",
    year: 2015,
    role: "Daya (Sub-Inspector)",
    director: "Puri Jagannadh",
    category: "Action",
    rating: "8.7 / 10",
    boxOffice: "₹75+ Crore Worldwide",
    tagline: "Corruption meets ruthless redemption.",
    synopsis:
      "A corrupt police officer undergoes a profound moral metamorphosis after confronting a heinous crime, fighting for ultimate justice in an explosive courtroom trial.",
    wikipediaNotes: [
      "Celebrated as one of Jr. NTR's greatest dramatic acting masterclasses.",
      "Remade in Hindi as 'Simmba' with Ranveer Singh and Tamil as 'Ayogya' with Vishal.",
      "Nominated for Filmfare Award for Best Actor – Telugu.",
    ],
    poster: "/images/ntr/hero_portrait.jpg",
    backdrop: "/images/ntr/hero_portrait.jpg",
  },
  {
    id: "yamadonga",
    title: "Yamadonga",
    year: 2007,
    role: "Raja",
    director: "S. S. Rajamouli",
    category: "Historical",
    rating: "8.5 / 10",
    boxOffice: "₹54+ Crore (Industry Record 2007)",
    tagline: "A mortal thief who outsmarted the God of Death.",
    synopsis:
      "A cunning young orphan lands in the netherworld prematurely and uses sharp wit and divine dance to outsmart Lord Yama.",
    wikipediaNotes: [
      "Won the Filmfare Award for Best Actor – Telugu for Jr. NTR.",
      "Completed a 50-day run in 405 centers, setting an industry record at the time.",
      "Renowned for classical Telugu mythological monologues.",
    ],
    poster: "/images/ntr/poster_yamadonga.jpg",
    backdrop: "/images/ntr/hero_portrait.jpg",
  },
  {
    id: "simhadri",
    title: "Simhadri",
    year: 2003,
    role: "Simhadri / Singamalai",
    director: "S. S. Rajamouli",
    category: "Blockbusters",
    rating: "8.9 / 10",
    boxOffice: "All-Time Industry Hit 2003",
    tagline: "The roar that shook an entire generation.",
    synopsis:
      "A loyal, self-effacing domestic worker in a wealthy household is revealed to be Singamalai, a ruthless vigilante who wiped out the underworld of Kerala.",
    wikipediaNotes: [
      "All-Time Industry Hit in Telugu cinema history.",
      "Ran for 175 days in 55 centers, a record for any Indian actor at age 20.",
      "Established Jr. NTR's permanent title as 'Young Tiger'.",
    ],
    poster: "/images/ntr/poster_simhadri.jpg",
    backdrop: "/images/ntr/hero_portrait.jpg",
  },
  {
    id: "student-no-1",
    title: "Student No.1",
    year: 2001,
    role: "Aditya",
    director: "S. S. Rajamouli",
    category: "Drama",
    rating: "8.2 / 10",
    boxOffice: "Silver Jubilee Hit",
    tagline: "A prisoner bound by duty, a student seeking redemption.",
    synopsis:
      "A law college student attending classes under police escort strives to fulfill his father's dream while wrestling with past trauma.",
    wikipediaNotes: [
      "Marked the directorial debut of S. S. Rajamouli.",
      "Celebrated Silver Jubilee (175 days) in 73 centers.",
      "Cemented Jr. NTR's position as a bankable mainstream lead actor.",
    ],
    poster: "/images/ntr/highres_delhi_6.jpg",
    backdrop: "/images/ntr/hero_portrait.jpg",
  },
];

export const AWARDS: Award[] = [
  {
    id: "a1",
    category: "Academy & International",
    awardName: "Critics' Choice Super Awards",
    filmOrYear: "2023 • RRR",
    title: "Nominee: Best Actor in an Action Movie",
    description: "Ranked among global superstars (Tom Cruise, Brad Pitt) as the sole Indian nominee for his breathtaking Komuram Bheem portrayal.",
    badge: "INTERNATIONAL RECOGNITION",
  },
  {
    id: "a2",
    category: "Academy & International",
    awardName: "Academy Awards & Golden Globes",
    filmOrYear: "2023 • RRR",
    title: "Historic Oscar & Golden Globe Victory",
    description: "Central force behind the global phenomenon of 'Naatu Naatu', which won Best Original Song at the 95th Academy Awards and 80th Golden Globes.",
    badge: "OSCARS & GOLDEN GLOBES",
  },
  {
    id: "a3",
    category: "Filmfare Awards",
    awardName: "Filmfare Award for Best Actor – Telugu",
    filmOrYear: "2008 • Yamadonga",
    title: "Best Actor Winner",
    description: "Conferred by Filmfare South for his comedic timing, classical oratory, and mythological performance as Raja in Yamadonga.",
    badge: "FILMFARE WINNER",
  },
  {
    id: "a4",
    category: "Filmfare Awards",
    awardName: "Filmfare Award for Best Actor – Telugu",
    filmOrYear: "2017 • Nannaku Prematho",
    title: "Best Actor Winner",
    description: "Awarded for his sophisticated, cerebral portrayal of Abhiram in Sukumar's London-set thriller.",
    badge: "FILMFARE WINNER",
  },
  {
    id: "a5",
    category: "Nandi & State",
    awardName: "Nandi Awards (Government of Andhra Pradesh)",
    filmOrYear: "2016 • Janatha Garage & Nannaku Prematho",
    title: "Nandi Award for Best Actor",
    description: "Conferred the state's highest artistic honor for his commanding lead performances in two consecutive commercial blockbusters.",
    badge: "STATE HONORS",
  },
  {
    id: "a6",
    category: "Nandi & State",
    awardName: "National Film Award (Child Artist)",
    filmOrYear: "1997 • Ramayanam",
    title: "National Film Award for Best Children's Film",
    description: "Portrayed the iconic titular role of Lord Rama in Gunasekhar's all-children classic feature film.",
    badge: "NATIONAL AWARD",
  },
  {
    id: "a7",
    category: "SIIMA & Honors",
    awardName: "SIIMA Awards",
    filmOrYear: "2017 • Janatha Garage",
    title: "Best Actor in a Leading Role – Telugu",
    description: "Voted by millions of international viewers at the South Indian International Movie Awards in Abu Dhabi.",
    badge: "SIIMA WINNER",
  },
  {
    id: "a8",
    category: "SIIMA & Honors",
    awardName: "SIIMA Awards",
    filmOrYear: "2023 • RRR",
    title: "Best Actor (Telugu) Winner",
    description: "Honored for his emotionally devastating portrayal of tribal rebel Komuram Bheem in S. S. Rajamouli's global phenomenon.",
    badge: "SIIMA WINNER",
  },
  {
    id: "a9",
    category: "SIIMA & Honors",
    awardName: "Forbes India Celebrity 100",
    filmOrYear: "Since 2012",
    title: "Consistent Forbes 100 Ranking",
    description: "Consistently ranked among India's highest-earning, most influential public figures based on earnings and cultural reach.",
    badge: "FORBES CELEBRITY 100",
  },
];

export const GLOBAL_NODES: GlobalImpactNode[] = [
  {
    id: "in",
    country: "India",
    city: "Hyderabad / Pan-India",
    coordinates: { x: 68, y: 52 },
    metric: "120M+ Audience",
    headline: "The Epicenter of Mass Adulation",
    story: "Ceded and Nizam box office ruler. Fervent celebrations with 100-foot cutouts, milk abhishekams, and earth-trembling midnight premieres across thousands of screens.",
    tag: "Epicenter",
  },
  {
    id: "jp",
    country: "Japan",
    city: "Tokyo / Osaka",
    coordinates: { x: 88, y: 44 },
    metric: "1,000+ Days Run",
    headline: "Historic Japanese Cultural Phenomenon",
    story: "Japanese audiences embraced Jr. NTR with dedicated fan clubs, handcrafted manga, cosplays, and sold-out theatrical screenings for over two consecutive years.",
    tag: "Historic Phenomenon",
  },
  {
    id: "us",
    country: "United States",
    city: "Los Angeles / New York",
    coordinates: { x: 20, y: 40 },
    metric: "$20M+ Box Office",
    headline: "Hollywood & Oscar Spotlight",
    story: "Standing ovations at the historic TCL Chinese Theatre IMAX; hailed by Academy voters, Rotten Tomatoes critics, and Hollywood directors.",
    tag: "Academy Spotlight",
  },
  {
    id: "uk",
    country: "United Kingdom",
    city: "London",
    coordinates: { x: 48, y: 32 },
    metric: "Sold-Out Arenas",
    headline: "Royal Albert Hall & European Acclaim",
    story: "Massive diaspora turnouts and screenings at London venues, creating viral international dance trends for 'Naatu Naatu'.",
    tag: "European Reach",
  },
  {
    id: "au",
    country: "Australia",
    city: "Sydney / Melbourne",
    coordinates: { x: 86, y: 76 },
    metric: "A$5M+ Gross",
    headline: "Down Under Box Office Records",
    story: "Consistent record-setter across Greater Union and Event Cinemas circuits, drawing packed houses across Melbourne, Sydney, and Brisbane.",
    tag: "Oceania Record",
  },
  {
    id: "me",
    country: "Middle East",
    city: "Dubai / Abu Dhabi",
    coordinates: { x: 59, y: 46 },
    metric: "Record GCC Releases",
    headline: "Gulf Box Office Benchmark",
    story: "Huge Middle Eastern theatrical presence with simultaneous multi-language premieres across UAE, Qatar, Kuwait, and Saudi Arabia.",
    tag: "Middle East Presence",
  },
];

// Curated Gallery with ONLY Verified High-Clarity Photos (97KB to 5.91MB)
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "hero-ultra-hd",
    title: "Official Studio Portrait (2344 x 3123 HD)",
    category: "Portraits",
    year: "Iconic",
    aspect: "tall",
    image: "/images/ntr/hero_portrait.jpg",
    caption: "Ultra high-resolution 4.95MB official studio portrait capturing the commanding presence and intense gaze of Jr. NTR.",
  },
  {
    id: "rrr-press-mega",
    title: "RRR Team Grand Conference (5472 x 3648)",
    category: "Events",
    year: "2022",
    aspect: "wide",
    image: "/images/ntr/highres_rrr_press_all.jpg",
    caption: "Pristine 5.91MB photograph of Jr. NTR alongside S.S. Rajamouli, Ram Charan, and Alia Bhatt during the Pan-Indian launch.",
  },
  {
    id: "rrr-chennai-hd",
    title: "Jr. NTR — Solo at Press Meet (2944 x 4416)",
    category: "Events",
    year: "2022",
    aspect: "tall",
    image: "/images/ntr/rrr_chennai.jpg",
    caption: "Massive 4.53MB high-clarity portrait of Jr. NTR addressing journalists and global film enthusiasts in Chennai.",
  },
  {
    id: "aravinda-hd",
    title: "Aravinda Sametha Veera Raghava (1080p)",
    category: "Film Stills",
    year: "2018",
    aspect: "wide",
    image: "/images/ntr/ntr_aravinda.png",
    caption: "Crystal-clear 1.01MB still capturing Jr. NTR discussing the intense Rayalaseema dramatic narrative.",
  },
  {
    id: "devara-promo-hd",
    title: "Devara: Part 1 Promotional Campaign",
    category: "Portraits",
    year: "2024",
    aspect: "tall",
    image: "/images/ntr/devara_promo.jpg",
    caption: "High-resolution promotional portrait of Jr. NTR championing the Pan-Indian oceanic action blockbuster.",
  },
  {
    id: "war2-sets-hd",
    title: "On the Sets of War 2 (1170 x 1126)",
    category: "Film Stills",
    year: "2024",
    aspect: "square",
    image: "/images/ntr/highres_war2_sets.jpg",
    caption: "High-clarity still from Jr. NTR's much-anticipated entry into the YRF Spy Universe alongside Hrithik Roshan.",
  },
  {
    id: "delhi-event-hd",
    title: "National Promotional Tour in New Delhi",
    category: "Events",
    year: "2022",
    aspect: "tall",
    image: "/images/ntr/highres_rrr_delhi_event.jpg",
    caption: "Sharp promotional photograph capturing Jr. NTR during the nationwide press tour in the national capital.",
  },
  {
    id: "contemporary-hd",
    title: "Contemporary Style & Persona",
    category: "Editorial",
    year: "2026",
    aspect: "tall",
    image: "/images/ntr/ntr_portrait_2026.jpg",
    caption: "Modern high-resolution editorial portrait showcasing the sophisticated and global avatar of Tarak.",
  },
  {
    id: "devara-poster-hd",
    title: "Devara: Part 1 Landmark Official Art",
    category: "Film Stills",
    year: "2024",
    aspect: "tall",
    image: "/images/ntr/poster_devara.jpg",
    caption: "Official high-clarity release poster artwork for Koratala Siva's coastal epic.",
  },
  {
    id: "sr-ntr-heritage-hd",
    title: "Grandfather N.T. Rama Rao Lineage",
    category: "Editorial",
    year: "Heritage",
    aspect: "square",
    image: "/images/ntr/sr_ntr_heritage.jpg",
    caption: "Historic high-clarity photographic tribute honoring legendary Andhra Pradesh Chief Minister N.T. Rama Rao.",
  },
];

export const INITIAL_FAN_TRIBUTES: FanTribute[] = [
  {
    id: "t1",
    name: "Kenji Sato",
    location: "Tokyo, Japan",
    message: "Tarak-san is not just an Indian actor to us in Japan; he is an eternal emotion. I watched RRR 47 times in Shibuya cinema. His eyes tell stories words cannot express!",
    timestamp: "2 hours ago",
    likes: 842,
    verifiedFan: true,
  },
  {
    id: "t2",
    name: "Rajesh Varma",
    location: "Hyderabad, India",
    message: "From Simhadri in 2003 to Devara in 2024, our Young Tiger has defined what energy and royalty mean on the silver screen. Jai NTR forever!",
    timestamp: "4 hours ago",
    likes: 1290,
    verifiedFan: true,
  },
  {
    id: "t3",
    name: "Sarah Miller",
    location: "Los Angeles, CA",
    message: "Saw Jr. NTR speak in LA during the Oscar circuit. The humble warmth, the regal voice, and that unmatched magnetic intensity in Komuram Bheem is unforgettable.",
    timestamp: "1 day ago",
    likes: 512,
    verifiedFan: false,
  },
  {
    id: "t4",
    name: "Arjun Reddy",
    location: "London, UK",
    message: "Hearing the Telugu dialogues in Yamadonga and Temper sends shivers down the spine. No one in Indian cinema commands the Telugu language like Jr. NTR.",
    timestamp: "2 days ago",
    likes: 730,
    verifiedFan: true,
  },
  {
    id: "t5",
    name: "Michael Chen",
    location: "Sydney, Australia",
    message: "Naatu Naatu was my entry, but exploring his filmography like Aravinda Sametha blew my mind. True master of his craft!",
    timestamp: "3 days ago",
    likes: 418,
    verifiedFan: false,
  },
];
