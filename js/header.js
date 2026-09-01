
const displayHeader = () => {
  const header = document.querySelector('header');

  console.log(header);

  const html = `<div class="header__tailwind header__logos">
        <img src="assets/images/node.png" alt="Node.js Logo" />
      </div>
      <div class="header__js header__logos">
        <img src="assets/images/js.png" alt="js Logo" />
      </div>
      <div class="header__php header__logos">
        <img src="assets/images/php.png" alt="PHP Logo" />
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
              <h1>Aidarous Mohamed</h1>
              <div class="profile__content__description">
                Full-Stack & Mobile Developer working in
                <div class="profile__icon">
                  <div>
                    <img
                      src="assets/images/react.png"
                      alt="React Native Logo"
                      class="profile__icon__img"
                    />
                  </div>
                </div>
                React Native /
                <div class="profile__icon">
                  <div>
                    <img
                      src="assets/images/node.png"
                      alt="Node.js Logo"
                      class="profile__icon__img"
                    />
                  </div>
                </div>
                Node.js
              </div>
            </div>
          </div>
          <p>
            1st Place, University of Hargeisa Hackathon — shipping
            high-performance cross-platform apps and integrated digital
            systems.
          </p>
          <div class="header__cta">
            <a
              href="assets/resume.pdf"
              target="_blank"
              rel="noopener"
              class="btn"
            >
              <i class="fas fa-file-arrow-down"></i> Download Resume
            </a>
            <a href="contact.html" class="btn btn--outline">
              <i class="fas fa-paper-plane"></i> Get In Touch
            </a>
          </div>
          </div>
      </div>
    `;

  header.insertAdjacentHTML('beforeend', html);
};

export default displayHeader;
