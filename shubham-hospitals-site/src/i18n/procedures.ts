import type { Lang } from './ui';

// Strings for the procedure index page (/procedures/) and the single "Procedures"
// card that links to it from /departments/. Individual procedure pages are
// deliberately NOT in the nav dropdown, the homepage grid, or the departments
// grid — see BaseLayout deptOrder, HomeBody.astro and departments.astro.
export interface ProcContent {
  title: string; description: string; eyebrow: string; h1: string; lead: string;
  view: string; crumbHome: string; empty: string;
  cardTitle: string; cardBlurb: string; cardCta: string;
  // Used by treatments/[slug].astro when entry.data.kind === 'procedure', so a
  // procedure page reads Home › Procedures › <title> with a "Procedure" eyebrow
  // instead of inheriting the department chrome. crumbProcedures is the short
  // crumb label (not the page h1, which is longer).
  crumbProcedures: string; singleEyebrow: string;
}

export const procContent: Record<Lang, ProcContent> = {
  en: {
    title: 'Procedures We Perform | Shubham Hospitals, Amravati',
    description: 'Plain-language guides to the laparoscopic, hysteroscopic and fertility procedures performed at Shubham Hi-Tech Hospital, Amravati — what each involves, recovery and cost.',
    eyebrow: 'Surgical & Fertility Procedures',
    h1: 'Procedures We Perform',
    lead: 'Detailed, plain-language guides to each procedure — what it involves, how recovery actually goes, and what it is likely to cost.',
    view: 'View procedure →',
    crumbHome: 'Home',
    empty: 'Procedure guides are being added. In the meantime, please call +91-8668954915 and we will talk you through it.',
    cardTitle: 'Procedures',
    cardBlurb: 'Guides to individual procedures — laparoscopic, hysteroscopic and fertility — with recovery timelines and cost estimates.',
    cardCta: 'View all procedures →',
    crumbProcedures: 'Procedures',
    singleEyebrow: 'Procedure',
  },
  hi: {
    title: 'हमारी प्रक्रियाएँ | शुभम हॉस्पिटल्स, अमरावती',
    description: 'शुभम हाई-टेक हॉस्पिटल, अमरावती में की जाने वाली लेप्रोस्कोपिक, हिस्टेरोस्कोपिक एवं प्रजनन प्रक्रियाओं की सरल भाषा में जानकारी — प्रक्रिया, रिकवरी और अनुमानित खर्च।',
    eyebrow: 'सर्जिकल एवं प्रजनन प्रक्रियाएँ',
    h1: 'हमारी प्रक्रियाएँ',
    lead: 'हर प्रक्रिया की सरल भाषा में विस्तृत जानकारी — इसमें क्या होता है, रिकवरी कैसी रहती है, और खर्च कितना आ सकता है।',
    view: 'प्रक्रिया देखें →',
    crumbHome: 'होम',
    empty: 'प्रक्रियाओं की जानकारी जोड़ी जा रही है। तब तक कृपया +91-8668954915 पर कॉल करें, हम आपको पूरी जानकारी देंगे।',
    cardTitle: 'प्रक्रियाएँ',
    cardBlurb: 'अलग-अलग प्रक्रियाओं की जानकारी — लेप्रोस्कोपिक, हिस्टेरोस्कोपिक एवं प्रजनन — रिकवरी और अनुमानित खर्च सहित।',
    cardCta: 'सभी प्रक्रियाएँ देखें →',
    crumbProcedures: 'प्रक्रियाएँ',
    singleEyebrow: 'प्रक्रिया',
  },
  mr: {
    title: 'आमच्या प्रक्रिया | शुभम हॉस्पिटल्स, अमरावती',
    description: 'शुभम हाय-टेक हॉस्पिटल, अमरावती येथे केल्या जाणाऱ्या लॅपरोस्कोपिक, हिस्टेरोस्कोपिक व प्रजनन प्रक्रियांची सोप्या भाषेत माहिती — प्रक्रिया, बरे होणे आणि अंदाजित खर्च.',
    eyebrow: 'शस्त्रक्रिया व प्रजनन प्रक्रिया',
    h1: 'आमच्या प्रक्रिया',
    lead: 'प्रत्येक प्रक्रियेची सोप्या भाषेत सविस्तर माहिती — त्यात काय होते, बरे होण्यास किती वेळ लागतो, आणि खर्च किती येऊ शकतो.',
    view: 'प्रक्रिया पाहा →',
    crumbHome: 'मुख्यपृष्ठ',
    empty: 'प्रक्रियांची माहिती जोडली जात आहे. तोपर्यंत कृपया +91-8668954915 वर कॉल करा, आम्ही तुम्हाला सविस्तर सांगू.',
    cardTitle: 'प्रक्रिया',
    cardBlurb: 'वैयक्तिक प्रक्रियांची माहिती — लॅपरोस्कोपिक, हिस्टेरोस्कोपिक व प्रजनन — बरे होण्याचा कालावधी व अंदाजित खर्चासह.',
    cardCta: 'सर्व प्रक्रिया पाहा →',
    crumbProcedures: 'प्रक्रिया',
    singleEyebrow: 'प्रक्रिया',
  },
};
