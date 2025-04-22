// Teeman vaihto
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Asetetaan tumma teema oletukseksi
document.addEventListener('DOMContentLoaded', () => {
  body.dataset.theme = 'light'; // Aluksi light, jotta toggleToiseen suuntaan toimii oikein
  body.dataset.theme = 'dark';
  themeToggle.textContent = '☀️';
  
  // Varmistetaan harrastuskorttien tummennus heti sivun latauduttua
  ensureHobbyCardsDarkening();
});

themeToggle.addEventListener('click', () => {
  body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
  themeToggle.textContent = body.dataset.theme === 'dark' ? '☀️' : '🌙';
  
  // Varmistetaan harrastuskorttien tummennus teeman vaihdon jälkeen
  ensureHobbyCardsDarkening();
});

// Funktio, joka varmistaa harrastuskorttien tummennus-efektin
function ensureHobbyCardsDarkening() {
  // Poista aiemmin lisätyt tummennustyylit
  const oldStyle = document.getElementById('hobby-card-darkening-style');
  if (oldStyle) {
    oldStyle.remove();
  }
  
  // Lisää uusi tyylielementti ja anna sille id
  const afterStyle = document.createElement('style');
  afterStyle.id = 'hobby-card-darkening-style';
  afterStyle.textContent = `
    .hobby-card::after,
    body .hobby-card::after,
    html .hobby-card::after,
    body[data-theme] .hobby-card::after, 
    body[data-theme="light"] .hobby-card::after,
    body[data-theme="dark"] .hobby-card::after,
    html[data-theme="light"] .hobby-card::after,
    html[data-theme="dark"] .hobby-card::after {
      background-color: rgba(0, 0, 0, 0.35) !important;
      opacity: 1 !important;
    }
    
    /* Estetään hover-efektin vaikutus tummennukseen */
    .hobby-card:hover::after {
      background-color: rgba(0, 0, 0, 0.35) !important;
      opacity: 1 !important;
    }
  `;
  document.head.appendChild(afterStyle);
  
  // Korjaa inline-tyylin asettaminen
  document.querySelectorAll('.hobby-card').forEach(card => {
    const currentStyle = card.getAttribute('style') || '';
    card.setAttribute('style', currentStyle + '; --card-darkening: rgba(0, 0, 0, 0.35) !important;');
    
    // Aseta tummennus myös suoraan elementille !important-määreellä
    const afterElement = document.createElement('div');
    afterElement.className = 'forced-darkening';
    afterElement.style.cssText = `
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 100% !important;
      background-color: rgba(0, 0, 0, 0.35) !important;
      z-index: 1 !important;
      pointer-events: none !important;
    `;
    
    // Poista mahdollinen aiempi tummennus
    const existingDarkening = card.querySelector('.forced-darkening');
    if (existingDarkening) {
      existingDarkening.remove();
    }
    
    // Lisää uusi tummennus
    card.appendChild(afterElement);
  });
}

// Projektin tiedot
const projectDetails = {
  kuualus: {
    title: 'Kuualuksen jalan simulointi',
    description: 'FEM-analyysi ja kinematiikkasimulointi kuualuksen laskeutumisjalan rakenteesta',
    details: 'Tässä projektissa suunnittelin ja analysoin kuualuksen laskeutumisjalan rakennetta käyttäen FEM-analyysiä ja kinematiikkasimulointia.',
    technologies: ['FEM-simulointi', 'Kinematiikkasimulointi', 'Solidworks', 'CAD'],
    year: '2024',
    contentSections: [

    ]
  },
  saapallo: {
    title: 'Sääpallo',
    description: 'Stratosfääriin nouseva kameroilla, erilaisilla mittalaitteilla ja GPS-paikantimilla varustettu laite',
    details: 'Sääpallo-projekti keskittyy stratosfääriin lähetettävän tieteellisen mittausaseman kehittämiseen. Pallo kerää dataa ilmakehän eri kerroksista ja lähettää sen reaaliajassa maa-asemalle.',
    technologies: ['Arduino', 'GPS-paikannus', 'barometri', 'Excel', 'elektroniikka', '3D-tulostus', 'radiotekniikka', 'APRS-paikannus', 'Antennitekniikka', 'Ompelu'],
    year: '2020 - 2021',
    contentSections: [
      {
        type: 'text',
        content: 'Sääpalloprojektin tavoitteena oli kehittää edullinen mittausasema ilmakehän tutkimiseen. Palloon asennettiin useita antureita, jotka mittaavat lämpötilaa, painetta, kosteutta ja muita parametreja.'
      },
      {
        type: 'gallery',
        caption: 'Dataloggerin prototyyppausta',
        images: [
          {
            src: 'Media\\sääpallo_2.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\sääpallo_3.jpeg',
            isPortrait: false
          },
        ]
      }, 
      {
        type: 'gallery',
        caption: 'Patteripaketin kasaus. 16kpl 1,5V Energizer Ultimate Lithium L91 AA-pattereita',
        images: [
          {
            src: 'Media\\sääpallo_4.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\sääpallo_5.jpeg',
            isPortrait: false
          },
        ]
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\sääpallo_7.jpeg',
            caption: 'Juuri tulostettu gps-trackerin gimbal-mekanismi',
            isPortrait: false
          },
          {
            src: 'Media\\sääpallo_10.jpeg',
            caption: '3D-tulostettu kamerateline',
            isPortrait: false
          },
          
        ]
      }, 
      {
        type: 'gallery',
        caption: 'Laskuvarjon valmistusta',
        images: [
          {
            src: 'Media\\sääpallo_15.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\sääpallo_12.jpeg',
            isPortrait: false
          },
          
          
        ]
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\sääpallo_8.jpeg',
            caption: 'Kaikki lennolle tuleva elektroniikka',
            isPortrait: false
          },
          {
            src: 'Media\\sääpallo_11.jpeg',
            caption: 'Osat asennettuina',
            isPortrait: false
          },
        ]
    },
    {
      type: 'image',
      content: 'Media\\sääpallo_6.jpeg',
      caption: 'Lateksinen 1600g sääpallo',
      isPortrait: true
    },
    {
      type: 'image',
      content: 'Media\\sääpallo_17.jpeg',
      caption: 'Valmiina lentoon!',
      isPortrait: false
    },
    {
      type: 'image',
      content: 'Media\\sääpallo_1.jpeg',
      caption: 'Sääpallossa melkein tarvittava määrä heliumia',
      isPortrait: true
    },
    {
      type: 'gallery',
      caption: 'Kuvia lennosta.',
      images: [
        {
          src: 'Media\\sääpallo_20.png',
          isPortrait: false
        },
        {
          src: 'Media\\sääpallo_21.png',
          isPortrait: false
        },
        {
          src: 'Media\\sääpallo_22.png',
          isPortrait: false
        },
        {
          src: 'Media\\sääpallo_23.png',
          isPortrait: false
        },
        {
          src: 'Media\\sääpallo_24.png',
          isPortrait: false
        },
        {
          src: 'Media\\sääpallo_32.png',
          isPortrait: false
        },
        {
          src: 'Media\\sääpallo_31.png',
          isPortrait: false
        },
        {
          src: 'Media\\sääpallo_34.jpeg ',
          isPortrait: false
        },
        {
          src: 'Media\\sääpallo_25.jpeg',
          isPortrait: false
        },        
      ] 
    },
    {
      type: 'image',
      content: 'Media\\sääpallo_19.png',
      caption: '35km',
      isPortrait: false
    },
    {
      type: 'gallery',
      caption: 'Toteutunut gps:llä tallennettu lentoreitti. Hyötykuorma laskeutui n. 8km päähän ennustetusta paikasta.',
      images: [
        {
          src: 'Media\\sääpallo_33.png',
          isPortrait: false
        },
        {
          src: 'Media\\sääpallo_28.png',
          isPortrait: false
        },
      ]
    },
    
    
    


    {
      type: 'video',
      content: 'https://www.youtube.com/embed/m2tmNn_AIf0',
      caption: 'Video sääpallon lennosta',
      isPortrait: false
    },
    

   



    ]
  },
  pienoisraketit: {
    title: 'Pienoisraketit',
    description: 'Erilaisten pienoisrakettien suunnittelu ja rakentaminen',
    details: 'Tässä projektissa suunnittelen ja rakennan erilaisia pienoisraketteja. Projekti sisältää sekä kaupallisia rakettimoottoreja että omia kiinteää polttoainetta käyttäviä prototyyppejä.',
    technologies: ['CAD', 'Aerodynamiikka', 'Komposiitit', 'Elektroniikka', 'Arduino', '3D-tulostus', 'Rakettimoottorit', 'Laskuvarjot'],
    year: '~2020 lähtien',
    contentSections: [
      {
        type: 'text',
        content: 'Pienoisrakettien rakentaminen on harrastus, jossa yhdistyy aerodynamiikka, materiaalitieteet ja elektroniikka. Projektin aikana olen oppinut paljon eri tekniikoista ja materiaalien käytöstä.'
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'https://www.youtube.com/embed/ihPFJYHEsq8',
            caption: 'Rakettimalli suunnitteluvaiheessa',
            isPortrait: false
          },
          {
            src: 'https://www.youtube.com/embed/aGscWCjO5II',
            caption: 'Rakettimalli suunnitteluvaiheessa',
            isPortrait: false
          },
          {
            src: 'https://www.youtube.com/embed/m8nETrFVndA',
            caption: 'Rakettimalli suunnitteluvaiheessa',
            isPortrait: false
          }
        ]
      },

      
      



      {
        type: 'video',
        content: 'https://www.youtube.com/embed/JSLwPJCCmUM',
        caption: 'Rakettimalli suunnitteluvaiheessa',
        isPortrait: false
      },
      
      
      {
        type: 'video',
        content: 'https://www.youtube.com/embed/lteY5EDLjto',
        caption: 'Rakettimalli suunnitteluvaiheessa',
        isPortrait: false
      },
      {
        type: 'video',
        content: 'Media\\raketit_8cc.mp4',
        caption: 'Rakettimalli suunnitteluvaiheessa',
        isPortrait: false
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\raketit_10.mp4',
            caption: 'Rakettimalli suunnitteluvaiheessa',
            isPortrait: false,
            muted: false
          },
          {
            src: 'Media\\raketit_11.jpeg',
            caption: 'Räjähdys',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_7cc.mp4',
            caption: 'Räjähdys',
            isPortrait: false,
            muted: false
          }

        ]
      },
      {
        type: 'text',
        content: 'Sekalaisia kuvia rakettien rakentamisesta:'
      },
      {
        type: 'gallery',
        images: [
          
          {
            src: 'Media\\raketit_12.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_13.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_14.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_15.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_16.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_17.jpeg',
            isPortrait: false,
          },
          {
            src: 'Media\\raketit_18.jpeg',
            isPortrait: false,
          },
          {
            src: 'Media\\raketit_19.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_20.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_21.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_22.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_23.jpeg',
            isPortrait: false,
          },
          {
            src: 'Media\\raketit_24.jpeg',
            isPortrait: false,
          },
          {
            src: 'Media\\raketit_26.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_27.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_28.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_29.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_30.jpeg',
            isPortrait: false
          },          
        ]
      },
      
      
      





    ]
  },
  lentoratasimulaatio: {
    title: 'Raketin lentoratasimulaatio & työntötestipenkki',
    description: 'Työkalut rakettien suorituskyvyn mittaamiseen ja ennustamiseen',
    details: 'Projekti yhdistää fysiikkapohjaisen lentoratasimulaation ja fyysisen työntötestipenkin rakettimoottorien testaamiseen. Simulointi perustuu reaalimaailman mittausdataan.',
    technologies: ['Python', '3D-tulostus', 'Arduino', 'Voima-anturi', 'RTC-kello'],
    year: '2024',
    contentSections: [
      {
        type: 'text',
        content: 'Lentoratasimulaattori on Python-pohjainen työkalu, joka mallintaa raketin lentoa erilaisten muuttujien pohjalta. Se huomioi painon, työntövoiman, ilmanvastuksen ja tuuliolosuhteet.'
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\farsim_2.jpg',
            caption: 'Lähtötiedot',
            isPortrait: false
          },
          {
            src: 'Media\\farsim_3.jpg',
            caption: 'Simulaation tulokset',
            isPortrait: false
          },
        ]
      },
      {
        type: 'image',
        content: 'Media\\farsim_6.png',
        caption: 'Simulaation tulokset käyrinä',
        isPortrait: false
      },
      {
        type: 'text',
        content: 'Simulaattorissa voi suunnitella raketin lentoradan pienimpienkin yksityiskohtien tarkkuudella ja testata eri parametrien vaikutusta.'
      },
      {
        type: 'image',
        content: 'Media\\farsim_5.jpeg',
        caption: 'Työntötestipenkin elektroniikka',
        isPortrait: false
      },
      {
        type: 'video',
        content: 'Media\\farsim_9.mp4',
        caption: 'Sähkösytytin',
        autoplay: true,
        loop: true,
        muted: true,
        preload: "auto"
      },
      {
        type: 'video',
        content: 'https://www.youtube.com/embed/XP5ysh523F0',
        caption: 'Rakettimoottorin TSP G35-6 työntötesti.<br>Impulssi: 97.7Ns<br>Keskimääräinen työntövoima: 22N<br>Suurin työntövoima: 69.2N',
        isPortrait: false
      }, 
      {
        type: 'image',
        content: 'Media\\raketit_6.jpeg',
        caption: 'Tämän simulaattorin ensimmäinen koekaniini',
        isPortrait: true
      }
    ]
  },
  tvc: {
    title: 'Thrust vector control -raketti',
    description: 'Ohjattava raketti suuntaukseen perustuvalla moottorin ohjauksella',
    details: 'Kehitin raketin, joka käyttää työntövektorin ohjausta (TVC) stabiliteetin ylläpitämiseen ja lentosuunnan muuttamiseen. Järjestelmä käyttää gyroskooppi- ja kiihtyvyysantureita sekä servomoottoreita moottorin suuntaamiseen.',
    technologies: ['Arduino', 'IMU', 'Barometri', 'Servot', '3D-tulostus', 'Komposiitit', 'Radiotekniikka', 'HC-11 Radiokommunikaatio', 'PID-säätö'],
    year: '2021',
    contentSections: [
      {
        type: 'text',
        content: 'TVC (Thrust Vector Control) -raketti on edistyneempi versio perinteisestä raketista. Se pystyy hallitsemaan lentoaan suuntaamalla moottoria, mikä mahdollistaa vakaamman lentoradan.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'TVC-raketin moottorijärjestelmä',
        isPortrait: true
      },
      {
        type: 'text',
        content: 'Raketin ohjausjärjestelmä perustuu Arduino-mikrokontrolleriin, IMU-anturiin ja PID-säätöalgoritmiin. Järjestelmä mittaa raketin asentoa ja korjaa sitä reaaliajassa ohjaamalla servomoottoreita.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1581089778245-3ce67677f718?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Ohjauselektroniikka asennettuna',
        isPortrait: true
      },
      {
        type: 'video',
        content: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        caption: 'TVC-raketin testivideo'
      }
    ]
  },
  firefly: {
    title: 'Firefly FPV-lennokki',
    description: 'Kotitekoinen FPV-lentolaiteprojekti',
    details: 'Firefly on itse suunniteltu ja rakennettu FPV-lennokki, joka mahdollistaa first-person-view -lennätyksen videolinkin kautta. Projekti sisältää kaikki vaiheet suunnittelusta rakentamiseen ja testaukseen.',
    technologies: ['Elektroniikka', '3D-tulostus', 'GPS', 'FPV-videolinkki', 'Radio-ohjaus'],
    year: '2024 - 2025',
    contentSections: [
      {
        type: 'text',
        content: 'Firefly-lennokki on suunniteltu FPV-lennätykseen, jossa lennättäjä näkee lennättäessään lennokista lähetettyä videokuvaa. Projekti sisälsi lennokin mekaanisen suunnittelun, elektroniikan kokoamisen ja ohjelmiston integroinnin.'
      },
      {
        type: 'text',
        content: 'Lennokki käyttää pienikokoista videokameraa, joka lähettää kuvaa reaaliajassa maahan. Rakenne on suunniteltu CAD-ohjelmistolla ja osa komponenteista on valmistettu 3D-tulostamalla.'
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\firefly_2.jpeg',
            caption: 'Lennokin elektroniikkajärjestelmä',
            isPortrait: false
          },
          {
            src: 'Media\\firefly_3.jpeg',
            caption: 'Lennokki ilmassa',
            isPortrait: false
          },
          {
            src: 'Media\\firefly_1.jpeg',
            caption: 'Lennokin etuosa',
            isPortrait: false
          }
        ],
        caption: 'Firefly-lennokin eri kuvakulmia ja komponentteja'
      },
      {
        type: 'image',
        content: 'Media\\firefly_1.jpeg',
        caption: 'Firefly-lennokki valmiina lentoon',
        isPortrait: true
      }
    ]
  },
  noaa: {
    title: 'NOAA-satelliittien kuvien vastaanotto',
    description: 'Sääsatelliittien kuvien vastaanotto ja käsittely radiovastaanottimella',
    details: 'Projekti mahdollistaa NOAA-satelliittien lähettämien säädatakuvien vastaanoton tavallisella SDR-radiovastaanottimella. Järjestelmä seuraa satelliittien ylilentoja ja prosessoi signaalit visuaalisiksi säätiedoiksi.',
    technologies: ['SDR', 'Antennit', 'Kiertoratamekaniikka'],
    year: '2019',
    contentSections: [
      {
        type: 'text',
        content: 'NOAA-satelliitit lähettävät jatkuvasti säädataa, jota voidaan vastaanottaa tavallisella radiovastaanottimella. Projektissa rakensin SDR-vastaanottimen ja antennin, jotka on viritetty satelliittien taajuuksille.'
      },
      {
        type: 'image',
        content: 'Media\\noaa_9.jpeg',
        caption: 'vesiputkesta rakennettu vastaanotinantenni',
        isPortrait: true
      },
      {
        type: 'image',
        content: 'Media\\noaa_1.jpeg',
        caption: 'Vastaanotettu kuva',
        isPortrait: false
      },
      {
        type: 'text',
        content: 'Vastaanotettu signaali prosessoidaan Python-ohjelmistolla, joka muuntaa APT-signaalin visuaaliseksi säädataksi. Tämä mahdollistaa reaaliaikaisten säätietojen vastaanoton suoraan satelliiteista.'
      },
      {
        type: 'image',
        content: 'Media\\noaa_4.jpeg',
        caption: 'Signaalin vastaanotto ohjelmalla SDR# (oikealla) ja sen muuntaminen kuvaksi ohjelmalla WXtoimg (vasemmalla)'
      },
      {
        type: 'text',
        content: 'Vastaanotettuja kuvia:.'
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\noaa_2.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\noaa_5.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\noaa_6.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\noaa_7.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\noaa_8.jpeg',
            isPortrait: false
          }, 
          {
            src: 'Media\\noaa_1.jpeg',
            isPortrait: false
          }
        ],
      }
    ]
  },
  jalkatasoEUC: {
    title: 'Sähköyksipyöräisen jalkataso',
    description: 'CNC-koneistettu jalkataso sähköyksipyöräiseen',
    details: 'Suunnittelin ja valmistin CNC-koneistuksella alumiinisen jalkatasorakenteen sähköyksipyöräiseen. Projekti sisälsi CAD-suunnittelun, CNC-ohjelmoinnin ja alumiinin työstämisen.',
    technologies: ['CAD', 'CNC', 'Mekaniikkasuunnittelu', '3D-tulostus', 'Alumiinin työstäminen'],
    year: '2024',
    contentSections: [
      {
        type: 'text',
        content: 'Sähköyksipyöräinen (EUC) tarvitsee käyttömukavuuden parantamiseksi hyvät jalkatasot. Tässä projektissa suunnittelin ja valmistin alumiiniset jalkatasot, jotka parantavat ajomukavuutta ja hallittavuutta.'
      },
      {
        type: 'image',
        content: 'Media\\pedaali_2.jpeg',
        caption: 'Jalkatason kiinnityspiste.',
        isPortrait: true
      },
      {
        type: 'gallery',
        caption: 'Jalkatason CAD-malli',
        images: [
          {
            src: 'Media\\pedaali_1.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\pedaali_14.jpg',
            isPortrait: false
          }
        ]
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\pedaali_6.jpeg',
            caption: 'Muovinen prototyyppi tulostumassa.',
            isPortrait: false
          }, 
          {
            src: 'Media\\pedaali_8.jpeg',
            caption: 'Valmis prototyyppi',
            isPortrait: false
          },
          {
            src: 'Media\\pedaali_9.jpeg',
            isPortrait: false
          },
          
          
        ]
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\pedaali_15.jpg',
            caption: '3D-kuvan tarkemmat toleroinnit PDF-tiedostossa',
            isPortrait: false
          },
          {
            src: 'Media\\pedaali_3.png',
            caption: 'Jalkataso osittain koneistettuna konepajalla',
            isPortrait: false
          }
        ]
      }, 
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\pedaali_5.jpeg',
            caption: 'Koneistetut osat saapui postissa!',
            isPortrait: false
          },
          {
            src: 'Media\\pedaali_12.jpeg',
            caption: 'Ensimmäinen nasta ruuvattu kiinni',
            isPortrait: false
          },
          {
            src: 'Media\\pedaali_11.jpeg',
            caption: 'Toinen jalkataso pyörässä kiinni',
            isPortrait: false
          }
        ]
      },



      {
        type: 'image',
        content: 'Media\\pedaali_10.jpeg',
        caption: 'Jalkatasot koneistettuna, asennettuna ja valmiina ajoon!',
        isPortrait: true
      }



    ]
  },
  planeettakamera: {
    title: 'Älypuhelimesta planeettakamera',
    description: 'Älypuhelimen muuntaminen kaukoputken planeettakameraksi',
    details: 'Projekti muuntaa älypuhelimen tehokkaaksi planeettakameraksi kaukoputkeen. Kehitin sovittimen ja ohjelmiston, jotka mahdollistavat planeettojen ja muiden taivaankappaleiden yksityiskohtaisen kuvaamisen ja prosessoinnin.',
    technologies: ['3D-tulostus', 'Optiikka', 'Tähtitiede', 'Kuvankäsittely'],
    year: '2021',
    contentSections: [
      {
        type: 'text',
        content: 'Planeettakuvaus on tähtiharrastuksen haastava osa-alue, joka vaatii yleensä kalliita erikoiskameroita. Tässä projektissa kehitin ratkaisun, joka hyödyntää tavallista älypuhelinta planeettojen kuvaamiseen.'
      }, 
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\op5t_7.jpeg',
            caption: '1. Takakansi auki',
            isPortrait: false
          },
          {
            src: 'Media\\op5t_8.jpeg',
            caption: '',
            isPortrait: false
          },
          {
            src: 'Media\\op5t_9.jpeg',
            caption: '2. Kameramoduuli irti.',
            isPortrait: false
          }, 
          {
            src: 'Media\\op5t_1.jpeg',
            caption: '3. Optiikan irroitus Dremelin avulla.',
            isPortrait: false
          }, 
          {
            src: 'Media\\op5t_10.jpeg',
            caption: 'Kameran kenno esillä',
            isPortrait: false
          }, 
          {
            src: 'Media\\op5t_11.jpeg',
            caption: '4. kameramoduuli takaisin kiinni.',
            isPortrait: false
          }
          
          
          
          
        ]
      }, 
      

      {
        type: 'gallery',
        caption: 'Kansainvälinen avaruusasema ISS kulkee auringon edestä. Videot reaaliajassa.',
        images: [
          {
            src: 'Media\\op5t_12.mp4',
            isPortrait: false,
            autoplay: true,
            loop: true
          }, 
          {
            src: 'Media\\op5t_13.mp4',
            isPortrait: false,
            autoplay: true,
            loop: true
          }
        ]
      },
      {
        type: 'image',
        content: 'Media\\op5t_6.jpg',
        caption: 'Mars tulossa esiin kuun takaa. Kuvattu Espoosta 9.2.2025.',
        isPortrait: false
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\op5t_2.jpeg',
            caption: 'Saturnus',
            isPortrait: false
          }, 
          {
            src: 'Media\\op5t_3.jpeg',
            caption: 'Jupiter',
            isPortrait: false
          }, 
          {
            src: 'Media\\op5t_4.jpeg',
            caption: 'Jupiter ja sen kuita',
            isPortrait: false
          },  
          {
            src: 'Media\\op5t_5.jpeg',
            caption: 'Komeetta 46P/Wirtanen',
            isPortrait: false
          }
        ]
      }




    ]
  },
  saa: {
    title: 'Sääpallosimulaattori',
    description: 'Python-pohjainen lentoradan ennustaja GFS-datalla',
    details: 'Simulaattori ennustaa sääpallon lentorataa käyttäen GFS-säädataa. Projektissa hyödynnetään numeerista mallinnusta ja data-analyysiä.',
    technologies: ['Python', 'Cursor-editori', 'GFS-säädata'],
    year: '2025',
    contentSections: [
      {
        type: 'text',
        content: 'Sääpallosimulaattori on työkalu, joka auttaa ennustamaan sääpallon lentoradan ennen laukaisua. Simulaattori käyttää kansainvälistä GFS-säädataa tuulen nopeuden ja suunnan määrittämiseen eri korkeuksissa.'
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\gfs2_3.jpg',
            caption: 'Lentoreitti',
            isPortrait: false
          },
          {
            src: 'Media\\gfs2_2.jpg',
            caption: 'Sondehubin ennustajalla laskettu lentoreitti',
            isPortrait: false
          },
          
        ]
      },







    ]
  },
  metrover: {
    title: 'Metrover V2',
    description: 'Robottialustan ohjausjärjestelmän uudelleensuunnittelu',
    details: 'Tämä projekti keskittyy robottialustan ohjausjärjestelmän modernisointiin ja tehostamiseen.',
    technologies: ['Autodesk Fusion', 'Solidworks', 'Dassault Systèmes 3Dexperience', 'CAD', '3D-tulostus', 'Laserleikkaus', 'Ohutlevytyöt'],
    year: '2025',
    contentSections: [
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\metrover_18.jpg',
            caption: 'Metrover V2 mobiilirobotti',
            isPortrait: false
          },
          {
            src: 'Media\\metrover_4.jpeg',
            caption: 'Takapyörän ripustus ja kääntöakseli',
            isPortrait: false
          },
          
        ]
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\metrover_2.png',
            caption: 'Askelmoottori',
            isPortrait: false
          },
          {
            src: 'Media\\metrover_3.png',
            caption: '1:40 alennusvaihde',
            isPortrait: false
          },
          
        ]
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\metrover_5.png',
            caption: 'CNC-koneistettava vaijerirumpu',
            isPortrait: false
          },
          {
            src: 'Media\\metrover_6.png',
            caption: 'Alumiinilevyistä kasattava vaijerirumpu',
            isPortrait: false
          },
          
          
        ]
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\metrover_7.png',
            caption: 'Poikkileikkausvaijerikiinnikkeiden kohdalta',
            isPortrait: false
          },
          {
            src: 'Media\\metrover_8.png',
            caption: 'Poikkileikkaus keskeltä',
            isPortrait: false
          },
          {
            src: 'Media\\metrover_9.png',
            caption: 'Koko vaijerirumpu ilman päällimmäistä levyä',
            isPortrait: false
          },
          
        ]
       },
       {
        type: 'gallery',
        caption: 'Renkaan akseliin kiinnittyvä versio',
        images: [
          {
            src: 'Media\\metrover_11.png',
            isPortrait: false
          },
          {
            src: 'Media\\metrover_12.png',
            isPortrait: false
          },
          
        ]
      },
      {
        type: 'gallery',
        caption: 'Vaijerirummun 3D-tulostettu prototyyppi',
        images: [
          {
            src: 'Media\\metrover_13.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\metrover_17.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\metrover_15.jpeg',
            isPortrait: false
          },
          
        ]
      },
      {
        type: 'image',
        caption: 'Vaijerirummun 3D-tulostettu prototyyppi asennettuna alennusvaihteeseen ja askelmoottoriin',
        content: 'Media\\metrover_1.jpeg',
        isPortrait: false
      },
    ]
  }
};

// Globaalit muuttujat gallerian kuvien selaamista varten
let currentGalleryImages = [];
let currentImageIndex = 0;

// Kuvan näyttäminen koko näytöllä
function showFullscreenImage(src, galleryImages = null, caption = null) {
  const fullscreenContainer = document.createElement('div');
  fullscreenContainer.className = 'fullscreen-image';
  
  // Jos galleryImages on annettu, otetaan se käyttöön
  if (galleryImages) {
    currentGalleryImages = galleryImages;
    // Etsitään klikatun kuvan indeksi galleriasta
    currentImageIndex = currentGalleryImages.findIndex(item => item.src === src);
  } else {
    // Yksittäinen kuva, ei galleriaa
    currentGalleryImages = [{ src, caption, isVideo: false }];
    currentImageIndex = 0;
  }
  
  // Tarkista, onko galleriassa videoita
  const hasVideos = currentGalleryImages.some(item => 
    item.isVideo || 
    item.isYouTube ||
    (item.src && (item.src.toLowerCase().endsWith('.mp4') || 
                 item.src.toLowerCase().endsWith('.mov') || 
                 item.src.includes('youtube.com')))
  );
  
  // Näytetään ensimmäinen kuva tai video
  updateFullscreenContent(fullscreenContainer);
  
  document.body.appendChild(fullscreenContainer);
  
  // Väliaikaisesti poista modaalin ESC-kuuntelija
  if (window.modalEscListener) {
    document.removeEventListener('keydown', window.modalEscListener);
  }
  
  // Sulje koko näytön kuva/video
  const closeFullscreen = () => {
    // Pysäytä mahdollinen video
    const video = fullscreenContainer.querySelector('video');
    if (video) {
      video.pause();
    }
    
    fullscreenContainer.remove();
    document.body.style.overflow = 'hidden'; // Pidä modaali edelleen auki
    
    // Palauta modaalin ESC-kuuntelija
    if (window.modalEscListener) {
      document.addEventListener('keydown', window.modalEscListener);
    }
  };
  
  // Lisää navigointipainikkeiden toiminnallisuus
  document.addEventListener('keydown', function keyHandler(e) {
    if (e.key === 'Escape') {
      closeFullscreen();
      document.removeEventListener('keydown', keyHandler);
    } else if (!hasVideos && e.key === 'ArrowLeft' && currentImageIndex > 0) {
      // Salli nuolinäppäimet vain jos ei ole videoita
      navigateGallery(-1, fullscreenContainer);
    } else if (!hasVideos && e.key === 'ArrowRight' && currentImageIndex < currentGalleryImages.length - 1) {
      // Salli nuolinäppäimet vain jos ei ole videoita
      navigateGallery(1, fullscreenContainer);
    }
  });
  
  fullscreenContainer.querySelector('.fullscreen-close').addEventListener('click', closeFullscreen);
  fullscreenContainer.addEventListener('click', (e) => {
    if (e.target === fullscreenContainer) {
      closeFullscreen();
    }
  });
}

// Videotiedoston näyttäminen koko näytöllä
function showFullscreenVideo(src, galleryItems = null, caption = null, isYouTube = false) {
  const fullscreenContainer = document.createElement('div');
  fullscreenContainer.className = 'fullscreen-image';
  fullscreenContainer.id = 'fullscreen-video-container';
  
  // Jos galleryItems on annettu, otetaan se käyttöön
  if (galleryItems) {
    currentGalleryImages = galleryItems;
    // Etsitään klikatun videon indeksi galleriasta
    currentImageIndex = currentGalleryImages.findIndex(item => item.src === src);
  } else {
    // Yksittäinen video, ei galleriaa
    currentGalleryImages = [{ src, caption, isVideo: true, isYouTube: isYouTube }];
    currentImageIndex = 0;
  }
  
  // Näytetään ensimmäinen kuva tai video
  updateFullscreenContent(fullscreenContainer);
  
  document.body.appendChild(fullscreenContainer);
  
  // Väliaikaisesti poista modaalin ESC-kuuntelija
  if (window.modalEscListener) {
    document.removeEventListener('keydown', window.modalEscListener);
  }
  
  // Sulje koko näytön kuva/video
  const closeFullscreen = () => {
    // Pysäytä mahdollinen video
    const video = fullscreenContainer.querySelector('video');
    if (video) {
      video.pause();
    }
    
    // Poista koko fullscreen-container
    fullscreenContainer.remove();
    
    // Palauta sivuston skrollaus
    document.body.style.overflow = 'hidden'; // Pidä modaali edelleen auki
    
    // Palauta modaalin ESC-kuuntelija
    if (window.modalEscListener) {
      document.addEventListener('keydown', window.modalEscListener);
    }
  };
  
  // Lisää navigointipainikkeiden toiminnallisuus - vain ESC toimii videoilla
  document.addEventListener('keydown', function keyHandler(e) {
    if (e.key === 'Escape') {
      closeFullscreen();
      document.removeEventListener('keydown', keyHandler);
    }
    // Poistettu nuolinäppäimien toiminnallisuus videoista
  });
  
  // Varmista vielä että video alkaa toistua
  const videoElement = fullscreenContainer.querySelector('video');
  if (videoElement) {
    // Lisää tapahtumakuuntelija videon latautumiselle
    videoElement.addEventListener('loadeddata', function() {
      videoElement.play().catch(e => {
        console.log('Videon automaattinen toisto estettiin:', e);
        // Jos automaattinen toisto ei onnistu ilman mykistystä, kokeile mykistettynä
        if (e.name === 'NotAllowedError') {
          console.log('Yritetään toistaa mykistettynä...');
          videoElement.muted = true;
          videoElement.play().catch(err => {
            console.log('Myös mykistetty toisto estettiin:', err);
          });
        }
      });
    });
    
    // Ajastettu uudelleenyritys
    setTimeout(() => {
      videoElement.play().catch(e => {
        console.log('Videon toistoyritus aikakatkaistiin:', e);
      });
    }, 300);
  }
}

// Yhdistetty funktio kuvan tai videon näyttämiseen fullscreen-tilassa
function updateFullscreenContent(container) {
  const item = currentGalleryImages[currentImageIndex];
  const hasMultipleItems = currentGalleryImages.length > 1;
  
  // Tarkista, onko sisältö video vai kuva ja onko se YouTube
  const isVideo = item.isVideo || (item.src && (item.src.toLowerCase().endsWith('.mp4') || item.src.toLowerCase().endsWith('.mov')));
  const isYouTube = item.isYouTube || (item.src && item.src.includes('youtube.com'));
  
  // Tarkista, onko galleriassa videoita
  const hasVideos = currentGalleryImages.some(item => 
    item.isVideo || 
    item.isYouTube ||
    (item.src && (item.src.toLowerCase().endsWith('.mp4') || 
                  item.src.toLowerCase().endsWith('.mov') || 
                  item.src.includes('youtube.com')))
  );
  
  let contentHtml = '';
  if (isYouTube) {
    // Lisää autoplay=1 parametri YouTube-videoon
    let videoSrc = item.src;
    if (videoSrc.includes('?')) {
      videoSrc += '&autoplay=1';
    } else {
      videoSrc += '?autoplay=1';
    }
    
    contentHtml = `
      <iframe width="90%" height="80%" style="max-height: 80vh;" 
        src="${videoSrc}" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;
  } else if (isVideo) {
    // Korjataan video-elementin attribuutit
    contentHtml = `
      <video id="fullscreen-video" controls autoplay playsinline width="90%" height="auto" style="max-height: 80vh;" ${item.loop ? 'loop' : ''}>
        <source src="${item.src.replace(/\\/g, '/').replace('#', '%23')}" type="${item.src.toLowerCase().endsWith('.mp4') ? 'video/mp4' : 'video/quicktime'}">
        Selaimesi ei tue videotiedostoja.
      </video>
    `;
  } else {
    contentHtml = `<img src="${item.src}" alt="${item.caption || 'Projektin kuva'}">`;
  }
  
  // Älä näytä navigointipainikkeita jos galleriassa on videoita
  const showNav = hasMultipleItems && !hasVideos;
  
  container.innerHTML = `
    <span class="fullscreen-close">&times;</span>
    ${showNav ? `
      <div class="fullscreen-nav">
        <button class="fullscreen-nav-button prev-button" ${currentImageIndex === 0 ? 'disabled' : ''}>&#10094;</button>
        <button class="fullscreen-nav-button next-button" ${currentImageIndex === currentGalleryImages.length - 1 ? 'disabled' : ''}>&#10095;</button>
      </div>
    ` : ''}
    ${contentHtml}
    ${item.caption ? `<div class="fullscreen-image-caption">${item.caption}</div>` : ''}
  `;
  
  // Lisää tapahtumakuuntelijat uudelleen
  container.querySelector('.fullscreen-close').addEventListener('click', () => {
    // Pysäytä mahdollinen video
    const video = container.querySelector('video');
    if (video) {
      video.pause();
    }
    
    // Poista koko container
    if (container && container.parentNode) {
      container.remove();
    }
  });
  
  // Varmista että video käynnistyy automaattisesti
  if (isVideo && !isYouTube) {
    const video = container.querySelector('#fullscreen-video');
    if (video) {
      // Aseta videolle lataustapahtuman kuuntelija
      video.addEventListener('loadeddata', function() {
        // Yritä toistaa video kun data on latautunut
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Toisto onnistui
              console.log('Video toisto alkoi onnistuneesti');
            })
            .catch(error => {
              console.error('Toisto epäonnistui:', error);
              // Yritä uudelleen käyttäjän interaktion jälkeen
              container.addEventListener('click', function triggerPlay() {
                video.play();
                container.removeEventListener('click', triggerPlay);
              }, {once: true});
            });
        }
      });
      
      // Varmista vielä play-kutsu
      setTimeout(() => {
        video.play().catch(e => console.log('Toistoyritys epäonnistui ajastetussa kutsussa:', e));
      }, 500);
    }
  }
  
  // Lisää navigointipainikkeiden kuuntelijat vain jos navigointi on sallittu
  if (showNav) {
    container.querySelector('.prev-button').addEventListener('click', () => {
      navigateGallery(-1, container);
    });
    
    container.querySelector('.next-button').addEventListener('click', () => {
      navigateGallery(1, container);
    });
  }
}

// Navigoi galleriassa eteen- tai taaksepäin
function navigateGallery(direction, container) {
  if ((direction < 0 && currentImageIndex > 0) || 
      (direction > 0 && currentImageIndex < currentGalleryImages.length - 1)) {
    // Pysäytä mahdollinen video ennen vaihtoa
    const video = container.querySelector('video');
    if (video) {
      video.pause();
    }
    
    currentImageIndex += direction;
    updateFullscreenContent(container);
  }
}

// Muokataan initGalleryImages funktiota käsittelemään YouTube-videoita
function initGalleryImages() {
  // Käsitellään galleriakuvat
  document.querySelectorAll('.project-gallery-section').forEach(gallery => {
    const images = Array.from(gallery.querySelectorAll('.gallery-image, .gallery-video, .gallery-youtube-wrapper')).map(elem => {
      if (elem.classList.contains('gallery-video')) {
        return {
          src: elem.getAttribute('data-src'),
          caption: elem.getAttribute('data-caption') || '',
          isVideo: true,
          loop: elem.hasAttribute('loop'),
          autoplay: elem.hasAttribute('autoplay')
        };
      } else if (elem.classList.contains('gallery-youtube-wrapper')) {
        return {
          src: elem.getAttribute('data-youtube-src'),
          caption: elem.getAttribute('data-caption') || '',
          isVideo: true,
          isYouTube: true
        };
      } else {
        return {
          src: elem.src,
          caption: elem.getAttribute('data-caption') || '',
          isVideo: false
        };
      }
    });
    
    // Lisää kuville click-event
    gallery.querySelectorAll('.gallery-image').forEach(img => {
      img.addEventListener('click', () => {
        showFullscreenImage(img.src, images, img.getAttribute('data-caption') || '');
      });
    });
    
    // Lisää videoille click-event
    gallery.querySelectorAll('.gallery-video-wrapper').forEach(wrapper => {
      wrapper.addEventListener('click', () => {
        const video = wrapper.querySelector('.gallery-video');
        const src = video.getAttribute('data-src');
        const loop = video.hasAttribute('loop');
        const autoplay = video.hasAttribute('autoplay');
        
        // Tarkista, onko video jo käynnissä - jos on, älä tee mitään
        if (video.autoplay && !video.paused) {
          return;
        }
        
        // Lisää video-objektiin loop ja autoplay ominaisuudet
        const videoObj = images.find(item => item.src === src);
        if (videoObj) {
          videoObj.loop = loop;
          videoObj.autoplay = autoplay;
        }
        
        showFullscreenVideo(src, images, video.getAttribute('data-caption') || '');
      });
    });
    
    // Lisää YouTube-videoille click-event - käytä suoraan openYouTubeDirectly-funktiota
    gallery.querySelectorAll('.gallery-youtube-wrapper').forEach(wrapper => {
      // Varmistetaan, että play-nappi on näkyvissä
      const playButton = wrapper.querySelector('.gallery-video-play-button');
      if (playButton) {
        playButton.style.display = 'flex';
      } else {
        // Jos play-nappia ei löydy, lisätään se
        const thumbnail = wrapper.querySelector('.gallery-youtube-thumbnail');
        if (thumbnail && !thumbnail.querySelector('.gallery-video-play-button')) {
          const newPlayButton = document.createElement('div');
          newPlayButton.className = 'gallery-video-play-button';
          newPlayButton.innerHTML = '▶';
          thumbnail.appendChild(newPlayButton);
        }
      }
      
      // Poista mahdolliset aiemmat tapahtumakuuntelijat
      const cloneWrapper = wrapper.cloneNode(true);
      wrapper.parentNode.replaceChild(cloneWrapper, wrapper);
      
      // Lisää uusi tapahtumakuuntelija, joka käyttää openYouTubeDirectly-funktiota
      cloneWrapper.addEventListener('click', () => {
        const src = cloneWrapper.getAttribute('data-youtube-src');
        const caption = cloneWrapper.getAttribute('data-caption') || '';
        openYouTubeDirectly(src, caption);
      });
    });
    
    // Automaattisesti käynnistä videot, joissa on autoplay-attribuutti
    gallery.querySelectorAll('.gallery-video[autoplay]').forEach(video => {
      // Mobiilissa videoiden autoplay vaatii muted-attribuutin
      video.muted = true;
      video.play().catch(error => {
        console.log('Autoplay estettiin: ', error);
      });
    });
  });
  
  // Käsitellään yksittäiset kuvat
  document.querySelectorAll('.project-image-section .project-image, .project-gallery .project-image').forEach(img => {
    img.addEventListener('click', () => {
      showFullscreenImage(img.src, null, img.getAttribute('data-caption') || '');
    });
  });
}

// Tehdään projektikorteista klikattavia
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.project-card').forEach(card => {
    const projectId = card.querySelector('.project-btn').getAttribute('onclick').match(/showProjectDetails\('(.+?)'\)/)[1];
    
    card.style.cursor = 'pointer';
    
    // Kun korttia klikataan, avataan projektin tiedot
    card.addEventListener('click', function(e) {
      // Varmistetaan, ettei klikkausta käsitellä, jos se osui napille
      if (!e.target.closest('.project-btn')) {
        showProjectDetails(projectId);
      }
    });
  });
});

// Modaali-ikkunan avauduttua alustetaan galleriakuvat ja videot
function initializeGalleryAfterModalOpens() {
  setTimeout(() => {
    initGalleryImages();
    
    // Käynnistä kaikki videot, joilla on autoplay-ominaisuus
    document.querySelectorAll('video[autoplay]').forEach(video => {
      // Varmista että video on mykistetty autoplayta varten
      video.muted = true;
      
      // Aseta esilataus
      video.preload = "auto";
      
      // Yritä toistaa video
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Modaalin videon toisto epäonnistui:', error);
          
          // Odota hieman ja yritä uudelleen
          setTimeout(() => {
            video.play().catch(e => console.log('Toinenkin yritys epäonnistui'));
          }, 1000);
        });
      }
    });
  }, 100); // Pieni viive varmistaaksemme, että DOM on päivittynyt
}

// Päivitetään showProjectDetails funktiota alustamaan galleria
function showProjectDetails(projectId) {
  const project = projectDetails[projectId];
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const modalContent = document.querySelector('.modal-content');
  
  // Estä sivuston skrollaus kun modaali on auki
  document.body.style.overflow = 'hidden';
  
  modalContent.innerHTML = `
    <span class="close-modal">&times;</span>
    <h2>${project.title} <span class="project-year">(${project.year})</span></h2>
    <div class="project-details">
      <p>${project.description}</p>
      <p class="project-detailed-info">${project.details}</p>
      
      ${project.contentSections ? `
        ${project.contentSections.map((section, i) => `
          ${section.type === 'text' ? `
            <div class="project-text-section">
              <p>${section.content}</p>
            </div>
          ` : section.type === 'image' ? `
            <div class="project-image-section">
              <img src="${section.content}" alt="${section.caption || project.title}" class="project-image ${section.isPortrait ? 'portrait-image' : ''}" data-gallery="single" data-caption="${section.caption || ''}">
              ${section.caption ? `<p class="image-caption">${section.caption}</p>` : ''}
            </div>
          ` : section.type === 'gallery' ? `
            <div class="project-gallery-section">
              <div class="project-image-grid">
                ${section.images.map(img => `
                  <div class="gallery-image-container">
                    ${img.src && (img.src.toLowerCase().endsWith('.mp4') || img.src.toLowerCase().endsWith('.mov')) ? `
                      <div class="gallery-video-wrapper">
                        <video class="gallery-video" data-gallery="group" data-caption="${img.caption || ''}" data-src="${img.src}" 
                          preload="metadata" ${img.autoplay ? 'autoplay muted loop playsinline' : ''} ${img.loop ? 'loop' : ''}>
                          <source src="${img.src.replace(/\\/g, '/').replace('#', '%23')}" type="${img.src.toLowerCase().endsWith('.mp4') ? 'video/mp4' : 'video/quicktime'}">
                          Selaimesi ei tue videotiedostoja.
                        </video>
                        <div class="gallery-video-play-button">▶</div>
                      </div>
                    ` : img.src && img.src.includes('youtube.com') ? `
                      <div class="gallery-youtube-wrapper" data-youtube-src="${img.src}" data-caption="${img.caption || ''}">
                        <div class="gallery-youtube-thumbnail">
                          <img src="https://img.youtube.com/vi/${img.src.split('/').pop()}/0.jpg" alt="YouTube thumbnail" class="gallery-image">
                          <div class="gallery-video-play-button" style="display:flex; z-index:10;">▶</div>
                        </div>
                      </div>
                    ` : `
                      <img src="${img.src}" alt="${img.caption || project.title}" class="gallery-image ${img.isPortrait ? 'portrait-image' : ''}" data-gallery="group" data-caption="${img.caption || ''}">
                    `}
                    ${img.caption ? `<p class="image-caption">${img.caption}</p>` : ''}
                  </div>
                `).join('')}
              </div>
              ${section.caption ? `<p class="gallery-caption">${section.caption}</p>` : ''}
            </div>
          ` : section.type === 'video' ? `
            <div class="project-video" style="margin-bottom: 5px;">
              ${section.content.includes('youtube.com') ? 
                `<iframe src="${section.content}" frameborder="0" allowfullscreen></iframe>` :
                `<video id="project-video-${projectId}-${i}" 
                  controls 
                  ${section.autoplay ? 'autoplay' : ''} 
                  ${section.loop ? 'loop' : ''} 
                  ${section.muted || section.autoplay ? 'muted' : ''} 
                  playsinline
                  preload="auto"
                  width="100%" 
                  style="max-height: 70vh;">
                  <source src="${section.content.replace(/\\/g, '/').replace('#', '%23')}" type="video/mp4">
                  <source src="${section.content.replace(/\\/g, '/').replace('#', '%23')}" type="video/quicktime">
                  Selaimesi ei tue videotiedostoja.
                </video>
                <script>
                  // Varmistetaan videon toisto, kun modaali on avattu
                  setTimeout(function() {
                    const video = document.getElementById('project-video-${projectId}-${i}');
                    if (video && ${section.autoplay ? 'true' : 'false'}) {
                      video.muted = true;
                      const playPromise = video.play();
                      if (playPromise !== undefined) {
                        playPromise.catch(error => {
                          console.log('Video toisto epäonnistui: ', error);
                          // Lisätään click-tapahtuma käyttäjän interaktion aktivoimiseksi
                          video.addEventListener('click', function() {
                            video.play();
                          });
                        });
                      }
                    }
                  }, 500);
                </script>`
              }
            </div>
            ${section.caption ? `<p class="video-caption">${section.caption}</p>` : ''}
          ` : ''}
        `).join('')}
      ` : `
        ${project.images ? `
          <div class="project-gallery">
            ${project.images.map(img => `
              <img src="${img}" alt="${project.title}" class="project-image" data-gallery="single" data-caption="">
            `).join('')}
          </div>
        ` : ''}
      `}
    </div>
    
    <div class="tech-tags">
      <h3>Käytetyt teknologiat:</h3>
      ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
    </div>
  `;
  
  modal.style.display = 'block';
  
  // Alustetaan galleriakuvat modaalin avauduttua
  initializeGalleryAfterModalOpens();

  // Sulje modaali kun klikataan rastia
  document.querySelector('.close-modal').addEventListener('click', closeModal);

  // Sulje modaali kun klikataan ulkopuolelle
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Sulje modaali ESC-näppäimellä - globaali kuuntelija
  window.modalEscListener = function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  };
  
  document.addEventListener('keydown', window.modalEscListener);

  function closeModal() {
    modal.style.display = 'none';
    // Palauta sivuston skrollaus kun modaali suljetaan
    document.body.style.overflow = '';
    // Poista ESC-kuuntelija kun modaali suljetaan
    document.removeEventListener('keydown', window.modalEscListener);
    
    // Pysäytä kaikki YouTube-videot asettamalla niiden src uudelleen
    const iframes = modalContent.querySelectorAll('iframe[src*="youtube"]');
    iframes.forEach(iframe => {
      const currentSrc = iframe.src;
      iframe.src = ""; // Tyhjennä src, jolloin video pysähtyy
      // Voidaan myös kokonaan poistaa iframe DOM:ista
      iframe.remove();
    });
  }
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

// Uusi funktio YouTube-videoiden näyttämiseen suoraan
function openYouTubeDirectly(src, caption) {
  // Poista mahdollisesti olemassa oleva video-container
  const existingContainer = document.getElementById('youtube-modal-container');
  if (existingContainer) {
    existingContainer.remove();
  }
  
  // Estä modaalin alla olevan sivun skrollaus
  document.body.style.overflow = 'hidden';
  
  // Luo uusi container
  const container = document.createElement('div');
  container.id = 'youtube-modal-container';
  container.className = 'fullscreen-image';
  container.style.zIndex = '3000';
  
  // Luo sulkunappi erillisenä elementtinä ja sijoita se container-elementin ulkopuolelle
  const closeButtonContainer = document.createElement('div');
  closeButtonContainer.style.position = 'fixed';
  closeButtonContainer.style.top = '20px';
  closeButtonContainer.style.right = '20px';
  closeButtonContainer.style.zIndex = '3100';
  
  const closeButton = document.createElement('span');
  closeButton.className = 'fullscreen-close';
  closeButton.innerHTML = '&times;';
  closeButton.style.color = 'white';
  closeButton.style.fontSize = '40px';
  closeButton.style.cursor = 'pointer';
  closeButton.style.display = 'block';
  closeButton.style.textShadow = '0 0 10px rgba(0,0,0,0.7)';
  
  closeButtonContainer.appendChild(closeButton);
  
  // Lisää autoplay=1 parametri YouTube-videoon
  let videoSrc = src;
  if (videoSrc.includes('?')) {
    videoSrc += '&autoplay=1';
  } else {
    videoSrc += '?autoplay=1';
  }
  
  // Luo iframe
  const iframe = document.createElement('iframe');
  iframe.width = '90%';
  iframe.height = '80%';
  iframe.style.maxHeight = '80vh';
  iframe.src = videoSrc;
  iframe.frameBorder = '0';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  
  // Lisää iframe containeriin
  container.appendChild(iframe);
  
  // Lisää kuvateksti jos olemassa
  if (caption) {
    const captionElement = document.createElement('div');
    captionElement.className = 'fullscreen-image-caption';
    captionElement.innerHTML = caption;
    container.appendChild(captionElement);
  }
  
  // Poista modaalin ESC-kuuntelija väliaikaisesti
  if (window.modalEscListener) {
    document.removeEventListener('keydown', window.modalEscListener);
  }
  
  // Suljentafunktio, jota käytetään kaikissa sulkemistavoissa
  const closeVideo = () => {
    if (container.parentNode) container.remove();
    if (closeButtonContainer.parentNode) closeButtonContainer.remove();
    
    // Palauta sivun skrollaus
    document.body.style.overflow = 'hidden'; // Pidä modaali edelleen auki
    
    // Palauta modaalin ESC-kuuntelija
    if (window.modalEscListener) {
      document.addEventListener('keydown', window.modalEscListener);
    }
    
    // Poista kaikki tapahtumankäsittelijät
    document.removeEventListener('keydown', escapeHandler);
  };
  
  // ESC-näppäimellä sulkeminen - määritellään tässä, jotta voidaan käyttää closeVideo-funktiota
  const escapeHandler = (e) => {
    if (e.key === 'Escape') {
      closeVideo();
    }
  };
  
  // Lisää tapahtumankäsittelijät vasta kun elementit on lisätty DOM:iin
  setTimeout(() => {
    // Lisää elementit bodyyn
    document.body.appendChild(container);
    document.body.appendChild(closeButtonContainer);
    
    // Lisää sulkemislogiikka rastinapille
    closeButton.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation(); // Estä klikkauksen leviäminen containeriin
      closeVideo();
    });
    
    // Sulje klikkaamalla taustaa
    container.addEventListener('click', (e) => {
      if (e.target === container) {
        e.preventDefault();
        closeVideo();
      }
    });
    
    // Lisää ESC-näppäimellä sulkeminen
    document.addEventListener('keydown', escapeHandler);
  }, 0);
}

// Harrastukset
const hobbies = [
  {
    title: 'Pienoisraketit',
    description: 'Suunnittelen, rakennan ja lennätän pienoisraketteja. Toteutan myös kokeellisia rakettimoottoreita ja elektroniikkaa.',
    background: 'raketit'
  },
  {
    title: 'Tähtitiede',
    description: 'Harrastan tähtien ja planeettojen havainnointia ja valokuvausta erilaisilla kaukoputkilla ja kameroilla.',
    background: 'tahtitiede'
  },
  {
    title: 'Varjoliito',
    description: 'Varjoliito on minun keskeisin harrastus. Se on minun kanssa kaksi vuotta, kun käytin aikaa kansainvälisen varjoliiton kanssa.',
    background: 'varjoliito'
  },
  {
    title: 'Sähköyksipyöräily',
    description: 'Sähköyksipyöräily on minun keskeisin harrastus. Se on minun kanssa kaksi vuotta, kun käytin aikaa kansainvälisen varjoliiton kanssa.',
    background: 'euc'
  },
  {
    title: 'Lennokit',
    description: 'Erilaisten lennokkien rakentaminen ja ohjaaminen',
    background: 'lennokit'
  }
];

// HUOM: Harrastuskortit on nyt määritelty suoraan HTML-tiedostossa,
// joten emme luo niitä dynaamisesti JavaScriptillä.