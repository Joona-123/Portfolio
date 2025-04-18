// Teeman vaihto
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
  themeToggle.textContent = body.dataset.theme === 'dark' ? '☀️' : '🌙';
});

// Projektin tiedot
const projectDetails = {
  metrover: {
    title: 'Metrover V2',
    description: 'Robottialustan ohjausjärjestelmän uudelleensuunnittelu (2025)',
    details: 'Tämä projekti keskittyy robottialustan ohjausjärjestelmän modernisointiin ja tehostamiseen. Käytössä on Python-ohjelmointi ja Raspberry Pi -laitteisto.',
    technologies: ['Python', 'Raspberry Pi', 'ROS', 'CAD']
  },
  saa: {
    title: 'Sääpallosimulaattori',
    description: 'Python-pohjainen lentoradan ennustaja GFS-datalla',
    details: 'Simulaattori ennustaa sääpallon lentorataa käyttäen GFS-säädataa. Projektissa hyödynnetään numeerista mallinnusta ja data-analyysiä.',
    technologies: ['Python', 'NumPy', 'Matplotlib', 'GFS API']
  }
};

// Projektin tietojen näyttäminen
function showProjectDetails(projectId) {
  const project = projectDetails[projectId];
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <div class="project-details">
        <h3>Projektin kuvaus</h3>
        <p>${project.details}</p>
        <h3>Käytetyt teknologiat</h3>
        <div class="tech-tags">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  modal.style.display = 'block';

  const closeBtn = modal.querySelector('.close-modal');
  closeBtn.onclick = () => {
    modal.style.display = 'none';
    setTimeout(() => modal.remove(), 300);
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      setTimeout(() => modal.remove(), 300);
    }
  };
}

// Scroll-navigointi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Scroll-indikaattorin piilotus
window.addEventListener('scroll', () => {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    if (window.scrollY > 100) {
      scrollIndicator.style.opacity = '0';
    } else {
      scrollIndicator.style.opacity = '1';
    }
  }
});

// Intersection Observer animaatioille
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, observerOptions);

document.querySelectorAll('.skill-card, .project-card, .contact-card').forEach(card => {
  observer.observe(card);
}); 