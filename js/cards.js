const skills = {
  bootstrap: '#7952B355',
  javascript: '#8B800055',
  css: '#0000FF55',
  scss: '#FFC0CB55',
  tailwindcss: '#38B2AC55',
  reactjs: '#61DAFB55',
  expo: '#00002055',
  nodejs: '#68A06355',
  expressjs: '#00000055',
  php: '#777BB455',
  laravel: '#FF2D2055',
  reduxtoolkit: '#764ABC55',
  sqlite: '#003B5755',
  mysql: '#4479A155',
  mongodb: '#47A24855',
  git: '#F0503255',
  github: '#18171755',
  figma: '#F24E1E55',
  knexjs: '#F0000055',
  api: '#FF6C3755',
  reactnative: '#61DAFB55',
  preview: '#FF450055',
};

const projects = [
  {
    name: 'Kiro dhow',
    heroImg: 'dashboard.PNG',
    description:
      'Kiro Dhow streamlines rental management, connecting tenants and landlords for easy renting, payments, and maintenance.',
    tags: ['scss', 'reactjs', 'reduxtoolkit', 'nodejs', 'expressjs', 'knexjs'],
    viewLink: 'https://kirodhow.onrender.com/',
    githubLink: 'https://github.com/Caytomahamed/RentHouseMS.git',
  },
  {
    name: 'Caraabe',
    heroImg: 'ticket.PNG',
    description:
      'Caraabe is a bus transport management system designed to optimize scheduling and routing, reducing delays and improving customer service.',
    tags: ['css', 'javascript', 'php', 'mysql'],
    viewLink: '#',
    githubLink: 'https://github.com/Caytomahamed/Transportation-MS.git',
  },
  {
    name: 'U-turn',
    heroImg: 'uturn.png',
    description:
      'U-turn connects university students with safe and secure taxi rides, solving the challenge of finding reliable transportation on campus.',
    tags: ['reactnative', 'reduxtoolkit', 'nodejs', 'expressjs', 'mysql'],
    viewLink: '#',
    githubLink: 'https://github.com/Caytomahamed/uturn.git',
  },
  {
    name: 'E-Fiiri',
    heroImg: 'standing.png',
    description:
      'E-Fiiri is an interactive football league management system offering team standings, schedules, player info, and live scores.',
    tags: ['css', 'javascript', 'php', 'mysql'],
    viewLink: '#',
    githubLink: 'https://github.com/Caytomahamed/RentHouseMS.git',
  },
  {
    name: 'IEditor',
    heroImg: 'IEditor.png',
    description:
      'IEditor is a web-based code editor for writing and editing HTML, CSS, and JavaScript, with live preview functionality.',
    tags: ['html', 'css', 'javascript', 'preview'],
    viewLink: 'https://caytomahamed.github.io/IEditor',
    githubLink: 'https://github.com/Caytomahamed/IEditor.git',
  },
];

const displayCards = () => {
  const cardCon = document.querySelector('.projects__box');

  const html = projects
    .map(
      (project) =>
        `<div class="card">
                    <img src="/assets/images/${
                      project.heroImg
                    } " alt="project" />

                    <div class="card__content">
                        <h3>${project.name}</h3>
                        <p class="card__content__desc">
                        ${project.description}
                        </p>
                        <div class="card__content__tags">
                        ${project.tags
                          .map((tag) => {
                            return `<p class="card_tag_js" style="background:${skills[tag]}">${tag}</p>`;
                          })
                          .join('')}
                        </div>
                        <div class="card__content__source">
                        <a href="${project.viewLink}"  ${
          project.viewLink !== '#' ? 'target="_blank"' : ''
        }  onclick="${
          project.viewLink === '#' ? "alert('Coming Soon'); return false;" : ''
        }">
          <i class="fas fa-eye"></i>View</a>
                        <a href="${
                          project.githubLink
                        }" target= "_blank"><i class="fas fa-solid fa-code"></i>Code</a>
                        </div>
                    </div>
                    </div>`
    )
    .join('');

  cardCon.insertAdjacentHTML('beforeend', html);
};

export default displayCards;
