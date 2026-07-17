import type { Lang } from '../i18n/ui';

export interface Faq { q: string; a: string }
export interface FaqCategory { id: string; heading: string; faqs: Faq[] }

// Exhaustive FAQ content for AEO/GEO. English is authoritative; hi/mr are
// contextual translations reviewed by the clinical team. Answers are kept
// general and educational — no invented prices, stats, or specific claims.
const en: FaqCategory[] = [
  {
    id: 'ivf-fertility',
    heading: 'IVF & Fertility Treatments',
    faqs: [
      { q: 'What fertility treatments are available at Shubham Hospitals in Amravati?', a: 'We offer a full range of fertility care — from basic evaluation and ovulation induction to IUI, IVF and ICSI. Care is personalised after assessing both partners, so couples receive the least invasive treatment likely to work for them.' },
      { q: 'When should a couple see a fertility specialist?', a: 'Generally after 12 months of trying without success, or after 6 months if the woman is over 35. See a specialist sooner if there are irregular periods, known PCOS or endometriosis, previous pelvic surgery, or a history of miscarriage.' },
      { q: 'What is the difference between IUI, IVF and ICSI?', a: 'IUI places prepared sperm directly in the uterus. IVF fertilises eggs and sperm in the lab and transfers an embryo. ICSI injects a single sperm into each egg and is used mainly for male-factor infertility. Your doctor advises which suits you.' },
      { q: 'Does male infertility get tested too?', a: 'Yes. Roughly half of infertility involves a male factor, so a semen analysis is part of the initial workup. Further tests and treatment for the male partner are arranged when needed, alongside the woman’s evaluation.' },
      { q: 'Is IVF painful, and how long does one cycle take?', a: 'Most steps cause mild discomfort rather than pain. A typical IVF cycle runs about two to three weeks from the start of stimulation to embryo transfer, followed by a pregnancy test around two weeks later. Your team explains each step in advance.' },
      { q: 'What affects the success of IVF?', a: 'The main factors are the woman’s age, egg and sperm quality, the underlying cause of infertility, and overall health. Success cannot be guaranteed, so we give realistic, individualised expectations after your assessment.' },
    ],
  },
  {
    id: 'gynecology',
    heading: 'Gynecology & Women’s Health',
    faqs: [
      { q: 'What gynecology services does Shubham Hospitals provide?', a: 'We cover routine check-ups, menstrual and hormonal problems, PCOS, fibroids, ovarian cysts, endometriosis, infections, menopause care and cosmetic gynecology — with medical and advanced surgical options under one roof.' },
      { q: 'How do I know if I have PCOS?', a: 'Common signs include irregular or missed periods, acne, unwanted hair growth, weight changes and difficulty conceiving. Diagnosis uses your history, an ultrasound and blood tests. PCOS is manageable, so an early consultation helps.' },
      { q: 'Why are my periods so painful?', a: 'Some cramping is normal, but severe or worsening pain can point to conditions like endometriosis, fibroids or adenomyosis. If period pain disrupts daily life or is getting worse, it is worth having it evaluated rather than enduring it.' },
      { q: 'What is cosmetic and aesthetic gynecology?', a: 'These are procedures that address comfort, function and appearance of the intimate area — often after childbirth or with age. All options are discussed confidentially, with realistic guidance on what is medically appropriate for you.' },
      { q: 'How often should women have a gynecology check-up?', a: 'A yearly check-up is a good general guideline for adult women, and sooner if you notice new symptoms. Regular visits help catch conditions like fibroids, cysts or cervical changes early, when they are easiest to treat.' },
    ],
  },
  {
    id: 'laparoscopy-surgery',
    heading: 'Laparoscopy & Advanced Surgery',
    faqs: [
      { q: 'What is 3D laparoscopy and why does it matter?', a: 'Shubham Hospitals uses one of Amravati district’s most advanced 3D laparoscopy systems. Unlike 2D, 3D gives surgeons true depth perception — meaning greater precision, shorter operating times, less blood loss and faster recovery for patients.' },
      { q: 'What is the difference between laparoscopic and open surgery?', a: 'Laparoscopy (keyhole surgery) uses small incisions and a camera, so most patients have less pain, smaller scars and a quicker return to normal life than with open surgery. Not every case is suitable — your surgeon advises the safest approach.' },
      { q: 'Which conditions can be treated with laparoscopy and hysteroscopy?', a: 'Common ones include fibroids, endometriosis, ovarian cysts, adhesions and complex hysterectomies, plus diagnostic and corrective procedures inside the uterus via hysteroscopy. Suitability is confirmed after examination and imaging.' },
      { q: 'How long is recovery after laparoscopic surgery?', a: 'Many patients go home within a day or two and resume light activity within a week, though this varies with the procedure and the individual. Your team gives specific after-care instructions and follow-up timing.' },
    ],
  },
  {
    id: 'general-surgery',
    heading: 'General Surgery & Surgical Gastroenterology',
    faqs: [
      { q: 'What general and gastrointestinal surgeries does Shubham Hospitals perform?', a: 'We treat common surgical conditions such as gallbladder stones, hernias, appendicitis, piles and fistula, and other abdominal and digestive-system problems — using minimally invasive (keyhole) techniques wherever suitable, plus emergency surgical care.' },
      { q: 'Do gallbladder stones always need surgery?', a: 'Not always. Stones causing pain, infection or other symptoms are usually advised for removal, while some silent stones may just be monitored. A surgeon reviews your scans and symptoms before recommending surgery — it is an individual decision.' },
      { q: 'Can gallbladder and hernia operations be done by keyhole surgery?', a: 'Yes. Most gallbladder removals and many hernia repairs are done laparoscopically through small incisions, which usually means less pain, smaller scars and a faster return to daily life than open surgery. Suitability is confirmed after assessment.' },
      { q: 'What is surgical gastroenterology?', a: 'It is the surgical treatment of digestive-system organs — including the gallbladder, appendix, intestines, and related conditions. It combines careful diagnosis with minimally invasive surgery where possible, so recovery is quicker and safer.' },
      { q: 'When is chronic heartburn or acid reflux something to get checked?', a: 'Occasional heartburn is common, but reflux that is frequent, persistent or not settling with usual measures should be evaluated, as it can point to GERD or other conditions. Most cases are managed with lifestyle and medication; surgery is rarely needed.' },
      { q: 'Is emergency surgery available if needed?', a: 'Yes. We provide 24x7 emergency surgical care for acute problems such as appendicitis and other abdominal emergencies. Call our main number any time and our team will guide you on what to do next.' },
    ],
  },
  {
    id: 'pregnancy-maternity',
    heading: 'Pregnancy, Maternity & Fetal Medicine',
    faqs: [
      { q: 'What maternity and pregnancy care do you offer?', a: 'We provide complete antenatal care, safe delivery, high-risk pregnancy management, and fetal medicine including detailed scans. Care is planned around each mother’s needs, with 24x7 support for emergencies.' },
      { q: 'What does a high-risk pregnancy mean?', a: 'It means the pregnancy needs closer monitoring due to factors such as age, high blood pressure, diabetes, twins, or a previous complication. With the right care most high-risk pregnancies have healthy outcomes.' },
      { q: 'Which pregnancy scans do I need and when?', a: 'Typical scans include an early dating scan, an NT scan around 11–14 weeks, an anomaly scan around 18–22 weeks, and growth scans later on. Your doctor tailors the schedule to your pregnancy.' },
      { q: 'What is an anomaly scan and why is it important?', a: 'The anomaly (or level-2) scan, done around 18–22 weeks, checks the baby’s organs and development in detail. It helps detect concerns early so care can be planned. Our fetal medicine team performs and explains these scans.' },
      { q: 'Do you offer care during the monsoon and for seasonal risks?', a: 'Yes. We advise expectant mothers on staying safe through the monsoon and other seasonal risks, and remain available round the clock for any urgent concern during pregnancy.' },
    ],
  },
  {
    id: 'appointments-visiting',
    heading: 'Appointments, Visiting & Emergencies',
    faqs: [
      { q: 'How do I book an appointment at Shubham Hospitals?', a: 'Use the “Book Appointment” form on our website, which opens WhatsApp with your details pre-filled, or simply call us. For emergencies you do not need an appointment — come in directly or call any time.' },
      { q: 'What are the OPD (consulting) hours?', a: 'Our OPD runs Monday to Saturday, 11 AM–5 PM and again 7–9:30 PM. Sunday OPD is closed, but emergency care is available 24x7 throughout the week.' },
      { q: 'Where is the hospital located?', a: 'We are on Badnera Road, opposite Mantri Motors, Deorankar Nagar, Amravati, Maharashtra 444605. The website’s contact page has a one-tap Google Maps directions link.' },
      { q: 'Is emergency care available at night and on holidays?', a: 'Yes. Emergency and obstetric care is available 24x7, including nights, Sundays and holidays. Call our main number and our team will guide you.' },
      { q: 'Which languages can I be attended in?', a: 'Our team assists patients in English, Hindi and Marathi so you can discuss your health comfortably in the language you prefer.' },
    ],
  },
  {
    id: 'costs-general',
    heading: 'Costs, Records & General',
    faqs: [
      { q: 'How much do treatments like IVF or surgery cost?', a: 'Costs depend on your diagnosis and the exact treatment plan, so an accurate figure is given after consultation. Our guiding promise is “Hi-Tech Treatment, At Truly Affordable Cost,” and the team explains charges transparently before you proceed.' },
      { q: 'Do you provide reports and second opinions?', a: 'Yes. You receive your investigation reports, and you are welcome to seek a second opinion or bring outside reports for review. Clear, honest counselling is part of how we work.' },
      { q: 'Who are the doctors I will see?', a: 'Care is provided by our team of gynecology, fertility, surgery and fetal-medicine specialists, including Dr. Manan Boob (MS ObGyn – Gold Medalist, DNB, F.MAS). You can read each doctor’s profile on the Doctors page.' },
      { q: 'How can I follow the hospital’s health information online?', a: 'Our health blog covers fertility, pregnancy, gynecology and surgery topics for families in Amravati and Vidarbha, and you can follow us on Facebook, Instagram and YouTube for updates.' },
    ],
  },
];

export interface FaqMeta { title: string; description: string; heading: string; eyebrow: string; intro: string }

export const faqMeta: Record<Lang, FaqMeta> = {
  en: {
    title: 'Frequently Asked Questions | Shubham Hospitals, Amravati',
    description: 'Answers about IVF & fertility, gynecology, 3D laparoscopy, pregnancy care, appointments and costs at Shubham Hi-Tech Hospital & Test Tube Baby Centre, Amravati.',
    heading: 'Frequently Asked Questions',
    eyebrow: 'Your questions, answered',
    intro: 'Clear answers to the questions patients in Amravati and Vidarbha ask us most — about fertility, gynecology, surgery, pregnancy, appointments and costs.',
  },
  hi: {
    title: 'अक्सर पूछे जाने वाले प्रश्न | शुभम हॉस्पिटल्स, अमरावती',
    description: 'अमरावती स्थित शुभम हाई-टेक हॉस्पिटल में आईवीएफ एवं प्रजनन, स्त्री रोग, 3D लेप्रोस्कोपी, गर्भावस्था देखभाल, अपॉइंटमेंट और खर्च से जुड़े सवालों के जवाब।',
    heading: 'अक्सर पूछे जाने वाले प्रश्न',
    eyebrow: 'आपके सवाल, हमारे जवाब',
    intro: 'अमरावती और विदर्भ के मरीज़ जो सवाल सबसे ज़्यादा पूछते हैं — प्रजनन, स्त्री रोग, सर्जरी, गर्भावस्था, अपॉइंटमेंट और खर्च — उनके स्पष्ट उत्तर।',
  },
  mr: {
    title: 'नेहमी विचारले जाणारे प्रश्न | शुभम हॉस्पिटल्स, अमरावती',
    description: 'अमरावतीतील शुभम हाय-टेक हॉस्पिटलमध्ये आयव्हीएफ व प्रजनन, स्त्रीरोग, 3D लॅपरोस्कोपी, गर्भधारणा काळजी, अपॉइंटमेंट व खर्च याविषयीच्या प्रश्नांची उत्तरे.',
    heading: 'नेहमी विचारले जाणारे प्रश्न',
    eyebrow: 'तुमचे प्रश्न, आमची उत्तरे',
    intro: 'अमरावती व विदर्भातील रुग्ण सर्वाधिक विचारतात ते प्रश्न — प्रजनन, स्त्रीरोग, शस्त्रक्रिया, गर्भधारणा, अपॉइंटमेंट व खर्च — यांची स्पष्ट उत्तरे.',
  },
};

const hi: FaqCategory[] = [
  {
    id: 'ivf-fertility',
    heading: 'आईवीएफ एवं प्रजनन उपचार',
    faqs: [
      { q: 'अमरावती में शुभम हॉस्पिटल्स में कौन-कौन से प्रजनन (फर्टिलिटी) उपचार उपलब्ध हैं?', a: 'हम पूरी श्रेणी की प्रजनन देखभाल देते हैं — बुनियादी जाँच और ओव्यूलेशन इंडक्शन से लेकर IUI, IVF और ICSI तक। दोनों साथियों की जाँच के बाद इलाज व्यक्तिगत रूप से तय किया जाता है, ताकि दंपती को सबसे कम जटिल और कारगर उपचार मिले।' },
      { q: 'दंपती को प्रजनन विशेषज्ञ से कब मिलना चाहिए?', a: 'आमतौर पर बिना सफलता के 12 महीने प्रयास के बाद, या यदि महिला की उम्र 35 से अधिक है तो 6 महीने बाद। अनियमित मासिक धर्म, PCOS या एंडोमेट्रियोसिस, पूर्व पेल्विक सर्जरी, या गर्भपात के इतिहास में इससे पहले मिलें।' },
      { q: 'IUI, IVF और ICSI में क्या अंतर है?', a: 'IUI में तैयार शुक्राणु सीधे गर्भाशय में रखे जाते हैं। IVF में अंडाणु और शुक्राणु का निषेचन प्रयोगशाला में होता है और भ्रूण स्थानांतरित किया जाता है। ICSI में हर अंडाणु में एक शुक्राणु डाला जाता है, जो मुख्यतः पुरुष-कारण बांझपन में उपयोगी है। आपके डॉक्टर उपयुक्त विकल्प बताते हैं।' },
      { q: 'क्या पुरुष बांझपन की भी जाँच होती है?', a: 'हाँ। लगभग आधे मामलों में पुरुष कारण शामिल होता है, इसलिए शुरुआती जाँच में सीमेन एनालिसिस शामिल है। आवश्यकता होने पर पुरुष साथी की आगे की जाँच और उपचार महिला की जाँच के साथ किया जाता है।' },
      { q: 'क्या IVF दर्दनाक है, और एक चक्र में कितना समय लगता है?', a: 'अधिकांश चरणों में दर्द के बजाय हल्की असहजता होती है। एक सामान्य IVF चक्र उत्तेजना से भ्रूण स्थानांतरण तक लगभग दो से तीन सप्ताह चलता है, और लगभग दो सप्ताह बाद गर्भ परीक्षण होता है। आपकी टीम हर चरण पहले ही समझाती है।' },
      { q: 'IVF की सफलता किन बातों पर निर्भर करती है?', a: 'मुख्य कारक हैं महिला की उम्र, अंडाणु व शुक्राणु की गुणवत्ता, बांझपन का मूल कारण और समग्र स्वास्थ्य। सफलता की गारंटी नहीं दी जा सकती, इसलिए जाँच के बाद हम वास्तविक और व्यक्तिगत अपेक्षाएँ बताते हैं।' },
    ],
  },
  {
    id: 'gynecology',
    heading: 'स्त्री रोग एवं महिला स्वास्थ्य',
    faqs: [
      { q: 'शुभम हॉस्पिटल्स कौन-कौन सी स्त्री रोग सेवाएँ देता है?', a: 'हम नियमित जाँच, मासिक धर्म व हार्मोन संबंधी समस्याएँ, PCOS, फाइब्रॉइड, ओवेरियन सिस्ट, एंडोमेट्रियोसिस, संक्रमण, रजोनिवृत्ति देखभाल और कॉस्मेटिक गायनेकोलॉजी — सभी चिकित्सकीय व उन्नत सर्जिकल विकल्पों सहित एक ही स्थान पर देते हैं।' },
      { q: 'मुझे कैसे पता चलेगा कि मुझे PCOS है?', a: 'सामान्य लक्षणों में अनियमित या बंद मासिक धर्म, मुँहासे, अनचाहे बाल, वजन में बदलाव और गर्भधारण में कठिनाई शामिल हैं। निदान आपके इतिहास, अल्ट्रासाउंड और रक्त जाँच से होता है। PCOS प्रबंधनीय है, इसलिए जल्दी परामर्श लाभदायक है।' },
      { q: 'मेरे मासिक धर्म इतने दर्दनाक क्यों हैं?', a: 'थोड़ी ऐंठन सामान्य है, पर तीव्र या बढ़ता दर्द एंडोमेट्रियोसिस, फाइब्रॉइड या एडेनोमायोसिस जैसी स्थितियों का संकेत हो सकता है। यदि दर्द रोज़मर्रा के जीवन में बाधा डाले या बढ़ रहा हो, तो सहने के बजाय जाँच कराना उचित है।' },
      { q: 'कॉस्मेटिक और एस्थेटिक गायनेकोलॉजी क्या है?', a: 'ये ऐसी प्रक्रियाएँ हैं जो अंतरंग क्षेत्र के आराम, कार्य और रूप से जुड़ी होती हैं — अक्सर प्रसव के बाद या उम्र के साथ। सभी विकल्प गोपनीय रूप से समझाए जाते हैं, और आपके लिए क्या चिकित्सकीय रूप से उपयुक्त है, इस पर वास्तविक मार्गदर्शन दिया जाता है।' },
      { q: 'महिलाओं को कितनी बार स्त्री रोग जाँच करानी चाहिए?', a: 'वयस्क महिलाओं के लिए साल में एक बार जाँच अच्छी है, और नए लक्षण दिखें तो उससे पहले। नियमित जाँच से फाइब्रॉइड, सिस्ट या सर्वाइकल बदलाव जल्दी पकड़े जाते हैं, जब उनका इलाज सबसे आसान होता है।' },
    ],
  },
  {
    id: 'laparoscopy-surgery',
    heading: 'लेप्रोस्कोपी एवं उन्नत सर्जरी',
    faqs: [
      { q: '3D लेप्रोस्कोपी क्या है और यह क्यों महत्वपूर्ण है?', a: 'शुभम हॉस्पिटल्स में अमरावती ज़िले की सबसे उन्नत 3D लेप्रोस्कोपी प्रणालियों में से एक है। 2D के विपरीत, 3D सर्जनों को वास्तविक गहराई का बोध देता है — यानी अधिक सटीकता, कम ऑपरेशन समय, कम रक्तस्राव और मरीज़ों की तेज़ रिकवरी।' },
      { q: 'लेप्रोस्कोपिक और ओपन सर्जरी में क्या अंतर है?', a: 'लेप्रोस्कोपी (कीहोल सर्जरी) में छोटे चीरे और कैमरा उपयोग होता है, इसलिए अधिकांश मरीज़ों को ओपन सर्जरी की तुलना में कम दर्द, छोटे निशान और जल्दी सामान्य जीवन में वापसी मिलती है। हर मामला उपयुक्त नहीं होता — आपके सर्जन सबसे सुरक्षित तरीका बताते हैं।' },
      { q: 'लेप्रोस्कोपी और हिस्टेरोस्कोपी से किन स्थितियों का इलाज होता है?', a: 'आम तौर पर फाइब्रॉइड, एंडोमेट्रियोसिस, ओवेरियन सिस्ट, आसंजन और जटिल हिस्टेरेक्टॉमी, साथ ही हिस्टेरोस्कोपी द्वारा गर्भाशय के भीतर की जाँच व सुधारात्मक प्रक्रियाएँ। उपयुक्तता जाँच और इमेजिंग के बाद तय होती है।' },
      { q: 'लेप्रोस्कोपिक सर्जरी के बाद रिकवरी में कितना समय लगता है?', a: 'कई मरीज़ एक-दो दिन में घर चले जाते हैं और एक सप्ताह में हल्की गतिविधि शुरू कर देते हैं, हालाँकि यह प्रक्रिया और व्यक्ति पर निर्भर करता है। आपकी टीम विशेष देखभाल निर्देश और फॉलो-अप समय बताती है।' },
    ],
  },
  {
    id: 'general-surgery',
    heading: 'जनरल सर्जरी एवं सर्जिकल गैस्ट्रोएंट्रोलॉजी',
    faqs: [
      { q: 'शुभम हॉस्पिटल्स कौन-कौन सी जनरल और पेट संबंधी सर्जरी करता है?', a: 'हम पित्ताशय की पथरी, हर्निया, अपेंडिसाइटिस, बवासीर और फिस्टुला, तथा पेट व पाचन तंत्र की अन्य समस्याओं का इलाज करते हैं — जहाँ उपयुक्त हो वहाँ न्यूनतम चीरे (कीहोल) तकनीक से, साथ ही आपातकालीन सर्जिकल देखभाल।' },
      { q: 'क्या पित्ताशय की पथरी में हमेशा सर्जरी ज़रूरी होती है?', a: 'हमेशा नहीं। दर्द, संक्रमण या अन्य लक्षण पैदा करने वाली पथरी के लिए आमतौर पर निकालने की सलाह दी जाती है, जबकि कुछ बिना लक्षण वाली पथरी पर केवल निगरानी रखी जा सकती है। सर्जन आपके स्कैन और लक्षणों को देखकर निर्णय लेते हैं।' },
      { q: 'क्या पित्ताशय और हर्निया के ऑपरेशन कीहोल सर्जरी से होते हैं?', a: 'हाँ। अधिकांश पित्ताशय निष्कासन और कई हर्निया रिपेयर छोटे चीरों के ज़रिए लेप्रोस्कोपिक रूप से किए जाते हैं, जिससे ओपन सर्जरी की तुलना में कम दर्द, छोटे निशान और जल्दी वापसी होती है। उपयुक्तता जाँच के बाद तय होती है।' },
      { q: 'सर्जिकल गैस्ट्रोएंट्रोलॉजी क्या है?', a: 'यह पाचन तंत्र के अंगों — पित्ताशय, अपेंडिक्स, आँतों और संबंधित स्थितियों — का सर्जिकल इलाज है। इसमें सावधानीपूर्वक निदान और जहाँ संभव हो वहाँ न्यूनतम चीरे वाली सर्जरी शामिल है, ताकि रिकवरी तेज़ और सुरक्षित हो।' },
      { q: 'लगातार सीने में जलन या एसिड रिफ्लक्स की जाँच कब करानी चाहिए?', a: 'कभी-कभी जलन आम है, पर बार-बार, लगातार या सामान्य उपायों से न ठीक होने वाला रिफ्लक्स जँचवाना चाहिए, क्योंकि यह GERD या अन्य स्थितियों का संकेत हो सकता है। अधिकांश मामले जीवनशैली और दवा से संभलते हैं; सर्जरी की ज़रूरत कम ही पड़ती है।' },
      { q: 'क्या आवश्यकता होने पर आपातकालीन सर्जरी उपलब्ध है?', a: 'हाँ। हम अपेंडिसाइटिस और पेट की अन्य आपात स्थितियों के लिए 24x7 आपातकालीन सर्जिकल देखभाल देते हैं। किसी भी समय हमारे मुख्य नंबर पर कॉल करें और हमारी टीम आगे की सलाह देगी।' },
    ],
  },
  {
    id: 'pregnancy-maternity',
    heading: 'गर्भावस्था, प्रसूति एवं भ्रूण चिकित्सा',
    faqs: [
      { q: 'आप कौन-कौन सी प्रसूति और गर्भावस्था देखभाल देते हैं?', a: 'हम संपूर्ण प्रसवपूर्व देखभाल, सुरक्षित प्रसव, हाई-रिस्क प्रेग्नेंसी प्रबंधन, और विस्तृत स्कैन सहित भ्रूण चिकित्सा देते हैं। देखभाल हर माँ की ज़रूरत के अनुसार बनाई जाती है, आपात स्थिति के लिए 24x7 सहायता के साथ।' },
      { q: 'हाई-रिस्क प्रेग्नेंसी का क्या मतलब है?', a: 'इसका अर्थ है कि उम्र, उच्च रक्तचाप, मधुमेह, जुड़वाँ, या पिछली जटिलता जैसे कारणों से गर्भावस्था पर अधिक निगरानी की आवश्यकता है। सही देखभाल से अधिकांश हाई-रिस्क गर्भधारण के परिणाम स्वस्थ होते हैं।' },
      { q: 'मुझे कौन-कौन से गर्भावस्था स्कैन और कब कराने चाहिए?', a: 'सामान्यतः एक प्रारंभिक डेटिंग स्कैन, लगभग 11–14 सप्ताह पर NT स्कैन, लगभग 18–22 सप्ताह पर एनॉमली स्कैन, और बाद में ग्रोथ स्कैन शामिल हैं। आपके डॉक्टर आपकी गर्भावस्था के अनुसार समय तय करते हैं।' },
      { q: 'एनॉमली स्कैन क्या है और यह महत्वपूर्ण क्यों है?', a: 'लगभग 18–22 सप्ताह पर किया जाने वाला एनॉमली (लेवल-2) स्कैन शिशु के अंगों और विकास की विस्तार से जाँच करता है। इससे चिंताएँ जल्दी पकड़ी जाती हैं ताकि देखभाल की योजना बनाई जा सके। हमारी भ्रूण चिकित्सा टीम ये स्कैन करती और समझाती है।' },
      { q: 'क्या आप मानसून और मौसमी जोखिमों में देखभाल देते हैं?', a: 'हाँ। हम गर्भवती माताओं को मानसून और अन्य मौसमी जोखिमों में सुरक्षित रहने की सलाह देते हैं, और गर्भावस्था की किसी भी आपात चिंता के लिए चौबीसों घंटे उपलब्ध रहते हैं।' },
    ],
  },
  {
    id: 'appointments-visiting',
    heading: 'अपॉइंटमेंट, मुलाक़ात एवं आपातकालीन सेवा',
    faqs: [
      { q: 'मैं शुभम हॉस्पिटल्स में अपॉइंटमेंट कैसे बुक करूँ?', a: 'हमारी वेबसाइट पर "अपॉइंटमेंट बुक करें" फॉर्म का उपयोग करें, जो आपकी जानकारी के साथ WhatsApp खोल देता है, या हमें सीधे कॉल करें। आपात स्थिति में अपॉइंटमेंट की आवश्यकता नहीं — सीधे आएँ या किसी भी समय कॉल करें।' },
      { q: 'OPD (परामर्श) का समय क्या है?', a: 'हमारी OPD सोमवार से शनिवार, सुबह 11–शाम 5 बजे और फिर शाम 7–9:30 बजे चलती है। रविवार OPD बंद रहती है, पर पूरे सप्ताह आपातकालीन देखभाल 24x7 उपलब्ध है।' },
      { q: 'अस्पताल कहाँ स्थित है?', a: 'हम बडनेरा रोड, मंत्री मोटर्स के सामने, देवरणकर नगर, अमरावती, महाराष्ट्र 444605 पर हैं। वेबसाइट के संपर्क पृष्ठ पर एक-टैप गूगल मैप्स दिशा-निर्देश लिंक है।' },
      { q: 'क्या रात और छुट्टियों में आपातकालीन देखभाल उपलब्ध है?', a: 'हाँ। आपातकालीन और प्रसूति देखभाल 24x7 उपलब्ध है, जिसमें रात, रविवार और छुट्टियाँ शामिल हैं। हमारे मुख्य नंबर पर कॉल करें और हमारी टीम मार्गदर्शन करेगी।' },
      { q: 'मुझे किन भाषाओं में सेवा मिल सकती है?', a: 'हमारी टीम मरीज़ों की सहायता अंग्रेज़ी, हिंदी और मराठी में करती है, ताकि आप अपनी पसंदीदा भाषा में सहजता से अपने स्वास्थ्य पर चर्चा कर सकें।' },
    ],
  },
  {
    id: 'costs-general',
    heading: 'खर्च, रिकॉर्ड एवं सामान्य',
    faqs: [
      { q: 'IVF या सर्जरी जैसे उपचारों की लागत कितनी है?', a: 'लागत आपके निदान और सटीक उपचार योजना पर निर्भर करती है, इसलिए सही आँकड़ा परामर्श के बाद दिया जाता है। हमारा वादा है "हाई-टेक इलाज, सच में किफ़ायती दाम में," और आगे बढ़ने से पहले टीम पारदर्शी रूप से खर्च समझाती है।' },
      { q: 'क्या आप रिपोर्ट और सेकंड ओपिनियन देते हैं?', a: 'हाँ। आपको आपकी जाँच रिपोर्ट मिलती है, और आप सेकंड ओपिनियन ले सकते हैं या बाहरी रिपोर्ट समीक्षा के लिए ला सकते हैं। स्पष्ट और ईमानदार परामर्श हमारे काम का हिस्सा है।' },
      { q: 'मुझे कौन से डॉक्टर देखेंगे?', a: 'आपकी देखभाल हमारी स्त्री रोग, प्रजनन, सर्जरी व भ्रूण चिकित्सा विशेषज्ञों की टीम करती है, जिसमें डॉ. मनन बूब (MS ObGyn – गोल्ड मेडलिस्ट, DNB, F.MAS) शामिल हैं। हर डॉक्टर का विवरण डॉक्टर पृष्ठ पर पढ़ा जा सकता है।' },
      { q: 'मैं अस्पताल की स्वास्थ्य जानकारी ऑनलाइन कैसे देखूँ?', a: 'हमारा हेल्थ ब्लॉग अमरावती और विदर्भ के परिवारों के लिए प्रजनन, गर्भावस्था, स्त्री रोग और सर्जरी विषयों पर लेख देता है, और आप अपडेट के लिए हमें फेसबुक, इंस्टाग्राम और यूट्यूब पर फॉलो कर सकते हैं।' },
    ],
  },
];

const mr: FaqCategory[] = [
  {
    id: 'ivf-fertility',
    heading: 'आयव्हीएफ व प्रजनन उपचार',
    faqs: [
      { q: 'अमरावतीतील शुभम हॉस्पिटल्समध्ये कोणते प्रजनन (फर्टिलिटी) उपचार उपलब्ध आहेत?', a: 'आम्ही संपूर्ण प्रजनन काळजी देतो — मूलभूत तपासणी व ओव्ह्युलेशन इंडक्शनपासून IUI, IVF व ICSI पर्यंत. दोन्ही जोडीदारांच्या तपासणीनंतर उपचार वैयक्तिकरित्या ठरवले जातात, जेणेकरून जोडप्याला सर्वात कमी गुंतागुंतीचा व परिणामकारक उपचार मिळेल.' },
      { q: 'जोडप्याने प्रजनन तज्ज्ञाला कधी भेटावे?', a: 'सहसा यश न मिळता 12 महिने प्रयत्नांनंतर, किंवा स्त्रीचे वय 35 पेक्षा जास्त असल्यास 6 महिन्यांनंतर. अनियमित पाळी, PCOS किंवा एंडोमेट्रिओसिस, पूर्वीची पेल्विक शस्त्रक्रिया, किंवा गर्भपाताचा इतिहास असल्यास त्याआधीच भेटा.' },
      { q: 'IUI, IVF व ICSI मध्ये काय फरक आहे?', a: 'IUI मध्ये तयार शुक्राणू थेट गर्भाशयात ठेवले जातात. IVF मध्ये अंडी व शुक्राणूंचे फलन प्रयोगशाळेत होते व भ्रूण स्थानांतरित केला जातो. ICSI मध्ये प्रत्येक अंड्यात एक शुक्राणू टोचला जातो, जो प्रामुख्याने पुरुष-कारण वंध्यत्वात वापरला जातो. तुमचे डॉक्टर योग्य पर्याय सुचवतात.' },
      { q: 'पुरुष वंध्यत्वाचीही तपासणी होते का?', a: 'होय. जवळपास निम्म्या प्रकरणांत पुरुष कारण असते, म्हणून सुरुवातीच्या तपासणीत सीमेन ॲनालिसिस समाविष्ट असते. गरज असल्यास पुरुष जोडीदाराची पुढील तपासणी व उपचार स्त्रीच्या तपासणीसोबत केले जातात.' },
      { q: 'IVF वेदनादायक आहे का, आणि एका चक्राला किती वेळ लागतो?', a: 'बहुतेक टप्प्यांत वेदनेऐवजी सौम्य अस्वस्थता असते. सामान्य IVF चक्र उत्तेजनेपासून भ्रूण स्थानांतरणापर्यंत सुमारे दोन ते तीन आठवडे चालते, व सुमारे दोन आठवड्यांनी गर्भधारणा चाचणी होते. तुमची टीम प्रत्येक टप्पा आधीच समजावते.' },
      { q: 'IVF च्या यशावर कोणत्या गोष्टी परिणाम करतात?', a: 'मुख्य घटक म्हणजे स्त्रीचे वय, अंडी व शुक्राणूंची गुणवत्ता, वंध्यत्वाचे मूळ कारण व एकूण आरोग्य. यशाची हमी देता येत नाही, म्हणून तपासणीनंतर आम्ही वास्तववादी व वैयक्तिक अपेक्षा सांगतो.' },
    ],
  },
  {
    id: 'gynecology',
    heading: 'स्त्रीरोग व महिला आरोग्य',
    faqs: [
      { q: 'शुभम हॉस्पिटल्स कोणत्या स्त्रीरोग सेवा देते?', a: 'आम्ही नियमित तपासणी, पाळी व हार्मोनसंबंधी समस्या, PCOS, फायब्रॉइड, ओव्हेरियन सिस्ट, एंडोमेट्रिओसिस, संसर्ग, रजोनिवृत्ती काळजी व कॉस्मेटिक स्त्रीरोग — वैद्यकीय व प्रगत शस्त्रक्रिया पर्यायांसह एकाच ठिकाणी देतो.' },
      { q: 'मला PCOS आहे हे कसे कळेल?', a: 'सामान्य लक्षणांत अनियमित किंवा बंद पाळी, मुरुम, नकोसे केस, वजनातील बदल व गर्भधारणेत अडचण यांचा समावेश होतो. निदान तुमचा इतिहास, अल्ट्रासाऊंड व रक्त तपासणीने होते. PCOS आटोक्यात ठेवता येते, म्हणून लवकर सल्ला उपयुक्त ठरतो.' },
      { q: 'माझी पाळी इतकी वेदनादायक का असते?', a: 'थोडी कळ सामान्य असते, पण तीव्र किंवा वाढती वेदना एंडोमेट्रिओसिस, फायब्रॉइड किंवा ॲडेनोमायोसिससारख्या स्थितींकडे निर्देश करू शकते. वेदना दैनंदिन जीवनात अडथळा आणत असेल किंवा वाढत असेल, तर सहन करण्याऐवजी तपासणी करून घेणे योग्य.' },
      { q: 'कॉस्मेटिक व एस्थेटिक स्त्रीरोग म्हणजे काय?', a: 'या अशा प्रक्रिया आहेत ज्या अंतरंग भागाच्या आराम, कार्य व रूपाशी संबंधित असतात — बहुतेकदा बाळंतपणानंतर किंवा वयानुसार. सर्व पर्याय गोपनीयतेने समजावले जातात, आणि तुमच्यासाठी वैद्यकीयदृष्ट्या काय योग्य आहे याचे वास्तववादी मार्गदर्शन दिले जाते.' },
      { q: 'महिलांनी किती वेळा स्त्रीरोग तपासणी करावी?', a: 'प्रौढ महिलांसाठी वर्षातून एकदा तपासणी चांगली, आणि नवीन लक्षणे दिसल्यास त्याआधी. नियमित तपासणीमुळे फायब्रॉइड, सिस्ट किंवा गर्भाशयमुखातील बदल लवकर लक्षात येतात, जेव्हा उपचार सर्वात सोपा असतो.' },
    ],
  },
  {
    id: 'laparoscopy-surgery',
    heading: 'लॅपरोस्कोपी व प्रगत शस्त्रक्रिया',
    faqs: [
      { q: '3D लॅपरोस्कोपी म्हणजे काय आणि ती का महत्त्वाची आहे?', a: 'शुभम हॉस्पिटल्समध्ये अमरावती जिल्ह्यातील सर्वात प्रगत 3D लॅपरोस्कोपी प्रणालींपैकी एक आहे. 2D च्या विरुद्ध, 3D सर्जनना खरी खोली-जाणीव देते — म्हणजे अधिक अचूकता, कमी शस्त्रक्रिया वेळ, कमी रक्तस्राव व रुग्णांची जलद रिकव्हरी.' },
      { q: 'लॅपरोस्कोपिक व ओपन शस्त्रक्रियेत काय फरक आहे?', a: 'लॅपरोस्कोपी (कीहोल शस्त्रक्रिया) लहान छेद व कॅमेरा वापरते, त्यामुळे बहुतेक रुग्णांना ओपन शस्त्रक्रियेपेक्षा कमी वेदना, लहान व्रण व लवकर सामान्य जीवनात परतणे शक्य होते. प्रत्येक प्रकरण योग्य नसते — तुमचे सर्जन सर्वात सुरक्षित मार्ग सुचवतात.' },
      { q: 'लॅपरोस्कोपी व हिस्टेरोस्कोपीने कोणत्या स्थितींवर उपचार होतात?', a: 'सामान्यतः फायब्रॉइड, एंडोमेट्रिओसिस, ओव्हेरियन सिस्ट, चिकटपणा (adhesions) व गुंतागुंतीच्या हिस्टेरेक्टॉमी, तसेच हिस्टेरोस्कोपीद्वारे गर्भाशयातील तपासणी व सुधारणा प्रक्रिया. योग्यता तपासणी व इमेजिंगनंतर निश्चित होते.' },
      { q: 'लॅपरोस्कोपिक शस्त्रक्रियेनंतर रिकव्हरीला किती वेळ लागतो?', a: 'अनेक रुग्ण एक-दोन दिवसांत घरी जातात व आठवड्याभरात हलकी कामे सुरू करतात, तरी हे प्रक्रिया व व्यक्तीनुसार बदलते. तुमची टीम विशिष्ट काळजीच्या सूचना व फॉलो-अप वेळ सांगते.' },
    ],
  },
  {
    id: 'general-surgery',
    heading: 'जनरल सर्जरी व सर्जिकल गॅस्ट्रोएन्टेरॉलॉजी',
    faqs: [
      { q: 'शुभम हॉस्पिटल्स कोणत्या जनरल व पोटाच्या शस्त्रक्रिया करते?', a: 'आम्ही पित्ताशयातील खडे, हर्निया, अपेंडिसायटिस, मूळव्याध व फिस्टुला, तसेच पोट व पचनसंस्थेच्या इतर समस्यांवर उपचार करतो — योग्य तिथे कमी छेदाच्या (कीहोल) तंत्राने, तसेच आपत्कालीन शस्त्रक्रिया काळजी.' },
      { q: 'पित्ताशयातील खड्यांना नेहमी शस्त्रक्रिया लागते का?', a: 'नेहमी नाही. वेदना, संसर्ग किंवा इतर लक्षणे देणाऱ्या खड्यांसाठी सहसा काढण्याचा सल्ला दिला जातो, तर काही लक्षणविरहित खड्यांवर फक्त निरीक्षण ठेवता येते. सर्जन तुमचे स्कॅन व लक्षणे पाहून निर्णय घेतात — तो वैयक्तिक निर्णय असतो.' },
      { q: 'पित्ताशय व हर्नियाच्या शस्त्रक्रिया कीहोल पद्धतीने होतात का?', a: 'होय. बहुतेक पित्ताशय काढणे व अनेक हर्निया दुरुस्ती लहान छेदांतून लॅपरोस्कोपिक पद्धतीने केल्या जातात, ज्यामुळे ओपन शस्त्रक्रियेपेक्षा कमी वेदना, लहान व्रण व लवकर परतणे शक्य होते. योग्यता तपासणीनंतर निश्चित होते.' },
      { q: 'सर्जिकल गॅस्ट्रोएन्टेरॉलॉजी म्हणजे काय?', a: 'हे पचनसंस्थेच्या अवयवांचे — पित्ताशय, अपेंडिक्स, आतडी व संबंधित स्थितींचे — शस्त्रक्रिया उपचार आहे. यात काळजीपूर्वक निदान व शक्य तिथे कमी छेदाची शस्त्रक्रिया असते, जेणेकरून रिकव्हरी जलद व सुरक्षित होते.' },
      { q: 'सतत छातीत जळजळ किंवा ॲसिड रिफ्लक्स कधी तपासावे?', a: 'अधूनमधून जळजळ सामान्य असते, पण वारंवार, सतत किंवा नेहमीच्या उपायांनी न थांबणारा रिफ्लक्स तपासून घ्यावा, कारण तो GERD किंवा इतर स्थितींचा निर्देश असू शकतो. बहुतेक प्रकरणे जीवनशैली व औषधाने आटोक्यात येतात; शस्त्रक्रिया क्वचितच लागते.' },
      { q: 'गरज असल्यास आपत्कालीन शस्त्रक्रिया उपलब्ध आहे का?', a: 'होय. आम्ही अपेंडिसायटिस व पोटाच्या इतर आपत्कालीन समस्यांसाठी 24x7 आपत्कालीन शस्त्रक्रिया काळजी देतो. कोणत्याही वेळी आमच्या मुख्य क्रमांकावर कॉल करा व आमची टीम पुढे काय करावे याचे मार्गदर्शन करेल.' },
    ],
  },
  {
    id: 'pregnancy-maternity',
    heading: 'गर्भधारणा, प्रसूती व गर्भ वैद्यकशास्त्र',
    faqs: [
      { q: 'तुम्ही कोणती प्रसूती व गर्भधारणा काळजी देता?', a: 'आम्ही संपूर्ण गर्भधारणापूर्व काळजी, सुरक्षित प्रसूती, हाय-रिस्क गर्भधारणा व्यवस्थापन, आणि तपशीलवार स्कॅनसह गर्भ वैद्यकशास्त्र देतो. काळजी प्रत्येक मातेच्या गरजेनुसार आखली जाते, आपत्कालीन स्थितीसाठी 24x7 आधारासह.' },
      { q: 'हाय-रिस्क गर्भधारणा म्हणजे काय?', a: 'याचा अर्थ वय, उच्च रक्तदाब, मधुमेह, जुळे, किंवा पूर्वीची गुंतागुंत यांसारख्या कारणांमुळे गर्भधारणेवर अधिक लक्ष ठेवण्याची गरज असते. योग्य काळजीने बहुतेक हाय-रिस्क गर्भधारणांचे परिणाम निरोगी असतात.' },
      { q: 'मला कोणते गर्भधारणा स्कॅन व कधी करावे लागतील?', a: 'सामान्यतः एक प्रारंभिक डेटिंग स्कॅन, सुमारे 11–14 आठवड्यांत NT स्कॅन, सुमारे 18–22 आठवड्यांत ॲनॉमली स्कॅन, व नंतर ग्रोथ स्कॅन यांचा समावेश होतो. तुमचे डॉक्टर तुमच्या गर्भधारणेनुसार वेळापत्रक ठरवतात.' },
      { q: 'ॲनॉमली स्कॅन म्हणजे काय आणि तो का महत्त्वाचा आहे?', a: 'सुमारे 18–22 आठवड्यांत केला जाणारा ॲनॉमली (लेव्हल-2) स्कॅन बाळाचे अवयव व विकास तपशीलवार तपासतो. यामुळे चिंता लवकर लक्षात येतात व काळजीचे नियोजन करता येते. आमची गर्भ वैद्यकशास्त्र टीम हे स्कॅन करते व समजावते.' },
      { q: 'तुम्ही पावसाळ्यात व हंगामी धोक्यांत काळजी देता का?', a: 'होय. आम्ही गर्भवती मातांना पावसाळा व इतर हंगामी धोक्यांत सुरक्षित राहण्याचा सल्ला देतो, आणि गर्भधारणेच्या कोणत्याही तातडीच्या चिंतेसाठी चोवीस तास उपलब्ध असतो.' },
    ],
  },
  {
    id: 'appointments-visiting',
    heading: 'अपॉइंटमेंट, भेट व आपत्कालीन सेवा',
    faqs: [
      { q: 'मी शुभम हॉस्पिटल्समध्ये अपॉइंटमेंट कशी बुक करू?', a: 'आमच्या वेबसाइटवरील "अपॉइंटमेंट बुक करा" फॉर्म वापरा, जो तुमच्या माहितीसह WhatsApp उघडतो, किंवा आम्हाला थेट कॉल करा. आपत्कालीन स्थितीत अपॉइंटमेंटची गरज नाही — थेट या किंवा कधीही कॉल करा.' },
      { q: 'OPD (सल्ला) वेळ काय आहे?', a: 'आमची OPD सोमवार ते शनिवार, सकाळी 11–सायं 5 व पुन्हा सायं 7–9:30 चालते. रविवारी OPD बंद असते, पण संपूर्ण आठवडाभर आपत्कालीन काळजी 24x7 उपलब्ध आहे.' },
      { q: 'रुग्णालय कुठे आहे?', a: 'आम्ही बडनेरा रोड, मंत्री मोटर्ससमोर, देवरणकर नगर, अमरावती, महाराष्ट्र 444605 येथे आहोत. वेबसाइटच्या संपर्क पानावर एक-टॅप गूगल मॅप्स दिशादर्शक दुवा आहे.' },
      { q: 'रात्री व सुट्ट्यांमध्ये आपत्कालीन काळजी उपलब्ध आहे का?', a: 'होय. आपत्कालीन व प्रसूती काळजी 24x7 उपलब्ध आहे, ज्यात रात्र, रविवार व सुट्ट्या समाविष्ट आहेत. आमच्या मुख्य क्रमांकावर कॉल करा व आमची टीम मार्गदर्शन करेल.' },
      { q: 'मला कोणत्या भाषांत सेवा मिळू शकते?', a: 'आमची टीम रुग्णांना इंग्रजी, हिंदी व मराठीत मदत करते, जेणेकरून तुम्ही तुमच्या पसंतीच्या भाषेत सहजपणे तुमच्या आरोग्याविषयी बोलू शकाल.' },
    ],
  },
  {
    id: 'costs-general',
    heading: 'खर्च, नोंदी व सामान्य',
    faqs: [
      { q: 'IVF किंवा शस्त्रक्रियेसारख्या उपचारांचा खर्च किती?', a: 'खर्च तुमच्या निदान व नेमक्या उपचार योजनेवर अवलंबून असतो, म्हणून अचूक आकडा सल्ल्यानंतर दिला जातो. आमचे ब्रीदवाक्य आहे "हाय-टेक उपचार, खरोखर परवडणाऱ्या दरात," आणि पुढे जाण्यापूर्वी टीम पारदर्शकपणे खर्च समजावते.' },
      { q: 'तुम्ही अहवाल व सेकंड ओपिनियन देता का?', a: 'होय. तुम्हाला तुमचे तपासणी अहवाल मिळतात, आणि तुम्ही सेकंड ओपिनियन घेऊ शकता किंवा बाहेरील अहवाल तपासणीसाठी आणू शकता. स्पष्ट व प्रामाणिक समुपदेशन हा आमच्या कामाचा भाग आहे.' },
      { q: 'मला कोणते डॉक्टर तपासतील?', a: 'तुमची काळजी आमची स्त्रीरोग, प्रजनन, शस्त्रक्रिया व गर्भ वैद्यकशास्त्र तज्ज्ञांची टीम घेते, ज्यात डॉ. मनन बूब (MS ObGyn – गोल्ड मेडलिस्ट, DNB, F.MAS) यांचा समावेश आहे. प्रत्येक डॉक्टरची माहिती डॉक्टर पानावर वाचता येते.' },
      { q: 'मी रुग्णालयाची आरोग्य माहिती ऑनलाइन कशी पाहू?', a: 'आमचा हेल्थ ब्लॉग अमरावती व विदर्भातील कुटुंबांसाठी प्रजनन, गर्भधारणा, स्त्रीरोग व शस्त्रक्रिया विषयांवर लेख देतो, आणि अपडेटसाठी तुम्ही आम्हाला फेसबुक, इन्स्टाग्राम व यूट्यूबवर फॉलो करू शकता.' },
    ],
  },
];

export const faqData: Record<Lang, FaqCategory[]> = { en, hi, mr };

export function getFaqs(lang: Lang): FaqCategory[] {
  return faqData[lang] ?? faqData.en;
}

// Flat list for FAQPage schema.
export function flatFaqs(lang: Lang): Faq[] {
  return getFaqs(lang).flatMap((c) => c.faqs);
}
