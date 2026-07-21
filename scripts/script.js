// ==========================================================================
// Sudarshan AYUSH CARE - Main JS
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

  // ---- Active nav link on scroll ----
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  function setActiveLink() {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', setActiveLink);

  // ---- Collapse mobile navbar on link click ----
  const navMenu = document.getElementById('navMenu');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navMenu);
        bsCollapse.hide();
      }
    });
  });

  // ---- Back to top button ----
  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  // ---- Contact form submit (demo) ----
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for reaching out! Our team will contact you shortly.');
      contactForm.reset();
    });
  }

});



// ---- Toggle navbar behavior on scroll ----
const siteHeader = document.getElementById('header');

function toggleHeaderBg() {
  if (window.scrollY > 60) {
    siteHeader.classList.add('scrolled');
    siteHeader.classList.add('fixed');
  } else {
    siteHeader.classList.remove('scrolled');
    siteHeader.classList.remove('fixed');
  }
}
window.addEventListener('scroll', toggleHeaderBg);
window.addEventListener('pageshow', () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  toggleHeaderBg();
});
toggleHeaderBg(); // run once on load in case page refreshes mid-scroll






// LOADER
 window.addEventListener("load", function () {
  const loader = document.getElementById("siteLoader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);

  }, 3300); // 👈 show loader for at least 1 second
});



 window.addEventListener("load", function () {
  const loader = document.getElementById("siteLoader2");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);

  }, 3300); // 👈 show loader for at least 1 second
});
