import type { Lang } from './ui';

export interface SitemapCopy {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  name: string;
  crumbHome: string;
  sections: {
    main: string;
    departments: string;
    procedures: string;
    doctors: string;
    landing: string;
    calculators: string;
    blog: string;
    languages: string;
  };
  xmlNote: string;
}

export const sitemapCopy: Record<Lang, SitemapCopy> = {
  en: {
    metaTitle: 'Sitemap | Shubham Hi-Tech Hospital, Amravati',
    metaDescription:
      'Every page on shubham-hospitals.com in one place — departments, treatments, doctors, calculators, health blog and contact details for Shubham Hi-Tech Hospital, Amravati.',
    eyebrow: 'Site index',
    h1: 'Sitemap',
    lead: 'Every page on this website, grouped by section. If you cannot find what you are looking for, call us on the number in the footer and we will point you to it.',
    name: 'Sitemap',
    crumbHome: 'Home',
    sections: {
      main: 'Main pages',
      departments: 'Departments',
      procedures: 'Procedures',
      doctors: 'Our doctors',
      landing: 'Specialist pages',
      calculators: 'Calculators',
      blog: 'Health blog',
      languages: 'This site in other languages',
    },
    xmlNote: 'Looking for the machine-readable version? It is at /sitemap-index.xml.',
  },
  hi: {
    metaTitle: 'साइटमैप | शुभम हाई-टेक हॉस्पिटल, अमरावती',
    metaDescription:
      'shubham-hospitals.com का हर पेज एक जगह — विभाग, उपचार, डॉक्टर, कैलकुलेटर, स्वास्थ्य ब्लॉग और शुभम हाई-टेक हॉस्पिटल, अमरावती की संपर्क जानकारी।',
    eyebrow: 'साइट सूची',
    h1: 'साइटमैप',
    lead: 'इस वेबसाइट के सभी पेज, अनुभाग के अनुसार। यदि आपको जो चाहिए वह न मिले, तो फ़ुटर में दिए नंबर पर कॉल करें — हम आपको सही जगह पहुँचा देंगे।',
    name: 'साइटमैप',
    crumbHome: 'होम',
    sections: {
      main: 'मुख्य पेज',
      departments: 'विभाग',
      procedures: 'प्रक्रियाएँ',
      doctors: 'हमारे डॉक्टर',
      landing: 'विशेषज्ञ पेज',
      calculators: 'कैलकुलेटर',
      blog: 'स्वास्थ्य ब्लॉग',
      languages: 'यह साइट अन्य भाषाओं में',
    },
    xmlNote: 'मशीन-पठनीय संस्करण चाहिए? वह /sitemap-index.xml पर है।',
  },
  mr: {
    metaTitle: 'साइटमॅप | शुभम हाय-टेक हॉस्पिटल, अमरावती',
    metaDescription:
      'shubham-hospitals.com चे प्रत्येक पान एकाच ठिकाणी — विभाग, उपचार, डॉक्टर, कॅल्क्युलेटर, आरोग्य ब्लॉग आणि शुभम हाय-टेक हॉस्पिटल, अमरावतीची संपर्क माहिती.',
    eyebrow: 'साइट सूची',
    h1: 'साइटमॅप',
    lead: 'या संकेतस्थळावरील सर्व पाने, विभागानुसार. तुम्हाला हवे ते सापडले नाही, तर तळाशी दिलेल्या क्रमांकावर फोन करा — आम्ही तुम्हाला योग्य ठिकाणी पोहोचवू.',
    name: 'साइटमॅप',
    crumbHome: 'मुख्यपृष्ठ',
    sections: {
      main: 'मुख्य पाने',
      departments: 'विभाग',
      procedures: 'प्रक्रिया',
      doctors: 'आमचे डॉक्टर',
      landing: 'तज्ज्ञ पाने',
      calculators: 'कॅल्क्युलेटर',
      blog: 'आरोग्य ब्लॉग',
      languages: 'हे संकेतस्थळ इतर भाषांत',
    },
    xmlNote: 'यंत्र-वाचनीय आवृत्ती हवी? ती /sitemap-index.xml येथे आहे.',
  },
};
