const displayEducation = () => {
  const education = document.querySelector('.timeline');

  const html = ` <h1 class="container primary-heading">Education</h1>

            <div class="timeline__container timeline__container--right">
              <div class="timeline__content">
                <h2 class="timeline__year">2024-2020</h2>
                <p class="timeline__text">
                  University of Hargeisa, Bachelor of Science in Computer
                  Science
                </p>
              </div>
            </div>

            <div class="timeline__container timeline__container--left">
              <div class="timeline__content">
                <h2 class="timeline__year">2022-2021</h2>
                <p class="timeline__text">
                  Gabi School of Technology, Full Stack Software Engineering
                </p>
              </div>
            </div>
            <div class="timeline__container timeline__container--right">
              <div class="timeline__content">
                <h2 class="timeline__year">2020-20216</h2>
                <p class="timeline__text">
                  Noradin School, High School Diploma
                </p>
              </div>
            </div>`;

  education.insertAdjacentHTML('beforeend', html);
};

export default displayEducation;