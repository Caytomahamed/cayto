import { getProjectById, getTagStyle } from './data/projects.js';

const displayProjectDetails = async () => {
  const box = document.querySelector('.project-detail');
  const params = new URLSearchParams(window.location.search);
  const project = await getProjectById(params.get('id'));

  if (!project) {
    box.insertAdjacentHTML(
      'beforeend',
      `<div class="project-detail__empty">
        <p>Sorry, that project could not be found.</p>
        <a href="/projects.html" class="btn-link"><i class="fas fa-arrow-left"></i> Back to Projects</a>
      </div>`
    );
    return;
  }

  const GALLERY_SIZE = 4;
  const realImages = project.gallery && project.gallery.length
    ? project.gallery
    : [project.heroImg];
  const gallerySlots = [];
  for (let i = 0; i < GALLERY_SIZE; i += 1) {
    const isReal = i < realImages.length;
    gallerySlots.push({
      src: isReal ? realImages[i] : realImages[realImages.length - 1],
      isReal,
    });
  }

  const html = `
    <a href="/projects.html" class="btn-link project-detail__back">
      <i class="fas fa-arrow-left"></i> Back to Projects
    </a>

    <div class="project-detail__hero fade-in-scale">
      <img id="projectGalleryMain" src="/assets/images/${realImages[0]}" alt="${project.name}" />
    </div>

    <div class="project-gallery">
      ${gallerySlots
        .map(
          (slot, i) =>
            `<button
              type="button"
              class="project-gallery__thumb fade-in-scale${
                i === 0 ? ' project-gallery__thumb--active' : ''
              }${slot.isReal ? '' : ' project-gallery__thumb--placeholder'}"
              data-src="/assets/images/${slot.src}"
              data-real="${slot.isReal}"
            >
              <img src="/assets/images/${slot.src}" alt="${project.name} screenshot ${i + 1}" />
              ${!slot.isReal ? '<span class="project-gallery__soon">More soon</span>' : ''}
            </button>`
        )
        .join('')}
    </div>

    <div class="project-detail__header fade-in">
      <h2>${project.name}</h2>
      <div class="project-detail__meta">
        <span><i class="fas fa-user"></i> ${project.role}</span>
        <span><i class="fas fa-clock"></i> ${project.duration}</span>
      </div>
    </div>

    <div class="project-detail__tags fade-in">
      ${project.tags
        .map((tag) => {
          const { bg, text } = getTagStyle(tag);
          return `<p class="card_tag_js" style="background:${bg}; color:${text}">${tag}</p>`;
        })
        .join('')}
    </div>

    <div class="project-detail__section fade-in">
      <h3>Overview</h3>
      <p>${project.overview}</p>
    </div>

    <div class="project-detail__section fade-in">
      <h3>Key Features</h3>
      <ul class="project-detail__list">
        ${project.features.map((f) => `<li>${f}</li>`).join('')}
      </ul>
    </div>

    <div class="project-detail__section fade-in">
      <h3>Challenges</h3>
      <p>${project.challenges}</p>
    </div>

    <div class="project-detail__actions fade-in">
      <a
        href="${project.viewLink}"
        class="btn"
        ${project.viewLink !== '#' ? 'target="_blank"' : ''}
        onclick="${
          project.viewLink === '#'
            ? "alert('Live demo coming soon'); return false;"
            : ''
        }"
      >
        <i class="fas fa-eye"></i> View Live
      </a>
      <a
        href="${project.githubLink}"
        class="btn btn--outline"
        ${project.githubLink !== '#' ? 'target="_blank"' : ''}
        onclick="${
          project.githubLink === '#'
            ? "alert('This is client work with a private repository.'); return false;"
            : ''
        }"
      >
        <i class="fas fa-code"></i> View Code
      </a>
    </div>
  `;

  box.insertAdjacentHTML('beforeend', html);

  const mainImg = box.querySelector('#projectGalleryMain');
  const heroBox = box.querySelector('.project-detail__hero');
  const thumbs = box.querySelectorAll('.project-gallery__thumb');
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;
  let activeIndex = 0;

  // Crossfade the hero image to a new gallery frame: fade out, swap the
  // source, fade back in once it has decoded.
  const swapMainImage = (src) => {
    if (prefersReducedMotion) {
      mainImg.src = src;
      return;
    }
    heroBox.classList.add('is-swapping');
    window.setTimeout(() => {
      mainImg.src = src;
      const reveal = () => heroBox.classList.remove('is-swapping');
      if (mainImg.complete) reveal();
      else mainImg.addEventListener('load', reveal, { once: true });
    }, 180);
  };

  const setActiveThumb = (index) => {
    activeIndex = index;
    swapMainImage(`/assets/images/${realImages[index]}`);
    thumbs.forEach((t) => t.classList.remove('project-gallery__thumb--active'));
    thumbs[index].classList.add('project-gallery__thumb--active');
  };

  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      if (thumb.dataset.real !== 'true') return;
      setActiveThumb(i);
    });
  });

  const openLightbox = () => {
    const hasMultiple = realImages.length > 1;
    const overlay = document.createElement('div');
    overlay.className = 'project-lightbox';
    overlay.innerHTML = `
      <button type="button" class="project-lightbox__close" aria-label="Close">
        <i class="fas fa-times"></i>
      </button>
      ${
        hasMultiple
          ? `<button type="button" class="project-lightbox__nav project-lightbox__nav--prev" aria-label="Previous image">
              <i class="fas fa-chevron-left"></i>
            </button>`
          : ''
      }
      <img src="/assets/images/${realImages[activeIndex]}" alt="${project.name} full view" />
      ${
        hasMultiple
          ? `<button type="button" class="project-lightbox__nav project-lightbox__nav--next" aria-label="Next image">
              <i class="fas fa-chevron-right"></i>
            </button>`
          : ''
      }
      ${
        hasMultiple
          ? `<div class="project-lightbox__counter">${activeIndex + 1} / ${realImages.length}</div>`
          : ''
      }
    `;
    document.body.appendChild(overlay);

    const lightboxImg = overlay.querySelector('img');
    const counter = overlay.querySelector('.project-lightbox__counter');

    const render = () => {
      lightboxImg.src = `/assets/images/${realImages[activeIndex]}`;
      if (counter) counter.textContent = `${activeIndex + 1} / ${realImages.length}`;
      thumbs.forEach((t) => t.classList.remove('project-gallery__thumb--active'));
      thumbs[activeIndex].classList.add('project-gallery__thumb--active');
      swapMainImage(lightboxImg.src);
    };

    const close = () => {
      overlay.classList.add('project-lightbox--closing');
      overlay.addEventListener('animationend', () => overlay.remove(), {
        once: true,
      });
      document.removeEventListener('keydown', onKey);
    };

    const showPrev = () => {
      activeIndex = (activeIndex - 1 + realImages.length) % realImages.length;
      render();
    };

    const showNext = () => {
      activeIndex = (activeIndex + 1) % realImages.length;
      render();
    };

    function onKey(e) {
      if (e.key === 'Escape') close();
      if (hasMultiple && e.key === 'ArrowLeft') showPrev();
      if (hasMultiple && e.key === 'ArrowRight') showNext();
    }

    overlay.querySelector('.project-lightbox__close').addEventListener('click', close);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });
    overlay
      .querySelector('.project-lightbox__nav--prev')
      ?.addEventListener('click', showPrev);
    overlay
      .querySelector('.project-lightbox__nav--next')
      ?.addEventListener('click', showNext);
    document.addEventListener('keydown', onKey);
  };

  mainImg.addEventListener('click', openLightbox);
};

export default displayProjectDetails;
