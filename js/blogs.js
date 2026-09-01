import { getBlogs } from './data/blogs.js';

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

const displayBlogs = async () => {
  const blogCon = document.querySelector('.blog__grid');
  let blogs = await getBlogs();

  const limit = Number(blogCon.dataset.limit);
  if (limit) blogs = blogs.slice(0, limit);

  const html = blogs
    .map(
      (blog) =>
        `<a href="/blogDetails.html?id=${blog.id}" class="blog-card fade-in">
          <div class="blog-card__icon"><i class="${blog.icon}"></i></div>
          <div class="blog-card__content">
            <p class="blog-card__category blog-card__category--${blog.category
              .toLowerCase()
              .replace(/\s+/g, '-')}">${blog.category}</p>
            <h3>${blog.title}</h3>
            <p class="blog-card__excerpt">${blog.excerpt}</p>
            <div class="blog-card__meta">
              <span><i class="far fa-calendar"></i> ${formatDate(
                blog.date
              )}</span>
              <span><i class="far fa-clock"></i> ${blog.readTime}</span>
            </div>
          </div>
        </a>`
    )
    .join('');

  blogCon.insertAdjacentHTML('beforeend', html);
};

export default displayBlogs;
