export const SITE = {
  name: 'Shubham Hi-Tech Hospital and Test Tube Baby Centre',
  shortName: 'Shubham Hospitals',
  tagline: 'Hi-Tech Treatment, At Truly Affordable Cost!',
  url: 'https://shubham-hospitals.com',
  phone: '+91-8668954915',
  phoneHref: 'tel:+918668954915',
  whatsapp: 'https://wa.me/918668954915',
  email: 'shubhamhospital111@gmail.com',
  address: 'Badnera Rd, opp. Mantri Motors, Deorankar Nagar, Amravati, Maharashtra 444605',
  facebook: 'https://www.facebook.com/shubhamhitechhospital',
  instagram: 'https://www.instagram.com/shubham_hitech_hospital',
  google: 'https://share.google/xMmIQwSGrP6VOKThO',
  youtubeHospital: 'https://youtube.com/@shubhamhitechhospital',
  youtubeDrManan: 'https://youtube.com/@drmananboob.gynendoscopy',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=Shubham+Hi-Tech+Hospital+and+Test+Tube+Baby+Centre,+Badnera+Rd,+Amravati,+Maharashtra+444605',
  heroImage: '/images/hero-hospital.webp',
  heroSrcset: '/images/hero-hospital-480.webp 480w, /images/hero-hospital-768.webp 768w, /images/hero-hospital-1080.webp 1080w, /images/hero-hospital-1440.webp 1440w, /images/hero-hospital.webp 1920w',
  heroSizes: '(max-width: 820px) 100vw, 48vw',
  mapsEmbed: 'https://maps.google.com/maps?q=Shubham%20Hi-Tech%20Hospital%20%7C%20Best%20Infertility%20and%20Laparoscopy%20Centre%20in%20Amravati%2C%20Badnera%20Rd%2C%20opp.%20Mantri%20Motors%2C%20Deorankar%20Nagar%2C%20Amravati%2C%20Maharashtra%20444605&t=m&z=14&output=embed&iwloc=near',
  // SVG logos: resolution-independent — never pixelate on high-DPR mobile screens.
  // PNG originals remain in /public/images for OG/social cards (must stay raster).
  // ?v=2 busts the 8-day asset cache after the all-white footer logo replacement.
  logoHeader: '/images/logo.svg',
  logoWhite: '/images/logo-white.svg?v=2',
  favicon: '/images/favicon.png',
  ogImage: 'https://shubham-hospitals.com/images/og-logo.png',
};

// Live Google Business Profile rating. Update these two numbers periodically
// (e.g. monthly) so the markup always reflects the real, current GBP figures.
// Last synced: 2026-07-17 — 4.8 stars, 412 Google reviews.
export const GOOGLE_RATING = {
  value: '4.8',
  count: '412',
};

export const CLINIC_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: SITE.name,
  alternateName: 'Shubham Hospitals',
  url: SITE.url,
  logo: SITE.ogImage,
  image: SITE.ogImage,
  telephone: '+918668954915',
  email: SITE.email,
  slogan: SITE.tagline,
  foundingDate: '1995',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Badnera Rd, opp. Mantri Motors, Deorankar Nagar',
    addressLocality: 'Amravati',
    addressRegion: 'Maharashtra',
    postalCode: '444605',
    addressCountry: 'IN',
  },
  medicalSpecialty: ['Gynecologic', 'Obstetric', 'Surgical'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: GOOGLE_RATING.value,
    reviewCount: GOOGLE_RATING.count,
    bestRating: '5',
    worstRating: '1',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '11:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '19:00',
      closes: '21:30',
    },
  ],
  sameAs: [SITE.facebook, SITE.instagram, SITE.youtubeHospital, SITE.youtubeDrManan, SITE.google],
};
