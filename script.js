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
    technologies: ['Python', 'Raspberry Pi', 'ROS', 'CAD'],
    images: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  saapallo: {
    title: 'Sääpallo',
    description: 'Stratosfääriin nouseva mittausasema',
    details: 'Sääpallo-projekti keskittyy stratosfääriin lähetettävän tieteellisen mittausaseman kehittämiseen. Pallo kerää dataa ilmakehän eri kerroksista ja lähettää sen reaaliajassa maa-asemalle.',
    technologies: ['Arduino', 'GPS', 'Anturit', 'Radioyhteys'],
    images: [
      'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508181728973-ef5dcb0c4dc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  pienoisraketit: {
    title: 'Pienoisraketit',
    description: 'Erilaisten pienoisrakettien suunnittelu ja rakentaminen',
    details: 'Tässä projektissa suunnittelen ja rakennan erilaisia pienoisraketteja. Projekti sisältää sekä kaupallisia rakettimoottoreja että omia kiinteää polttoainetta käyttäviä prototyyppejä.',
    technologies: ['CAD', 'Aerodynamiikka', 'Komposiitit', 'Elektroniikka'],
    images: [
      'https://images.unsplash.com/photo-1518365050014-70fe7232897f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1450186164447-4f8037d3539c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  lentoratasimulaatio: {
    title: 'Raketin lentoratasimulaatio & työntötestipenkki',
    description: 'Työkalut rakettien suorituskyvyn mittaamiseen ja ennustamiseen',
    details: 'Projekti yhdistää fysiikkapohjaisen lentoratasimulaation ja fyysisen työntötestipenkin rakettimoottorien testaamiseen. Simulointi perustuu reaalimaailman mittausdataan.',
    technologies: ['Python', 'NumPy', 'CAD', 'Arduino', 'Voima-anturit'],
    images: [
      'https://images.unsplash.com/photo-1567416661576-659c4298a2d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581090721784-8705862f6e76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  tvc: {
    title: 'Thrust vector control -raketti',
    description: 'Ohjattava raketti suuntaukseen perustuvalla moottorin ohjauksella',
    details: 'Kehitin raketin, joka käyttää työntövektorin ohjausta (TVC) stabiliteetin ylläpitämiseen ja lentosuunnan muuttamiseen. Järjestelmä käyttää gyroskooppi- ja kiihtyvyysantureita sekä servomoottoreita moottorin suuntaamiseen.',
    technologies: ['Arduino', 'IMU', 'Servot', '3D-tulostus', 'PID-säätö'],
    images: [
      'https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581089778245-3ce67677f718?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  firefly: {
    title: 'Firefly FPV-lennokki',
    description: 'Kotitekoinen FPV-lentolaiteprojekti',
    details: 'Firefly on itse suunniteltu ja rakennettu FPV-lennokki, joka mahdollistaa first-person-view -lennätyksen videolinkin kautta. Projekti sisältää kaikki vaiheet suunnittelusta rakentamiseen ja testaukseen.',
    technologies: ['CAD', 'Elektroniikka', 'RC', 'Komposiitit', 'Video'],
    images: [
      'https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  noaa: {
    title: 'NOAA-sateliittien kuvien vastaanotto',
    description: 'Sääsatelliittien kuvien vastaanotto ja käsittely radiovastaanottimella',
    details: 'Projekti mahdollistaa NOAA-satelliittien lähettämien säädatakuvien vastaanoton tavallisella SDR-radiovastaanottimella. Järjestelmä seuraa satelliittien ylilentoja ja prosessoi signaalit visuaalisiksi säätiedoiksi.',
    technologies: ['SDR', 'Antennit', 'Python', 'Signaalinkäsittely'],
    images: [
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1447433589675-4aaa569f3e05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  jalkatasoEUC: {
    title: 'Sähköyksipyöräisen jalkataso',
    description: 'CNC-koneistettu jalkataso sähköyksipyöräiseen',
    details: 'Suunnittelin ja valmistin CNC-koneistuksella alumiinisen jalkatasorakenteen sähköyksipyöräiseen. Projekti sisälsi CAD-suunnittelun, CNC-ohjelmoinnin ja alumiinin työstämisen.',
    technologies: ['CAD', 'CNC', 'Alumiini', 'Mekaniikkasuunnittelu'],
    images: [
      'https://images.unsplash.com/photo-1593106410884-bab9cfe0502d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558389130-9799371cbf87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  planeettakamera: {
    title: 'Älypuhelimesta planeettakamera',
    description: 'Älypuhelimen muuntaminen kaukoputken planeettakameraksi',
    details: 'Projekti muuntaa älypuhelimen tehokkaaksi planeettakameraksi kaukoputkeen. Kehitin sovittimen ja ohjelmiston, jotka mahdollistavat planeettojen ja muiden taivaankappaleiden yksityiskohtaisen kuvaamisen ja prosessoinnin.',
    technologies: ['3D-tulostus', 'Optiikka', 'Mobiilisovellukset', 'Kuvankäsittely'],
    images: [
      'https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  saa: {
    title: 'Sääpallosimulaattori',
    description: 'Python-pohjainen lentoradan ennustaja GFS-datalla',
    details: 'Simulaattori ennustaa sääpallon lentorataa käyttäen GFS-säädataa. Projektissa hyödynnetään numeerista mallinnusta ja data-analyysiä.',
    technologies: ['Python', 'NumPy', 'Matplotlib', 'GFS API'],
    images: [
      'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
};

// Projektin tietojen näyttäminen
function showProjectDetails(projectId) {
  const project = projectDetails[projectId];
  const modal = document.createElement('div');
  modal.className = 'modal';
  
  // Kuvagalleria ja video HTML
  let imagesHTML = '';
  if (project.images && project.images.length > 0) {
    imagesHTML = `
      <div class="project-gallery">
        ${project.images.map(img => `<img src="${img}" alt="${project.title}" class="project-image">`).join('')}
      </div>
    `;
  }
  
  let videoHTML = '';
  if (project.video) {
    videoHTML = `
      <div class="project-video">
        <iframe width="100%" height="315" src="${project.video}" title="${project.title}" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    `;
  }
  
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      
      ${imagesHTML}
      ${videoHTML}
      
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

  // Lisää kuville klikkaustapahtumankäsittelijät
  const projectImages = modal.querySelectorAll('.project-image');
  projectImages.forEach(img => {
    img.addEventListener('click', (e) => {
      showFullscreenImage(e.target.src);
    });
  });

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

// Kuvan näyttäminen koko näytöllä
function showFullscreenImage(src) {
  const fullscreenContainer = document.createElement('div');
  fullscreenContainer.className = 'fullscreen-image';
  
  fullscreenContainer.innerHTML = `
    <span class="fullscreen-close">&times;</span>
    <img src="${src}" alt="Projektin kuva">
  `;
  
  document.body.appendChild(fullscreenContainer);
  
  // Estä sivun vieritys kun kuva on auki
  document.body.style.overflow = 'hidden';
  
  // Sulje koko näytön kuva
  const closeFullscreen = () => {
    fullscreenContainer.remove();
    document.body.style.overflow = '';
  };
  
  fullscreenContainer.querySelector('.fullscreen-close').addEventListener('click', closeFullscreen);
  fullscreenContainer.addEventListener('click', (e) => {
    if (e.target === fullscreenContainer) {
      closeFullscreen();
    }
  });
  
  // Sulje Esc-näppäimellä
  document.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape') {
      closeFullscreen();
      document.removeEventListener('keydown', escHandler);
    }
  });
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

// Intersection Observer aanimaatioille
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
