/* ==========================================================================
   gallery.js
   Sudarshan AYUSH CARE — Gallery Page
   Data-driven gallery: filters, masonry, lightbox, load-more
   ========================================================================== */

'use strict';

/* --------------------------------------------------------------------------
   GALLERY DATA
   Replace image paths and update title/description/category as needed.
   Categories must match the CATEGORIES list below.
   -------------------------------------------------------------------------- */
const GALLERY_IMAGES = [
  { id: 1,  title: 'Hospital Reception',          category: 'hospital',     image: '../images/gallery/001.jpg',    icon: 'bi-building',        description: 'Our welcoming reception area designed for patient comfort.' },
  { id: 2,  title: 'Consultation Room',           category: 'hospital',     image: '../images/gallery/002.jpg',    icon: 'bi-house-heart',     description: 'Private consultation rooms for personalised patient care.' },
  { id: 3,  title: 'Dr. S. Sudarshan Murthy',     category: 'doctors',      image: '../images/gallery/003.jpg',      icon: 'bi-person-fill',     description: 'Senior Ayurvedic Physician with 50+ years of experience.' },
  { id: 4,  title: 'Panchakarma Suite',           category: 'panchakarma',  image: '../images/gallery/004.jpg', icon: 'bi-droplet-half',    description: 'Dedicated Panchakarma therapy suite for complete detoxification.' },
  { id: 5,  title: 'Herbal Medicine Preparation', category: 'treatments',   image: '../images/gallery/005.jpg',   icon: 'bi-flower3',         description: 'In-house preparation of 260+ authentic herbal formulations.' },
  { id: 6,  title: 'Award Ceremony — 2019',       category: 'awards',       image: '../images/gallery/006.jpg',       icon: 'bi-award-fill',      description: 'Recognised by the All India Ayurved Congress, New Delhi.' },
  { id: 7,  title: 'National Conference',         category: 'events',       image: '../images/gallery/007.jpg',       icon: 'bi-mic-fill',        description: 'Dr. Murthy delivering keynote address at a national conference.' },
  { id: 8,  title: 'Therapy Room',               category: 'facilities',   image: '../images/gallery/008.jpg',    icon: 'bi-building-check',  description: 'State-of-the-art Ayurvedic therapy and treatment rooms.' },
  { id: 9,  title: 'Abhyanga Therapy',            category: 'treatments',   image: '../images/gallery/009.jpg',   icon: 'bi-wind',            description: 'Traditional medicated oil massage therapy for deep healing.' },
  { id: 10, title: 'Shirodhara Treatment',        category: 'panchakarma',  image: '../images/gallery/010.jpg', icon: 'bi-water',           description: 'Shirodhara — continuous stream of warm medicated oil on the forehead.' },
  { id: 11, title: 'Hospital Exterior',           category: 'hospital',     image: '../images/gallery/011.jpg',    icon: 'bi-hospital',        description: 'Our hospital premises in Kakinada, Andhra Pradesh.' },
  { id: 12, title: 'International Conference',    category: 'events',       image: '../images/gallery/012.jpg',       icon: 'bi-globe',           description: 'Representing Ayurveda at an international medical conference.' },
  { id: 13, title: 'Herbal Garden',              category: 'facilities',   image: '../images/gallery/013.jpg',    icon: 'bi-tree',            description: 'Our on-site herbal garden growing authentic medicinal plants.' },
  { id: 14, title: 'Gold Medal — Ayurveda',      category: 'awards',       image: '../images/gallery/014.jpg',       icon: 'bi-trophy-fill',     description: 'Gold medal awarded for outstanding contribution to Ayurveda.' },
  {id: 15, title: 'Kshara Karma Procedure',     category: 'treatments',   image: '../images/gallery/015.jpg',   icon: 'bi-bandaid',         description: 'Traditional Kshara Karma therapy for anorectal conditions.' },
  // { id： 15, title: 'Kshara Karma Procedure',     category: 'treatments',   image: '../images/gallery/015.jpg',   icon: 'bi-bandaid',         description: 'Traditional Kshara Karma therapy for anorectal conditions.' },
  // { id： 15, title: 'Kshara Karma Procedure',     category: 'treatments',   image: '../images/gallery/015.jpg',   icon: 'bi-bandaid',         description: 'Traditional Kshara Karma therapy for anorectal conditions.' },
  { id: 16, title: 'Doctor Consultation',        category: 'doctors',      image: '../images/gallery/016.jpg',      icon: 'bi-person-hearts',   description: 'One-on-one patient consultations with detailed health assessment.' },
  { id: 17, title: 'Vamana Therapy',             category: 'panchakarma',  image: '../images/gallery/017.jpg', icon: 'bi-droplet',         description: 'Classical Vamana (therapeutic emesis) Panchakarma treatment.' },
  { id: 18, title: 'Waiting Lounge',             category: 'facilities',   image: '../images/gallery/018.jpg',    icon: 'bi-door-open',       description: 'A serene and comfortable waiting area for patients and family.' },
  { id: 19, title: 'Annual Day Celebration',     category: 'events',       image: '../images/gallery/019.jpg',       icon: 'bi-balloon-heart',   description: 'Hospital annual day celebration with patients and staff.' },
  { id: 20, title: 'Recognition Ceremony',       category: 'awards',       image: '../images/gallery/020.jpg',       icon: 'bi-patch-check-fill',description: 'Honoured for distinguished services to Ayurvedic medicine.' },
];

/* --------------------------------------------------------------------------
   CATEGORIES
   Add or remove categories here. 'all' is auto-added first.
   -------------------------------------------------------------------------- */
const CATEGORIES = [
  { key: 'all',        label: 'All' },
  { key: 'hospital',   label: 'Hospital' },
  { key: 'doctors',    label: 'Doctors' },
  { key: 'treatments', label: 'Treatments' },
  { key: 'panchakarma',label: 'Panchakarma' },
  { key: 'facilities', label: 'Facilities' },
  { key: 'events',     label: 'Events' },
  { key: 'awards',     label: 'Awards' },
];

/* --------------------------------------------------------------------------
   STATE
   -------------------------------------------------------------------------- */
const INITIAL_VISIBLE = 8;    // images shown before "Load More"
let activeCategory   = 'all';
let visibleCount     = INITIAL_VISIBLE;
let lightboxIndex    = 0;     // index in currently filtered array
let filteredImages   = [];    // images matching active filter

/* --------------------------------------------------------------------------
   DOM REFS
   -------------------------------------------------------------------------- */
const filtersEl   = document.getElementById('glrFilters');
const gridEl      = document.getElementById('glrGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loadMoreWrap= document.getElementById('loadMoreWrap');
const lightbox    = document.getElementById('glrLightbox');
const lbImg       = document.getElementById('lbImg');
const lbIcon      = document.getElementById('lbIcon');
const lbTitle     = document.getElementById('lbTitle');
const lbDesc      = document.getElementById('lbDesc');
const lbClose     = document.getElementById('lbClose');
const lbPrev      = document.getElementById('lbPrev');
const lbNext      = document.getElementById('lbNext');
const lbBackdrop  = document.getElementById('lbBackdrop');

/* --------------------------------------------------------------------------
   BUILD FILTER BUTTONS
   -------------------------------------------------------------------------- */
function buildFilters() {
  filtersEl.innerHTML = CATEGORIES.map(cat => `
    <button
      class="glr-filter-btn${cat.key === 'all' ? ' active' : ''}"
      data-cat="${cat.key}"
      role="tab"
      aria-selected="${cat.key === 'all'}"
    >${cat.label}</button>
  `).join('');

  filtersEl.addEventListener('click', e => {
    const btn = e.target.closest('.glr-filter-btn');
    if (!btn) return;
    document.querySelectorAll('.glr-filter-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    activeCategory = btn.dataset.cat;
    visibleCount   = INITIAL_VISIBLE;
    renderGrid();
  });
}

/* --------------------------------------------------------------------------
   BUILD A SINGLE GALLERY CARD
   -------------------------------------------------------------------------- */
// function buildCard(img, globalIndex) {
//   return `
//     <div
//       class="glr-card"
//       data-id="${img.id}"
//       data-index="${globalIndex}"
//       data-cat="${img.category}"
//       role="button"
//       tabindex="0"
//       aria-label="View ${img.title}"
//     >
//       <div class="glr-card__placeholder">
//         <i class="bi ${img.icon}"></i>
//       </div>
//       <div class="glr-card__overlay">
//         <p class="glr-card__overlay-cat">${img.category}</p>
//         <p class="glr-card__overlay-title">${img.title}</p>
//       </div>
//       <div class="glr-card__zoom-icon" aria-hidden="true">
//         <i class="bi bi-zoom-in"></i>
//       </div>
//     </div>`;
// }

function buildCard(img, globalIndex) {
  return `
    <div
      class="glr-card"
      data-id="${img.id}"
      data-index="${globalIndex}"
      data-cat="${img.category}"
      role="button"
      tabindex="0"
      aria-label="View ${img.title}"
    >

      <img
        src="${img.image}"
        alt="${img.title}"
        class="glr-card__img"
        loading="lazy"
        onerror="this.style.display='none';this.previousElementSibling.style.display='flex';"
      >

      <div class="glr-card__placeholder" style="display:none;">
        <i class="bi ${img.icon}"></i>
      </div>

     <!-- <div class="glr-card__overlay">
        <p class="glr-card__overlay-cat">${img.category}</p>
        <p class="glr-card__overlay-title">${img.title}</p>
      </div> -->
 
      <div class="glr-card__zoom-icon">
        <i class="bi bi-zoom-in"></i>
      </div>

    </div>
  `;
}

/* --------------------------------------------------------------------------
   RENDER GRID
   -------------------------------------------------------------------------- */
function renderGrid() {
  // Filter
  filteredImages = activeCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  // Build HTML for visible slice
  const slice = filteredImages.slice(0, visibleCount);
  gridEl.innerHTML = slice.map((img, i) => buildCard(img, i)).join('');

  // Staggered reveal animation
  const cards = gridEl.querySelectorAll('.glr-card');
  cards.forEach((card, i) => {
    setTimeout(() => card.classList.add('visible'), i * 55);
  });

  // Toggle Load More
  loadMoreWrap.style.display = filteredImages.length > visibleCount ? 'block' : 'none';

  // Attach click/keyboard events
  cards.forEach(card => {
    card.addEventListener('click', () => openLightbox(parseInt(card.dataset.index)));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(parseInt(card.dataset.index));
      }
    });
  });
}

/* --------------------------------------------------------------------------
   LOAD MORE
   -------------------------------------------------------------------------- */
loadMoreBtn.addEventListener('click', () => {
  visibleCount += 8;
  renderGrid();
});

/* --------------------------------------------------------------------------
   LIGHTBOX
   -------------------------------------------------------------------------- */
function openLightbox(index) {
  lightboxIndex = index;
  displayLightboxItem(lightboxIndex);
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
  lbClose.focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = '';
}

// function displayLightboxItem(index) {
//   const img = filteredImages[index];
//   if (!img) return;
//   lbTitle.textContent = img.title;
//   lbDesc.textContent  = img.description;
//   lbIcon.className    = `bi ${img.icon}`;
//   lbImg.alt           = img.title;
//   // Show placeholder (real img hidden until src replaced)
//   lbImg.style.display = 'none';
// }

function displayLightboxItem(index) {

    const img = filteredImages[index];

    if (!img) return;

    // lbTitle.textContent = img.title;
    // lbDesc.textContent = img.description;

    lbImg.src = img.image;
    lbImg.alt = img.title;

    lbImg.style.display = "block";

    lbImg.onerror = () => {
        lbImg.style.display = "none";
    };

}

function prevImage() {
  lightboxIndex = (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
  displayLightboxItem(lightboxIndex);
}
function nextImage() {
  lightboxIndex = (lightboxIndex + 1) % filteredImages.length;
  displayLightboxItem(lightboxIndex);
}

lbClose.addEventListener('click', closeLightbox);
lbBackdrop.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', prevImage);
lbNext.addEventListener('click', nextImage);

// Keyboard support
document.addEventListener('keydown', e => {
  if (lightbox.hidden) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  prevImage();
  if (e.key === 'ArrowRight') nextImage();
});

/* --------------------------------------------------------------------------
   BACK TO TOP
   -------------------------------------------------------------------------- */
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > 400);
});

/* --------------------------------------------------------------------------
   INIT
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  buildFilters();
  renderGrid();
});
