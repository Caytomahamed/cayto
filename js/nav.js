const navItems = [
  { name: 'Projects', icon: 'fas fa-briefcase', link: '/projects.html' },
  { name: 'Contact', icon: 'fas fa-envelope', link: '/contact.html' },
  { name: 'Blog', icon: 'fas fa-blog', link: '/blogs.html' },
  { name: 'About', icon: 'fas fa-user', link: '/' },
];

const displayNav = () => {
  const nav = document.querySelector('.navbar');

  const html = `
  <div class="profile hide" >
     <a href="/" class="/">
     <div class="profile__header">
        <img
          src="assets/images/me.jpg"
          alt="Profile Picture"
          class="profile__box__img"
        />
      </div>
     </a>
        </div>
  <ul class="navbar__list">
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
