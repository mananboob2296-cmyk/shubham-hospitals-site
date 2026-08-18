import type { CalcLangPack } from './types';

export const en: CalcLangPack = {
  shared: {
    hubEyebrow: 'Free Tools',
    hubH1: 'Calculators for your pregnancy and fertility journey',
    hubLead:
      'Simple, private tools built by the fertility and obstetrics team at Shubham Hi-Tech Hospital, Amravati. Everything is worked out inside your own browser — nothing you type is sent to us or stored anywhere.',
    hubMetaTitle: 'Pregnancy & Fertility Calculators | Shubham Hospitals Amravati',
    hubMetaDescription:
      'Free ovulation, due date, IVF due date, period, pregnancy week, weight gain, hCG and kick-count calculators from the IVF and obstetrics team at Shubham Hi-Tech Hospital, Amravati.',
    hubName: 'Calculators',
    crumbHome: 'Home',
    crumbCalculators: 'Calculators',
    open: 'Open calculator',
    yourResult: 'Your estimate',
    calculate: 'Calculate',
    clear: 'Clear',
    privacy: 'Private by design — the maths runs inside your browser. Nothing you enter is sent to us or saved on our servers.',
    disclaimerH: 'Please read',
    disclaimer:
      'These tools give estimates for information only. They are not a diagnosis, not a method of contraception, and not a substitute for advice from your own doctor. Every pregnancy and every cycle is different — please confirm anything important with a clinical examination or scan.',
    relatedH: 'Other calculators',
    allCalculators: 'See all calculators',
    bookCta: 'Book an appointment',
    faqH: 'Frequently asked questions',
    units: {
      days: 'days',
      weeks: 'weeks',
      hours: 'hours',
      kg: 'kg',
      cm: 'cm',
      weeksDays: '{w} weeks {d} days',
      to: 'to',
    },
    trimesters: ['First trimester', 'Second trimester', 'Third trimester'],
  },

  calculators: {
    'ovulation-calculator': {
      name: 'Ovulation Calculator',
      card: 'Find your fertile window, likely ovulation day, the best days to try and when your next period is due.',
      eyebrow: 'Fertility planning',
      h1: 'Ovulation & Fertile Window Calculator',
      lead:
        'Enter the first day of your last period and your usual cycle length to see when you are most likely to ovulate, and the six days each month when conception is most likely.',
      metaTitle: 'Ovulation Calculator — Fertile Window & Best Days to Try | Shubham Hospitals',
      metaDescription:
        'Free ovulation calculator from the IVF team at Shubham Hi-Tech Hospital, Amravati. Estimate your fertile window, ovulation date, best days to conceive and next period.',
      fields: {
        lmp: 'First day of your last period',
        cycle: 'Average cycle length',
        duration: 'How many days does bleeding last?',
      },
      hints: {
        cycle: 'Count from the first day of one period to the day before the next. 28 days is average, but 22–35 is common and normal.',
      },
      options: { 'cycle.unit': 'days', 'duration.unit': 'days' },
      results: {
        ovulation: 'Likely ovulation day',
        fertileWindow: 'Fertile window',
        bestDays: 'Best days to try',
        nextPeriod: 'Next period expected',
        testDate: 'Earliest useful pregnancy test',
      },
      empty: 'Enter the first day of your last period to see your ovulation estimate.',
      howTo: {
        h: 'How to use it',
        body: [
          'Pick the first day of bleeding of your most recent period — spotting the day before does not count.',
          'Set your average cycle length. If your cycles vary, use the length that happens most often, then treat the fertile window as approximate.',
          'Read the fertile window, not just the single ovulation day. The egg survives about 24 hours, but sperm can survive up to five days, so the days *before* ovulation matter most.',
        ],
      },
      limits: {
        h: 'What it estimates — and what it cannot',
        body: [
          'This calculator assumes you ovulate about 14 days before your next period. That holds for most regular cycles, but it is an average, not a measurement.',
          'Accuracy drops with irregular cycles, PCOS, thyroid problems, recent stopping of hormonal contraception, breastfeeding, significant stress or illness, and as you approach your forties.',
          'It cannot be used as contraception. Ovulation can shift by several days from one month to the next, even in women with regular cycles.',
          'If you want certainty rather than an estimate, follicular tracking on ultrasound at the hospital shows the actual growing follicle and the actual day of release.',
        ],
      },
      help: {
        h: 'When to see a specialist',
        body:
          'See a fertility specialist after 12 months of regular, unprotected intercourse without a pregnancy — or after 6 months if you are 35 or older. Come sooner if your periods are irregular or absent, if you have known endometriosis, PCOS or blocked tubes, if you have had two or more miscarriages, or if there is a known problem with the male partner’s semen analysis.',
      },
      faqs: [
        {
          q: 'How does the ovulation calculator work?',
          a: 'It uses the luteal phase rule: in most women ovulation happens roughly 14 days before the next period starts. So it adds your cycle length to the first day of your last period to find the next period, then counts back 14 days. The fertile window is the five days before ovulation plus the day of ovulation itself, because sperm can survive several days inside the reproductive tract.',
        },
        {
          q: 'How accurate is it if my cycles are irregular?',
          a: 'Much less accurate. If your cycle varies by more than about four days from month to month, the predicted date can be out by a week or more. In that case ovulation predictor kits, basal body temperature charting, or — most reliably — follicular tracking by ultrasound will tell you far more than any calculator.',
        },
        {
          q: 'Can I use this to avoid pregnancy?',
          a: 'No. Please do not. Ovulation timing shifts, sperm survive up to five days, and pregnancies routinely happen on days a calculator calls "safe". Use a proper contraceptive method and speak to your gynecologist about which one suits you.',
        },
        {
          q: 'When should I take a pregnancy test?',
          a: 'A urine test is most reliable from the first day of a missed period, which is about 14 days after ovulation. Testing earlier often gives a false negative simply because hCG levels are still too low. A blood beta-hCG can detect pregnancy a few days earlier than urine.',
        },
        {
          q: 'How often should we have intercourse during the fertile window?',
          a: 'Every one to two days through the fertile window is enough. Daily is not harmful for most couples, but abstaining for long stretches to "save up" sperm does not help — it tends to reduce sperm motility.',
        },
      ],
    },

    'pregnancy-due-date-calculator': {
      name: 'Due Date Calculator',
      card: 'Work out your expected delivery date from your last period, your conception date or a dating scan.',
      eyebrow: 'Pregnancy',
      h1: 'Pregnancy Due Date Calculator',
      lead:
        'Estimate your expected delivery date, how many weeks pregnant you are today, and which trimester you are in — from your last menstrual period, a known conception date, or an early ultrasound.',
      metaTitle: 'Due Date Calculator — EDD from LMP, Conception or Scan | Shubham Hospitals',
      metaDescription:
        'Free pregnancy due date calculator from Shubham Hi-Tech Hospital, Amravati. Calculate your EDD from your last period, conception date or dating scan, plus current pregnancy week and trimester.',
      fields: {
        method: 'Calculate from',
        lmp: 'First day of your last period',
        cycle: 'Average cycle length',
        conception: 'Date of conception or ovulation',
        scanDate: 'Date of the ultrasound',
        scanWeeks: 'Weeks on that scan',
        scanDays: 'Days on that scan',
      },
      hints: {
        cycle: 'The standard 280-day rule assumes a 28-day cycle. A longer or shorter cycle shifts the due date, so we adjust for it.',
        scanDate: 'Use the earliest scan you have — a dating scan before 14 weeks is far more accurate than a later one.',
      },
      options: {
        'method.lmp': 'Last menstrual period (LMP)',
        'method.conception': 'Conception / ovulation date',
        'method.scan': 'Ultrasound dating scan',
      },
      results: {
        edd: 'Estimated due date',
        gestAge: 'You are today',
        trimester: 'Trimester',
        conceptionEst: 'Estimated conception',
        daysLeft: 'Days to go',
      },
      empty: 'Choose a method and enter a date to see your due date estimate.',
      howTo: {
        h: 'How to use it',
        body: [
          'If you know the first day of your last period and your cycles are fairly regular, use the LMP method — it is what most doctors start with.',
          'If you conceived through timed intercourse, IUI or know your ovulation date, the conception method is more precise.',
          'If you have had an early ultrasound, use the scan method and enter the gestational age the radiologist wrote on the report. Below 14 weeks this is the most accurate method of all.',
        ],
      },
      limits: {
        h: 'What it estimates — and what it cannot',
        body: [
          'The LMP method uses Naegele’s rule: 280 days from the first day of the last period, adjusted here for cycles that are not 28 days.',
          'Only about 4 in 100 babies arrive exactly on the due date. A normal term birth is anywhere from 37 to 42 weeks.',
          'If your dating scan disagrees with your LMP by more than about a week in the first trimester, your doctor will usually re-date the pregnancy from the scan.',
          'Twins, IVF pregnancies and pregnancies conceived soon after stopping contraception often need dating confirmed on ultrasound rather than by dates alone.',
        ],
      },
      help: {
        h: 'When to see your obstetrician',
        body:
          'Book your first antenatal visit as soon as a home test is positive — ideally before 8 weeks. Come in urgently, at any stage, if you have bleeding, severe abdominal pain, high fever, severe vomiting that stops you keeping fluids down, a bad headache with blurred vision or swelling, leaking fluid, or (after 28 weeks) reduced fetal movements.',
      },
      faqs: [
        {
          q: 'How is the due date calculated?',
          a: 'From your last period, the calculator adds 280 days (40 weeks) to the first day of that period, then adjusts for a cycle that is longer or shorter than 28 days. From a conception date it adds 266 days. From an ultrasound, it works forward from the gestational age recorded on that scan.',
        },
        {
          q: 'Which is more accurate — my dates or the scan?',
          a: 'An ultrasound done before 14 weeks is the most accurate way to date a pregnancy, because embryos grow at very similar rates early on. After about 22 weeks, growth varies a lot between babies and scan dating becomes unreliable, so an early scan date is never revised by a later one.',
        },
        {
          q: 'I do not remember my last period. Can I still get a due date?',
          a: 'Yes — that is exactly what a dating scan is for. Come in for an early ultrasound and the crown-rump length measurement will give a due date that is accurate to within about five days.',
        },
        {
          q: 'Is the due date different for an IVF pregnancy?',
          a: 'Yes, and it is more precise, because the exact age of the embryo is known. Use our IVF & FET Due Date Calculator instead — it works from your transfer date and embryo day.',
        },
        {
          q: 'What if my due date passes and nothing happens?',
          a: 'That is common and usually fine. Your obstetrician will monitor you with scans and fetal heart tracing, and will normally discuss induction somewhere between 41 and 42 weeks. Do not wait at home past your due date without review.',
        },
      ],
    },

    'ivf-due-date-calculator': {
      name: 'IVF & FET Due Date Calculator',
      card: 'Due date after IVF, ICSI or frozen embryo transfer — from your transfer day or egg retrieval date.',
      eyebrow: 'IVF & fertility',
      h1: 'IVF & Frozen Embryo Transfer Due Date Calculator',
      lead:
        'After IVF the age of the embryo is known exactly, so the due date is more precise than with a natural conception. Choose what happened and enter the date.',
      metaTitle: 'IVF Due Date Calculator — Day 3, Day 5 & FET | Shubham Hospitals Amravati',
      metaDescription:
        'Free IVF and frozen embryo transfer due date calculator from the IVF centre at Shubham Hi-Tech Hospital, Amravati. Works from day-3, day-5 or day-6 transfer, egg retrieval or IUI date.',
      fields: {
        method: 'What date do you have?',
        date: 'Date',
      },
      hints: {
        method: 'Your embryology report states whether a cleavage-stage (day 3) or blastocyst (day 5 or 6) embryo was transferred.',
      },
      options: {
        'method.day3': 'Day-3 embryo transfer',
        'method.day5': 'Day-5 blastocyst transfer',
        'method.day6': 'Day-6 blastocyst transfer',
        'method.retrieval': 'Egg retrieval (ovum pick-up)',
        'method.iui': 'IUI / insemination day',
      },
      results: {
        edd: 'Estimated due date',
        gestAge: 'You are today',
        trimester: 'Trimester',
        lmpEquiv: 'Equivalent LMP date',
        daysLeft: 'Days to go',
      },
      empty: 'Choose what kind of date you have and enter it to see your due date.',
      howTo: {
        h: 'How to use it',
        body: [
          'Check your embryology or discharge summary for the transfer date and the embryo day — it will say day 3, day 5 or day 6.',
          'Select that option and enter the transfer date. For a frozen transfer, use the date of the transfer itself, not the date the embryos were originally created.',
          'If you only have the egg-retrieval date, pick that option instead — it is treated as the day of ovulation.',
        ],
      },
      limits: {
        h: 'How the maths works',
        body: [
          'Pregnancy is dated from a notional last menstrual period, two weeks before ovulation. For IVF we work backwards from the known embryo age.',
          'Day-3 transfer: due date = transfer date + 263 days. Day-5 blastocyst: + 261 days. Day-6 blastocyst: + 260 days. Egg retrieval or IUI: + 266 days.',
          'Frozen and fresh transfers use the same rule — what matters is the age of the embryo on the day it was put back, not how long it was frozen.',
          'Twins from a double transfer are usually delivered earlier than the calculated date; your obstetrician will plan around 36–38 weeks depending on the type of twins.',
        ],
      },
      help: {
        h: 'Your first weeks after transfer',
        body:
          'Continue every medicine exactly as prescribed until your doctor stops it — luteal support is not optional in an IVF pregnancy. Attend your beta-hCG blood tests on the dates given, and your first viability scan at around 6–7 weeks. Call the hospital straight away for heavy bleeding, severe one-sided pain, breathlessness, or rapid abdominal swelling after retrieval.',
      },
      faqs: [
        {
          q: 'Why is an IVF due date more accurate?',
          a: 'Because the exact moment of fertilisation and the exact age of the embryo are known from the laboratory record. With a natural conception both have to be inferred from period dates, which introduces several days of uncertainty.',
        },
        {
          q: 'Does a frozen transfer change the due date?',
          a: 'No. The time an embryo spends frozen does not count. A day-5 blastocyst transferred after two years of storage is dated exactly like a fresh day-5 blastocyst transferred the same day.',
        },
        {
          q: 'My scan says a different number of weeks than this calculator. Which is right?',
          a: 'In IVF, the transfer-based date is usually kept even if an early scan differs slightly, because the embryo age is a known fact rather than an estimate. Discuss any large discrepancy with your fertility specialist — small differences in early growth are common and not necessarily a problem.',
        },
        {
          q: 'When is the first scan after IVF?',
          a: 'Usually around 6 to 7 weeks of gestation — roughly three weeks after a day-5 transfer. That scan confirms the pregnancy is inside the uterus, how many sacs there are, and the fetal heartbeat.',
        },
        {
          q: 'How long should I keep taking progesterone?',
          a: 'That is decided by your fertility specialist, but luteal support in an IVF pregnancy is commonly continued until around 10 to 12 weeks, when the placenta takes over. Never stop it on your own.',
        },
      ],
    },

    'period-calculator': {
      name: 'Period Calculator',
      card: 'See when your next six periods are due, and check whether your cycle length is in the normal range.',
      eyebrow: 'Cycle tracking',
      h1: 'Period Calculator',
      lead:
        'Enter your last period and your usual cycle length to see the dates of your next six periods, plus a quick read on whether your cycle is in the typical range.',
      metaTitle: 'Period Calculator — Next Period Dates & Cycle Check | Shubham Hospitals',
      metaDescription:
        'Free period calculator from Shubham Hi-Tech Hospital, Amravati. Predict your next six period dates, see your cycle length assessment and know when irregular periods need a gynecologist.',
      fields: {
        lmp: 'First day of your last period',
        cycle: 'Average cycle length',
        duration: 'How many days does bleeding last?',
      },
      hints: {
        lmp: 'Use the first day of proper bleeding, not spotting.',
      },
      options: {},
      results: {
        nextPeriod: 'Next period starts',
        nextEnd: 'and should finish around',
        cycleNote: 'Your cycle',
        upcoming: 'Next six periods',
      },
      empty: 'Enter the first day of your last period to see your upcoming dates.',
      howTo: {
        h: 'How to use it',
        body: [
          'Enter the first day of bleeding of your most recent period.',
          'Set your average cycle length — the gap from the first day of one period to the first day of the next.',
          'Set how many days you usually bleed, so the calculator can show the likely end date too.',
        ],
      },
      limits: {
        h: 'What counts as a normal cycle',
        body: [
          'A normal adult cycle is 21 to 35 days long, with 2 to 7 days of bleeding. In the first couple of years after periods start, and in the years approaching menopause, cycles are naturally more variable.',
          'Predictions assume your cycle stays the same length. Travel, illness, thyroid problems, big changes in weight, stress and PCOS all shift the dates.',
          'This is a period predictor, not an ovulation tracker. If you are trying to conceive, use the Ovulation Calculator instead.',
        ],
      },
      help: {
        h: 'When irregular periods need a gynecologist',
        body:
          'See a gynecologist if your cycle is shorter than 21 days or longer than 35 days, if bleeding lasts more than 7 days, if you soak through a pad every hour or pass large clots, if you bleed between periods or after intercourse, if you miss three or more periods without being pregnant, or if periods are painful enough to stop you going to work or college. These are common and treatable — they are not something to wait out.',
      },
      faqs: [
        {
          q: 'How is my cycle length measured?',
          a: 'From the first day of bleeding of one period to the day before the first day of the next. Not from the day bleeding stops.',
        },
        {
          q: 'My periods are irregular. Will this still work?',
          a: 'The predictions will be rough. If your cycle varies by more than about four days month to month, treat the dates as a guide only, and note that persistently irregular cycles are worth investigating — PCOS and thyroid disorders are both common and both easily tested for.',
        },
        {
          q: 'Can stress delay my period?',
          a: 'Yes. Significant physical or emotional stress, sudden weight change, intense exercise, illness and disturbed sleep can all delay ovulation, which in turn delays the period. An occasional late period is usually nothing; a pattern of them deserves a check-up.',
        },
        {
          q: 'I have missed a period — am I pregnant?',
          a: 'Take a home urine test from the first day of the missed period. If it is negative and the period still does not arrive within a week or two, see a gynecologist rather than repeating tests indefinitely.',
        },
      ],
    },

    'pregnancy-week-calculator': {
      name: 'Pregnancy Week Calculator',
      card: 'How many weeks pregnant are you today? See your trimester and the next scan or test that is due.',
      eyebrow: 'Pregnancy',
      h1: 'Pregnancy Week & Trimester Calculator',
      lead:
        'Find out exactly how many weeks and days pregnant you are today, which trimester that puts you in, and which scan or test comes next.',
      metaTitle: 'Pregnancy Week Calculator — Weeks, Trimester & Next Scan | Shubham Hospitals',
      metaDescription:
        'Free pregnancy week calculator from Shubham Hi-Tech Hospital, Amravati. Know how many weeks pregnant you are, your trimester, and the next scan or test due in your antenatal schedule.',
      fields: {
        method: 'Calculate from',
        lmp: 'First day of your last period',
        edd: 'Your due date',
        cycle: 'Average cycle length',
      },
      hints: {},
      options: {
        'method.lmp': 'Last menstrual period',
        'method.edd': 'A due date I already have',
      },
      results: {
        gestAge: 'You are today',
        trimester: 'Trimester',
        edd: 'Estimated due date',
        daysLeft: 'Days to go',
        milestone: 'Coming up next',
      },
      empty: 'Enter a date to see how many weeks pregnant you are.',
      howTo: {
        h: 'How to use it',
        body: [
          'If you have a due date from your doctor or a scan report, choose that option — it is the most reliable input.',
          'Otherwise enter the first day of your last period and, if your cycles are not 28 days, adjust the cycle length.',
          'The "coming up next" line shows the next routine milestone in the antenatal schedule so you know what to book.',
        ],
      },
      limits: {
        h: 'How pregnancy weeks are counted',
        body: [
          'Pregnancy is counted from the first day of your last period — about two weeks before you actually conceived. So at four weeks pregnant, the embryo is only about two weeks old.',
          'Trimesters here follow the common convention: first trimester up to 13 weeks 6 days, second from 14 weeks to 27 weeks 6 days, third from 28 weeks onwards.',
          'Milestone windows are the usual Indian antenatal schedule and may be adjusted by your obstetrician for a high-risk pregnancy, twins or an IVF conception.',
        ],
      },
      help: {
        h: 'Your antenatal schedule at a glance',
        body: [
          'Confirmation and dating scan: 6–9 weeks',
          'NT scan with double marker: 11 weeks to 13 weeks 6 days',
          'Anomaly (level 2) scan: 18–22 weeks',
          'Glucose tolerance test for gestational diabetes: 24–28 weeks',
          'Growth scan with Doppler: 32–36 weeks',
          'Weekly review and fetal monitoring: from 37 weeks',
        ],
      },
      faqs: [
        {
          q: 'Why does pregnancy start two weeks before conception?',
          a: 'Because the last menstrual period is a date women can actually remember, while the moment of conception usually is not. The convention has been kept worldwide so that scan charts, blood test ranges and delivery planning all line up.',
        },
        {
          q: 'When does the second trimester start?',
          a: 'At 14 weeks 0 days by the most common convention, running to 27 weeks 6 days. The third trimester begins at 28 weeks.',
        },
        {
          q: 'When will I feel the baby move?',
          a: 'Usually between 18 and 22 weeks in a first pregnancy, and sometimes as early as 16 weeks in later pregnancies. From about 28 weeks, daily movement counting is worth doing — our Kick Counter helps with that.',
        },
        {
          q: 'Which scans are essential?',
          a: 'The dating scan, the NT scan between 11 and 13 weeks 6 days, and the anomaly scan between 18 and 22 weeks are the three that should not be missed. Growth scans in the third trimester are added according to your risk.',
        },
      ],
    },

    'pregnancy-weight-gain-calculator': {
      name: 'Pregnancy Weight Gain Calculator',
      card: 'Check whether your weight gain is on track for your pre-pregnancy BMI, week by week.',
      eyebrow: 'Pregnancy',
      h1: 'Pregnancy Weight Gain Calculator',
      lead:
        'Healthy weight gain in pregnancy depends on what you weighed before you conceived. Enter your pre-pregnancy weight and height to see the recommended range for where you are now and by full term.',
      metaTitle: 'Pregnancy Weight Gain Calculator — Healthy Range by BMI | Shubham Hospitals',
      metaDescription:
        'Free pregnancy weight gain calculator from Shubham Hi-Tech Hospital, Amravati. See your pre-pregnancy BMI and the recommended weight gain range for your current week, singleton or twins.',
      fields: {
        height: 'Height',
        weight: 'Weight before pregnancy',
        current: 'Your weight today (optional)',
        week: 'How many weeks pregnant are you?',
        babies: 'Carrying',
      },
      hints: {
        weight: 'Your weight just before you became pregnant, not your weight today.',
        current: 'Add this and the calculator will tell you whether you are inside, below or above the recommended range.',
      },
      options: {
        'babies.single': 'One baby',
        'babies.twins': 'Twins',
      },
      results: {
        bmi: 'Pre-pregnancy BMI',
        bmiCat: 'BMI category',
        nowTarget: 'Recommended gain by week {w}',
        totalTarget: 'Recommended total gain by 40 weeks',
        weeklyRate: 'Expected weekly gain now',
        status: 'Where you are',
      },
      empty: 'Enter your height, pre-pregnancy weight and current week to see your range.',
      howTo: {
        h: 'How to use it',
        body: [
          'Enter your height in centimetres and the weight you were just before becoming pregnant.',
          'Enter how many weeks pregnant you are now, and whether you are carrying one baby or twins.',
          'Optionally add today’s weight, and the calculator will tell you whether you are inside the recommended band.',
        ],
      },
      limits: {
        h: 'Where these ranges come from',
        body: [
          'The ranges follow the Institute of Medicine (IOM) guidelines, which are the basis of most obstetric practice worldwide and are grouped by pre-pregnancy BMI.',
          'Most of the gain belongs in the second and third trimesters. First-trimester gain of only 0.5–2 kg is normal, and losing a little in early pregnancy because of nausea is common.',
          'Asian populations develop metabolic risk at lower BMI levels than the standard WHO cut-offs. Your obstetrician may use Asian-Indian cut-offs (overweight from 23, obese from 25) and set a tighter target for you.',
          'Weight is only one indicator. What matters clinically is the baby’s growth on scan, your blood pressure, and your sugar levels.',
        ],
      },
      help: {
        h: 'When to raise it with your obstetrician',
        body:
          'Mention it at your next visit if you are gaining much faster or much slower than the range shown, if you gain more than 2 kg in a single week, or if sudden swelling of the face and hands comes with the weight — that combination can signal pre-eclampsia and needs same-day review. Very low gain matters too, because it is linked to growth restriction and preterm birth.',
      },
      faqs: [
        {
          q: 'How much weight should I gain in pregnancy?',
          a: 'For a single baby: about 12.5–18 kg if you started underweight, 11.5–16 kg at a normal BMI, 7–11.5 kg if overweight, and 5–9 kg if obese. Twins need more — roughly 17–25 kg at a normal starting BMI.',
        },
        {
          q: 'I have lost weight in the first trimester. Should I worry?',
          a: 'A small loss from nausea and vomiting is common and usually harmless as long as you can keep fluids down. Tell your doctor if you are vomiting repeatedly, passing very little urine, or losing more than about 5% of your body weight — that may be hyperemesis and needs treatment.',
        },
        {
          q: 'Am I really eating for two?',
          a: 'No. You need roughly 340 extra calories a day in the second trimester and 450 in the third — about one extra meal-sized portion, not double meals. Protein, iron, calcium and folate matter far more than sheer quantity.',
        },
        {
          q: 'Does gaining too much affect delivery?',
          a: 'It can. Excess gain raises the risk of gestational diabetes, high blood pressure, a large baby, and caesarean delivery. It is worth managing, but do not attempt weight loss or restrictive dieting during pregnancy without your obstetrician’s guidance.',
        },
      ],
    },

    'hcg-doubling-calculator': {
      name: 'hCG Doubling Time Calculator',
      card: 'Compare two beta-hCG blood results to see the doubling time and percentage rise between them.',
      eyebrow: 'Early pregnancy',
      h1: 'hCG Doubling Time Calculator',
      lead:
        'In early pregnancy, how fast beta-hCG rises matters more than any single number. Enter two blood results with their dates and times to see the doubling time and the percentage rise.',
      metaTitle: 'hCG Doubling Time Calculator — Beta hCG Rise | Shubham Hospitals Amravati',
      metaDescription:
        'Free beta-hCG doubling time calculator from the IVF team at Shubham Hi-Tech Hospital, Amravati. Compare two hCG results to find doubling time, percentage rise and typical ranges.',
      fields: {
        v1: 'First hCG result (mIU/mL)',
        d1: 'Date and time of first test',
        v2: 'Second hCG result (mIU/mL)',
        d2: 'Date and time of second test',
      },
      hints: {
        d1: 'Use the sample collection time from the report if it is printed, otherwise the approximate time of the blood draw.',
      },
      options: {},
      results: {
        doubling: 'Doubling time',
        rise: 'Rise between tests',
        elapsed: 'Time between tests',
        expected: 'Typical at this level',
      },
      empty: 'Enter both results with their dates to see the doubling time.',
      howTo: {
        h: 'How to use it',
        body: [
          'Enter the earlier result first, with the date and time the sample was taken.',
          'Enter the later result second. The two tests should be at least 48 hours apart to be meaningful — closer together and normal variation swamps the trend.',
          'Read the doubling time together with the "typical at this level" line, because expected doubling slows as hCG climbs.',
        ],
      },
      limits: {
        h: 'How to read the number',
        body: [
          'Below about 1,200 mIU/mL, hCG typically doubles every 48 to 72 hours. Between 1,200 and 6,000 it takes about 72 to 96 hours. Above 6,000 it slows further, often to 96 hours or more.',
          'A rise of at least 53% over 48 hours is the usual threshold quoted for a potentially viable intrauterine pregnancy — but a substantial minority of perfectly healthy pregnancies rise more slowly.',
          'A single value tells you very little. hCG levels at the same gestational age vary enormously between healthy pregnancies.',
          'This calculator cannot tell you whether a pregnancy is viable, ectopic or miscarrying. Only your doctor, using your results together with an ultrasound and your symptoms, can do that.',
        ],
      },
      help: {
        h: 'When to contact the hospital immediately',
        body:
          'Call or come in straight away — do not wait for the next blood test — if you have severe or one-sided abdominal pain, heavy bleeding, shoulder-tip pain, dizziness or fainting. These can be signs of an ectopic pregnancy, which is a medical emergency. Slow-rising hCG together with pain always needs same-day assessment.',
      },
      faqs: [
        {
          q: 'What is a normal hCG doubling time?',
          a: 'In the first weeks, roughly 48 to 72 hours while levels are below about 1,200 mIU/mL. It naturally slows as the number rises, and after around 10 weeks of pregnancy hCG plateaus and then falls — which is entirely normal.',
        },
        {
          q: 'My hCG is rising slowly. Does that mean miscarriage?',
          a: 'Not necessarily. Slow rise raises concern about an ectopic or a non-viable pregnancy, but healthy pregnancies with slow early rises do occur. What settles the question is an ultrasound once the level is high enough to see a sac, usually around 1,500–2,000 mIU/mL, together with your symptoms.',
        },
        {
          q: 'Does a high hCG mean twins?',
          a: 'Higher levels are more common with twins, but the overlap with singleton pregnancies is so wide that hCG cannot diagnose a twin pregnancy. Only a scan can.',
        },
        {
          q: 'How soon after IVF is hCG tested?',
          a: 'Usually about 9 to 14 days after transfer, depending on the embryo day and your centre’s protocol. Testing earlier risks picking up residual hCG from a trigger injection and getting a misleading result.',
        },
      ],
    },

    'kick-counter': {
      name: 'Baby Kick Counter',
      card: 'Count your baby’s movements to ten and see how long it took — the simple daily check from 28 weeks.',
      eyebrow: 'Third trimester',
      h1: 'Baby Kick Counter',
      lead:
        'From about 28 weeks, counting your baby’s movements once a day is one of the simplest and most useful things you can do. Tap the button each time you feel a kick, roll, jab or flutter.',
      metaTitle: 'Baby Kick Counter — Count to Ten Fetal Movement Chart | Shubham Hospitals',
      metaDescription:
        'Free baby kick counter from Shubham Hi-Tech Hospital, Amravati. Track fetal movements with the count-to-ten method, see how long it took, and know when reduced movement needs urgent review.',
      fields: {
        count: 'Movements counted',
      },
      hints: {},
      options: {},
      results: {
        count: 'Movements counted',
        started: 'Started at',
        elapsed: 'Time taken',
        status: 'Result',
      },
      empty: 'Tap the button each time you feel your baby move. The count starts with your first tap.',
      howTo: {
        h: 'How to count',
        body: [
          'Pick a time of day when your baby is usually active — often after a meal or in the evening — and try to use the same time each day.',
          'Lie on your left side or sit comfortably, somewhere quiet, and put your phone where you can reach it.',
          'Tap once for every kick, roll, swish or jab. Hiccups do not count.',
          'Stop when you reach ten. Most babies reach ten well within two hours, and often within half an hour.',
        ],
      },
      limits: {
        h: 'What is normal',
        body: [
          'There is no universal "right" number of kicks. What matters is your baby’s own pattern — you are the best judge of what is usual for your baby.',
          'Babies have sleep cycles of 20 to 40 minutes during which they may not move at all. That is normal.',
          'It is a myth that babies move less towards the end of pregnancy. Movements should not reduce as you approach your due date.',
          'This counter keeps your session only on this device so a page refresh does not lose it. Nothing is sent to the hospital.',
        ],
      },
      help: {
        h: 'When to call — do not wait',
        body:
          'Contact the hospital immediately, at any hour, if your baby’s movements feel reduced or different from usual, if you do not reach ten movements in two hours, or if you have not felt any movement at all. Do not lie down and wait until morning, do not drink cold water and hope, and do not wait for your next appointment. Reduced fetal movement needs a fetal heart trace the same day — our labour room is staffed 24x7.',
      },
      faqs: [
        {
          q: 'When should I start counting kicks?',
          a: 'From around 28 weeks in a normal pregnancy. Your obstetrician may ask you to start earlier if you have a high-risk pregnancy, twins, or a baby whose growth is being monitored.',
        },
        {
          q: 'How many movements are normal in a day?',
          a: 'Rather than a fixed number, the standard advice is the count-to-ten method: on any given day you should feel at least ten distinct movements within two hours of focused counting. Most mothers reach ten far sooner than that.',
        },
        {
          q: 'My baby is quieter than yesterday. Should I call?',
          a: 'Yes. Reduced movement is the single most important warning sign a mother can notice herself, and every hospital would far rather check and reassure you than have you wait. It is never a nuisance to call.',
        },
        {
          q: 'Do hiccups count as movements?',
          a: 'No. Hiccups are rhythmic and involuntary and are counted separately from kicks, rolls and jabs.',
        },
      ],
    },
  },
};
