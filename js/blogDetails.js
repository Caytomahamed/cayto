import { getBlogById } from './data/blogs.js';

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const displayBlogDetails = async () => {
  const box = document.querySelector('.blog-detail');
  const params = new URLSearchParams(window.location.search);
  const blog = await getBlogById(params.get('id'));

  if (!blog) {
    box.insertAdjacentHTML(
      'beforeend',
      `<div class="blog-detail__empty">
        <p>Sorry, that blog post could not be found.</p>
        <a href="/blogs.html" class="btn-link"><i class="fas fa-arrow-left"></i> Back to Blog</a>
      </div>`
    );
    return;
  }

  const html = `
    <a href="/blogs.html" class="btn-link blog-detail__back">
      <i class="fas fa-arrow-left"></i> Back to Blog
    </a>

    <div class="blog-detail__header fade-in">
      <p class="blog-card__category blog-card__category--${blog.category
        .toLowerCase()
        .replace(/\s+/g, '-')}">${blog.category}</p>
      <h2>${blog.title}</h2>
      <div class="blog-card__meta">
        <span><i class="far fa-calendar"></i> ${formatDate(blog.date)}</span>
        <span><i class="far fa-clock"></i> ${blog.readTime}</span>
      </div>
    </div>

    <div class="blog-detail__body">
      ${blog.content
        .map(
          (section) =>
            `<div class="blog-detail__section fade-in">
              <h3>${section.heading}</h3>
              ${section.paragraphs.map((p) => `<p>${p}</p>`).join('')}
            </div>`
        )
        .join('')}
    </div>
  `;

  box.insertAdjacentHTML('beforeend', html);
};

export default displayBlogDetails;
