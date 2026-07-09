import type { Lang } from './ui';

export interface HomeStrings {
  title: string; description: string; ogTitle: string; ogDescription: string;
  heroEyebrow: string; heroH1: string; heroLead: string; btnBook: string; btnKnow: string;
  statLabels: [string, string, string, string];
  servicesBadge: string; servicesH2: string; learnMore: string;
  bestLaparo: string; bestIvf: string;
  laparoEyebrow: string; laparoH2: string; laparoLead: string; laparoBtn1: string; laparoBtn2: string;
  laparoMoreH3: string; advancedCare: { title: string; desc: string }[];
  teamBadge: string; teamH2: string; viewProfile: string;
  blogBadge: string; blogH2: string; viewAll: string;
}

export const homeStrings: Record<Lang, HomeStrings> = {
  en: {
    title: 'Shubham Hi-Tech Hospital, Amravati | IVF & Laparoscopy',
    description: 'Shubham Hi-Tech Hospital & Test Tube Baby Centre, Amravati – 30+ years of trusted care in IVF, high-risk pregnancy, laparoscopy & gynecology at affordable cost. Book today.',
    ogTitle: 'Shubham Hi-Tech Hospital & Test Tube Baby Centre | Amravati',
    ogDescription: 'IVF, gynecology, laparoscopy & maternity care. 30+ years of trust in Amravati.',
    heroEyebrow: 'Since 1995 · Amravati, Maharashtra',
    heroH1: 'Shubham Hi-Tech Hospital & Test Tube Baby Centre — Best IVF & Laparoscopy Centre in Amravati',
    heroLead: 'At Shubham Hi-Tech Hospital, we prioritize your well-being with expert care, advanced technology, and a compassionate touch. Whether it’s routine check-ups or specialized treatment, we are here to provide exceptional healthcare every step of the way.',
    btnBook: 'Book Appointment', btnKnow: 'Know More',
    statLabels: ['Safe Deliveries', 'Laparoscopic Surgeries', 'IVF Babies', 'Years of Experience'],
    servicesBadge: 'Departments', servicesH2: 'Our Healthcare Services in Amravati', learnMore: 'Learn more →',
    bestLaparo: 'Best laparoscopic surgeon →', bestIvf: 'Best IVF centre →',
    laparoEyebrow: 'Advanced Technology',
    laparoH2: '3D Laparoscopy — the most advanced keyhole surgery in Amravati district',
    laparoLead: 'Shubham Hospitals is home to the district’s most advanced 3D laparoscopy system. Unlike conventional 2D laparoscopy, 3D visualisation gives our surgeons true depth perception — meaning greater precision, shorter operating times, less blood loss and faster recovery. Led by Dr. Manan Boob (MS ObGyn – Gold Medalist, DNB, F.MAS), our team performs advanced 3D laparo-hysteroscopic procedures for fibroids, endometriosis, ovarian cysts and complex hysterectomies.',
    laparoBtn1: 'Explore Laparoscopy & Hysteroscopy', laparoBtn2: 'Meet Dr. Manan Boob',
    laparoMoreH3: 'More advanced care at Shubham',
    advancedCare: [
      { title: 'Advanced IVF-ICSI', desc: 'Personalized, evidence-based fertility care including IVF, ICSI, and advanced reproductive technologies.' },
      { title: 'Surgical Gastroenterology', desc: 'Minimally invasive surgical care for abdominal, gastrointestinal, and emergency surgical conditions.' },
      { title: 'Cosmetic Gynecology', desc: 'Safe, advanced procedures to enhance feminine comfort, function, and aesthetic confidence.' },
    ],
    teamBadge: 'Our Team', teamH2: 'Meet Our Doctors', viewProfile: 'View profile →',
    blogBadge: 'Health Blog', blogH2: 'Latest from Our Doctors', viewAll: 'View all articles',
  },
  hi: {
    title: 'शुभम हाई-टेक हॉस्पिटल, अमरावती | आईवीएफ एवं लेप्रोस्कोपी',
    description: 'शुभम हाई-टेक हॉस्पिटल एवं टेस्ट ट्यूब बेबी सेंटर, अमरावती — आईवीएफ, हाई-रिस्क प्रेग्नेंसी, लेप्रोस्कोपी एवं स्त्री रोग में 30+ वर्षों की भरोसेमंद देखभाल, किफ़ायती दाम में। आज ही बुक करें।',
    ogTitle: 'शुभम हाई-टेक हॉस्पिटल एवं टेस्ट ट्यूब बेबी सेंटर | अमरावती',
    ogDescription: 'आईवीएफ, स्त्री रोग, लेप्रोस्कोपी एवं प्रसूति देखभाल। अमरावती में 30+ वर्षों का भरोसा।',
    heroEyebrow: '1995 से · अमरावती, महाराष्ट्र',
    heroH1: 'शुभम हाई-टेक हॉस्पिटल एवं टेस्ट ट्यूब बेबी सेंटर — अमरावती का सर्वश्रेष्ठ आईवीएफ एवं लेप्रोस्कोपी केंद्र',
    heroLead: 'शुभम हाई-टेक हॉस्पिटल में हम विशेषज्ञ देखभाल, उन्नत तकनीक और संवेदनशील स्पर्श के साथ आपके स्वास्थ्य को प्राथमिकता देते हैं। चाहे नियमित जाँच हो या विशेष उपचार, हम हर कदम पर उत्कृष्ट स्वास्थ्य सेवा देने के लिए तत्पर हैं।',
    btnBook: 'अपॉइंटमेंट बुक करें', btnKnow: 'और जानें',
    statLabels: ['सुरक्षित प्रसव', 'लेप्रोस्कोपिक सर्जरी', 'आईवीएफ शिशु', 'वर्षों का अनुभव'],
    servicesBadge: 'विभाग', servicesH2: 'अमरावती में हमारी स्वास्थ्य सेवाएँ', learnMore: 'और जानें →',
    bestLaparo: 'सर्वश्रेष्ठ लेप्रोस्कोपिक सर्जन →', bestIvf: 'सर्वश्रेष्ठ आईवीएफ केंद्र →',
    laparoEyebrow: 'उन्नत तकनीक',
    laparoH2: '3D लेप्रोस्कोपी — अमरावती ज़िले की सबसे उन्नत कीहोल सर्जरी',
    laparoLead: 'शुभम हॉस्पिटल्स में ज़िले की सबसे उन्नत 3D लेप्रोस्कोपी प्रणाली है। पारंपरिक 2D लेप्रोस्कोपी के विपरीत, 3D दृश्य हमारे सर्जनों को वास्तविक गहराई का बोध देता है — यानी अधिक सटीकता, कम ऑपरेशन समय, कम रक्तस्राव और तेज़ रिकवरी। डॉ. मनन बूब (MS ObGyn – गोल्ड मेडलिस्ट, DNB, F.MAS) के नेतृत्व में हमारी टीम फाइब्रॉइड, एंडोमेट्रियोसिस, ओवेरियन सिस्ट और जटिल हिस्टेरेक्टॉमी के लिए उन्नत 3D लेप्रो-हिस्टेरोस्कोपिक प्रक्रियाएँ करती है।',
    laparoBtn1: 'लेप्रोस्कोपी एवं हिस्टेरोस्कोपी देखें', laparoBtn2: 'डॉ. मनन बूब से मिलें',
    laparoMoreH3: 'शुभम में और भी उन्नत देखभाल',
    advancedCare: [
      { title: 'उन्नत आईवीएफ-ICSI', desc: 'IVF, ICSI और उन्नत प्रजनन तकनीकों सहित व्यक्तिगत, प्रमाण-आधारित प्रजनन देखभाल।' },
      { title: 'सर्जिकल गैस्ट्रोएंट्रोलॉजी', desc: 'पेट, पाचन तंत्र और आपातकालीन सर्जिकल स्थितियों के लिए न्यूनतम चीरे वाली सर्जिकल देखभाल।' },
      { title: 'कॉस्मेटिक गायनेकोलॉजी', desc: 'स्त्री आराम, कार्य और सौंदर्य आत्मविश्वास बढ़ाने वाली सुरक्षित, उन्नत प्रक्रियाएँ।' },
    ],
    teamBadge: 'हमारी टीम', teamH2: 'हमारे डॉक्टरों से मिलें', viewProfile: 'प्रोफ़ाइल देखें →',
    blogBadge: 'स्वास्थ्य ब्लॉग', blogH2: 'हमारे डॉक्टरों की नवीनतम जानकारी', viewAll: 'सभी लेख देखें',
  },
  mr: {
    title: 'शुभम हाय-टेक हॉस्पिटल, अमरावती | आयव्हीएफ व लॅपरोस्कोपी',
    description: 'शुभम हाय-टेक हॉस्पिटल व टेस्ट ट्यूब बेबी सेंटर, अमरावती — आयव्हीएफ, हाय-रिस्क गर्भधारणा, लॅपरोस्कोपी व स्त्रीरोगात 30+ वर्षांची विश्वासार्ह काळजी, परवडणाऱ्या दरात. आजच बुक करा.',
    ogTitle: 'शुभम हाय-टेक हॉस्पिटल व टेस्ट ट्यूब बेबी सेंटर | अमरावती',
    ogDescription: 'आयव्हीएफ, स्त्रीरोग, लॅपरोस्कोपी व प्रसूती काळजी. अमरावतीत 30+ वर्षांचा विश्वास.',
    heroEyebrow: '1995 पासून · अमरावती, महाराष्ट्र',
    heroH1: 'शुभम हाय-टेक हॉस्पिटल व टेस्ट ट्यूब बेबी सेंटर — अमरावतीतील सर्वोत्तम आयव्हीएफ व लॅपरोस्कोपी केंद्र',
    heroLead: 'शुभम हाय-टेक हॉस्पिटलमध्ये आम्ही तज्ज्ञ काळजी, प्रगत तंत्रज्ञान व संवेदनशील स्पर्शाने तुमच्या आरोग्याला प्राधान्य देतो. नियमित तपासणी असो वा विशेष उपचार, प्रत्येक टप्प्यावर उत्कृष्ट आरोग्यसेवा देण्यासाठी आम्ही तत्पर आहोत.',
    btnBook: 'अपॉइंटमेंट बुक करा', btnKnow: 'अधिक जाणून घ्या',
    statLabels: ['सुरक्षित प्रसूती', 'लॅपरोस्कोपिक शस्त्रक्रिया', 'आयव्हीएफ बाळे', 'वर्षांचा अनुभव'],
    servicesBadge: 'विभाग', servicesH2: 'अमरावतीतील आमच्या आरोग्यसेवा', learnMore: 'अधिक जाणून घ्या →',
    bestLaparo: 'सर्वोत्तम लॅपरोस्कोपिक सर्जन →', bestIvf: 'सर्वोत्तम आयव्हीएफ केंद्र →',
    laparoEyebrow: 'प्रगत तंत्रज्ञान',
    laparoH2: '3D लॅपरोस्कोपी — अमरावती जिल्ह्यातील सर्वात प्रगत कीहोल शस्त्रक्रिया',
    laparoLead: 'शुभम हॉस्पिटल्समध्ये जिल्ह्यातील सर्वात प्रगत 3D लॅपरोस्कोपी प्रणाली आहे. पारंपरिक 2D लॅपरोस्कोपीच्या विरुद्ध, 3D दृश्य आमच्या सर्जनना खरी खोली-जाणीव देते — म्हणजे अधिक अचूकता, कमी शस्त्रक्रिया वेळ, कमी रक्तस्राव व जलद रिकव्हरी. डॉ. मनन बूब (MS ObGyn – गोल्ड मेडलिस्ट, DNB, F.MAS) यांच्या नेतृत्वाखाली आमची टीम फायब्रॉइड, एंडोमेट्रिओसिस, ओव्हेरियन सिस्ट व गुंतागुंतीच्या हिस्टेरेक्टॉमीसाठी प्रगत 3D लॅपरो-हिस्टेरोस्कोपिक प्रक्रिया करते.',
    laparoBtn1: 'लॅपरोस्कोपी व हिस्टेरोस्कोपी पाहा', laparoBtn2: 'डॉ. मनन बूब यांना भेटा',
    laparoMoreH3: 'शुभममध्ये अधिक प्रगत काळजी',
    advancedCare: [
      { title: 'प्रगत आयव्हीएफ-ICSI', desc: 'IVF, ICSI व प्रगत प्रजनन तंत्रांसह वैयक्तिक, पुराव्यावर आधारित प्रजनन काळजी.' },
      { title: 'सर्जिकल गॅस्ट्रोएन्टेरॉलॉजी', desc: 'पोट, पचनसंस्था व आपत्कालीन शस्त्रक्रिया स्थितींसाठी कमी छेदाची शस्त्रक्रिया काळजी.' },
      { title: 'कॉस्मेटिक स्त्रीरोग', desc: 'स्त्री आराम, कार्य व सौंदर्य आत्मविश्वास वाढवणाऱ्या सुरक्षित, प्रगत प्रक्रिया.' },
    ],
    teamBadge: 'आमची टीम', teamH2: 'आमच्या डॉक्टरांना भेटा', viewProfile: 'प्रोफाइल पाहा →',
    blogBadge: 'आरोग्य ब्लॉग', blogH2: 'आमच्या डॉक्टरांकडून नवीनतम', viewAll: 'सर्व लेख पाहा',
  },
};

// Service card title + blurb per treatment slug.
export const treatmentCards: Record<Lang, Record<string, { title: string; blurb: string }>> = {
  en: {
    'advanced-laparoscopy-hysteroscopy': { title: 'Advanced Laparoscopy & Hysteroscopy', blurb: 'Minimally invasive surgical solutions for gynecologic conditions with faster recovery and greater precision.' },
    'obstetrics-gynecology': { title: 'Obstetrics & Gynecology', blurb: 'Comprehensive women’s healthcare, from routine gynecology to high-risk pregnancy management.' },
    'ivf-fertility-treatments': { title: 'IVF & Fertility Treatments', blurb: 'Personalized, evidence-based fertility care including IVF, ICSI, and advanced reproductive technologies.' },
    'ultrasound-imaging': { title: 'Ultrasound & Imaging', blurb: 'High-resolution pregnancy and pelvic imaging for accurate diagnosis and treatment planning.' },
    'fetal-medicine': { title: 'Fetal Medicine', blurb: 'Specialized fetal evaluation and screening to ensure early detection of developmental concerns.' },
    'general-surgery-gastroenterology': { title: 'General Surgery & Gastroenterology', blurb: 'Minimally invasive surgical care for abdominal, gastrointestinal, and emergency surgical conditions.' },
    'cosmetic-aesthetic-gynecology': { title: 'Cosmetic & Aesthetic Gynecology', blurb: 'Safe, advanced procedures to enhance feminine comfort, function, and aesthetic confidence.' },
  },
  hi: {
    'advanced-laparoscopy-hysteroscopy': { title: 'उन्नत लेप्रोस्कोपी एवं हिस्टेरोस्कोपी', blurb: 'तेज़ रिकवरी और अधिक सटीकता के साथ स्त्री रोग स्थितियों के लिए न्यूनतम चीरे वाले सर्जिकल समाधान।' },
    'obstetrics-gynecology': { title: 'प्रसूति एवं स्त्री रोग', blurb: 'नियमित स्त्री रोग से लेकर हाई-रिस्क प्रेग्नेंसी प्रबंधन तक, महिलाओं की संपूर्ण स्वास्थ्य देखभाल।' },
    'ivf-fertility-treatments': { title: 'आईवीएफ एवं प्रजनन उपचार', blurb: 'IVF, ICSI और उन्नत प्रजनन तकनीकों सहित व्यक्तिगत, प्रमाण-आधारित प्रजनन देखभाल।' },
    'ultrasound-imaging': { title: 'अल्ट्रासाउंड एवं इमेजिंग', blurb: 'सटीक निदान और उपचार योजना के लिए उच्च-रिज़ॉल्यूशन गर्भावस्था और पेल्विक इमेजिंग।' },
    'fetal-medicine': { title: 'भ्रूण चिकित्सा', blurb: 'विकास संबंधी चिंताओं की जल्दी पहचान सुनिश्चित करने हेतु विशेष भ्रूण मूल्यांकन और स्क्रीनिंग।' },
    'general-surgery-gastroenterology': { title: 'जनरल सर्जरी एवं गैस्ट्रोएंट्रोलॉजी', blurb: 'पेट, पाचन तंत्र और आपातकालीन सर्जिकल स्थितियों के लिए न्यूनतम चीरे वाली सर्जिकल देखभाल।' },
    'cosmetic-aesthetic-gynecology': { title: 'कॉस्मेटिक एवं एस्थेटिक गायनेकोलॉजी', blurb: 'स्त्री आराम, कार्य और सौंदर्य आत्मविश्वास बढ़ाने वाली सुरक्षित, उन्नत प्रक्रियाएँ।' },
  },
  mr: {
    'advanced-laparoscopy-hysteroscopy': { title: 'प्रगत लॅपरोस्कोपी व हिस्टेरोस्कोपी', blurb: 'जलद रिकव्हरी व अधिक अचूकतेसह स्त्रीरोग स्थितींसाठी कमी छेदाचे शस्त्रक्रिया उपाय.' },
    'obstetrics-gynecology': { title: 'प्रसूती व स्त्रीरोग', blurb: 'नियमित स्त्रीरोगापासून हाय-रिस्क गर्भधारणा व्यवस्थापनापर्यंत, महिलांची संपूर्ण आरोग्य काळजी.' },
    'ivf-fertility-treatments': { title: 'आयव्हीएफ व प्रजनन उपचार', blurb: 'IVF, ICSI व प्रगत प्रजनन तंत्रांसह वैयक्तिक, पुराव्यावर आधारित प्रजनन काळजी.' },
    'ultrasound-imaging': { title: 'अल्ट्रासाऊंड व इमेजिंग', blurb: 'अचूक निदान व उपचार नियोजनासाठी उच्च-रिझोल्यूशन गर्भधारणा व पेल्विक इमेजिंग.' },
    'fetal-medicine': { title: 'गर्भ वैद्यकशास्त्र', blurb: 'विकासासंबंधी चिंता लवकर ओळखण्यासाठी विशेष गर्भ मूल्यांकन व स्क्रीनिंग.' },
    'general-surgery-gastroenterology': { title: 'जनरल सर्जरी व गॅस्ट्रोएन्टेरॉलॉजी', blurb: 'पोट, पचनसंस्था व आपत्कालीन शस्त्रक्रिया स्थितींसाठी कमी छेदाची शस्त्रक्रिया काळजी.' },
    'cosmetic-aesthetic-gynecology': { title: 'कॉस्मेटिक व एस्थेटिक स्त्रीरोग', blurb: 'स्त्री आराम, कार्य व सौंदर्य आत्मविश्वास वाढवणाऱ्या सुरक्षित, प्रगत प्रक्रिया.' },
  },
};

// Doctor role translations by slug (names & qualification abbreviations stay as-is).
export const doctorRole: Record<Lang, Record<string, string>> = {
  en: {
    'dr-murlidhar': 'Laparoscopic Surgeon & Surgical Gastroenterologist',
    'dr-manjushree': 'Infertility & IVF Consultant, Obstetrician & Gynecologist',
    'dr-manan': 'Advanced Laparo-Hysteroscopic Surgeon, Gynecologist',
    'dr-darshana': 'Obstetrician, Gynecologist & Fetal Medicine Specialist',
  },
  hi: {
    'dr-murlidhar': 'लेप्रोस्कोपिक सर्जन एवं सर्जिकल गैस्ट्रोएंट्रोलॉजिस्ट',
    'dr-manjushree': 'बांझपन एवं आईवीएफ सलाहकार, प्रसूति एवं स्त्री रोग विशेषज्ञ',
    'dr-manan': 'उन्नत लेप्रो-हिस्टेरोस्कोपिक सर्जन, स्त्री रोग विशेषज्ञ',
    'dr-darshana': 'प्रसूति, स्त्री रोग एवं भ्रूण चिकित्सा विशेषज्ञ',
  },
  mr: {
    'dr-murlidhar': 'लॅपरोस्कोपिक सर्जन व सर्जिकल गॅस्ट्रोएन्टेरॉलॉजिस्ट',
    'dr-manjushree': 'वंध्यत्व व आयव्हीएफ सल्लागार, प्रसूती व स्त्रीरोग तज्ज्ञ',
    'dr-manan': 'प्रगत लॅपरो-हिस्टेरोस्कोपिक सर्जन, स्त्रीरोग तज्ज्ञ',
    'dr-darshana': 'प्रसूती, स्त्रीरोग व गर्भ वैद्यकशास्त्र तज्ज्ञ',
  },
};
