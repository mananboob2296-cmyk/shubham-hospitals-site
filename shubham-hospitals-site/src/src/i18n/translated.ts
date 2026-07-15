import type { Lang } from './ui';

// English-root paths (leading + trailing slash) that have Hindi/Marathi versions.
// Grow these sets as more pages are translated. This keeps the nav and language
// switcher 404-safe: links to not-yet-translated pages stay on the English URL,
// and the switcher sends you to the language homepage instead of a dead path.
const translated: Record<Exclude<Lang, 'en'>, Set<string>> = {
  // Grows as pages are translated.
  hi: new Set(['/', '/faq/', '/departments/', '/doctors/', '/about-us/', '/contact-us/', '/treatments/advanced-laparoscopy-hysteroscopy/', '/treatments/ivf-fertility-treatments/', '/treatments/obstetrics-gynecology/', '/treatments/cosmetic-aesthetic-gynecology/', '/treatments/fetal-medicine/', '/treatments/ultrasound-imaging/', '/treatments/general-surgery-gastroenterology/', '/best-gynecologist-in-amravati/', '/best-ivf-centre-in-amravati/', '/best-laparoscopic-surgeon-in-amravati/', '/dr-murlidhar/', '/dr-manjushree/', '/dr-manan/', '/dr-darshana/', '/blogs/', '/ivf-cost-in-amravati-what-to-expect-before-you-begin/', '/when-should-you-see-a-fertility-specialist-7-signs-for-couples-in-amravati/']),
  mr: new Set(['/', '/faq/', '/departments/', '/doctors/', '/about-us/', '/contact-us/', '/treatments/advanced-laparoscopy-hysteroscopy/', '/treatments/ivf-fertility-treatments/', '/treatments/obstetrics-gynecology/', '/treatments/cosmetic-aesthetic-gynecology/', '/treatments/fetal-medicine/', '/treatments/ultrasound-imaging/', '/treatments/general-surgery-gastroenterology/', '/best-gynecologist-in-amravati/', '/best-ivf-centre-in-amravati/', '/best-laparoscopic-surgeon-in-amravati/', '/dr-murlidhar/', '/dr-manjushree/', '/dr-manan/', '/dr-darshana/', '/blogs/', '/ivf-cost-in-amravati-what-to-expect-before-you-begin/', '/when-should-you-see-a-fertility-specialist-7-signs-for-couples-in-amravati/']),
};

export function isTranslated(lang: Lang, basePath: string): boolean {
  if (lang === 'en') return true;
  return translated[lang].has(basePath);
}

export function availableLocales(basePath: string): Lang[] {
  const out: Lang[] = ['en'];
  (['hi', 'mr'] as const).forEach((l) => {
    if (translated[l].has(basePath)) out.push(l);
  });
  return out;
}
