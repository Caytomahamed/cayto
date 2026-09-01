import displayCards from './cards.js';
import displayEducation from './education.js';
import displayFoooter from './footer.js';
import displayHeader from './header.js';
import displayNav from './nav.js';
import displaySkill from './skills.js';
import displayProjectDetails from './projectDetails.js';
import displayBlogs from './blogs.js';
import displayBlogDetails from './blogDetails.js';
import displayTestimonials from './testimonials.js';
import initContactForm from './contact.js';
import initScrollReveal from './animations.js';

// check if exist then display
const skillsContainer = document.querySelector('.about__skills');
const header = document.querySelector('.header');
const education = document.querySelector('.timeline');
const footer = document.querySelector('footer');
const cardCon = document.querySelector('.projects__box');
const nav = document.querySelector('.navbar');
const projectDetailBox = document.querySelector('.project-detail');
const blogGrid = document.querySelector('.blog__grid');
const blogDetailBox = document.querySelector('.blog-detail');
const testimonialsGrid = document.querySelector('.testimonials__grid');
const contactForm = document.querySelector('#contactForm');

// display my header
header && displayHeader();

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

// display project details
projectDetailBox && displayProjectDetails();

// display blog list
blogGrid && displayBlogs();

// display blog details
blogDetailBox && displayBlogDetails();

// display testimonials
testimonialsGrid && displayTestimonials();

// wire up contact form
contactForm && initContactForm();

// fade the page in once styles are applied
document.body.classList.add('loaded');

// reveal content on scroll
initScrollReveal();

// sticky navbar
window.addEventListener('scroll', function () {
  const header = document?.querySelector('.header');
  const navbar = document.querySelector('.navbar');
  const headerHeight = header ? header.offsetHeight : 50;
  const profile = navbar.querySelector('.profile');

  console.log(headerHeight);

  if (window.scrollY > headerHeight) {
    navbar.classList.add('navbar--sticky');
    profile.classList.remove('hide');
  } else {
    navbar.classList.remove('navbar--sticky');
    profile.classList.add('hide');
  }
});
