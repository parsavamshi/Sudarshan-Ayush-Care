const revealElements = document.querySelectorAll('[data-reveal]');
if (revealElements.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.18,
  });

  revealElements.forEach((element) => revealObserver.observe(element));
}

// Keep the loader visible until the DOM, page images, and one second minimum display time are complete.
// (() => {
//   const loader = document.getElementById('page-loader');
//   const video = loader?.querySelector('video');
//   const minimumDisplayTime = 1000;
//   const startedAt = performance.now();

//   if (!loader) return;

//   // Reveal the branded fallback if WebM playback is unsupported or the file is unavailable.
//   const showFallback = () => loader.classList.remove('is-video-playing');
//   if (video) {
//     video.addEventListener('playing', () => loader.classList.add('is-video-playing'), { once: true });
//     video.addEventListener('error', showFallback, { once: true });
//     video.play().catch(showFallback);
//   }

//   const domReady = new Promise((resolve) => {
//     if (document.readyState === 'loading') {
//       document.addEventListener('DOMContentLoaded', resolve, { once: true });
//     } else {
//       resolve();
//     }
//   });

//   const imagesLoaded = new Promise((resolve) => {
//     if (document.readyState === 'complete') {
//       resolve();
//     } else {
//       window.addEventListener('load', resolve, { once: true });
//     }
//   });

//   Promise.all([domReady, imagesLoaded]).then(() => {
//     const remainingTime = Math.max(0, minimumDisplayTime - (performance.now() - startedAt));

//     window.setTimeout(() => {
//       loader.classList.add('is-fading');

//       // Opacity completes first, followed by visibility and pointer-event removal.
//       loader.addEventListener('transitionend', (event) => {
//         if (event.propertyName !== 'opacity') return;

//         loader.classList.add('is-hidden');

//         // Disable interaction last, then restore scrolling and remove the inactive element.
//         window.requestAnimationFrame(() => {
//           loader.classList.add('is-inactive');
//           document.body.classList.remove('is-loading');
//           loader.remove();
//         });
//       }, { once: true });
//     }, remainingTime);
//   });
// })();
