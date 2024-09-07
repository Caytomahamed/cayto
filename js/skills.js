// Autor: Liam Benedetti
const skills = [
  {
    name: 'bootstrap',
    image: 'bootstrap.png',
    color: '#7952B3',
  },
  {
    name: 'tailwindcss',
    image: 'tailwind.png',
    color: '#38B2AC',
  },

  {
    name: 'react JS',
    image: 'react.png',
    color: '#61DAFB',
  },
  {
    name: 'expo',
    image: 'expo.png',
    color: '#000020',
  },
  {
    name: 'node JS',
    image: 'node.png',
    color: '#68A063',
  },
  {
    name: 'express JS',
    image: 'express.png',
    color: '#000000',
  },
  {
    name: 'php',
    image: 'php.png',
    color: '#777BB4',
  },
  {
    name: 'laravel',
    image: 'laravel.png',
    color: '#FF2D20',
  },
];

const displaySkill = () => {
  const skillsContainer = document.querySelector('.about__skills');

  // empty the skills container
  skillsContainer.innerHTML = '';

  skills.forEach((skill) => {
    const html = `
        <div class="about__skills__skill">
            <img src="assets/images/${skill.image}" alt="${skill.name}"  />
            <div class="tooltip-text" style="background:${skill.color}">${skill.name}</div>
        </div>
    `;
    skillsContainer.insertAdjacentHTML('beforeend', html);
  });
};

export default displaySkill;
