import { techColors, getContrastText } from './data/techColors.js';

// `key` looks the color up in the shared techColors map (js/data/techColors.js)
// so these icons always match the same brand color used for project tags,
// instead of keeping their own separate (and previously slightly different)
// copy of each color.
const skills = [
  { name: 'bootstrap', image: 'bootstrap.png', key: 'bootstrap' },
  { name: 'tailwindcss', image: 'tailwind.png', key: 'tailwindcss' },
  { name: 'react JS', image: 'react.png', key: 'reactjs' },
  { name: 'react native', image: 'react.png', key: 'reactnative' },
  { name: 'expo', image: 'expo.png', key: 'expo' },
  { name: 'node JS', image: 'node.png', key: 'nodejs' },
  { name: 'express JS', image: 'express.png', key: 'expressjs' },
  { name: 'typescript', image: 'typescript.avif', key: 'typescript' },
  { name: 'next JS', image: 'nextjs.png', key: 'nextjs' },
  { name: 'nest JS', image: 'nestjs.png', key: 'nestjs' },
  { name: 'docker', image: 'docker.png', key: 'docker' },
  { name: 'redis', image: 'redis.png', key: 'redis' },
  { name: 'cloudflare R2', image: 'R2.webp', key: 'r2' },
  { name: 'mongodb', image: 'mongodb.webp', key: 'mongodb' },
];

const displaySkill = () => {
  const skillsContainer = document.querySelector('.about__skills');

  // empty the skills container
  skillsContainer.innerHTML = '';

  skills.forEach((skill) => {
    const color = techColors[skill.key];
    const html = `
        <div class="about__skills__skill fade-in-scale">
            <img src="assets/images/${skill.image}" alt="${skill.name}"  />
            <div class="tooltip-text" style="background:${color}; color:${getContrastText(
      color
    )}">${skill.name}</div>
        </div>
    `;
    skillsContainer.insertAdjacentHTML('beforeend', html);
  });
};

export default displaySkill;
