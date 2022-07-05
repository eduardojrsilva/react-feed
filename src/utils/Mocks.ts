import { Comment } from '../model/Comment';
import { Login } from '../model/Login';
import { Post } from '../model/Post';
import { User } from '../model/User';

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
  {
    name: 'Maria',
    role: 'Product Manager',
    avatarUrl: 'https://github.com/maria.png',
    wallpaperUrl:
      'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfDB8MHx8&auto=format&fit=crop&w=250&q=60',
    HighDefinitionWallpaperUrl:
      'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfDB8MHx8&auto=format&fit=crop&w=1000&q=60',
  },
];

export const COMMENTS: Comment[] = [
  {
    owner: USERS[0],
    message: ['Parabéns, ficou ótimo!'],
    publishedAt: new Date(2022, 6, 3, 15, 32),
    likesCount: 3,
  },
  {
    owner: USERS[1],
    message: ['Que legal!'],
    publishedAt: new Date(2022, 6, 4, 8, 11),
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
    publishedAt: new Date(2022, 6, 1, 21, 16),
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
    publishedAt: new Date(2022, 6, 2, 11, 38),
    link: 'joao.design',
    tags: ['uiux', 'userexperience'],
    likesCount: 72,
    comments: [COMMENTS[0]],
  },
];

export const LOGINS: Login[] = [
  {
    email: 'eduardo@email.com',
    password: '123456',
    user: USERS[0],
  },
  {
    email: 'joao@email.com',
    password: '123456',
    user: USERS[1],
  },
  {
    email: 'maria@email.com',
    password: '123456',
    user: USERS[2],
  },
];
