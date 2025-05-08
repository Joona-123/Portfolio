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
  
  // Lisätään CSS-tyylit teknologiakuplille
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .tech-tag {
      font-size: 0.75rem;
      padding: 3px 8px;
      margin: 2px;
      display: inline-block;
    }
  `;
  document.head.appendChild(styleElement);
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
    description: '',
    details: '',
    technologies: ['FEM-simulointi', 'Kinematiikkasimulointi', 'Solidworks', 'CAD'],
    year: '2024',
    contentSections: [
      {
        type: 'text',
        content: 'Tämä projekti oli koulussa kurssilla "3D-mallintaminen ja CAE" tehtävä harjoitustyö. Tavoitteena oli harjoitella Solidworksin FEM- ja kinematiikkasimulointityökaluja. Mallinsin yksinkertaisen alumiinisen kuualuksen laskeutumisjalan kolmella iskunvaimentimella ja tein siitä kinematiikkasimuloinnin ja FEM-analyysin (Finite Element Method). Näillä menetelmillä voin simuloida mekanismien liikeratoja, mitoittaa osat kestäviksi sekä tutkia niihin kohdistuvia rasituksia ja valitsemaan oikeat materiaalit.'
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\fem_2.jpg',
            caption: 'Jalka Solidworksissa',
            isPortrait: false
          },
          {
            src: 'Media\\fem_6.jpg',
            caption: 'Jalan osat',
            isPortrait: false
          }
        ]
      },
      {
        type: 'video',
        content: 'Media\\fem_4.mp4',
        caption: 'Kinematiikkasimulaatio jalan aukeamisesta',
        isPortrait: false,
        autoplay: true,
        loop: true,
        muted: true
      },
      {
        type: 'text',
        content: 'FEM-analyysin tulokset. Jännitys, venymä ja siirtymä. Jalka on kiinnitetty osien yläpäästä näkymättömään kappaleeseen ja jalan alapintaan kohdistuu 10kN voima ylöspäin:'
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\fem_11.jpg',
            caption: 'Jännitys',
            isPortrait: false
          },
          {
            src: 'Media\\fem_14.jpg',
            caption: 'Venymä',
            isPortrait: false
          },
          {
            src: 'Media\\fem_13.jpg',
            caption: 'Siirtymä',
            isPortrait: false
          },
          {
            src: 'Media\\fem_12.jpg',
            caption: 'Jännitys',
            isPortrait: false
          },
          
        ]
      } 
    ]
  },
  saapallo: {
    title: 'Sääpallo',
    description: '',
    details: '',
    technologies: ['Arduino', 'GPS-paikannus', 'barometri', 'Excel', 'elektroniikka', '3D-tulostus', 'radiotekniikka', 'APRS-paikannus', 'Antennitekniikka', 'Ompelu'],
    year: '2020 - 2021',
    contentSections: [
      {
        type: 'text',
        content: 'Rakensin laitteen, joka nousi heliumilla täytetyllä sääpallolla stratosfääriin 35km korkeuteen "Avaruuden rajalle".  Laitteessa oli mukana kaksi kameraa, kolme lämpötilamittaria, kolme gps-paikanninta, APRS-radiolähetin, laskuvarjo sekä laitteen löytämistä helpottavat vilkkuvalot ja piippauskaiuttimet.<br><br>Projekti lähti liikkeelle pitkän haaveilun ja samankaltaisiin projekteihin tutustumisen jälkeen mm. Youtuben ja harrastelijoiden nettisivujen kautta. Päätin viimein aloittaa tällaisen projektin itse. Aloitin projektin kehittelemällä lennonohjainkortin, joka ohjasi kameroita, vilkkuvaloja sekä piippauskaiuttimia. Kortti toimi myös dataloggerina ja tallensi koko lennon ajalta gps-tiedot, lämpötilat, akun jännitteen ja ilmankosteuden microSD-kortille.'
      },
      {
        type: 'gallery',
        caption: 'Dataloggeri kehitysvaiheessa. Kuvissa näkyy gps-moduuli, microSD-korttipaikka, kosteusmittari, lämpömittari sekä Arduino nano.',
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
        type: 'text',
        content: 'Sähkö elektroniikalle tuli paristopaketista, joka oli kasattu 16:sta tavallisesta AA-paristosta. Tarkempi malli on Energizer Ultimate Lithium L91. Paristomalliksi valikoitui litiumparisto sen hyvän suorituskyvyn takia alhaisissa lämpötiloissa. Tein paristopaketteja kaksi, toinen lennolle ja toinen oli testausta varten. Laskin tarvittavan määrän akun kapasiteetille ennen sen valmistusta, mutta testeillä varmistin laskelmat. Paketin kokonaiskapasiteetti oli 84Wh, joka on melko suuri kulutukseen verrattuna. Tämä oli siksi että jos laite ei olisi löytynyt maastosta heti, olisi radiolähetin, piippauskaiutin ja vilkkuvalot toimineet vielä pitkään.'

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
        type: 'text',
        content: 'Lennolla mukana oli kolme gps-paikanninta:<br>- Spot Trace satelliittipaikannin, joka välitti sijaintitedot sateliittien kautta maahan. Tämä paikannin on siksi hyvä, että se toimii melkein missä tahansa maapallolla juurikin omien sateliittien takia.<br><br>- APRS-paikannin radiolähettimellä, ainoa paikannin joka välittää sijaintitiedon reaaliajassa koko lennon ajalta maahan.<br><br>- GSM-matkapuhelinverkolla sijaintitiedon välittävä paikannin. Tämä paikannin toimii vain, jos se saa yhteyden matkapuhelinverkkoon. Paikantimelle oli oma prepaid-liittymä.<br><br>Tärkeimmälle paikantimelle eli Spot Tracelle rakensin gimbal-mekanismin, joka kääntää paikantimen gps-antennin osoittamaan aina ylöspäin, oli laatikko missä asennossa tahansa. Tämä pienentää riskiä, että laatikko jäisi laskeutessaan ylösalaisin ja tämän takia paikannin ei kuulisi gps-sateliittien signaalia.'
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\sääpallo_37.jpg',
            caption: 'gps-trackerin gimbal-mekanismi',
            isPortrait: false
          },
          {
            src: 'Media\\sääpallo_7.jpeg',
            caption: 'tulostettu gimbal-mekanismin osa',
            isPortrait: false
          },
          {
            src: 'Media\\sääpallo_10.jpeg',
            caption: '3D-tulostettu kamerateline',
            isPortrait: false
          },
          {
            src: 'Media\\sääpallo_8.jpeg',
            caption: 'Kaikki lennolle tuleva elektroniikka poislukien valot ja kaiuttimet',
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
        type: 'text',
        content: 'Kun laite oli noussut stratosfääriin, se pitää saada hallitusti alas. Tähän tarkoitukseen ompelin nylonkankaasta laskuvarjon. Laskuvarjon muoto on kuusikulmio, yksinkertainen ja toimintavarma. Laskuvarjon koon määrittämiseen käytin pienoisrakettiharrastaja Jordan Hillerin kehittämää laskuria, jolla voi laskea putoamisnopeuden kun lähtötietoina on paino ja laskuvarjon koko.<br>Laskuri: descentratecalculator.onlinetesting.net'
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
            src: 'Media\\sääpallo_6.jpeg',
            caption: 'Lateksinen 1600g sääpallo saapui postissa.',
            isPortrait: false
          },
          {
            src: 'Media\\sääpallo_17.jpeg',
            caption: 'Laitteisto valmiina lentoon!',
            isPortrait: false
          },
        ]
      },
      {
        type: 'text',
        content: 'Kun laitteisto oli viimein valmis ja testattu, alkoi lennon valmistelut. Valmisteluihin kuului mm:<br>- Luvan hakeminen lennolle Trafilta.<br>- Heliumpullon vuokraus.<br>- Lentorataennusteen tekeminen ja sopivan ajankohdan suunnittelu<br>- Laitteiston viimeiset valmistelut. Heliumpullon, läppärin sekä radiovastaanottimen ja muiden tarvikkeiden pakkaaminen autoon edellisenä iltana. <br><br>Lentorataennuste tehtiin Cambridgen yliopiston kehittämällä ohjelmalla: predict.sondehub.org'
      },
      {
        type: 'image',
        content: 'Media\\sääpallo_1.jpeg',
        caption: 'Sääpallossa melkein tarvittava määrä heliumia',
        isPortrait: true
      },
      {
        type: 'text',
        content: 'Kun pallo oli täytetty, radiovastaanotin valmiina, kamerat päällä ja viimeinen lupa saatu lennonjohdolta, pallo päästettiin ilmaan. Sitten pakattiin tavarat nopeasti auton kyytiin ja lähdettiin seuraamaan palloa laskeutumispaikkaan kuunnellen sitä samaan aikaan läppärillä radiovastaanottimen ja auton katolla olevan antennin avulla.'
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
          }        
        ] 
      },
      {
        type: 'image',
        content: 'Media\\sääpallo_19.png',
        caption: '35km',
        isPortrait: false
      },
      {
        type: 'image',
        content: 'Media\\sääpallo_35.png',
        caption: 'Videosta kootuista kuvankaappauksista tehty panoraamakuva',
        isPortrait: false
      },
      {
        type: 'text',
        content: 'Laitteen reittiä seurattiin koko lennon ajan, jonka ansiosta laskeutumispaikkaa pystyi arvioimaan tarkemmin kuin ennusteessa. Tämän ansiosta näin laitteen laskeutuminen puiden taakse metsään. Lennolla oli tuuria mukana, laskeutumispaikka olisi hyvinkin voinut olla esimerkiksi puun latva, lampi, järvi tai muu vastaava. Kuitenkin reilun kolmen tunnin kuluttua pallon päästämisestä ilmaan, se laskeutui harvaan metsään jäämättä puuhun jumiin. (lukuunottamatta laskuvarjoa)'
      },
      {
        type: 'gallery',
        caption: 'Laskeutunut sääpallon hyötykuorma',
        images: [
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
        type: 'gallery',
        caption: 'Toteutunut gps:llä tallennettu lentoreitti punaisella.<br>Ennustettu lentoreitti mustalla.  <br>Hyötykuorma laskeutui n. 8km päähän ennustetusta paikasta.',
        images: [
          {
            src: 'Media\\sääpallo_33.png',
            isPortrait: false
          },
          {
            src: 'Media\\sääpallo_36.jpeg',
            isPortrait: false
          },
        ]
      },
      {
        type: 'image',
        content: 'Media\\sääpallo_30.png',
        caption: 'Video sääpallon lennosta',
        caption: 'Lämpötilat koko lennon ajalta.Vaaka-akselilla aika.<br>Keltainen: akun lämpötila<br>Vihreä: sisälämpötila<br>Sininen: ulkolämpötila'
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
    description: '',
    details: '',
    technologies: ['CAD', 'Aerodynamiikka', 'Komposiitit', 'Elektroniikka', 'Arduino', '3D-tulostus', 'Rakettimoottorit', 'Laskuvarjot'],
    year: '~2020 lähtien',
    contentSections: [
      {
        type: 'text',
        content: 'Tässä en oikeastaan esittele yksittäistä projektia, vaan useampaa sellaista. Oikeastaan koko rakettiharrastustani. Pienoisrakettien rakentaminen on harrastus, jossa yhdistyy aerodynamiikka, materiaalitekniikka, elektroniikka ja fysiikka. Raketteihin käytän kaupallisia kiinteäpolttoaineisia kertakäyttöisiä rakettimoottoreita. Suunnittelen raketit aina huolellisesti ja simuloin ne käyttämällä mm. OpenRocket-simulaattoria. Siten varmistan että raketti on vakaa ja se voidaan laukaista turvallisesti. Simulaattorin avulla saan laskettua lennosta monenlaisia tietoja kuten maksimikorkeus, nopeus, kiihtyvyys, lennon kesto, optimaalinen avausaika laskuvarjolle jne jne... Käytän rakettien laukaisuun radio-ohjattavaa etäsytytintä, jotta moottorin voi sytyttää etänä.'
      },
      {
        type: 'text',
        content: 'Tinttiraketti:<br>Tein kopion sajakuvista tutusta Tintin kuuraketista. Piirsin raketin Autodesk Fusion CADillä käyttäen apuna netistä löytyviä kuvia. Runko valmistettiin 3D-tulostamalla ja siivekkeet hiilikuitulevystä. Alla on kolme videota lennoista. Ensimmäisessä yrityksessä moottorit räjähtivät. Toiseen yritykseen vaihdettiin moottorin valmistajaa ja neljän moottorin tilalle yksi isompi moottori. Kuitenkin tämäkin moottori oli viallinen ja räjähti kesken lennon. Lennon jälkeen maasta löytyi palamattomia polttoaineen palasia. Moottorivalmistajan mukaan tuotantoerässä oli käytetty väärää polttoainetta jolla oli liian suuri palonopeus. Moottorit vaihdettiin valmistajan kautta toimiviin ja kolmas lento onnistui täydellisesti.'
      },
      {
        type: 'gallery',
        images: [
          
          {
            src: 'https://www.youtube.com/embed/aGscWCjO5II',
            caption: '1. laukaisuyritys',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_10.mp4',
            caption: 'Moottori räjähti nousun aikana',
            isPortrait: false,
            muted: false
          },
          {
            src: 'https://www.youtube.com/embed/ihPFJYHEsq8',
            caption: 'Onnistunut lento',
            isPortrait: false
          },
          {
          
            
            src: 'Media\\raketit_11.jpeg',
            caption: 'Räjähdys toisella lennolla',
            isPortrait: false
          },
          
        ]
      },
      {
        type: 'text',
        content: 'Zaga 2.0:'
      },
      {
        type: 'image',
        content: 'Media\\raketit_1.jpeg',
        caption: 'Zaga 2.0',
        isPortrait: false
      },
      {
        type: 'text',
        content: 'Tämän raketin runko valmistettiin pvc-putkesta, siivekkeet sekä moottoritelineet lasikuidusta ja nokka ja laukaisukiskokiinnikkeet 3D-tulostamalla. Ensilento onnistui täydellisesti mutta toisella lennolla yksi neljästä moottorista räjähti, jonka takia lennon korkeus jäi matalaksi ja laskuvarjo ehti juuri ja juuri aukenemaan.'
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'https://www.youtube.com/embed/m8nETrFVndA',
            caption: '1. lento',
          },
          {
            src: 'https://www.youtube.com/embed/JSLwPJCCmUM',
            caption: '2. lento',
          },
          
        ]
      },
      {
        type: 'text',
        content: 'Harrastan myös lennokkeja joten tietenkin tätäkin piti kokeilla. Tein etäsytyttimen jota voi ohjata lennokin ohjaimella ja tulostin rakettimoottorikiinnikkeet lennokkiin:'
      },
      {
        type: 'video',
        content: 'https://www.youtube.com/embed/lteY5EDLjto',
        caption: 'Rakettimoottorit lennokissa',
        isPortrait: false
      },
      {
        type: 'text',
        content: 'Sekalaisia kuvia rakettien rakentelusta:'
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
        ]
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\raketit_26.jpeg',
            caption: 'Siivekkeet',
            isPortrait: false
          },
          
          {
            src: 'Media\\raketit_36.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_37.jpeg',
            caption: 'Liimausjigi',
            isPortrait: false
          },

          {
            src: 'Media\\raketit_27.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_39.jpg',
            caption: 'mittauslektroniikka',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_45.jpg',
            caption: 'LiPo-akut',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_41.jpg',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_44.jpg',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_46.jpg',
            caption: 'Vaijerilenkki laskuvarjon narun kiinnitykselle',
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
          {
            src: 'Media\\raketit_35.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_31.jpg',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_32.jpg',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_33.jpg',
            isPortrait: false
          },
          
          




        ]
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\raketit_34.jpg',
            caption: 'Raketti laukaisutelineen sisällä',
            isPortrait: false
          },
        ]
      },

      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\raketit_7cc2.mp4',
            caption: 'Viallinen moottori',
            isPortrait: false
          },
          {
            src: 'Media\\raketit_49.jpg',
            caption: 'Räjähdyksen jäännökset',
            isPortrait: false
          },
        ]
      }
      
      
      





    ]
  },
  lentoratasimulaatio: {
    title: 'Raketin lentoratasimulaatio & työntötestipenkki',
    description: '',
    details: '',
    technologies: ['Python', '3D-tulostus', 'Arduino', 'Voima-anturi', 'RTC-kello'],
    year: '2024',
    contentSections: [
      {
        type: 'text',
        content: 'Tämä projekti oli osa ESA:n Fly A Rocket! -kurssia, jonka kävin vuonna 2024. Yksi kurssin tehtävistä oli jatkokehittää kurssilta saatua Python-lentoratasimulaattoria, joka oli aluksi hyvin yksinkertainen ja toimi vain yhdessä ulottuvuudessa. Tehtävänä oli mahdollistaa raketin liike simulaatiossa toisessa ulottuvuudessa, simuloida raketin pystyakselin suuntaisen kiihtyvyysmittarin mittaama kiihtyvyys, sekä muita muutoksia. Simulaattori perustuu pääosin Newtonin lakeihin, ilmanvastuksen laskukaavaan sekä yksinkertaiseen ilmakehän tiheyden mallinnukseen. <br><br>Innostuin kuitenkin jatkamaan simulaattorin kehitystä pidemmälle, lisäsin siihen mahdollisuuden käyttää tekstitiedostossa olevaa moottorin työntövoimadataa. Rakensin työntövoiman mittaamiseen testipenkin, joka mittaa venymäliuska-anturilla 33Hz näytteenottotaajuudella rakettimoottorin työntövoimaa ja tallentaa sen microSD-kortille tekstitiedostoksi. Simulaattori ottaa tämän tekstitiedoston sisään ja simuloi raketin lentoradan sen perusteella. Näin saadaan tarkempi ennuste, kuin alkuperäisellä simulaattorilla, jossa työntövoima oli koko paloajan vakio.'
      },
      {
        type: 'image',
        content: 'Media\\farsim_5.jpeg',
        caption: 'Työntötestipenkin elektroniikka protolaudalla.',
        isPortrait: false
      },
      {
        type: 'video',
        content: 'Media\\farsim_9.mp4',
        caption: 'Sähkösytyttimen testi (ja valmis elektroniikkakortti)',
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
        type: 'text',
        content: 'Mittauksen jälkeen syötin datan simulaattoriin josta sain tuloksena seuraavat tiedot:.'
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
        content: 'Tein myös Excel-tiedoston, jolla testipenkin dataa voi tutkia tarkemmin ja piirtää siitä käyrän.'
      },
      {
        type: 'image',
        content: 'Media\\farsim_10.jpg',
        caption: 'Mittausdata Excelissä',
        isPortrait: false
      },
      {
        type: 'text',
        content: 'Seuraavaksi oli aika kokeilla miten simulaattorin data toimii käytännössä. Tähän tarkoitukseen minulla ei ollut kuitenkaan kunnollisia laitteita millä olisi voinut mitata esim. raketin kiihtyvyyttä tai korkeutta. Kuvasin kuitenkin raketin lennon fpv-lennokilla, jossa oli korkeusmittari. Näin pystyin arvioimaan karkeasti, että raketti nousi suunnilleen simuloituun korkeuteen. Video lennosta alla:'
      },
      {
        type: 'image',
        content: 'Media\\raketit_6.jpeg',
        caption: 'Simulaattorin ensimmäinen koekaniini',
        isPortrait: true
      },
      {
        type: 'video',
        content: 'https://www.youtube.com/embed/ihPFJYHEsq8',
        caption: 'Tinttiraketin lento',
      },
    ]
  },
  tvc: {
    title: 'Thrust vector control -raketti',
    description: '',
    details: '',
    technologies: ['Arduino', 'IMU', 'Barometri', 'Servot', '3D-tulostus', 'Komposiitit', 'Radiotekniikka', 'HC-12 Radiokommunikaatio', 'PID-säätö'],
    year: '2021 -   ',
    contentSections: [
      {
        type: 'text',
        content: 'TVC (Thrust Vector Control) -raketti on edistyneempi versio perinteisestä aerodynaamisesti siivekkeillä vakautetusta raketista. Se toimii samalla tavalla kuin isommatkin kiertoradalle yltävät avaruusraketit. Raketin moottori on gimbaloitu kahdella servolla, joita ohjaa PID-säädin Arduino-ohjainkortilla, joka saa asentotietoa IMU:lta (Inertial Measurement Unit).<br><br>Lisäksi raketissa on servolla toimiva avausmekanismi laskuvarjolle. Laskuvarjon avausta varten korkeustieto mitataan barometriltä, joten laskuvarjon avaus tapahtuu juuri kun raketti lähtee tippumaan alaspäin. Raketin asento ja korkeustiedot lennon ajalta tallennetaan microSD-kortille. '
      },
      {
        type: 'image',
        content: 'Media\\tvc_16.jpeg',
        caption: 'TVC-raketti. Gimbaali alaosassa.',
        isPortrait: true
      },
      {
        type: 'text',
        content: 'Projekti alkoi gimbal-mekanismin 1. version kehityksellä josta kehitettiin useampi versio kunnes se oli tarpeeksi kevyt ja toimiva.'
      },
      {
        type: 'gallery',
        caption: 'Gimbalin kehitystä.',
        images: [
          {
            src: 'Media\\tvc_28.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\tvc_4.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\tvc_2.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\tvc_3.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\tvc_5.jpeg',
            isPortrait: false
          },
        ]
      },
      {
        type: 'text',
        content: 'Laskuvarjon avausmekanismi oli kumilenkeillä toimiva servolla vapautettava mäntä, joka työntää raketin nokan sekä laskuvarjon ulos. Raketin rungoksi valitsin pienoisrakettikäyttöön tarkoitetun pahviputken, johon kiinnitin 3D-tulostetut kiinnikkeet moottorin gimbaalille, ohjainkortille, laskuvarjon avausmekanismille sekä servoille. Raketin ohjauskortiksi suunnittelin aluksi käsin tehtyä PCB:tä, mutta vaihdoin sen myöhemmin itse suunniteltuun kustomoituun piirilevyyn, joka tilattiin piirilevyvalmistaja PCBWay:ltä kiinasta.'
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\tvc_15.jpeg',
            caption: 'Sisuskalut, runko, nokka ja moottori',
            isPortrait: false
          },
          {
            src: 'Media\\tvc_36.png',
            caption: '',
            isPortrait: false
          },
          {
            src: 'Media\\tvc_37.png',
            caption: '',
            isPortrait: false
          },
          
        ]
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\tvc_38.png',
            caption: 'Raketin kokonaisrakenne.<br>Vasemmalta oikealle:<br>Nokka<br>Laskuvarjo<br>Laskuvarjon avausmekanismi<br>Ohjainkortti<br>Gimbalin servot<br>Gimbal<br>Moottori',
            isPortrait: false
          },
          
        ]
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\tvc_40.mp4',
            caption: 'Laskuvarjon avausmekanismin 1. versio.',
            isPortrait: false
          },
          {
            src: 'Media\\tvc_42.mp4',
            caption: 'Gimbalin 1. versio.',
            isPortrait: false,
            muted: true
          },
          {
            src: 'Media\\tvc_41cc.mp4',
            caption: 'Moottorin kanssa.',
            isPortrait: false,
          },
          
          
        ]
      },
      {
        type: 'text',
        content: 'Valmistin raketin nokan hiilikuidusta. Tein nokan kolmesta osasta, joille jokaiselle 3D-tulostin muotit. Lopuksi liimasin osat epoksilla yhteen, kittasin ja maalasin nokan.'
      },
      {
        type: 'gallery',
        caption: 'Nokan valmistus hiilikuidusta.',
        images: [
          {
            src: 'Media\\tvc_10.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\tvc_13.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\tvc_8.jpeg',
            isPortrait: false
          },
          { 
            src: 'Media\\tvc_30.jpg',
            isPortrait: false
          },
          {
            src: 'Media\\tvc_31.jpg',
            isPortrait: false
          },
          {
            src: 'Media\\tvc_34.jpg',
            isPortrait: false
          },
          {
            src: 'Media\\tvc_6.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\tvc_7.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\tvc_14.jpeg',
            isPortrait: false
          },
          
        ]
      },
      {
        type: 'text',
        content: 'Tärkein työkalu projektissa oli Anycubic Photon SLA-3D-tulostin. Tulostusmateriaalina käytin funktionaalisten osien tulostukseen tarkoitettua Siraya Tech Blu -hartsia. '
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\tvc_17.jpeg',
            isPortrait: false,
            caption: 'Osien tulostusta.'
          },
          {
            src: 'Media\\tvc_18.jpeg',
            isPortrait: false,
          },
          {
            src: 'Media\\tvc_19.jpeg',
            caption: 'Osien UV-kovetus',
            isPortrait: false
          }
        ]
      },
      {
        type: 'text',
        content: 'Raketin järjestelmien kehittyessä pidemmälle, päätin suunnitella gimbalin ja rungon kokonaan uudestaan. Uudessa versiossa moottori tuli kokonaan raketin sisälle, jolla saavutetaan parempi vakaus. Runkoa optimoin kevyemmäksi tekemällä siihen kuusikulmaisia reikiä ja pinnottamalle koko raketin läpinäkyvällä rc-lennokkeihin tarkoitetulla pinnotuskalvolla..'
      },
      { 
        type: 'gallery',
        images: [
          {
            src: 'Media\\tvc_23.jpeg',
            caption: 'Rungon ja gimbalin 2. versio',
            isPortrait: false
          },
          {
            src: 'Media\\tvc_26.jpeg',
            caption: '',
            isPortrait: false
          },
          {
            src: 'Media\\tvc_24.jpeg',
            caption: 'Sähkösytytin kiinnitettynä liittimiin.',
            isPortrait: false
          },
          
          
        ]
      },
      {
        type: 'text',
        content: 'Ohjainkortin aivoina toimi Arduino -yhteensopiva Teensy 4.0 kehitysalusta sen pienen koonsa ja suorituskyvynsä vuoksi. Inertiasensoriksi valitsin MPU9250 breakout boardin koska niitä on helposti saatavilla ja siihen löytyy paljon valmiita Arduino-kirjastoja. Raketin kanssa kommunikointiin käytin HC12 moduulia, joka on helppo ja kevyt vaihtoehto kun halutaan siirtää sarjaporttidataa Arduinosta toiseen. Lisäksi ohjainkortissa oli muutakin elektroniikkaa mm. virranohjaukseen ja moottorin sytytykseen.'
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\tvc_45.jpeg',
            caption: 'Koko ohjainkortin elektroniikka protolaudalla.'
          },
          {
            src: 'Media\\tvc_46.jpeg',
            caption: 'Raketin kauko-ohjaimen prototyyppi. Kuvassa Arduino Nano ja HC-12 radiomoduuli.'
          },
          {
            src: 'Media\\tvc_48.jpeg',
            caption: 'PCB:n cad-kuva.'
          },
          {
            src: 'Media\\tvc_51.jpeg',
            caption: 'Ohjainkortin rakentelua.'
          },
          {
            src: 'Media\\tvc_52.jpeg',
          },
          {
            src: 'Media\\tvc_50.jpeg',
            caption: 'Kasattuna.'
          },
          {
            src: 'Media\\tvc_49.jpeg',
            caption: 'Osat asennettu. Alempana Blue Bird M15H -servot gimbalille ja ylempänä KST X08H plus -servo laskuvarjon avausta varten.'
          },
        ]
      },
      {
        type: 'text',
        content: 'Raketin elektroniikan ja muiden osien kehittyessä ja ohjainkortin vaatiman tilan vähetessä suunnittelin ohjainkortista toisen version, joka vaatisi huomattavasti vähemmän tilaa. Ohjainkortin asento muuttui vaakatasoon ja sijainti ylemmäs rakettia. Näin sain yksinkertaistettua myös laskuvarjon avausmekanismia, joten koko rakenteesta tuli kevyempi.'
      },
      {
        type: 'gallery',
        caption: 'Ohjainkortin toinen versio.',
        images: [
          {
            src: 'Media\\tvc_53.jpeg',
          },
          {
            src: 'Media\\tvc_54.jpeg',
          },
          {
            src: 'Media\\tvc_55.jpeg',
          }
        ]
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\tvc_47cc.mp4',
            caption: 'Sähkösytyttimen testausta.'
          },
          {
            src: 'Media\\tvc_56cc.mp4',
            caption: 'Mielummin ulkona....'
          },
          {
            src: 'Media\\tvc_27cc.mp4',
            caption: 'Aktiivisen vakautuksen demonstrointia.'
          },
          {
            src: 'Media\\tvc_43.mp4',
            caption: 'Moottorin kanssa testipenkissä.'
          },
          {
            src: 'Media\\tvc_44.mp4',
            caption: 'Aina ei onnistu. Järjestelmä boottasi kun moottori syttyi.'
          },
          
        ]
      },
      {
        type: 'text',
        content: 'Raketin kehityksen taustalla oli todella paljon muutakin kehitystä mitä tällä sivulla esittelin. En ole kuvannut jokaista kehitysaskelta ja melko paljon jäi kertomatta, mutta pääkohdat tuli kuitenkin kerrottua.<br><br>Isoin haaste oli ohjainkortin kehittäminen. En ollut ennen piirtänyt ja tilannut piirilevyä kustomoituna, eikä minulla ollut kovin vahvaa elektroniikka- tai koodausosaamista. Projekti kuitenkin opetti paljon elektroniikasta, 3D-tulostuksesta, servo-ohjauksesta, PID-säädöstä sekä piirilevyjen CAD-suunnittelusta.<br><br>Aikataulusyistä projekti on toistaiseksi tauolla, mutta suunnitelmissa on jatkaa sitä myöhemmin.'
      },
      
    ]
  },
  firefly: {
    title: 'Firefly FPV-lennokki',
    description: '',
    details: '',
    technologies: ['Elektroniikka', '3D-tulostus', 'GPS', 'FPV-videolinkki', 'Radio-ohjaus'],
    year: '2024 - 2025',
    contentSections: [
      {
        type: 'text',
        content: 'Tämän lennokkiprojektin tavoitteena oli saada aikaan kiinteäsiipinen fpv-lennokki, jolla pääsen lentämään luotettavasti muutaman kilometrin päähän radioyhteyttä menettämättä siten että lennokkia on rento lennättää ja kuvata maisemia, pilviä, eläimiä sekä luontoa. <br><br>Valitsin lennokin pohjaksi Haohan Firefly PNP -lennokin, johon rakentelin itse tarvittavat osat ja ominaisuudet. Malliksi päätyi Firefly sen modulaarisuuden vuoksi. Kaikki lennätykseen tarvittavat laitteet mahtuu lennokin omaan kuljetuslaatikkoon, jossa sitä on helppo kuljettaa lennätyskentälle.'
      },
      {
        type: 'text',
        content: ''
      },
      {
        type: 'image',
        content: 'Media\\firefly_12.jpeg',
        caption: 'Haohan Firefly -lennokki',
      },
      {
        type: 'text',
        content: 'Lennonohjain: <br>Asensin lennokkiin lennonohjaimen Speedybee F405 wing, joka on lennokin "aivot". Lennonohjain on konfiguroitavissa erilaisille lennokeille ja eri tarpeiden mukaan. Konfiguroin siihen mm. seuraavia toimintoja: <br>- Lennokin vakautus<br>- Telemetriatietojen lähetys lähetinmoduulin kautta FPV-laseihin<br>- Automaattilaukaisutoiminto<br>- Automaattinen kotiinpaluu joko kytkimestä tai ohjaussignaalin katketessa<br>- yms. yms...<br><br>Kytkin lennonohjaimeen myös GPS-moduulin, jonka avulla se tietää sijaintinsa.'
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\firefly_24.jpeg',
            caption: 'GPS-moduuli',
            isPortrait: false
          },
          {
            src: 'Media\\firefly_2.jpeg',
            caption: 'Rakentelua',
            isPortrait: false
          },
          {
            src: 'Media\\firefly_14.jpeg',
            caption: 'Antenni, radiovastaanotin, flight controller ja lediohjain',
            isPortrait: false
          },
        ],
      },
      {
        type: 'text',
        content: 'FPV-kamera:<br><br>Asensin lennokkiin DJI O3 air unit -yksikön, johon kuuluu kamera sekä lähetin, joka lähettää kuvaa Goggles 3 -laseihin. O3 lähettää kuvaa 1W teholla 2,4GHz taajuudella. Valmistaja lupaa kuvalähetyksen kantamaksi jopa 10Km, mutta todellisuudessa kuvasignaali yltää luotettavasti vain 3~4Km etäisyydelle.'
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\firefly_3.jpeg',
          },
        ]
      },
      {
        type: 'text',
        content: '<br>Akkupaketti:<br><br>Tein aluksi akkupaketin kahdeksasta samsungin 21700-kennosta, jotka juotin 4S2P kokoonpanoon. Lentoaikaa tällä paketilla sain noin 1–1,5 tuntia riippuen lennätystavasta. Lennokki lensi tällä paketilla vakaasti ja muutenkin hyvin, mutta lentoonlähdöt sekä -nousut olivat melko epävarmoja ja lennokki saattoi sakata heittäessä sitä ilmaan. Ja vastaavasti laskeutumiset olivat aika kovia. Päätin pudottaa akun koon puoleen. Tein akuista 4S1P kokoonpanon, jonka jälkeen lentoonlähdöt ja -nousut sujuivat huomattavasti paremmin. Lentoaika tippui 30-45 minuuttiin.'
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\firefly_8.jpeg',
            caption: '4S2P',
            isPortrait: false
          }, 
          {
            src: 'Media\\firefly_9.jpeg',
            caption: '4S1P',
            isPortrait: false
          },
          {
            src: 'Media\\firefly_11.jpeg',
            caption: 'Akku lennokin sisällä',
            isPortrait: false
          },
          
        ]
      },
      {
        type: 'text',
        content: 'Ohjauslinkki:<br><br>Lennokin ohjaukseen käytin TBS Crossfire radiomoduulia sekä hieman suuntaavaa antennia. Lähettimen lähetysteho on 2W ja taajuus 868MHz. Matalalla taajuudella ja korkealla lähetysteholla saavutetaan pitkä kantama eli luotettava ohjauslinkki. Ohjaimena käytin mallia Radiomaster TX16S.'
      },
      {
        type: 'image',
        content: 'Media\\firefly_10.jpeg',
        caption: 'Telemetriatietoja ohjaimen näytöllä',
        isPortrait: false
      },


      {
        type: 'image',
        content: 'Media\\firefly_1.jpeg',
        caption: 'Lennätysreissu aamupakkasessa. Lennätys oli pakko lopettaa kun sormet jäätyi.',
        isPortrait: true
      },
      {
        type: 'text',
        content: 'Lennokkiprojekti on ollut onnistunut ja lennätystunteja on kertynyt puolen vuoden aikana noin 30 tuntia.<br><br>Lennokin kyydistä otettuja kuvia:'
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\firefly_15.jpg',
          },
          {
            src: 'Media\\firefly_16.jpg',
          },
          {
            src: 'Media\\firefly_17.jpg',
          },
          {
            src: 'Media\\firefly_18.jpg',
          },
          {
            src: 'Media\\firefly_19.jpg',
          },
          {
            src: 'Media\\firefly_20.jpg',
          },
          {
            src: 'Media\\firefly_21.jpg',
          },
          {
            src: 'Media\\firefly_22.jpg',
          },
          {
            src: 'Media\\firefly_23.jpg',
          },
        ]
      }
    ]
  },
  noaa: {
    title: 'NOAA-satelliittien kuvien vastaanotto',
    description: '',
    details: '',
    technologies: ['SDR', 'Antennit', 'Kiertoratamekaniikka'],
    year: '2019',
    contentSections: [
      {
        type: 'text',
        content: 'NOAA ylläpitää useita polaarikiertoradalla kulkevia sääsatelliitteja, kuten NOAA-15, NOAA-18 ja NOAA-19, jotka lähettävät sääkuvia 137 MHz:n taajuudella. Rakensin kupariputkesta QHA-antennin, jonka viritin tälle taajuudelle. Ohjeet antennin rakentamiseen löysin netistä eräältä radioamatööriltä, joka oli antennin suunnitellut.<br><br>Signaalin vastaanottoon käytin Airspy Mini SDR-vastaanotinta ja sateliittien kiertoradan seurantaan Heavens-Above -sovellusta.'
      },
      {
        type: 'image',
        content: 'Media\\noaa_9.jpeg',
        caption: 'vesiputkesta rakennettu vastaanotinantenni',
        isPortrait: true
      },
      {
        type: 'text',
        content: 'Signaali vastaanotetaan SDR#-ohjelmalla ja siirretään tietokoneen sisäisesti audiona WXtoImg-ohjelmaan, joka muuntaa signaalin kuvaksi ja tekee siihen lisäkäsittelyä, kuten lisää valtioiden rajoja ja kohdistaa kuvan kalibrointimerkkien perusteella. Äänen siirtämiseen käytin VB-Cable-ohjelmaa, joka toimii virtuaalisena audiokaapelina.'
      },
      {
        type: 'image',
        content: 'Media\\noaa_4.jpeg',
        caption: 'Signaalin vastaanotto ohjelmalla SDR# (oikealla) ja sen muuntaminen kuvaksi ohjelmalla WXtoimg (vasemmalla). Kuva piirtyy alhaalta ylös.'
      },
      {
        type: 'image',
        content: 'Media\\noaa_1.jpeg',
        caption: 'Vastaanotettu kuva',
        isPortrait: false
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
      },
      {
        type: 'text',
        content: 'Olen käyttänyt tätä antennia myös muiden sateliittien kuunteluun. Tässä esimerkkinä Aalto 1:'
      },
      {
        type: 'video',
        content: 'Media\\tvc_44.mp4',
        caption: '18.6.2024 Aalto 1 morsettaa "A-A-L-T-O-1". Reilu kaksi kuukautta ennen kuin se tippui maan ilmakehään.',
        isPortrait: false
      }
    ]
  },
  jalkatasoEUC: {
    title: 'Sähköyksipyöräisen jalkataso',
    description: '',
    details: '',
    technologies: ['CAD', 'CNC', 'Mekaniikkasuunnittelu', '3D-tulostus'],
    year: '2024',
    contentSections: [
      {
        type: 'text',
        content: 'Tein uudet jalkatasot sähköyksipyöräiseen paremmilla ominaisuuksilla. Tavoitteena oli saada parantaa ajomukavuutta lisäämällä jalkatason kokoa ja kitkaa tason ja kengän välillä. Kasvatin myös jalkatason kulmaa 5.5 asteesta 7 asteen kulmaan, jonka avulla jalat pysyvät niiden päällä paremmin. Suunnittelin pedaalin CADillä ja tein kaksi muovista prototyyppiä. Tilasin jalkatasot konepajalta CNC-koneistettuna.<br><br>Suunnittelu alkoi 3D-mallintamalla pyörän kiinnitysosat joihin jalkatasot kiinnittyvät:'
      },
      {
        type: 'image',
        content: 'Media\\pedaali_2.jpeg',
        caption: 'Jalkatason kiinnityspiste.',
        isPortrait: true
      },
      {
        type: 'text',
        content: 'Seuraavaksi suunnittelin itse jalkatason 3D-mallin, johon tein pieniä muutoksia prototyyppien valmistuksen välissä. Tässä on kuitenkin vain lopullisen version kuvat. Jalkatason rakenteeksi suunnittelin tuollaisen hunajakennoa muistuttavan rakenteen että lika ei kertyisi sen päälle ja taso olisi kevyt.'
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
        type: 'text',
        content: 'Tulostin jalkatasosta kaksi prototyyppiä joita pystyin testaamaan pyörässä. Varmistin että mitat on oikein ja taso tuntuu hyvältä jalan alla.'
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
        type: 'text',
        content: 'Kun totesin prototyypin toimivaksi, lähetin konepajalle 3D-tiedoston lisäksi myös toleroinnit PDF-tiedostossa. Toleroinnit ovat erityisen tärkeitä jalkatason ja pyörän välisen kiinnitysreiän mitoitukseen, jotta sen akseli sopii reikään ilman liian suurta välystä.'
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
        type: 'text',
        content: 'Koneistetut osat saapui postissa! Ruuvasin yläpintaan pitoa lisäävät nastat ja asensin jalkatasot kiinni pyörään.  '
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
        type: 'text',
        content: 'Jalkataso sopii pyörään täydellisesti ja toimii edelleen loistavasti yli vuoden ajelujen jälkeen.'
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
    description: '',
    details: '',
    technologies: ['3D-tulostus', 'Optiikka', 'Tähtitiede', 'Kuvankäsittely'],
    year: '2021',
    contentSections: [
      {
        type: 'text',
        content: 'Planeettakuvaus on tähtiharrastuksen osa-alue, joka vaatii siihen tarkoitettuja kameroita. Tässä projektissa kehitin ratkaisun, jossa hyödynnän tavallista älypuhelinta planeettojen kuvaamiseen. Muutin Oneplus 5T:n planeettakuvaukseen sopivaksi. Poistin puhelimen kameramoduulin optiikan ja laitoin sen tilalle kaukoputken.'
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
        images: [
          {
            src: 'Media\\op5t_14.jpeg',
            caption: '3D-tulostettu kaukoputkikiinnike liimattu puhelimen suojakuoreen.',
          },
          {
            src: 'Media\\op5t_15.jpeg',
            caption: 'Kiinnikkeen sisäseinät maalattu mattamustalla.',
          }
        ]
      },
      {
        type: 'image',
        content: 'Media\\op5t_16.jpeg',
        caption: 'Kuvaussessio meneillään',
        isPortrait: false
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
  metrover: {
    title: 'Metrover robottimönkijän renkaan ohjausmekanismi',
    description: '',
    details: '',
    technologies: ['Autodesk Fusion', 'Solidworks', 'Dassault Systèmes 3Dexperience', 'CAD', '3D-tulostus', 'Laserleikkaus', 'Ohutlevytyöt'],
    year: '2025',
    contentSections: [
      {
        type: 'text',
        content: 'Metrover on Metropolian kehittämä kuusirenkainen robottimönkijä, joka kulkee vaativissa olosuhteissa kuten kaivoksissa. Tämä projekti oli keväällä 2025 toteutettu harjoitustyö, jonka tavoitteena oli suunnitella mönkijään renkaiden kääntömekanismi. Mönkijän edellisessä versiossa kääntyminen oli toteutettu kaivinkoneen tapaan differentiaaliohjauksella. Eli siten että renkaat pyörivät eri nopeudella eri puolilla mönkijää. Tämä tekniikka kuitenkin toimi huonosti ja todettiin että renkaalle tarvitaan kääntömekanismi.'
      },
      {
        type: 'image',
        content: 'Media\\metrover_18.jpg',
        caption: 'Metrover robottimönkijä',
        isPortrait: false
      },
      {
        type: 'text',
        content: 'Kääntömekanismin suunnittelun alkupuolella esiin nousi seuraavia huomioita järjestelmän ominaisuuksista, joita tulisi ottaa huomioon sitä suunnitellessa:<br>•	Pyörän kääntökulma<br>•	Kääntövoima<br>•	Kääntönopeus<br>•	Välys<br>•	Vesi- ja pölytiiveys<br>•	Järjestelmän paino'
      },
      {
        type: 'text',
        content: 'Suunnittelun alussa kääntämisen aktuaattoriksi valittiin Oriental Motor PKP246D15A2 -mallinen askelmoottori (Kuva 2.), johon kiinnitettiin Neugart PLFE64-040 -mallinen alennusvaihe 1:40 alennussuhteella. Askelmoottorin valintaan päädyttiin sen tarkan ja helpon ohjattavuuden takia. Askelmoottorista saatu vääntömomentti ei kuitenkaan ole tarpeeksi suuri, jonka takia päädyttiin alennusvaihteen valintaan.'
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\metrover_2.png',
            caption: 'Askelmoottori Oriental Motor PKP246D15A2',
            isPortrait: false
          },
          {
            src: 'Media\\metrover_3.png',
            caption: '1:40 Alennusvaihe Neugart PLFE64-040',
            isPortrait: false
          },
          
        ]
      },
      {
        type: 'text',
        content: 'Näiden komponenttien valinnan jälkeen jäljellä oli voiman välityksen suunnittelu. Askelmoottorin vääntömomentti piti siirtää mönkijän pyörän haarukan akselille.'
      },
      {
        type: 'image',
        content: 'Media\\metrover_26.jpg',
        caption: 'Takapyörän ripustus ja kääntöakseli',
        isPortrait: false
      },
      {
        type: 'text',
        content: 'Suunnittelun alussa ideoitiin erilaisia vaihtoehtoja vääntömomentin välittämiseksi akselille. Näistä merkittävimpiä olivat:<br><br> Askelmoottori ja alennusvaihe suoraan akseliin kiinni:<br>o	Hyvät puolet:<br>- Yksinkertainen<br>- Voima siirtyy lyhyen matkan<br>- Rengasta voi kääntää 360 astetta ympäri.<br>o	Huonot puolet:<br>- Kaikki paino tulee renkaan päälle, josta seuraa huonommat jousitukselliset ominaisuudet.<br>- Mekanismi altistuu ulko-olosuhteille<br><br>Voiman välitys akselille vaijeria pitkin:<br>o	Hyvät puolet:<br>- Askelmoottorin ja alennusvaihteen voi viedä mönkijän sisälle suojaan.<br>- Renkaan päällä vähemmän painoa<br>- säädettävä mekaaninen hyötysuhde<br>- Vaijeri voidaan kuoren sisällä viedä ahtaista paikoista<br>- Vaijeri voidaan viedä myös epäsuorasti<br>o	Huonot puolet:<br>- Monimutkaisempi<br>- Kääntökulma rajoittuu noin +-135:n asteeseen.<br>- Vaijerin kuori kuluu ja tarvitsee vaihtaa ajoittain<br><br>Moniurahihna:<br>o	Hyvät puolet<br>- mahdollisesti kestävämpi kuin vaijeri<br>- huoltovapaampi kuin ketju<br>- rajaton kääntyvyys<br>- säädettävä mekaaninen hyötysuhde<br>o	Huonot puolet:<br>- Rakenne on tilaa vievä<br>- Vaatii tarkan linjauksen ja kiristyksen<br>- rajallinen määrä nauhan pituuksia ja nauhapyöriä<br><br>Ketju:<br>o	Hyvät puolet:<br>- Halpoja osia on helposti saatavilla<br>- säädettävä mekaaninen hyötysuhde<br>- rajaton kääntyvyys<br>o	Huonot puolet:<br>- Vaatii huoltoa<br>- voidaan käytännössä vetää vain suorassa linjassa<br>- raskas<br><br>Vipumainen kääntäminen lineaariaktuaattorilla:<br>o	Hyvät puolet:<br>- Hyvä tarkkuus ja hallittavuus<br>- voimakas<br>o	Huonot puolet:<br>- Raskas<br>- suuresti rajoitettu liikerata'
      },
      {
        type: 'text',
        content: 'Suunnittelussa päädyttiin jatkamaan vaijerivälityksen suunnittelua, koska se todettiin kokonaisuudessaan parhaaksi vaihtoehdoksi, sillä kääntökulmaksi riittää noin 90 astetta, se on mahdollista suunnitella ja toteuttaa ja hyödyt olivat suuremmat. Suurimmaksi hyödyksi tässä nähtiin moottoreiden ja alennusvaihteiden saaminen suojaan mönkijän sisälle.<br><br>Ensimmäinen suunnitteluversio järjestelmästä koostui kahdesta osasta: alennusvaihteeseen kiinnittyvästä ”vaijerirummusta” sekä kaapelipäätyjen kiinnikkeestä. Alla olevassa  kuvassa näkyy CNC-koneistetuksi suunniteltu vaijerirumpu, joka on kiinnitetty kahdeksalla pultilla alennusvaihteeseen. Alennusvaihteessa on kiinni ohutlevytyönä valmistettava osa, johon kiinnitetään vaijerin ulkokuoren päädyt erillisillä siihen tarkoitetuilla kiinnikkeillä.'
      },
      {
        type: 'image',
        content: 'Media\\metrover_5.png',
            caption: 'CNC-koneistettava vaijerirumpu',
        isPortrait: false
      },      
      {
        type: 'text',
        content: 'Ideaa jatkokehitellessä todettiin kuitenkin, että vaijerirummun voi valmistaa ohutlevytyönä merkittävästi yksinkertaisempana ja halvemmalla.<br><br>Toinen suunnitteluversio koostui viidestä laserleikattavasta alumiinilevystä, jotka kiinnitetään päällekkäin pulttien avulla. Rummun toimintaperiaate on suhteellisen yksinkertainen, rummussa on viisi levyä päällekkäin, joista kaksi ulommaista sekä keskimmäinen ovat halkaisijaltaan hieman suurempia. Näin levyjen väliin muodostuu ura, jossa vaijeri pääsee kulkemaan. Koko rumpu on esitettynä alla olevassa kuvassa. Vaijerit ovat esitettynä kuvissa punaisella. Levyihin suunniteltiin kaksi reikää, joihin laitetaan ruuvilla kiristettävä vaijerinippa, jolla vaijerin pääty pysyy kiinni'
      },
      {
        type: 'image',
        content: 'Media\\metrover_6.png',
        caption: 'Toinen suunnitteluversio',
        isPortrait: false
      },
      {
        type: 'gallery',
        images: [
          {
            src: 'Media\\metrover_7.png',
            caption: 'Poikkileikkaus vaijerikiinnikkeiden kohdalta',
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
        type: 'text',
        content: 'Kun moottoriin kiinnitettävä rumpu oli tarpeeksi lopullisessa suunnitteluvaiheessa, muokattiin siitä versio, joka mahdollistaa kiinnityksen pyörän kääntöakselille. Vaijerirummun ja pyörän kääntöakselin välisestä kiinnityksestä tehtiin samankaltainen mekanismi, jota käytetään polkupyörän satulaputken kiinnitykseen: Suurempi putki, joka tässä tapauksessa on vaijerirumpuun kiinnittyvä putki, liu’utetaan kapeamman putken päälle ja kiinnitetään puristamalla se satulaputken kiinnittämiseen tarkoitetulla puristimella. Alla olevissa kuvissa on kyseinen kokonaisuus ilman puristinta. Vaijerirumpuun kiinnittyvä putki kiristetään rummun päältä yhdellä pultilla. Pultti kiinnittyy renkaan kääntöakseliputken sisälle asennettavaan starnut -tyyppiseen mutteriin, jonka toiminta perustuu kynsiin, jotka kiilautuvat putken sisäseiniin, kun sitä yrittää vetää ulos. Näihin ratkaisuihin päädyttiin niiden yksinkertaisuuden ja valmiiksi saatavien osien vuoksi.'
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
        type: 'text',
        content: 'Suunnitteluvaiheessa otettiin huomioon osien valmistettavuus ja pyrittiin mahdollisimman halpaan ja yksinkertaiseen valmistettavuuteen. Kääntömekanismin osat suunniteltiin valmistettavaksi 2 mm ja 3 mm alumiinilevystä. Laserleikattavia ohutlevyosia tulisi yhteensä 48kpl sekä 4kpl putkilaserilla leikattavia putkia. Kun kääntömekanismin suunnittelu oli jo loppuvaiheessa ja projektin edistämiseen oli aikaa jäljellä, tehtiin yhden renkaan kääntömekanismista 3D-tulostettu versio, jonka avulla varmistettiin järjestelmän toimivuus.'
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
      {
        type: 'text',
        content: 'Vaijerirummusta tehtiin vielä 1. alumiinistä laserleikattu versio, joka asennettiin väliaikaiseen testipenkkiin, jolla testattiin kääntömekanismin toimivuutta.'
      },
      {
        type: 'gallery',
        caption: 'Ensimmäinen laserleikattu vaijerirumpu',
        images: [
          {
            src: 'Media\\metrover_23.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\metrover_24.jpeg',
            isPortrait: false
          },
          {
            src: 'Media\\metrover_19.jpeg',
            isPortrait: false
          },
          
        ]
      },
      {
        type: 'image',
        caption: 'Prototyyppiversio koko järjestelmästä',
        content: 'Media\\metrover_25.jpeg',
        isPortrait: true
      },
      {
        type: 'gallery',
        caption: 'Kääntömekanismin testausta',
        images: [
          {
            src: 'Media\\metrover_20cc.mp4',
            isPortrait: false
          },
          {
            src: 'Media\\metrover_21cc.mp4',
            isPortrait: false
          },
          
        ]
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
  
  // Varmista että container on skrollattu ylös
  fullscreenContainer.scrollTop = 1;
  
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
  
  // Varmista että container on skrollattu ylös
  fullscreenContainer.scrollTop = 1;
  
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
    
    // Varmista että modaali-ikkuna on skrollattu ylös
    const modal = document.getElementById('projectModal');
    if (modal) {
      modal.scrollTop = 0;
    }
    
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
  
  // Poistettu: window.scrollTo(0, 0); -- Tämä skrollasi koko sivun ylös
  
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
  
  // Näytä modaali
  modal.style.display = 'block';
  
  // TÄRKEÄ: Varmista että modaali (ei modalContent) on skrollattu ylös
  // Tässä modal on se elementti jolla on overflow-y: auto CSS-määritys
  modal.scrollTop = 0;
  
  // Lisätään ajastettu skrollaus ylös, jotta varmistetaan että sisältö on ylhäällä myös kuvien latauduttua
  setTimeout(() => {
    modal.scrollTop = 0;
  }, 100);
  
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
    
    // Varmista että container on skrollattu ylös
    container.scrollTop = 1;
    
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
