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

export interface AboutContent {
  title: string; description: string; eyebrow: string; h1: string; heroLead: string;
  p1: string; historyH2: string; hist1: string; followYt: string;
  statLabels: [string, string, string, string];
  vmH2: string; visionH3: string; visionP: string; missionH3: string; missionP: string;
  expH2: string; expP: string;
  whyH2: string; whyLead: string; whyCards: { h: string; p: string; wa?: { text: string; label: string } }[]; founder: string;
  ctaHeading: string; ctaText: string;
}
export const aboutContent: Record<Lang, AboutContent> = {
  en: {
    title: "About Shubham Hospitals | Amravati's Trusted Care Since 1995",
    description: "Founded in 1995 by Dr. Murlidhar & Dr. Manjushree Boob, Shubham Hospitals is Amravati's leading multispecialty centre for IVF, laparoscopy, obstetrics & gynecology.",
    eyebrow: 'About Us · 30+ Years',
    h1: 'Welcome to Shubham Hospitals, Amravati',
    heroLead: 'Founded in 1995 by the visionary Dr. Murlidhar Boob and Dr. Manjushree Boob, Shubham Hospitals has been at the forefront of providing exceptional healthcare to the people of Amravati and beyond.',
    p1: 'Starting as a modest maternity and surgical care center, Shubham Hospitals has grown into a multispecialty center offering state-of-the-art treatments, including advanced laparoscopy, hysteroscopy, IVF, fertility treatments, high-risk obstetrics, and cosmetic gynecology. With over three decades of excellence, the hospital has evolved to become one of the most trusted names in the region’s healthcare landscape.',
    historyH2: 'A Rich History of Healthcare Excellence in Amravati',
    hist1: 'From its humble beginnings, Shubham Hospitals has always focused on providing quality care backed by advanced medical technologies. It quickly gained a reputation for its pioneering efforts in laparoscopic surgeries, becoming one of the first hospitals in the region to introduce minimally invasive surgery techniques. Over the years, this commitment to innovation led to the successful completion of over 25,000 laparoscopic surgeries and 10,000 gastrointestinal procedures.',
    followYt: 'Follow our work on YouTube.',
    statLabels: ['Safe Deliveries', 'Laparoscopic Surgeries', 'Years of Experience', 'IVF Babies'],
    vmH2: 'Vision and Mission',
    visionH3: 'Vision', visionP: 'Shubham Hospitals strives to bring the best of global healthcare advancements to Indian patients, particularly focusing on the people of Amravati and surrounding regions. The goal is to provide access to world-class treatments at affordable costs, ensuring that high-quality healthcare is accessible to all.',
    missionH3: 'Mission', missionP: 'The hospital’s mission is to combine cutting-edge technology, compassionate care, and clinical excellence to uphold the highest standards in women’s healthcare and minimally invasive surgery. Shubham Hospitals continues to be dedicated to improving the health and well-being of its patients with personalized and effective medical solutions.',
    expH2: 'Our Experience', expP: 'With over 30 years of dedicated service, Shubham Hospitals has established itself as a trusted name in healthcare. Founded in 1995 by Dr. Murlidhar Boob and Dr. Manjushree Boob, the hospital began as a modest maternity and surgical care center and has since grown into a leading multispecialty facility. Over the years, we have gained extensive experience in advanced laparoscopy, hysteroscopy, IVF, fertility treatments, high-risk obstetrics, and cosmetic gynecology.',
    whyH2: 'Why Choose Shubham Hospitals in Amravati',
    whyLead: 'From advanced laparoscopy to personalized IVF care, our experienced team combines modern technology with a compassionate, patient-first approach for every family in Amravati.',
    whyCards: [
      { h: 'Qualified Doctors', p: 'Decades of combined experience across our senior consultants.' },
      { h: 'Online Video Consultation', p: 'Book a video consultation with your specialist over WhatsApp.', wa: { text: 'Hello Shubham Hospitals, I would like to book a video consultation.', label: 'Book on WhatsApp →' } },
      { h: 'Instant Appointment', p: 'Quick scheduling with your specialist doctor.' },
      { h: '24 Hours Care Service', p: 'Round-the-clock support with our emergency care unit.' },
    ],
    founder: 'Dr. Murlidhar Boob — Founder & Director',
    ctaHeading: 'Ready to visit us?', ctaText: 'Book an appointment or call our team — we’re here to help.',
  },
  hi: {
    title: 'शुभम हॉस्पिटल्स के बारे में | 1995 से अमरावती का भरोसा',
    description: '1995 में डॉ. मुरलीधर एवं डॉ. मंजूश्री बूब द्वारा स्थापित, शुभम हॉस्पिटल्स अमरावती का अग्रणी मल्टीस्पेशलिटी केंद्र है — आईवीएफ, लेप्रोस्कोपी, प्रसूति एवं स्त्री रोग के लिए।',
    eyebrow: 'हमारे बारे में · 30+ वर्ष',
    h1: 'शुभम हॉस्पिटल्स, अमरावती में आपका स्वागत है',
    heroLead: '1995 में दूरदर्शी डॉ. मुरलीधर बूब और डॉ. मंजूश्री बूब द्वारा स्थापित, शुभम हॉस्पिटल्स अमरावती और आसपास के लोगों को उत्कृष्ट स्वास्थ्य सेवा देने में सबसे आगे रहा है।',
    p1: 'एक साधारण प्रसूति एवं सर्जिकल देखभाल केंद्र के रूप में शुरू होकर, शुभम हॉस्पिटल्स एक मल्टीस्पेशलिटी केंद्र बन गया है जो उन्नत लेप्रोस्कोपी, हिस्टेरोस्कोपी, आईवीएफ, प्रजनन उपचार, हाई-रिस्क प्रसूति और कॉस्मेटिक गायनेकोलॉजी सहित अत्याधुनिक उपचार देता है। तीन दशकों से अधिक की उत्कृष्टता के साथ, यह क्षेत्र के सबसे भरोसेमंद नामों में से एक बन गया है।',
    historyH2: 'अमरावती में स्वास्थ्य सेवा उत्कृष्टता का समृद्ध इतिहास',
    hist1: 'अपनी विनम्र शुरुआत से ही, शुभम हॉस्पिटल्स ने हमेशा उन्नत चिकित्सा तकनीकों के साथ गुणवत्तापूर्ण देखभाल पर ध्यान दिया है। लेप्रोस्कोपिक सर्जरी में अग्रणी प्रयासों के लिए इसने जल्दी ही ख्याति प्राप्त की और क्षेत्र में न्यूनतम चीरे वाली सर्जरी तकनीक शुरू करने वाले पहले अस्पतालों में से एक बना। वर्षों में, नवाचार की इस प्रतिबद्धता से 25,000 से अधिक लेप्रोस्कोपिक सर्जरी और 10,000 गैस्ट्रोइंटेस्टाइनल प्रक्रियाएँ सफलतापूर्वक पूरी हुईं।',
    followYt: 'यूट्यूब पर हमारा काम देखें।',
    statLabels: ['सुरक्षित प्रसव', 'लेप्रोस्कोपिक सर्जरी', 'वर्षों का अनुभव', 'आईवीएफ शिशु'],
    vmH2: 'दृष्टि एवं ध्येय',
    visionH3: 'दृष्टि', visionP: 'शुभम हॉस्पिटल्स वैश्विक स्वास्थ्य प्रगति का सर्वोत्तम भारतीय मरीज़ों तक, विशेषकर अमरावती और आसपास के लोगों तक पहुँचाने का प्रयास करता है। लक्ष्य है विश्वस्तरीय उपचार किफ़ायती दाम में उपलब्ध कराना, ताकि उच्च गुणवत्ता वाली स्वास्थ्य सेवा सभी के लिए सुलभ हो।',
    missionH3: 'ध्येय', missionP: 'अस्पताल का ध्येय है अत्याधुनिक तकनीक, संवेदनशील देखभाल और नैदानिक उत्कृष्टता को जोड़कर महिलाओं की स्वास्थ्य सेवा और न्यूनतम चीरे वाली सर्जरी में उच्चतम मानक बनाए रखना। शुभम हॉस्पिटल्स व्यक्तिगत और प्रभावी चिकित्सा समाधानों से मरीज़ों के स्वास्थ्य को बेहतर बनाने के लिए समर्पित है।',
    expH2: 'हमारा अनुभव', expP: '30 वर्षों से अधिक की समर्पित सेवा के साथ, शुभम हॉस्पिटल्स ने स्वास्थ्य सेवा में एक भरोसेमंद नाम बनाया है। 1995 में डॉ. मुरलीधर बूब और डॉ. मंजूश्री बूब द्वारा स्थापित, यह अस्पताल एक साधारण प्रसूति एवं सर्जिकल देखभाल केंद्र के रूप में शुरू हुआ और अब एक अग्रणी मल्टीस्पेशलिटी सुविधा बन गया है। वर्षों में हमने उन्नत लेप्रोस्कोपी, हिस्टेरोस्कोपी, आईवीएफ, प्रजनन उपचार, हाई-रिस्क प्रसूति और कॉस्मेटिक गायनेकोलॉजी में व्यापक अनुभव प्राप्त किया है।',
    whyH2: 'अमरावती में शुभम हॉस्पिटल्स क्यों चुनें',
    whyLead: 'उन्नत लेप्रोस्कोपी से लेकर व्यक्तिगत आईवीएफ देखभाल तक, हमारी अनुभवी टीम आधुनिक तकनीक को संवेदनशील, मरीज़-प्रथम दृष्टिकोण के साथ जोड़ती है — अमरावती के हर परिवार के लिए।',
    whyCards: [
      { h: 'योग्य डॉक्टर', p: 'हमारे वरिष्ठ सलाहकारों का दशकों का संयुक्त अनुभव।' },
      { h: 'ऑनलाइन वीडियो परामर्श', p: 'व्हाट्सएप पर अपने विशेषज्ञ से वीडियो परामर्श बुक करें।', wa: { text: 'नमस्ते शुभम हॉस्पिटल्स, मैं वीडियो परामर्श बुक करना चाहता/चाहती हूँ।', label: 'व्हाट्सएप पर बुक करें →' } },
      { h: 'त्वरित अपॉइंटमेंट', p: 'अपने विशेषज्ञ डॉक्टर के साथ जल्दी शेड्यूलिंग।' },
      { h: '24 घंटे देखभाल सेवा', p: 'हमारी आपातकालीन इकाई के साथ चौबीसों घंटे सहायता।' },
    ],
    founder: 'डॉ. मुरलीधर बूब — संस्थापक एवं निदेशक',
    ctaHeading: 'हमसे मिलने के लिए तैयार हैं?', ctaText: 'अपॉइंटमेंट बुक करें या हमारी टीम को कॉल करें — हम मदद के लिए यहाँ हैं।',
  },
  mr: {
    title: 'शुभम हॉस्पिटल्सविषयी | 1995 पासून अमरावतीचा विश्वास',
    description: '1995 मध्ये डॉ. मुरलीधर व डॉ. मंजूश्री बूब यांनी स्थापन केलेले शुभम हॉस्पिटल्स हे अमरावतीतील आघाडीचे मल्टीस्पेशालिटी केंद्र आहे — आयव्हीएफ, लॅपरोस्कोपी, प्रसूती व स्त्रीरोगासाठी.',
    eyebrow: 'आमच्याविषयी · 30+ वर्षे',
    h1: 'शुभम हॉस्पिटल्स, अमरावतीमध्ये आपले स्वागत आहे',
    heroLead: '1995 मध्ये द्रष्टे डॉ. मुरलीधर बूब व डॉ. मंजूश्री बूब यांनी स्थापन केलेले शुभम हॉस्पिटल्स अमरावती व परिसरातील लोकांना उत्कृष्ट आरोग्यसेवा देण्यात आघाडीवर आहे.',
    p1: 'साध्या प्रसूती व शस्त्रक्रिया काळजी केंद्र म्हणून सुरुवात करून, शुभम हॉस्पिटल्स आता प्रगत लॅपरोस्कोपी, हिस्टेरोस्कोपी, आयव्हीएफ, प्रजनन उपचार, हाय-रिस्क प्रसूती व कॉस्मेटिक स्त्रीरोगासह अत्याधुनिक उपचार देणारे मल्टीस्पेशालिटी केंद्र बनले आहे. तीन दशकांहून अधिक उत्कृष्टतेसह ते या भागातील सर्वात विश्वासार्ह नावांपैकी एक बनले आहे.',
    historyH2: 'अमरावतीतील आरोग्यसेवा उत्कृष्टतेचा समृद्ध इतिहास',
    hist1: 'साध्या सुरुवातीपासूनच शुभम हॉस्पिटल्सने प्रगत वैद्यकीय तंत्रज्ञानासह दर्जेदार काळजीवर भर दिला आहे. लॅपरोस्कोपिक शस्त्रक्रियेतील अग्रणी प्रयत्नांमुळे त्याने लवकरच नाव कमावले आणि या भागात कमी छेदाच्या शस्त्रक्रिया तंत्राची सुरुवात करणार्या पहिल्या रुग्णालयांपैकी एक ठरले. वर्षानुवर्षे या नवोपक्रमाच्या बांधिलकीमुळे 25,000 हून अधिक लॅपरोस्कोपिक शस्त्रक्रिया व 10,000 गॅस्ट्रोइंटेस्टाइनल प्रक्रिया यशस्वीपणे पूर्ण झाल्या.',
    followYt: 'यूट्यूबवर आमचे काम पाहा.',
    statLabels: ['सुरक्षित प्रसूती', 'लॅपरोस्कोपिक शस्त्रक्रिया', 'वर्षांचा अनुभव', 'आयव्हीएफ बाळे'],
    vmH2: 'दृष्टी व ध्येय',
    visionH3: 'दृष्टी', visionP: 'शुभम हॉस्पिटल्स जागतिक आरोग्यसेवेतील प्रगती भारतीय रुग्णांपर्यंत, विशेषतः अमरावती व परिसरातील लोकांपर्यंत पोहोचवण्याचा प्रयत्न करते. जागतिक दर्जाचे उपचार परवडणार्या दरात उपलब्ध करून देणे, जेणेकरून दर्जेदार आरोग्यसेवा सर्वांना मिळेल, हे उद्दिष्ट आहे.',
    missionH3: 'ध्येय', missionP: 'अत्याधुनिक तंत्रज्ञान, संवेदनशील काळजी व क्लिनिकल उत्कृष्टता एकत्र करून महिलांच्या आरोग्यसेवेत व कमी छेदाच्या शस्त्रक्रियेत सर्वोच्च दर्जा राखणे हे रुग्णालयाचे ध्येय आहे. शुभम हॉस्पिटल्स वैयक्तिक व परिणामकारक वैद्यकीय उपायांनी रुग्णांचे आरोग्य सुधारण्यासाठी समर्पित आहे.',
    expH2: 'आमचा अनुभव', expP: '30 वर्षांहून अधिक समर्पित सेवेसह शुभम हॉस्पिटल्सने आरोग्यसेवेत विश्वासार्ह नाव कमावले आहे. 1995 मध्ये डॉ. मुरलीधर बूब व डॉ. मंजूश्री बूब यांनी स्थापन केलेले हे रुग्णालय साध्या प्रसूती व शस्त्रक्रिया काळजी केंद्र म्हणून सुरू झाले व आता आघाडीचे मल्टीस्पेशालिटी केंद्र बनले आहे. वर्षानुवर्षे आम्ही प्रगत लॅपरोस्कोपी, हिस्टेरोस्कोपी, आयव्हीएफ, प्रजनन उपचार, हाय-रिस्क प्रसूती व कॉस्मेटिक स्त्रीरोगात व्यापक अनुभव मिळवला आहे.',
    whyH2: 'अमरावतीत शुभम हॉस्पिटल्स का निवडावे',
    whyLead: 'प्रगत लॅपरोस्कोपीपासून वैयक्तिक आयव्हीएफ काळजीपर्यंत, आमची अनुभवी टीम आधुनिक तंत्रज्ञान संवेदनशील, रुग्ण-प्रथम दृष्टिकोनासह एकत्र करते — अमरावतीतील प्रत्येक कुटुंबासाठी.',
    whyCards: [
      { h: 'पात्र डॉक्टर', p: 'आमच्या ज्येष्ठ सल्लागारांचा दशकांचा एकत्रित अनुभव.' },
      { h: 'ऑनलाइन व्हिडिओ सल्ला', p: 'व्हॉट्सअ‍ॅपवर तुमच्या तज्ज्ञांसोबत व्हिडिओ सल्ला बुक करा.', wa: { text: 'नमस्कार शुभम हॉस्पिटल्स, मला व्हिडिओ सल्ला बुक करायचा आहे.', label: 'व्हॉट्सअ‍ॅपवर बुक करा →' } },
      { h: 'त्वरित अपॉइंटमेंट', p: 'तुमच्या तज्ज्ञ डॉक्टरांसोबत जलद वेळ ठरवा.' },
      { h: '24 तास काळजी सेवा', p: 'आमच्या आपत्कालीन विभागासह चोवीस तास सहाय्य.' },
    ],
    founder: 'डॉ. मुरलीधर बूब — संस्थापक व संचालक',
    ctaHeading: 'आम्हाला भेटायला तयार आहात?', ctaText: 'अपॉइंटमेंट बुक करा किंवा आमच्या टीमला कॉल करा — आम्ही मदतीसाठी येथे आहोत.',
  },
};

export interface ContactContent {
  title: string; description: string; eyebrow: string; h1: string; heroLead: string;
  phoneH3: string; phoneNote: string; emailH3: string; addressH3: string; opd: string;
  formHeading: string; findUs: string;
}
export const contactContent: Record<Lang, ContactContent> = {
  en: {
    title: 'Contact Us | Shubham Hospitals, Badnera Rd, Amravati',
    description: 'Visit Shubham Hospitals at Badnera Rd, opp. Mantri Motors, Amravati. Call +91-8668954915 for appointments. 24x7 emergency care available.',
    eyebrow: 'We’re Here to Help', h1: 'Contact Us',
    heroLead: 'Book an appointment, get directions, or reach our 24x7 emergency team.',
    phoneH3: 'Phone', phoneNote: 'Emergency: 24x7, Mon–Sun', emailH3: 'Email', addressH3: 'Address',
    opd: 'OPD: Mon–Sat, 11 AM–5 PM & 7–9:30 PM · Sun closed',
    formHeading: 'Send Us A Message', findUs: 'Find Us',
  },
  hi: {
    title: 'संपर्क करें | शुभम हॉस्पिटल्स, बडनेरा रोड, अमरावती',
    description: 'शुभम हॉस्पिटल्स, बडनेरा रोड, मंत्री मोटर्स के सामने, अमरावती पर आएँ। अपॉइंटमेंट के लिए +91-8668954915 पर कॉल करें। 24x7 आपातकालीन देखभाल उपलब्ध।',
    eyebrow: 'हम मदद के लिए यहाँ हैं', h1: 'संपर्क करें',
    heroLead: 'अपॉइंटमेंट बुक करें, रास्ता जानें, या हमारी 24x7 आपातकालीन टीम से संपर्क करें।',
    phoneH3: 'फ़ोन', phoneNote: 'आपातकालीन: 24x7, सोम–रवि', emailH3: 'ईमेल', addressH3: 'पता',
    opd: 'ओपीडी: सोम–शनि, सुबह 11–शाम 5 बजे और शाम 7–9:30 बजे · रविवार बंद',
    formHeading: 'हमें संदेश भेजें', findUs: 'हमें ढूँढें',
  },
  mr: {
    title: 'संपर्क करा | शुभम हॉस्पिटल्स, बडनेरा रोड, अमरावती',
    description: 'शुभम हॉस्पिटल्स, बडनेरा रोड, मंत्री मोटर्ससमोर, अमरावती येथे भेट द्या. अपॉइंटमेंटसाठी +91-8668954915 वर कॉल करा. 24x7 आपत्कालीन काळजी उपलब्ध.',
    eyebrow: 'आम्ही मदतीसाठी येथे आहोत', h1: 'संपर्क करा',
    heroLead: 'अपॉइंटमेंट बुक करा, मार्ग जाणून घ्या, किंवा आमच्या 24x7 आपत्कालीन टीमशी संपर्क साधा.',
    phoneH3: 'फोन', phoneNote: 'आपत्कालीन: 24x7, सोम–रवि', emailH3: 'ईमेल', addressH3: 'पत्ता',
    opd: 'ओपीडी: सोम–शनि, सकाळी 11–सायं 5 व सायं 7–9:30 · रविवार बंद',
    formHeading: 'आम्हाला संदेश पाठवा', findUs: 'आम्हाला शोधा',
  },
};
