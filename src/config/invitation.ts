export type InvitationLang = "en" | "te";

export const invitation = {
  couple: {
    monogram: "B&S",
    hashtag: "#BhargavSriVaishnavi",
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
    groomParentsEn: "(Chi. Akunoor Seetha Rama Rao - Smt. Sandhya Rani's)",
    brideParentsEn: "(D/o Kandadi Balakrishna Reddy - Bhagya Lakshmi)",
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
    sumuhurthamEn: "On Wednesday, 29th April 2026 at 08:39 PM",
    sumuhurthamNoteEn: "Harsha Nakshatram, Tula Lagnam",
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
