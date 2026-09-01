// displayEducation.js
const displayEducation = () => {
  const education = document.querySelector('.timeline');

  const html = `
    <h1 class="container primary-heading">History</h1>

    <p class="projects__intro">
      A Computer Science degree paired with hands-on, project-based training
      in full-stack engineering — the combination that shapes how I approach
      every system I build.
    </p>

    <div class="timeline__container timeline__container--right fade-in-right">
      <div class="timeline__content">
        <h2 class="timeline__year">2024-2020</h2>
        <p class="timeline__text">
          University of Hargeisa, Bachelor of Science in Computer Science
        </p>
      </div>
    </div>

    <div class="timeline__container timeline__container--left fade-in-left">
      <div class="timeline__content">
        <h2 class="timeline__year">2023–24</h2>
        <p class="timeline__text">
          Volunteer Instructor — Taught a full-stack development course
          (May 2023 – Apr 2024)
        </p>
      </div>
    </div>

    <div class="timeline__container timeline__container--right fade-in-right">
      <div class="timeline__content">
        <h2 class="timeline__year">2022-2021</h2>
        <p class="timeline__text">
          Gabi School of Technology, Full Stack Software Engineering
        </p>
      </div>
    </div>

    <div class="timeline__container timeline__container--left fade-in-left">
      <div class="timeline__content">
        <h2 class="timeline__year">Feb 2021</h2>
        <p class="timeline__text">
          HTML, CSS & JS — JHU / Coursera
        </p>
      </div>
    </div>

    <div class="timeline__container timeline__container--right fade-in-right">
      <div class="timeline__content">
        <h2 class="timeline__year">2020-2016</h2>
        <p class="timeline__text">
          Noradin School, High School Diploma
        </p>
      </div>
    </div>
  `;

  education.insertAdjacentHTML('beforeend', html);
};

export default displayEducation;
