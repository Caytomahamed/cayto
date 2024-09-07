const displayFoooter = () => {
  const footer = document.querySelector('footer');

  const html = `   <h1 class="container primary-heading">Footer</h1>
      <div class="footer__container">
        <div class="footer__social">
          <a href="https://github.com/yourprofile" class="footer__social-link"
            >GitHub</a
          >
          <a href="https://github.com/yourprofile" class="footer__social-link"
            >Facebook</a
          >
          <a
            href="https://linkedin.com/in/yourprofile"
            class="footer__social-link"
            >LinkedIn</a
          >
          <a href="https://twitter.com/yourprofile" class="footer__social-link"
            >Twitter</a
          >
        </div>

        <p class="footer__credits">
          Designed and Developed by Aidarous Mohamed Abdi
        </p>

        <p class="footer__text">
          &copy; 2024 Aidarous Mohamed Abdi. All Rights Reserved.
        </p>
      </div>`;

  footer.insertAdjacentHTML('beforeend', html);
};

export default displayFoooter;
