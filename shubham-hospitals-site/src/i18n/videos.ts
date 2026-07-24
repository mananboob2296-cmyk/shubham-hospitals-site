import type { Lang } from './ui';

// Strings for the /videos page. English is the source of truth; hi/mr are
// natural translations — clinical team may review before launch. Channel names
// and medical acronyms are kept as-is (proper nouns).
export interface VideoStrings {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  hospitalDesc: string;
  drMananDesc: string;
  visitChannel: string;
  emptyLead: string;
  emptyChannel: string;
  navLabel: string;
  watchMore: string;
  homeH2: string;
  profileH2: string;
  treatmentH2: string;
}

export const videoStrings: Record<Lang, VideoStrings> = {
  en: {
    metaTitle: 'Videos | Shubham Hi-Tech Hospital, Amravati',
    metaDescription: 'Watch facility tours, patient guides and advanced laparoscopy & hysteroscopy surgical videos from Shubham Hi-Tech Hospital and Dr Manan Boob, Amravati.',
    eyebrow: 'Watch & Learn',
    h1: 'Our Videos',
    lead: 'Facility tours, patient-friendly health guides and advanced gynecologic endoscopy from our YouTube channels — all in one place.',
    hospitalDesc: 'Hospital tours, patient stories and updates from Shubham Hi-Tech Hospital & Test Tube Baby Centre.',
    drMananDesc: 'Advanced laparoscopy, hysteroscopy and women’s-health explainers from Dr Manan Boob — for patients and for doctors.',
    visitChannel: 'Visit channel on YouTube',
    emptyLead: 'Our latest videos will appear here shortly. In the meantime, watch them directly on our YouTube channels:',
    emptyChannel: 'New videos coming soon — watch on YouTube.',
    navLabel: 'Videos',
    watchMore: 'See all videos',
    homeH2: 'From our YouTube channels',
    profileH2: 'Latest from Dr Manan',
    treatmentH2: 'Watch: advanced laparoscopy & hysteroscopy',
  },
  hi: {
    metaTitle: 'वीडियो | शुभम हाई-टेक हॉस्पिटल, अमरावती',
    metaDescription: 'शुभम हाई-टेक हॉस्पिटल एवं डॉ. मनन बूब, अमरावती के यूट्यूब चैनलों से हॉस्पिटल टूर, मरीज़ों के लिए स्वास्थ्य गाइड और उन्नत लेप्रोस्कोपी एवं हिस्टेरोस्कोपी सर्जरी के वीडियो देखें।',
    eyebrow: 'देखें और जानें',
    h1: 'हमारे वीडियो',
    lead: 'हमारे यूट्यूब चैनलों से हॉस्पिटल टूर, मरीज़ों के लिए सरल स्वास्थ्य गाइड और उन्नत गायनेकोलॉजिक एंडोस्कोपी — सब एक ही जगह।',
    hospitalDesc: 'शुभम हाई-टेक हॉस्पिटल एवं टेस्ट ट्यूब बेबी सेंटर से हॉस्पिटल टूर, मरीज़ों की कहानियाँ और अपडेट।',
    drMananDesc: 'डॉ. मनन बूब से उन्नत लेप्रोस्कोपी, हिस्टेरोस्कोपी और महिला-स्वास्थ्य की सरल जानकारी — मरीज़ों और डॉक्टरों दोनों के लिए।',
    visitChannel: 'यूट्यूब पर चैनल देखें',
    emptyLead: 'हमारे नवीनतम वीडियो जल्द ही यहाँ दिखेंगे। तब तक, उन्हें सीधे हमारे यूट्यूब चैनलों पर देखें:',
    emptyChannel: 'नए वीडियो जल्द ही — यूट्यूब पर देखें।',
    navLabel: 'वीडियो',
    watchMore: 'सभी वीडियो देखें',
    homeH2: 'हमारे यूट्यूब चैनलों से',
    profileH2: 'डॉ. मनन के नवीनतम वीडियो',
    treatmentH2: 'देखें: उन्नत लेप्रोस्कोपी एवं हिस्टेरोस्कोपी',
  },
  mr: {
    metaTitle: 'व्हिडिओ | शुभम हाय-टेक हॉस्पिटल, अमरावती',
    metaDescription: 'शुभम हाय-टेक हॉस्पिटल व डॉ. मनन बूब, अमरावती यांच्या यूट्यूब चॅनेलवरील हॉस्पिटल टूर, रुग्णांसाठी आरोग्य मार्गदर्शन व प्रगत लॅपरोस्कोपी व हिस्टेरोस्कोपी शस्त्रक्रियेचे व्हिडिओ पाहा.',
    eyebrow: 'पाहा आणि शिका',
    h1: 'आमचे व्हिडिओ',
    lead: 'आमच्या यूट्यूब चॅनेलवरील हॉस्पिटल टूर, रुग्णांसाठी सोपे आरोग्य मार्गदर्शन व प्रगत स्त्रीरोग एंडोस्कोपी — सर्व एकाच ठिकाणी.',
    hospitalDesc: 'शुभम हाय-टेक हॉस्पिटल व टेस्ट ट्यूब बेबी सेंटरकडून हॉस्पिटल टूर, रुग्णांच्या कहाण्या व अपडेट्स.',
    drMananDesc: 'डॉ. मनन बूब यांच्याकडून प्रगत लॅपरोस्कोपी, हिस्टेरोस्कोपी व महिला-आरोग्याचे सोपे मार्गदर्शन — रुग्ण व डॉक्टर दोघांसाठी.',
    visitChannel: 'यूट्यूबवर चॅनेल पाहा',
    emptyLead: 'आमचे नवीन व्हिडिओ लवकरच येथे दिसतील. तोपर्यंत, ते थेट आमच्या यूट्यूब चॅनेलवर पाहा:',
    emptyChannel: 'नवीन व्हिडिओ लवकरच — यूट्यूबवर पाहा.',
    navLabel: 'व्हिडिओ',
    watchMore: 'सर्व व्हिडिओ पाहा',
    homeH2: 'आमच्या यूट्यूब चॅनेलवरून',
    profileH2: 'डॉ. मनन यांचे अलीकडील व्हिडिओ',
    treatmentH2: 'पाहा: प्रगत लॅपरोस्कोपी व हिस्टेरोस्कोपी',
  },
};
