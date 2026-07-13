import type { Lang } from './ui';

// Per-page UI strings for the translated core pages (en source; hi/mr contextual).

export interface DeptContent { title: string; description: string; eyebrow: string; h1: string; lead: string; explore: string }
export const deptContent: Record<Lang, DeptContent> = {
  en: {
    title: 'Departments & Treatments | Shubham Hospitals, Amravati',
    description: 'Explore our specialties: IVF & fertility, laparoscopy, obstetrics & gynecology, ultrasound, general surgery, fetal medicine & cosmetic gynecology in Amravati.',
    eyebrow: 'Multispecialty Care Under One Roof',
    h1: 'Departments & Treatments',
    lead: 'From advanced laparoscopy to personalized IVF care, explore the full range of specialties at Shubham Hi-Tech Hospital, Amravati.',
    explore: 'Explore department →',
  },
  hi: {
    title: 'विभाग एवं उपचार | शुभम हॉस्पिटल्स, अमरावती',
    description: 'हमारी विशेषज्ञताएँ देखें: आईवीएफ एवं प्रजनन, लेप्रोस्कोपी, प्रसूति एवं स्त्री रोग, अल्ट्रासाउंड, जनरल सर्जरी, भ्रूण चिकित्सा एवं कॉस्मेटिक गायनेकोलॉजी — अमरावती में।',
    eyebrow: 'एक ही छत के नीचे मल्टीस्पेशलिटी देखभाल',
    h1: 'विभाग एवं उपचार',
    lead: 'उन्नत लेप्रोस्कोपी से लेकर व्यक्तिगत आईवीएफ देखभाल तक, शुभम हाई-टेक हॉस्पिटल, अमरावती की सभी विशेषज्ञताएँ देखें।',
    explore: 'विभाग देखें →',
  },
  mr: {
    title: 'विभाग व उपचार | शुभम हॉस्पिटल्स, अमरावती',
    description: 'आमच्या विशेषता पाहा: आयव्हीएफ व प्रजनन, लॅपरोस्कोपी, प्रसूती व स्त्रीरोग, अल्ट्रासाऊंड, जनरल सर्जरी, गर्भ वैद्यकशास्त्र व कॉस्मेटिक स्त्रीरोग — अमरावतीत.',
    eyebrow: 'एकाच छताखाली मल्टीस्पेशालिटी काळजी',
    h1: 'विभाग व उपचार',
    lead: 'प्रगत लॅपरोस्कोपीपासून वैयक्तिक आयव्हीएफ काळजीपर्यंत, शुभम हाय-टेक हॉस्पिटल, अमरावतीच्या सर्व विशेषता पाहा.',
    explore: 'विभाग पाहा →',
  },
};

export interface DoctorsContent { title: string; description: string; eyebrow: string; h1: string; lead: string; viewProfile: string; ctaHeading: string; ctaText: string }
export const doctorsContent: Record<Lang, DoctorsContent> = {
  en: {
    title: 'Our Doctors | Best Gynecologists & Surgeons in Amravati',
    description: 'Meet the expert team at Shubham Hospitals, Amravati: Dr. Murlidhar Boob, Dr. Manjushree Boob, Dr. Manan Boob & Dr. Darshana Ajmera – specialists in IVF, gynecology & laparoscopy.',
    eyebrow: 'Our Team',
    h1: 'Meet Our Doctors',
    lead: 'Experienced specialists in IVF, gynecology, laparoscopy, general surgery and fetal medicine — caring for families across Amravati and Vidarbha.',
    viewProfile: 'View Full Profile',
    ctaHeading: 'Consult a specialist',
    ctaText: 'Book an appointment with the right doctor for your needs.',
  },
  hi: {
    title: 'हमारे डॉक्टर | अमरावती के सर्वश्रेष्ठ स्त्री रोग विशेषज्ञ एवं सर्जन',
    description: 'शुभम हॉस्पिटल्स, अमरावती की विशेषज्ञ टीम से मिलें: डॉ. मुरलीधर बूब, डॉ. मंजूश्री बूब, डॉ. मनन बूब एवं डॉ. दर्शना अजमेरा — आईवीएफ, स्त्री रोग एवं लेप्रोस्कोपी विशेषज्ञ।',
    eyebrow: 'हमारी टीम',
    h1: 'हमारे डॉक्टरों से मिलें',
    lead: 'आईवीएफ, स्त्री रोग, लेप्रोस्कोपी, जनरल सर्जरी और भ्रूण चिकित्सा के अनुभवी विशेषज्ञ — अमरावती और विदर्भ के परिवारों की देखभाल।',
    viewProfile: 'पूरा प्रोफ़ाइल देखें',
    ctaHeading: 'विशेषज्ञ से परामर्श लें',
    ctaText: 'अपनी ज़रूरत के अनुसार सही डॉक्टर से अपॉइंटमेंट बुक करें।',
  },
  mr: {
    title: 'आमचे डॉक्टर | अमरावतीतील सर्वोत्तम स्त्रीरोगतज्ञ व सर्जन',
    description: 'शुभम हॉस्पिटल्स, अमरावतीच्या तज्ज्ञ टीमला भेटा: डॉ. मुरलीधर बूब, डॉ. मंजूश्री बूब, डॉ. मनन बूब व डॉ. दर्शना अजमेरा — आयव्हीएफ, स्त्रीरोग व लॅपरोस्कोपी तज्ज्ञ.',
    eyebrow: 'आमची टीम',
    h1: 'आमच्या डॉक्टरांना भेटा',
    lead: 'आयव्हीएफ, स्त्रीरोग, लॅपरोस्कोपी, जनरल सर्जरी व गर्भ वैद्यकशास्त्रातील अनुभवी तज्ज्ञ — अमरावती व विदर्भातील कुटुंबांची काळजी.',
    viewProfile: 'संपूर्ण प्रोफाइल पाहा',
    ctaHeading: 'तज्ज्ञांचा सल्ला घ्या',
    ctaText: 'तुमच्या गरजेनुसार योग्य डॉक्टरची अपॉइंटमेंट बुक करा.',
  },
};
