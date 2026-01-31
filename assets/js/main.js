// Basic bilingual (English + Telugu) content switcher
const i18n = {
  en: {
    nav: {home:'Home', projects:'Projects', about:'Company', contact:'Contact'},
    heroKicker:'REAL ESTATE PROJECTS',
    heroTitle:'Premium Plots & Homes, Built With Trust',
    heroSub:'Showcase your real estate projects with photos, key highlights, and a simple WhatsApp connect flow for potential buyers.',
    heroCta1:'View Projects',
    heroCta2:'Connect on WhatsApp',
    stats1:'Verified Listings',
    stats2:'Prime Locations',
    stats3:'Customer Support',
    stat1s:'Transparent documents & guidance',
    stat2s:'Near main roads, schools & IT hubs',
    stat3s:'Quick response on WhatsApp',
    quickInfo:'Quick info',
    owner:'Owner',
    phone:'Phone',
    location:'Location',
    mapNote:'Tip: Replace the map iframe with your exact project location.',
    featuresTitle:'Why Choose Us',
    f1t:'Clear Documentation',
    f1d:'We provide clear documentation guidance to make buying simple and safe.',
    f2t:'Great Connectivity',
    f2d:'Projects selected for connectivity and long-term value.',
    f3t:'Fast WhatsApp Support',
    f3d:'Send your details and get quick responses from the owner.',
    galleryTitle:'Project Photos',
    gallerySub:'Replace these placeholders with your actual project photos.',
    aboutTitle:'Company Information',
    aboutSub:'Write a short story about your company, years of experience, mission, and what makes your projects different.',
    contactTitle:'Connect With the Owner',
    contactSub:'Enter your details and message. Clicking the button will open WhatsApp with a pre-filled message to the owner.',
    name:'Full Name',
    mobile:'Your Mobile Number',
    email:'Email (optional)',
    message:'Message / Requirement',
    send:'Send via WhatsApp',
    privacy:'We do not store your data. WhatsApp will open in a new tab with your message.',
    footer:'© {year} Your Real Estate Company. All rights reserved.'
  },
  te: {
    nav: {home:'హోమ్', projects:'ప్రాజెక్ట్స్', about:'కంపెనీ', contact:'సంప్రదించండి'},
    heroKicker:'రియల్ ఎస్టేట్ ప్రాజెక్ట్స్',
    heroTitle:'నమ్మకంతో నిర్మించిన ప్రీమియం ప్లాట్లు & ఇళ్లు',
    heroSub:'మీ రియల్ ఎస్టేట్ ప్రాజెక్ట్స్‌ను ఫోటోలు, ముఖ్యాంశాలు, మరియు సులభమైన WhatsApp కనెక్ట్‌తో ప్రదర్శించండి.',
    heroCta1:'ప్రాజెక్ట్స్ చూడండి',
    heroCta2:'WhatsApp లో కనెక్ట్ అవ్వండి',
    stats1:'ధృవీకరించిన లిస్టింగ్స్',
    stats2:'ప్రైమ్ లోకేషన్స్',
    stats3:'కస్టమర్ సపోర్ట్',
    stat1s:'పారదర్శక డాక్యుమెంట్లు & మార్గదర్శకం',
    stat2s:'ప్రధాన రోడ్లు, పాఠశాలలు & IT హబ్‌ల సమీపంలో',
    stat3s:'WhatsApp లో త్వరిత స్పందన',
    quickInfo:'త్వరిత సమాచారం',
    owner:'యజమాని',
    phone:'ఫోన్',
    location:'ప్రాంతం',
    mapNote:'సూచన: మీ ప్రాజెక్ట్ ఖచ్చితమైన లొకేషన్‌తో మ్యాప్ iframe ను మార్చండి.',
    featuresTitle:'ఎందుకు మమ్మల్ని ఎంచుకోవాలి',
    f1t:'స్పష్టమైన డాక్యుమెంటేషన్',
    f1d:'కొనుగోలు సులభం మరియు సురక్షితం అయ్యేలా స్పష్టమైన మార్గదర్శకం ఇస్తాము.',
    f2t:'మంచి కనెక్టివిటీ',
    f2d:'కనెక్టివిటీ మరియు దీర్ఘకాల విలువ కోసం ఎంపిక చేసిన ప్రాజెక్ట్స్.',
    f3t:'త్వరిత WhatsApp సపోర్ట్',
    f3d:'మీ వివరాలు పంపండి, యజమాని నుండి త్వరగా స్పందన పొందండి.',
    galleryTitle:'ప్రాజెక్ట్ ఫోటోలు',
    gallerySub:'ఈ ప్లేస్‌హోల్డర్‌ల స్థానంలో మీ అసలు ప్రాజెక్ట్ ఫోటోలు పెట్టండి.',
    aboutTitle:'కంపెనీ సమాచారం',
    aboutSub:'మీ కంపెనీ గురించి చిన్న వివరణ, అనుభవ సంవత్సరాలు, మిషన్, మరియు మీ ప్రాజెక్ట్స్ ప్రత్యేకతలను రాయండి.',
    contactTitle:'యజమానితో కనెక్ట్ అవ్వండి',
    contactSub:'మీ వివరాలు మరియు సందేశం ఇవ్వండి. బటన్ నొక్కితే WhatsApp లో యజమానికి ప్రీ-ఫిల్ సందేశం తెరుచుకుంటుంది.',
    name:'పూర్తి పేరు',
    mobile:'మీ మొబైల్ నంబర్',
    email:'ఇమెయిల్ (ఐచ్చికం)',
    message:'సందేశం / అవసరం',
    send:'WhatsApp ద్వారా పంపండి',
    privacy:'మేము మీ డేటాను నిల్వ చేయము. WhatsApp కొత్త ట్యాబ్‌లో మీ సందేశంతో తెరుచుకుంటుంది.',
    footer:'© {year} మీ రియల్ ఎస్టేట్ కంపెనీ. హక్కులు అన్ని రిజర్వ్ చేయబడినవి.'
  }
};

const state = {
  lang: (localStorage.getItem('lang') || 'en'),
  ownerName: 'Mahesh',
  whatsappNumber: '918500008233', // country code included, no +
  locationText: 'Bengaluru, Karnataka',
};

function t(path){
  const parts = path.split('.');
  let cur = i18n[state.lang];
  for(const p of parts){ cur = cur?.[p]; }
  return cur;
}

function applyTranslations(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if(typeof val === 'string') el.textContent = val;
  });
  // placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if(typeof val === 'string') el.setAttribute('placeholder', val);
  });

  // nav labels
  document.getElementById('navHome').textContent = t('nav.home');
  document.getElementById('navProjects').textContent = t('nav.projects');
  document.getElementById('navAbout').textContent = t('nav.about');
  document.getElementById('navContact').textContent = t('nav.contact');

  // footer year
  const year = new Date().getFullYear();
  document.getElementById('footerText').textContent = t('footer').replace('{year}', year);

  // dynamic owner info
  document.getElementById('ownerName').textContent = state.ownerName;
  document.getElementById('ownerPhone').textContent = '+'+state.whatsappNumber;
  document.getElementById('ownerLocation').textContent = state.locationText;

  // language toggle label
  document.getElementById('langLabel').textContent = state.lang === 'en' ? 'EN' : 'TE';
}

function buildWhatsAppLink({name, mobile, email, message}){
  const lines = [
    `Hello ${state.ownerName}, I am interested in your real estate projects.`,
    `Name: ${name}`,
    `Mobile: ${mobile}`,
  ];
  if(email) lines.push(`Email: ${email}`);
  if(message) lines.push(`Requirement: ${message}`);
  lines.push('Please share details, price, and site visit options.');
  const text = encodeURIComponent(lines.join('
'));
  return `https://wa.me/${state.whatsappNumber}?text=${text}`;
}

function wireUp(){
  document.getElementById('langToggle').addEventListener('click', ()=>{
    state.lang = state.lang === 'en' ? 'te' : 'en';
    localStorage.setItem('lang', state.lang);
    applyTranslations();
  });

  // CTA WhatsApp button
  document.getElementById('ctaWhatsApp').addEventListener('click', (e)=>{
    e.preventDefault();
    const url = buildWhatsAppLink({name:'', mobile:'', email:'', message:''});
    window.open(url, '_blank', 'noopener');
  });

  // Form submit -> WhatsApp redirect
  document.getElementById('leadForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('fName').value.trim();
    const mobile = document.getElementById('fMobile').value.trim();
    const email = document.getElementById('fEmail').value.trim();
    const message = document.getElementById('fMessage').value.trim();
    if(!name || !mobile){
      alert(state.lang==='en' ? 'Please enter Name and Mobile.' : 'దయచేసి పేరు మరియు మొబైల్ నంబర్ ఇవ్వండి.');
      return;
    }
    const url = buildWhatsAppLink({name, mobile, email, message});
    window.open(url, '_blank', 'noopener');
  });

  // Update map note
  document.getElementById('mapNote').textContent = t('mapNote');
}

document.addEventListener('DOMContentLoaded', ()=>{
  applyTranslations();
  wireUp();
});