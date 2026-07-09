import { ui, defaultLang, languages, type Lang, type UIKey } from './ui';

// Derive the active language from the URL path. English lives at the root
// (/, /about-us/ ...), Hindi under /hi/ and Marathi under /mr/.
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg === 'hi' || seg === 'mr') return seg;
  return defaultLang;
}

// Returns a translator bound to a language, with graceful fallback to English.
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<UIKey, string>)[key] ?? ui[defaultLang][key];
  };
}

// The portion of a path after the language prefix (always starts with '/').
export function stripLangPrefix(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] === 'hi' || parts[0] === 'mr') parts.shift();
  return '/' + parts.join('/') + (parts.length ? '/' : '');
}

// Build the URL for the same page in another language.
// base always starts and ends with '/', so `/hi` + base gives clean paths.
export function localizePath(pathname: string, lang: Lang): string {
  const base = stripLangPrefix(pathname);
  return lang === defaultLang ? base : `/${lang}${base}`;
}

export { languages, defaultLang, type Lang };
