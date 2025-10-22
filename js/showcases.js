const videos = [
  './assets/uturn.mp4',
  './assets/caraabe.mp4',
];

const container = document.querySelector('.showcaseVideos');
const parent = document.querySelector('.showcaseVideosContainer');
const pagination = document.querySelector('.pagination');

// Generate videos
videos.forEach((src) => {
  const video = document.createElement('video');
  video.src = src;
  video.controls = true;
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.classList.add('showupVideo');
  container.appendChild(video);
});

// Generate pagination
videos.forEach((_, index) => {
  const dot = document.createElement('span');
  if (index === 0) dot.classList.add('active');
  pagination.appendChild(dot);
});

// Helper to update pagination
const updatePagination = (currentIndex) => {
  const dots = pagination.querySelectorAll('span');
  dots.forEach((dot) => dot.classList.remove('active'));
  if (dots[currentIndex]) dots[currentIndex].classList.add('active');
};

// Scroll functions
let currentIndex = 0;
const scrollToVideo = (index) => {
  const video = container.children[index];
  if (video) {
    parent.scrollLeft = video.offsetLeft;
    updatePagination(index);
    currentIndex = index;
  }
};

// Prev & Next buttons
document.querySelector('.prev').addEventListener('click', () => {
  let index = currentIndex - 1;
  if (index < 0) index = videos.length - 1;
  scrollToVideo(index);
});

document.querySelector('.next').addEventListener('click', () => {
  let index = currentIndex + 1;
  if (index >= videos.length) index = 0;
  scrollToVideo(index);
});

// Optional: auto-scroll every 5s
setInterval(() => {
  let index = currentIndex + 1;
  if (index >= videos.length) index = 0;
  scrollToVideo(index);
}, 5000);
