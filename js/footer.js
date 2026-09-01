const displayFoooter = () => {
  const footer = document.querySelector('footer');

  const html = `   <h1 class="container primary-heading">Footer</h1>
      <div class="footer__container">
        <div class="footer__social">
          <a
            href="https://github.com/Caytomahamed"
            class="footer__social-link"
            target="_blank"
            rel="noopener"
            >GitHub</a
          >
          <a
            href="https://www.facebook.com/suldaan.cidwalba?mibextid=ZbWKwL"
            class="footer__social-link"
            target="_blank"
            rel="noopener"
            >Facebook</a
          >
          <a
            href="https://www.linkedin.com/in/aidarous-mohomed-b63827204"
            class="footer__social-link"
            target="_blank"
            rel="noopener"
            >LinkedIn</a
          >
          <a
            href="https://x.com/Caytomaxmed"
            class="footer__social-link"
            target="_blank"
            rel="noopener"
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
