import { getTestimonials } from './data/testimonials.js';

const displayTestimonials = async () => {
  const grid = document.querySelector('.testimonials__grid');
  const testimonials = await getTestimonials();

  const html = testimonials
    .map(
      (t) =>
        `<div class="testimonial-card fade-in">
          <figure class="testimonial-card__inner">
            <i class="fas fa-quote-left testimonial-card__icon"></i>
            <blockquote class="testimonial-card__quote">${t.quote}</blockquote>
            ${
              t.translation
                ? `<p class="testimonial-card__translation">
                    <span class="testimonial-card__translation-label">English translation</span>
                    ${t.translation}
                  </p>`
                : ''
            }
            <figcaption class="testimonial-card__author">
              <span class="testimonial-card__name">${t.name}</span>
              <span class="testimonial-card__role">${t.role}</span>
            </figcaption>
          </figure>
        </div>`
    )
    .join('');

  grid.insertAdjacentHTML('beforeend', html);
};

export default displayTestimonials;
