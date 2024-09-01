interface UserProfile {
  id: string
  username: string
  name: string
  bio: string
  avatarUrl?: string
  links?: { icon?: string; title: string; url: string; id: string }[]
  backgroundColor?: string
  cardsColor?: string
  textColor?: string
}

// Simulación de datos (esto normalmente se traería desde una API o base de datos)
const profiles: Record<string, UserProfile> = {
  caliche: {
    id: '521910a2',
    username: 'Caliche',
    name: 'Caliche Orozco',
    bio: 'Experienced Frontend Web Developer with expertise in React, TailwindCSS, and Scrum methodology | Python Enthusiast | Fluent in English.',
    avatarUrl:
      'https://www.calicheorozco.com/_astro/avatar.84dca4ae_28b6nk.webp', // Tamaño de la imagen ajustado
    links: [
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/calicheorozco/',
        id: 'cfd1'
      },
      { title: 'GitHub', url: 'https://github.com/CalicheOrozco', id: 'cfd2' },
      { title: 'Portfolio', url: 'https://www.calicheorozco.com/', id: 'cfd3' }
    ],
    backgroundColor: '#38A169',
    cardsColor: '#48BB78',
    textColor: '#fff'
  },
  'Alex-Grajales': {
    id: 'c0606c0c',
    username: 'Alex-Grajales',
    name: 'Alex Grajales O.',
    bio: 'PGRC | ISO27001 Lead Implementer | Infosec | IAM | MCBA | Passionate about communication',
    avatarUrl:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQo50Iaz9NTggtjl6FRI90FD4jWLqnnL6_zz-w7byuiM9Lf54go',
    links: [
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/alejandrograjales/',
        id: 'cfd4'
      },
      {
        title: 'Dillo',
        url: 'https://www.dillo.com.au/',
        id: 'cfd5'
      }
    ],
    backgroundColor: '#6E47DC',
    cardsColor: '#7F5AF0',
    textColor: '#fff'
  },
  'Joseph-Hernández': {
    id: 'b29f27bb',
    username: 'Joseph-Hernández',
    name: 'Alan Joseph Hernández Becerra',
    bio: 'Learning Experience Designer (LXD)',
    avatarUrl: 'https://ajosephhb.netlify.app/img/perfil.png',

    links: [
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ajosephhb/',
        id: 'cfd7'
      },
      {
        title: 'Youtube',
        url: 'https://www.youtube.com/@ajosephhb',
        id: 'cfd8'
      },
      {
        title: 'Portfolio',
        url: 'https://www.behance.net/ajosephhb',
        id: 'cfd9'
      }
    ],
    backgroundColor: '#6E47DC'
  },
  'Antonio-Utrera': {
    id: 'e3a0b2c1',
    username: 'Antonio-Utrera',
    name: 'Jose Antonio Utrera Díaz',
    bio: 'Data Engineer at RappiCard | Web Scrapping | AirFlow | AWS | Datalake | DWH | ETL | SQL',
    avatarUrl:
      'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSvkk9d7Ll4IKohRW7aqRscoBZMdExed57NZ-W2mB_utMkHWHLk',
    links: [
      {
        title: 'Linkedin',
        url: 'https://www.linkedin.com/in/j-antonio-udiaz/',
        id: 'cfd10'
      },
      { title: 'Github', url: 'https://github.com/Antonio-Diaz', id: 'cfd8' }
    ],
    backgroundColor: '#E6E214',
    cardsColor: '#EAEDF5',
    textColor: '#000'
  },
  'Luis Ernesto Freyre Gonzalez': {
    id: 'f7b5e8d4',
    username: 'freyregonzalez',
    name: 'Luis Ernesto Freyre Gonzalez',
    bio: 'Automation Tester Engineer at AgileThought | Java | Selenium | JMeter | Postman | Cypress | Cucumber',
    avatarUrl:
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSUX5KpbxdVOzYVLzMDwNDFHQroNr6jVbf23Oq5P0_sY839vPEv',
    links: [
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/freyregonzalez/',
        id: 'cfd10'
      }
    ],
    backgroundColor: '#A3E6E2',
    cardsColor: '#B5EAE6'
  },
  'Ivan-Robles': {
    id: 'f7b5e8d4',
    username: 'Ivan-Robles',
    name: 'Ivan Robles Alonso',
    bio: 'Frontend developer specialized in technologies related to React, with several years of experience helping to create solid and scalable digital products and making elegant code.',
    avatarUrl: 'https://pbs.twimg.com/profile_images/1589750904668000257/-ZuM0BBV_400x400.jpg',
    links: [
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ivanroblesalonso/',
        id: 'cfd190'
      },
      {
        title: 'Portfolio',
        url: 'https://sharmaz.github.io/me/',
        id: 'cfd09l'
      },
      { title: 'Blog', url: 'https://ivanrobles.pro/', id: 'cfd8l2' }
    ],
    backgroundColor: '#FF6F00',
    cardsColor: '#D35400'
  },
}

export default profiles
