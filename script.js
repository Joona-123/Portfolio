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
    technologies: ['FEM-simulointi', 'Kinematiikkasimulointi', 'Solidworks', 'CAD'],
    year: '2024',
    contentSections: [
      {
        type: 'text',
        content: 'Kuualuksen laskeutumisjalan suunnittelu on kriittinen osa avaruusaluksen kehitystä. Jalan tulee kestää törmäyksen aiheuttamat voimat ja vaimentaa isku turvallisesti.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Kuualuksen simulaatiomalli',
        isPortrait: true
      },
      {
        type: 'text',
        content: 'FEM-analyysissä tutkin erilaisia materiaalivaihtoehtoja ja rakenneratkaisuja optimaalisen tuloksen saavuttamiseksi.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Rasitustesti-simulaatio',
        isPortrait: true
      },
      {
        type: 'video',
        content: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        caption: 'Kuualuksen jalan simulaatio'
      }
    ]
  },
  metrover: {
    title: 'Metrover V2',
    description: 'Robottialustan ohjausjärjestelmän uudelleensuunnittelu (2025)',
    details: 'Tämä projekti keskittyy robottialustan ohjausjärjestelmän modernisointiin ja tehostamiseen. Käytössä on Python-ohjelmointi ja Raspberry Pi -laitteisto.',
    technologies: ['Autodesk Fusion', 'CAD', '3D-tulostus', 'Laserleikkaus', 'Ohutlevytyöt'],
    year: '2025',
    contentSections: [
      {
        type: 'text',
        content: 'Metrover V2 -projekti on jatkokehitystä aiemmalle robottialustalle. Päätavoitteena oli parantaa järjestelmän luotettavuutta ja suorituskykyä.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Metrover V2 -robottialusta',
        isPortrait: true
      },
      {
        type: 'text',
        content: 'Uusi järjestelmä käyttää Raspberry Pi -tietokonetta ja ROS-robottikäyttöjärjestelmää. Tällä saavutetaan parempi integraatio antureiden ja toimilaitteiden välillä.'
      },
      {
        type: 'image',
        content: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Ohjausjärjestelmän testaus',
        isPortrait: true
      },
      {
        type: 'video',
        content: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        caption: 'Metrover V2 demonstration'
      }
    ]
  },
  saapallo: {
    title: 'Sääpallo',
    description: 'Stratosfääriin nouseva mittausasema',
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
        images: [
          {
            src: 'Media\\sääpallo_2.jpeg',
            caption: 'Sääpallo-projektin alussa',
            isPortrait: false
          },
          {
            src: 'Media\\sääpallo_3.jpeg',
            caption: 'Sääpallo-projektin alussa',
            isPortrait: false
          },
        ]
      }, 
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\sääpallo_4.jpeg',
            caption: 'Sääpallo-projektin alussa',
            isPortrait: false
          },
          {
            src: 'Media\\sääpallo_5.jpeg',
            caption: 'Sääpallo-projektin alussa',
            isPortrait: false
          },
        ]
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\sääpallo_7.jpeg',
            caption: 'Sääpallo-projektin alussa',
            isPortrait: false
          },
          {
            src: 'Media\\sääpallo_10.jpeg',
            caption: 'Sääpallo-projektin alussa',
            isPortrait: false
          },
          
        ]
      }, 
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\sääpallo_15.jpeg',
            caption: 'Sääpallo-projektin alussa',
            isPortrait: false
          },
          {
            src: 'Media\\sääpallo_12.jpeg',
            caption: 'Sääpallo-projektin alussa',
            isPortrait: false
          },
          
          
        ]
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\sääpallo_8.jpeg',
            caption: 'Sääpallo-projektin alussa',
            isPortrait: false
          },
          {
            src: 'Media\\sääpallo_11.jpeg',
            caption: 'Sääpallo-projektin alussa',
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
      caption: 'Sääpallo-projektin alussa',
      isPortrait: false
    },
    {
      type: 'image',
      content: 'Media\\sääpallo_1.jpeg',
      caption: 'Sääpallo-projektin alussa',
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
            src: 'https://www.youtube.com/embed/aGscWCjO5II',
            caption: 'Rakettimalli suunnitteluvaiheessa',
            isPortrait: false
          }
        ]
      }




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
        type: 'image',
        content: 'Media\\farsim_6.png',
        caption: 'Simulaation visualisointi graafeilla',
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
        caption: 'Sähkösytytin'
      },
      {
        type: 'video',
        content: 'https://www.youtube.com/embed/XP5ysh523F0',
        caption: 'Rakettimoottorin TSP G35-6 työntötesti.<br>Impulssi: 97.7Ns<br>Keskimääräinen työntövoima: 22N<br>Suurin työntövoima: 69.2N',
        isPortrait: false
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
        caption: 'Signaalin vastaanotto ohjelmalla SDR# (oikealla) ja sen käsittely ohjelmalla WXtoimg (vasemmalla)'
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
        caption: 'Jalkatason CAD-malli',
        isPortrait: true
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\pedaali_1.jpeg',
            caption: 'Jalkatason CAD-malli',
            isPortrait: false
          },
          {
            src: 'Media\\pedaali_14.jpg',
            caption: 'Jalkatason CAD-malli',
            isPortrait: false
          }
        ]
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\pedaali_6.jpeg',
            caption: 'Jalkatason CAD-malli',
            isPortrait: false
          }, 
          {
            src: 'Media\\pedaali_8.jpeg',
            caption: 'Jalkatason CAD-malli',
            isPortrait: false
          },
          {
            src: 'Media\\pedaali_9.jpeg',
            caption: 'Jalkatason CAD-malli',
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
            caption: 'Jalkataso osittain koneistettuna',
            isPortrait: false
          }
        ]
      }, 
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\pedaali_12.jpeg',
            caption: '',
            isPortrait: false
          },
          {
            src: 'Media\\pedaali_5.jpeg',
            caption: '',
            isPortrait: false
          },
          {
            src: 'Media\\pedaali_11.jpeg',
            caption: '',
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
            caption: '3. Optiikan irroitus Dremelillä.',
            isPortrait: false
          }, 
          {
            src: 'Media\\op5t_10.jpeg',
            caption: 'Saturnus',
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
    } else if (e.key === 'ArrowLeft' && currentImageIndex > 0) {
      navigateGallery(-1, fullscreenContainer);
    } else if (e.key === 'ArrowRight' && currentImageIndex < currentGalleryImages.length - 1) {
      navigateGallery(1, fullscreenContainer);
    }
  });
  
  fullscreenContainer.querySelector('.fullscreen-close').addEventListener('click', closeFullscreen);
  fullscreenContainer.addEventListener('click', (e) => {
    if (e.target === fullscreenContainer) {
      closeFullscreen();
    }
  });
  
  // Navigointipainikkeiden tapahtumat
  fullscreenContainer.querySelector('.prev-button')?.addEventListener('click', () => {
    navigateGallery(-1, fullscreenContainer);
  });
  
  fullscreenContainer.querySelector('.next-button')?.addEventListener('click', () => {
    navigateGallery(1, fullscreenContainer);
  });
}

// Videotiedoston näyttäminen koko näytöllä
function showFullscreenVideo(src, galleryItems = null, caption = null, isYouTube = false) {
  const fullscreenContainer = document.createElement('div');
  fullscreenContainer.className = 'fullscreen-image';
  
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
    } else if (e.key === 'ArrowLeft' && currentImageIndex > 0) {
      navigateGallery(-1, fullscreenContainer);
    } else if (e.key === 'ArrowRight' && currentImageIndex < currentGalleryImages.length - 1) {
      navigateGallery(1, fullscreenContainer);
    }
  });
  
  fullscreenContainer.querySelector('.fullscreen-close').addEventListener('click', closeFullscreen);
  fullscreenContainer.addEventListener('click', (e) => {
    if (e.target === fullscreenContainer) {
      closeFullscreen();
    }
  });
  
  // Navigointipainikkeiden tapahtumat
  fullscreenContainer.querySelector('.prev-button')?.addEventListener('click', () => {
    navigateGallery(-1, fullscreenContainer);
  });
  
  fullscreenContainer.querySelector('.next-button')?.addEventListener('click', () => {
    navigateGallery(1, fullscreenContainer);
  });
}

// Yhdistetty funktio kuvan tai videon näyttämiseen fullscreen-tilassa
function updateFullscreenContent(container) {
  const item = currentGalleryImages[currentImageIndex];
  const hasMultipleItems = currentGalleryImages.length > 1;
  
  // Tarkista, onko sisältö video vai kuva ja onko se YouTube
  const isVideo = item.isVideo || item.src.toLowerCase().endsWith('.mp4') || item.src.toLowerCase().endsWith('.mov');
  const isYouTube = item.isYouTube || (item.src && item.src.includes('youtube.com'));
  
  let contentHtml = '';
  if (isYouTube) {
    contentHtml = `
      <iframe width="90%" height="80%" style="max-height: 80vh;" 
        src="${item.src}" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    `;
  } else if (isVideo) {
    contentHtml = `
      <video controls autoplay width="90%" height="auto" style="max-height: 80vh;" ${item.loop ? 'loop' : ''}>
        <source src="${item.src.replace(/\\/g, '/').replace('#', '%23')}" type="${item.src.toLowerCase().endsWith('.mp4') ? 'video/mp4' : 'video/quicktime'}">
        Selaimesi ei tue videotiedostoja.
      </video>
    `;
  } else {
    contentHtml = `<img src="${item.src}" alt="${item.caption || 'Projektin kuva'}">`;
  }
  
  container.innerHTML = `
    <span class="fullscreen-close">&times;</span>
    ${hasMultipleItems ? `
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
    container.remove();
  });
  
  if (hasMultipleItems) {
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
    
    // Lisää YouTube-videoille click-event
    gallery.querySelectorAll('.gallery-youtube-wrapper').forEach(wrapper => {
      wrapper.addEventListener('click', () => {
        const src = wrapper.getAttribute('data-youtube-src');
        const caption = wrapper.getAttribute('data-caption') || '';
        
        showFullscreenVideo(src, images, caption, true);
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

// Modaali-ikkunan avauduttua alustetaan galleriakuvat
function initializeGalleryAfterModalOpens() {
  setTimeout(() => {
    initGalleryImages();
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
        ${project.contentSections.map(section => `
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
                          <div class="gallery-video-play-button">▶</div>
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
                `<video controls width="100%" preload="metadata">
                  <source src="${section.content.replace(/\\/g, '/').replace('#', '%23')}" type="video/mp4">
                  <source src="${section.content.replace(/\\/g, '/').replace('#', '%23')}" type="video/quicktime">
                  <source src="${section.content.replace(/\\/g, '/').replace('#', '%23')}" type="video/mov">
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
