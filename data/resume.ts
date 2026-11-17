// ============================================================
// RESUME DATA FILE
// All fields are optional. Empty strings / empty arrays are
// hidden from the rendered resume automatically.
// Fill in after owner confirmation.
// ============================================================

export type ResumeEntry = {
  title: string;
  organisation?: string;
  period?: string;
  description?: string;
};

export type ResumeSection = {
  heading: string;
  entries: ResumeEntry[];
};

export const resumeProfile = {
  name: "",              // owner to supply
  title: "",             // e.g. "Journalist · Writer · Media Contributor"
  email: "",
  phone: "",
  location: "",
  website: "",
  languages: [] as string[],
  summary: "",           // 2–3 sentence professional summary (owner to draft)
};

// Documented areas of work, based on source material only
export const resumeSections: ResumeSection[] = [
  {
    heading: "Writing & Editorial",
    entries: [
      {
        title: "Articles published in various newspapers",
        description:
          "A body of opinion and editorial writing published across multiple newspapers. Source: portfolio pages 1–11.",
      },
      {
        title: "Creative and literary writing",
        description:
          "Poems and literary pieces published in various newspapers. Source: portfolio pages 12–15.",
      },
    ],
  },
  {
    heading: "Media Appearances",
    entries: [
      {
        title: "Participation in television debates",
        description:
          "Appearances as a panellist or contributor in television debate programmes. Source: portfolio pages 16–17.",
      },
      {
        title: "Participation in All India Radio programmes",
        description:
          "Participation in AIR broadcast programmes. Source: portfolio page 18.",
      },
    ],
  },
  {
    heading: "Event Hosting",
    entries: [
      {
        title: "Anchor and host — various events",
        description:
          "Served as anchor and host for a range of public and institutional events. Source: portfolio pages 19–20.",
      },
    ],
  },
  {
    heading: "Achievements & Recognition",
    entries: [
      {
        title: "Awards and certificates — 2022–2024",
        description:
          "Multiple awards and certificates of recognition received during 2022–2024. Source: portfolio pages 21–23.",
      },
    ],
  },
];
