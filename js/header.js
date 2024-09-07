
console.log(window.location);
const displayHeader = () => {
  const header = document.querySelector('header');

  console.log(header);

  const html = `<div class="header__tailwind header__logos">
        <img src="assets/images/bootstrap.png" alt="tailwind Logo" />
      </div>
      <div class="header__js header__logos">
        <img src="assets/images/js.png" alt="js Logo" />
      </div>
      <div class="header__php header__logos">
        <img src="assets/images/laravel.png" alt="PHP Logo" />
      </div>
      <div class="container">
        <div class="header__content">
          <div class="profile">
            <div class="profile__box">
              <img
                src="assets/images/me.jpg"
                alt="Profile Picture"
                class="profile__box__img"
              />
            </div>
            <div class="profile__content">
              <h1>Aidarous</h1>
              <div class="profile__content__description">
                Developer Experience at
                <div class="profile__icon">
                  <div>
                    <img
                      src="assets/images/js.png"
                      alt="JS Logo"
                      class="profile__icon__img"
                    />
                  </div>
                </div>
                Javascript /
                <div class="profile__icon">
                  <div>
                    <img
                      src="assets/images/php.png"
                      alt="PHP Logo"
                      class="profile__icon__img"
                    />
                  </div>
                </div>
                Php
              </div>
            </div>
          </div>
          <p>
            What I'm learning about shipping great products, becoming a better
            developer, and growing a career in tech.
          </p>
          </div>
      </div>
    `;

  header.insertAdjacentHTML('beforeend', html);
};

export default displayHeader;
