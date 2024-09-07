const navItems = [
  { name: 'Projects', icon: 'fas fa-briefcase', link: '/projects.html' },
  { name: 'Contact', icon: 'fas fa-envelope', link: '/contact.html' },
  { name: 'Blog', icon: 'fas fa-blog', link: '/blogs.html' },
  { name: 'About', icon: 'fas fa-user', link: '/' },
];

const displayNav = () => {
  const nav = document.querySelector('.navbar');

  const html = `<ul class="navbar__list">
        ${navItems
          .map(
            (item) =>
              `<li class="navbar__item">
            <i class="${item.icon}"></i>
            <a href="${item.link}" class="navbar__link active">
              ${item.name}
            </a>
          </li>`
          )
          .join('')}
        </ul>`;

  nav.insertAdjacentHTML('beforeend', html);
};

export default displayNav;
