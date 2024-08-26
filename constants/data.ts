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
  'Beeto-Qeeq': {
    id: 'c0606c0c',
    username: 'Beeto-Qeeq',
    name: 'Beeto Qeeq',
    bio: 'Promoter in disruptive trends, investment areas, new models, projects, and solutions.',
    avatarUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALyUhNkj182HlHKWadn3PyZXA9iVzXv623Q&s',
    links: [
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/beetoqeeq/',
        id: 'cfd4'
      },
      {
        title: 'Otherverse Industries',
        url: 'https://www.linkedin.com/company/otherverse-industries/',
        id: 'cfd5'
      },
      {
        title: 'INNDO CAPITAL',
        url: 'https://www.linkedin.com/company/inndocapital/',
        id: 'cfd6'
      },
      { title: 'Frqtal', url: 'https://frqtal.org/es/team', id: 'cfd8u' }
    ],
    backgroundColor: '#6E47DC',
    cardsColor: '#7F5AF0',
    textColor: '#fff'
  },
  'Mario-Contreras': {
    id: 'b29f27bb',
    username: 'Mario-Contreras',
    name: 'Mario Contreras',
    bio: 'Sr. Frontend Developer - I take joy in building Frontend projects that meet the highest web standards of excellence 🚀',
    avatarUrl:
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQhcon6NVdIQqZBw683bDel0DrXmTeOPNxUtprJcUy-Ii8_E7fD',

    links: [
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/marioecs/',
        id: 'cfd7'
      },
      { title: 'Frqtal', url: 'https://frqtal.org/es/team', id: 'cfd8' },
      { title: 'Portfolio', url: 'https://mario.house/', id: 'cfd9' }
    ],
    backgroundColor: '#6E47DC'
  },
  'Alex-Dopa': {
    id: 'e3a0b2c1',
    username: 'Alex-Dopa',
    name: 'Alex Dopa',
    bio: 'Co-founder de FRQTAL, diseño de identidad, logotipos, botones y protocolos dentro de la APP.',
    avatarUrl:
      'https://frqtal.org/src/pages/es/team/img/alex-dominguez-bn@2x.png',
    links: [
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/alxdopa/',
        id: 'cfd10'
      },
      { title: 'Frqtal', url: 'https://frqtal.org/es/team', id: 'cfd8' }
    ],
    backgroundColor: '#E6E214',
    cardsColor: '#EAEDF5',
    textColor: '#000'
  },
  'Saul-Macias': {
    id: 'f7b5e8d4',
    username: 'Saul-Macias',
    name: 'Saul Macias',
    bio: 'Consultor para empresas AAA, en México. Asesor interno de FRQTAL en temas de estrategia.',
    avatarUrl: 'https://frqtal.org/src/pages/es/team/img/img-0469@2x.png',
    links: [
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/alxdopa/',
        id: 'cfd10'
      },
      { title: 'Frqtal', url: 'https://frqtal.org/es/team', id: 'cfd8' }
    ],
    backgroundColor: '#A3E6E2',
    cardsColor: '#B5EAE6'
  },
  'Abraham-Shemer': {
    id: 'f7b5e8d4',
    username: 'Abraham-Shemer',
    name: 'Abraham Shemer',
    bio: 'Licenciatura en finanzas por Stanford e inversionista en Venture Capital. Embajador de la comunidad Judía en LATAM.',
    avatarUrl: 'https://frqtal.org/src/pages/es/team/img/rectangle-3959@2x.png',
    backgroundColor: '#C4C4C4'
  },
  'Jhovanny-Altamirano': {
    id: 'f7b5e8d4',
    username: 'Jhovanny-Altamirano',
    name: 'Jhovanny Altamirano',
    bio: '·Analist & Investor DeFi ·Forex & Crypto Trader.',
    avatarUrl: 'https://frqtal.org/src/pages/es/team/img/rectangle-3955@2x.png',
    links: [
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/jhovanny-altamirano-260399210/',
        id: 'cfd190'
      },
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/jho_altamirano_/',
        id: 'cfd09l'
      },
      { title: 'Frqtal', url: 'https://frqtal.org/es/team', id: 'cfd8l2' }
    ],
    backgroundColor: '#FF6F00',
    cardsColor: '#D35400'
  },
  'Luis-Maumejean': {
    id: 'f7b5e8d4',
    username: 'Luis-Maumejean',
    name: 'Luis Maumejean G',
    bio: '·Chief Phygital Enabler / Orchestrating seamless integration initiatives to merge physical and digital landscapes, driving enhanced user experiences through strategic planning & innovative execution',
    avatarUrl:
      'https://frqtal.org/src/pages/es/team/img/b33627a2-2e0c-461b-aaef-b520bcd5e7d6-1@2x.png',
    links: [
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/lemg/',
        id: 'cfd190'
      },
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/jho_altamirano_/',
        id: 'cfd09l'
      },
      { title: 'Frqtal', url: 'https://frqtal.org/es/team', id: 'cfd8l2' }
    ],
    backgroundColor: '#D1F6FF',
    cardsColor: '#D1F6FF'
  }
}

export default profiles
