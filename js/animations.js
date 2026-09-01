const REVEAL_SELECTOR = '.fade-in, .fade-in-left, .fade-in-right, .fade-in-scale';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const initScrollReveal = () => {
  const observed = new WeakSet();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  const scan = (root = document) => {
    const reduced = prefersReducedMotion();
    root.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
      if (observed.has(el)) return;
      observed.add(el);

      if (reduced) {
        el.classList.add('visible');
      } else {
        observer.observe(el);
      }
    });
  };

  scan();

  // Project/blog cards render after an async fetch, so keep watching for
  // newly inserted reveal elements for a short window after load.
  const mutationObserver = new MutationObserver(() => scan());
  mutationObserver.observe(document.body, { childList: true, subtree: true });
  setTimeout(() => mutationObserver.disconnect(), 8000);
};

export default initScrollReveal;
