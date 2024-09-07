const skills = {
  bootstrap: '#7952B3',
  javascript: '#8B8000',
  css: 'blue',
  scss: 'pink',
  tailwindcss: '#38B2AC',
  reactjs: '#61DAFB',
  expo: '#000020',
  nodejs: '#68A063',
  expressjs: '#000000',
  php: '#777BB4',
  laravel: '#FF2D20',
};

const projects = [
  {
    name: 'Kiro dhow',
    heroImg: 'book.png',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    tags: ['javascript', 'php', 'css'],
    veiwLink: '',
    githubLik: '',
  },
  {
    name: 'E-Fiiri',
    heroImg: 'book.png',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    tags: ['javascript', 'php', 'css'],
  },
  {
    name: 'E-Fiiri',
    heroImg: 'book.png',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    tags: ['javascript', 'php', 'css'],
  },
  {
    name: 'E-Fiiri',
    heroImg: 'book.png',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    tags: ['javascript', 'php', 'css'],
  },
  {
    name: 'E-Fiiri',
    heroImg: 'book.png',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    tags: ['javascript', 'php', 'css'],
  },
];

const displayCards = () => {
  const cardCon = document.querySelector('.projects__box');

  const html = projects
    .map(
      (project) =>
        `<div class="card">
                    <img src="/assets/images/booking.PNG" alt="project" />

                    <div class="card__content">
                        <h3>${project.name}</h3>
                        <p class="card__content__desc">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Molestiae, dolores.
                        </p>
                        <div class="card__content__tags">
                        ${project.tags
                          .map((tag) => {
                            return `<p class="card_tag_js" style="background:${skills[tag]}">${tag}</p>`;
                          })
                          .join('')}
                        </div>
                        <div class="card__content__source">
                        <a href="#"><i class="fas fa-eye"></i>View</a>
                        <a href="#"><i class="fas fa-solid fa-code"></i>Code</a>
                        </div>
                    </div>
                    </div>`
    )
    .join('');

  cardCon.insertAdjacentHTML('beforeend', html);
};

export default displayCards;
