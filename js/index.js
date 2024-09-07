import displayCards from './cards.js';
import displayEducation from './education.js';
import displayFoooter from './footer.js';
import displayHeader from './header.js';
import displayNav from './nav.js';
import displaySkill from './skills.js';

// check if exist then display
const skillsContainer = document.querySelector('.about__skills');
const header = document.querySelector('.header');
const education = document.querySelector('.timeline');
const footer = document.querySelector('footer');
const cardCon = document.querySelector('.projects__box');
const nav = document.querySelector('.navbar');

// display my header
header && displayHeader();

console.log(nav);

// display my skills
skillsContainer && displaySkill();

// display education
education && displayEducation();

// display footer
footer && displayFoooter();

// display cards
cardCon && displayCards();

// display Nav
nav & displayNav();

// sticky navbar
window.addEventListener('scroll', function () {
  const header = document?.querySelector('.header');
  const navbar = document.querySelector('.navbar');
  const headerHeight = header ? header.offsetHeight : 50;

  console.log(headerHeight);

  if (window.scrollY > headerHeight) {
    console.log('headerHeight', headerHeight);
    navbar.classList.add('navbar--sticky');
  }  else {
    navbar.classList.remove('navbar--sticky');
  }
});
