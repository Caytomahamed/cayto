import { getProjects, getTagStyle } from './data/projects.js';

const displayCards = async () => {
  const cardCon = document.querySelector('.projects__box');
  let projects = await getProjects();

  const limit = Number(cardCon.dataset.limit);
  if (limit) projects = projects.slice(0, limit);

  const html = projects
    .map(
      (project) =>
        `<a href="/projectDetails.html?id=${project.id}" class="card fade-in" data-type="${project.type}">
          <img src="/assets/images/${project.heroImg} " alt="project" />
          <div class="card__content">
            <h3>${project.name}</h3>
            <p class="card__content__desc">${project.description}</p>
            <div class="card__content__tags">
        ${project.tags
          .map((tag) => {
            const { bg, text } = getTagStyle(tag);
            return `<p class="card_tag_js" style="background:${bg}; color:${text}">${tag}</p>`;
          })
          .join('')}
      </div>
          </div>
        </a>`
    )
    .join('');

  cardCon.insertAdjacentHTML('beforeend', html);

  initProjectFilters(cardCon);
};

const initProjectFilters = (cardCon) => {
  const filterBar = document.querySelector('.projects__filters');
  if (!filterBar) return;

  const filterBtns = filterBar.querySelectorAll('.filter-btn');
  const cards = cardCon.querySelectorAll('.card');

  const FILTER_TRANSITION_MS = 350;

  const applyFilter = (filter) => {
    cards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.type === filter;

      // Cards keep a scroll-reveal transition-delay for their staggered
      // entrance; clear it here so filter transitions are never delayed.
      card.style.transitionDelay = '0s';

      if (matches) {
        card.style.display = '';
        // A card can match a filter before scroll-reveal ever ran on it
        // (it was off-screen when the page loaded); mark it visible now so
        // choosing a filter is what reveals it, not an unrelated scroll.
        card.classList.add('visible');
        requestAnimationFrame(() => card.classList.remove('card--filtered-out'));
      } else {
        card.classList.add('card--filtered-out');
        setTimeout(() => {
          if (card.classList.contains('card--filtered-out')) {
            card.style.display = 'none';
          }
        }, FILTER_TRANSITION_MS);
      }
    });
  };

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.dataset.filter);
    });
  });
};

export default displayCards;
