export type InvitationLang = "en" | "te";

export const invitation = {
  couple: {
    monogram: "B&V",
    hashtag: "#BhargaVaishU",
    groom: {
      en: "Bhargav Raj",
      te: "భార్గవ్ రాజ్",
      formalEn: "Chi. Bhargav Raj",
    },
    bride: {
      en: "Sri Vaishnavi",
      te: "శ్రీ వైష్ణవి",
      formalEn: "Chi.La.Sow. Sri Vaishnavi",
    },
  },
  families: {
    groomParentsEn: "(Chi. M.Ravi- SMT .M.Anuradha )",
    brideParentsEn: "(D/o Sri M.V.Ramana Rao - Late SMT. M.Radhika)",
  },
  event: {
    subtitle: {
      en: "Wedding Invitation",
      te: "వివాహ ఆహ్వానం",
    },
    sumuhurthamLabel: {
      en: "Sumuhurtham",
      te: "సుముహూర్తం",
    },
    sumuhurthamEn: "On Wednesday, 29th April 2026 at 10:32 AM",
    sumuhurthamNoteEn: "Mithuna Lagnam",
  },
  links: {
    liveStreamUrl: "#",
  },
  seo: {
    titleEn: "Bhargav Raj & Sri Vaishnavi — Wedding Invitation",
    descriptionEn: "Wedding invitation for Bhargav Raj and Sri Vaishnavi.",
    author: "Family",
  },
} as const;

export function t<T extends { en: string; te: string }>(
  value: T,
  lang: InvitationLang,
) {
  return value[lang];
}
