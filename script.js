// Teeman vaihto
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Asetetaan tumma teema oletukseksi
document.addEventListener('DOMContentLoaded', () => {
  body.dataset.theme = 'light'; // Aluksi light, jotta toggleToiseen suuntaan toimii oikein
  body.dataset.theme = 'dark';
  themeToggle.textContent = '☀️';
});

themeToggle.addEventListener('click', () => {
  body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
  themeToggle.textContent = body.dataset.theme === 'dark' ? '☀️' : '🌙';
});

// Projektin tiedot
const projectDetails = {
  kuualus: {
    title: 'Kuualuksen jalan simulointi',
    description: 'FEM-analyysi kuualuksen laskeutumisjalan rakenteesta',
    details: 'Tässä projektissa suunnittelin ja analysoin kuualuksen laskeutumisjalan rakennetta käyttäen FEM-analyysiä. Simulaatio sisälsi törmäystilanteen, materiaalin käyttäytymisen ja rakenteen optimoinnin.',
    technologies: ['FEM', 'ANSYS', 'CAD', 'Materiaalitekniikka', 'Python'],
    images: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoCaption: 'Kuualuksen jalan simulaatio'
  },
  metrover: {
    title: 'Metrover V2',
    description: 'Robottialustan ohjausjärjestelmän uudelleensuunnittelu (2025)',
    details: 'Tämä projekti keskittyy robottialustan ohjausjärjestelmän modernisointiin ja tehostamiseen. Käytössä on Python-ohjelmointi ja Raspberry Pi -laitteisto.',
    technologies: ['Python', 'Raspberry Pi', 'ROS', 'CAD'],
    images: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoCaption: 'Metrover V2 demonstration'
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
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoCaption: 'Sääpallon laukaisu ja lento'
  },
  pienoisraketit: {
    title: 'Pienoisraketit',
    description: 'Erilaisten pienoisrakettien suunnittelu ja rakentaminen',
    details: 'Tässä projektissa suunnittelen ja rakennan erilaisia pienoisraketteja. Projekti sisältää sekä kaupallisia rakettimoottoreja että omia kiinteää polttoainetta käyttäviä prototyyppejä.',
    technologies: ['CAD', 'Aerodynamiikka', 'Komposiitit', 'Elektroniikka', 'Arduino'],
    contentSections: [
      {
        type: 'text',
        content: 'Pienoisrakettien rakentaminen on harrastus, jossa yhdistyy aerodynamiikka, materiaalitieteet ja elektroniikka. Projektin aikana olen oppinut paljon eri tekniikoista ja materiaalien käytöstä.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1518365050014-70fe7232897f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Rakettimalli suunnitteluvaiheessa'
      },
      {
        type: 'text',
        content: 'Rakettien suunnittelussa tärkeintä on aerodynaaminen tasapaino ja vakaus. Käytän CAD-ohjelmistoja mallien suunnitteluun ja simulointiin ennen rakentamista.'
      },
      {
        type: 'image',
        content: 'signal-2025-04-04-152137.jpeg',
        caption: 'Valmis raketti laukaisualustalla'
      },
      {
        type: 'video',
        content: 'Tintin_Kuumatka_yt%235.mov',
        caption: 'Raketin laukaisuvideo'
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1518365050014-70fe7232897f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1450186164447-4f8037d3539c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    video: 'Tintin_Kuumatka_yt%235.mov',
    videoCaption: 'Raketin laukaisuvideo'
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
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoCaption: 'Lentoratasimulaation esittelyvideo'
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
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoCaption: 'TVC-raketin testivideo'
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
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoCaption: 'Firefly-lennokin lentovideo'
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
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoCaption: 'NOAA-satelliittidatan vastaanottovideo'
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
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoCaption: 'Jalkatason valmistusvideo'
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
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoCaption: 'Planeettakameran esittelyvideo'
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
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    videoCaption: 'Sääpallosimulaattorin esittelyvideo'
  }
};

// Projektin tietojen näyttäminen
function showProjectDetails(projectId) {
  const project = projectDetails[projectId];
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const modalContent = document.querySelector('.modal-content');
  
  // Estä sivuston skrollaus kun modaali on auki
  document.body.style.overflow = 'hidden';
  
  modalContent.innerHTML = `
    <span class="close-modal">&times;</span>
    <h2>${project.title}</h2>
    <div class="project-details">
      <p>${project.description}</p>
      <p class="project-detailed-info">${project.details}</p>
      
      ${project.contentSections ? `
        ${project.contentSections.map(section => `
          ${section.type === 'text' ? `
            <div class="project-text-section">
              <p>${section.content}</p>
            </div>
          ` : section.type === 'image' ? `
            <div class="project-image-section">
              <img src="${section.content}" alt="${section.caption || project.title}" class="project-image" onclick="showFullscreenImage(this.src)">
              ${section.caption ? `<p class="image-caption">${section.caption}</p>` : ''}
            </div>
          ` : section.type === 'video' ? `
            <div class="project-video" style="margin-bottom: 5px;">
              ${section.content.includes('youtube.com') ? 
                `<iframe src="${section.content}" frameborder="0" allowfullscreen></iframe>` :
                `<video controls width="100%" src="${section.content.replace('#', '%23')}" 
                  poster="https://images.unsplash.com/photo-1518365050014-70fe7232897f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80">
                  Selaimesi ei tue videotiedostoja.
                </video>`
              }
            </div>
            ${section.caption ? `<p class="video-caption">${section.caption}</p>` : ''}
          ` : ''}
        `).join('')}
      ` : `
        ${project.images ? `
          <div class="project-gallery">
            ${project.images.map(img => `
              <img src="${img}" alt="${project.title}" class="project-image" onclick="showFullscreenImage(this.src)">
            `).join('')}
          </div>
        ` : ''}
        ${project.video ? `
          <div class="project-video" style="margin-bottom: 5px;">
            ${project.video.includes('youtube.com') ? 
              `<iframe src="${project.video}" frameborder="0" allowfullscreen></iframe>` :
              `<video controls width="100%" src="${project.video}" 
                poster="https://images.unsplash.com/photo-1518365050014-70fe7232897f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80">
                Selaimesi ei tue videotiedostoja.
              </video>`
            }
          </div>
          ${project.videoCaption ? `<p class="video-caption">${project.videoCaption}</p>` : ''}
        ` : ''}
      `}
      
      <div class="tech-tags">
        <h3>Käytetyt teknologiat:</h3>
        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
      </div>
    </div>
  `;

  modal.style.display = 'block';

  // Sulje modaali kun klikataan rastia
  document.querySelector('.close-modal').addEventListener('click', closeModal);

  // Sulje modaali kun klikataan ulkopuolelle
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Sulje modaali ESC-näppäimellä
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  function closeModal() {
    modal.style.display = 'none';
    // Palauta sivuston skrollaus kun modaali suljetaan
    document.body.style.overflow = '';
  }
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
