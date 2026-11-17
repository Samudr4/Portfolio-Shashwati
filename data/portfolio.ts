// ============================================================
// CENTRAL PORTFOLIO DATA FILE
// Edit this file to update content, add captions, or fill in
// profile details once confirmed by the portfolio owner.
// ============================================================

export type PortfolioItem = {
  id: string;
  title: string;        // verified title or neutral sequence label
  image: string;        // path under /public
  category: string;
  sourcePage: number;
  caption?: string;     // only if supported by the source
  date?: string;        // omit unless verified
  publication?: string; // omit unless verified
};

// ----------------------------------------------------------------
// PROFILE — from official resume
// ----------------------------------------------------------------
export const profile = {
  name: "Shashwati Sabhapandit",
  professionalTitle: "Versatile Media & Communication Professional | Anchor | Content Writer | Public Speaker",
  introduction: "Dynamic and accomplished communication professional with proven expertise in anchoring, content creation, public speaking, and media engagement.",
  portrait: "/images/profile/shashwati-anchor.jpg",
  aboutImage: "/images/profile/shashwati-portrait.jpg",
  email: "sabhapondit23@gmail.com",
  phone: "8011308964",
  location: "Guwahati, Assam",
  languages: ["Assamese", "English", "Hindi", "Sanskrit"],
  socialLinks: [] as { label: string; url: string }[],
};

// ----------------------------------------------------------------
// ARTICLES — pages 1–11 of source document
// 31 newspaper clippings in document order
// ----------------------------------------------------------------
export const articles: PortfolioItem[] = [
  { id: "article-01", title: "Newspaper clipping 01", image: "/images/articles/articles_01.jpg", category: "articles", sourcePage: 1 },
  { id: "article-02", title: "Newspaper clipping 02", image: "/images/articles/articles_02.jpg", category: "articles", sourcePage: 1 },
  { id: "article-03", title: "Newspaper clipping 03", image: "/images/articles/articles_03.jpg", category: "articles", sourcePage: 2 },
  { id: "article-04", title: "Newspaper clipping 04", image: "/images/articles/articles_04.jpg", category: "articles", sourcePage: 2 },
  { id: "article-05", title: "Newspaper clipping 05", image: "/images/articles/articles_05.jpg", category: "articles", sourcePage: 3 },
  { id: "article-06", title: "Newspaper clipping 06", image: "/images/articles/articles_06.jpg", category: "articles", sourcePage: 3 },
  { id: "article-07", title: "Newspaper clipping 07", image: "/images/articles/articles_07.jpg", category: "articles", sourcePage: 4 },
  { id: "article-08", title: "Newspaper clipping 08", image: "/images/articles/articles_08.jpg", category: "articles", sourcePage: 4 },
  { id: "article-09", title: "Newspaper clipping 09", image: "/images/articles/articles_09.jpg", category: "articles", sourcePage: 5 },
  { id: "article-10", title: "Newspaper clipping 10", image: "/images/articles/articles_10.jpg", category: "articles", sourcePage: 5 },
  { id: "article-11", title: "Newspaper clipping 11", image: "/images/articles/articles_11.jpg", category: "articles", sourcePage: 6 },
  { id: "article-12", title: "Newspaper clipping 12", image: "/images/articles/articles_12.jpg", category: "articles", sourcePage: 6 },
  { id: "article-13", title: "Newspaper clipping 13", image: "/images/articles/articles_13.jpg", category: "articles", sourcePage: 7 },
  { id: "article-14", title: "Newspaper clipping 14", image: "/images/articles/articles_14.jpg", category: "articles", sourcePage: 7 },
  { id: "article-15", title: "Newspaper clipping 15", image: "/images/articles/articles_15.jpg", category: "articles", sourcePage: 8 },
  { id: "article-16", title: "Newspaper clipping 16", image: "/images/articles/articles_16.jpg", category: "articles", sourcePage: 8 },
  { id: "article-17", title: "Newspaper clipping 17", image: "/images/articles/articles_17.jpg", category: "articles", sourcePage: 9 },
  { id: "article-18", title: "Newspaper clipping 18", image: "/images/articles/articles_18.jpg", category: "articles", sourcePage: 9 },
  { id: "article-19", title: "Newspaper clipping 19", image: "/images/articles/articles_19.jpg", category: "articles", sourcePage: 10 },
  { id: "article-20", title: "Newspaper clipping 20", image: "/images/articles/articles_20.jpg", category: "articles", sourcePage: 10 },
  { id: "article-21", title: "Newspaper clipping 21", image: "/images/articles/articles_21.jpg", category: "articles", sourcePage: 10 },
  { id: "article-22", title: "Newspaper clipping 22", image: "/images/articles/articles_22.jpg", category: "articles", sourcePage: 11 },
  { id: "article-23", title: "Newspaper clipping 23", image: "/images/articles/articles_23.jpg", category: "articles", sourcePage: 11 },
  { id: "article-24", title: "Newspaper clipping 24", image: "/images/articles/articles_24.jpg", category: "articles", sourcePage: 11 },
  { id: "article-25", title: "Newspaper clipping 25", image: "/images/articles/articles_25.jpg", category: "articles", sourcePage: 11 },
  { id: "article-26", title: "Newspaper clipping 26", image: "/images/articles/articles_26.jpg", category: "articles", sourcePage: 11 },
  { id: "article-27", title: "Newspaper clipping 27", image: "/images/articles/articles_27.jpg", category: "articles", sourcePage: 11 },
  { id: "article-28", title: "Newspaper clipping 28", image: "/images/articles/articles_28.jpg", category: "articles", sourcePage: 11 },
  { id: "article-29", title: "Newspaper clipping 29", image: "/images/articles/articles_29.jpg", category: "articles", sourcePage: 11 },
  { id: "article-30", title: "Newspaper clipping 30", image: "/images/articles/articles_30.jpg", category: "articles", sourcePage: 11 },
  { id: "article-31", title: "Newspaper clipping 31", image: "/images/articles/articles_31.jpg", category: "articles", sourcePage: 11 },
];

// ----------------------------------------------------------------
// CREATIVE WRITING — pages 12–15 of source document
// 8 literary / creative writing clippings
// ----------------------------------------------------------------
export const creativeWriting: PortfolioItem[] = [
  { id: "creative-01", title: "Creative writing 01", image: "/images/creative-writing/creative_writing_01.jpg", category: "creative-writing", sourcePage: 12 },
  { id: "creative-02", title: "Creative writing 02", image: "/images/creative-writing/creative_writing_02.jpg", category: "creative-writing", sourcePage: 12 },
  { id: "creative-03", title: "Creative writing 03", image: "/images/creative-writing/creative_writing_03.jpg", category: "creative-writing", sourcePage: 13 },
  { id: "creative-04", title: "Creative writing 04", image: "/images/creative-writing/creative_writing_04.jpg", category: "creative-writing", sourcePage: 13 },
  { id: "creative-05", title: "Creative writing 05", image: "/images/creative-writing/creative_writing_05.jpg", category: "creative-writing", sourcePage: 14 },
  { id: "creative-06", title: "Creative writing 06", image: "/images/creative-writing/creative_writing_06.jpg", category: "creative-writing", sourcePage: 14 },
  { id: "creative-07", title: "Creative writing 07", image: "/images/creative-writing/creative_writing_07.jpg", category: "creative-writing", sourcePage: 15 },
  { id: "creative-08", title: "Creative writing 08", image: "/images/creative-writing/creative_writing_08.jpg", category: "creative-writing", sourcePage: 15 },
];

// ----------------------------------------------------------------
// TELEVISION DEBATES — pages 16–17 of source document
// 5 TV debate screenshots
// ----------------------------------------------------------------
export const television: PortfolioItem[] = [
  { id: "tv-01", title: "Television debate 01", image: "/images/television/television_01.jpg", category: "television", sourcePage: 16 },
  { id: "tv-02", title: "Television debate 02", image: "/images/television/television_02.jpg", category: "television", sourcePage: 16 },
  { id: "tv-03", title: "Television debate 03", image: "/images/television/television_03.jpg", category: "television", sourcePage: 17 },
  { id: "tv-04", title: "Television debate 04", image: "/images/television/television_04.jpg", category: "television", sourcePage: 17 },
  { id: "tv-05", title: "Television debate 05", image: "/images/television/television_05.jpg", category: "television", sourcePage: 17 },
];

// ----------------------------------------------------------------
// ALL INDIA RADIO — page 18 of source document
// 3 radio programme photographs
// ----------------------------------------------------------------
export const radio: PortfolioItem[] = [
  { id: "radio-01", title: "All India Radio programme 01", image: "/images/radio/radio_01.jpg", category: "radio", sourcePage: 18 },
  { id: "radio-02", title: "All India Radio programme 02", image: "/images/radio/radio_02.jpg", category: "radio", sourcePage: 18 },
  { id: "radio-03", title: "All India Radio programme 03", image: "/images/radio/radio_03.jpg", category: "radio", sourcePage: 18 },
];

// ----------------------------------------------------------------
// EVENT HOSTING — pages 19–20 of source document
// 6 event-hosting photographs
// ----------------------------------------------------------------
export const hosting: PortfolioItem[] = [
  { id: "host-01", title: "Event hosting 01", image: "/images/hosting/hosting_01.jpg", category: "hosting", sourcePage: 19 },
  { id: "host-02", title: "Event hosting 02", image: "/images/hosting/hosting_02.jpg", category: "hosting", sourcePage: 19 },
  { id: "host-03", title: "Event hosting 03", image: "/images/hosting/hosting_03.jpg", category: "hosting", sourcePage: 19 },
  { id: "host-04", title: "Event hosting 04", image: "/images/hosting/hosting_04.jpg", category: "hosting", sourcePage: 20 },
  { id: "host-05", title: "Event hosting 05", image: "/images/hosting/hosting_05.jpg", category: "hosting", sourcePage: 20 },
  { id: "host-06", title: "Event hosting 06", image: "/images/hosting/hosting_06.jpg", category: "hosting", sourcePage: 20 },
];

// ----------------------------------------------------------------
// ACHIEVEMENTS — pages 21–23 of source document
// 9 certificate/award images
// ----------------------------------------------------------------
export const achievements: PortfolioItem[] = [
  { id: "award-01", title: "Award / Certificate 01", image: "/images/achievements/achievements_01.jpg", category: "achievements", sourcePage: 21 },
  { id: "award-02", title: "Award / Certificate 02", image: "/images/achievements/achievements_02.jpg", category: "achievements", sourcePage: 21 },
  { id: "award-03", title: "Award / Certificate 03", image: "/images/achievements/achievements_03.jpg", category: "achievements", sourcePage: 22 },
  { id: "award-04", title: "Award / Certificate 04", image: "/images/achievements/achievements_04.jpg", category: "achievements", sourcePage: 22 },
  { id: "award-05", title: "Award / Certificate 05", image: "/images/achievements/achievements_05.jpg", category: "achievements", sourcePage: 22 },
  { id: "award-06", title: "Award / Certificate 06", image: "/images/achievements/achievements_06.jpg", category: "achievements", sourcePage: 23 },
  { id: "award-07", title: "Award / Certificate 07", image: "/images/achievements/achievements_07.jpg", category: "achievements", sourcePage: 23 },
  { id: "award-08", title: "Award / Certificate 08", image: "/images/achievements/achievements_08.jpg", category: "achievements", sourcePage: 23 },
  { id: "award-09", title: "Award / Certificate 09", image: "/images/achievements/achievements_09.jpg", category: "achievements", sourcePage: 23 },
];
