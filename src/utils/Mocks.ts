export interface User {
  name: string;
  role: string;
  avatarUrl: string;
  wallpaperUrl: string;
  HighDefinitionWallpaperUrl?: string;
}

export interface Post {
  owner: User;
  content: string[];
  publishedAt: string;
  link?: string;
  tags?: string[];
  likesCount: number;
  comments: Comment[];
}

export interface Comment {
  owner: User;
  message: string;
  publishedAt: string;
  likesCount: number;
}

export const USERS: User[] = [
  {
    name: 'Eduardo Silva',
    role: 'Front-end Developer',
    avatarUrl: 'https://github.com/eduardojrsilva.png',
    wallpaperUrl:
      'https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=250&q=60',
    HighDefinitionWallpaperUrl:
      'https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
  },
  {
    name: 'João',
    role: 'Designer',
    avatarUrl: 'https://github.com/joao.png',
    wallpaperUrl:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=250&q=60',
    HighDefinitionWallpaperUrl:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
  },
];

export const COMMENTS: Comment[] = [
  {
    owner: USERS[0],
    message: 'Parabéns, ficou ótimo!',
    publishedAt: 'há 20min atrás',
    likesCount: 3,
  },
  {
    owner: USERS[1],
    message: 'Que legal!',
    publishedAt: 'há 5min atrás',
    likesCount: 1,
  },
];

export const POSTS: Post[] = [
  {
    owner: USERS[0],
    content: [
      'Fala galeraa 👋',
      'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
    ],
    publishedAt: 'há 1h atrás',
    link: 'eduardo.silva/doctorcare',
    tags: ['novoprojeto', 'nlw', 'rocketseat'],
    likesCount: 128,
    comments: [COMMENTS[1]],
  },
  {
    owner: USERS[1],
    content: [
      'Fala pessoal 👋',
      'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻',
    ],
    publishedAt: 'há 3h atrás',
    link: 'joao.design',
    tags: ['uiux', 'userexperience'],
    likesCount: 72,
    comments: [COMMENTS[0]],
  },
];
