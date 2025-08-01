document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('nav[role="navigation"]');
  const hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', function() {
    nav.classList.toggle('open');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
  });
});

function filterProjects(category) {
  const projects = document.querySelectorAll('#projects article');
  projects.forEach(project => {
    if (category === 'all' || project.dataset.category === category) {
      project.style.display = '';
    } else {
      project.style.display = 'none';
    }
  });
}

const modal = document.createElement('div');
modal.id = 'image-modal';
modal.style.display = 'none';
modal.style.position = 'fixed';
modal.style.top = '0';
modal.style.left = '0';
modal.style.width = '100vw';
modal.style.height = '100vh';
modal.style.background = 'rgba(0,0,0,0.8)';
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';
modal.style.zIndex = '2000';

const modalImg = document.createElement('img');
modalImg.style.maxWidth = '90vw';
modalImg.style.maxHeight = '90vh';
modalImg.alt = '';
modal.appendChild(modalImg);

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});

document.body.appendChild(modal);

// Add click event to project images
document.querySelectorAll('#projects img').forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', function() {
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    modal.style.display = 'flex';
  });
});