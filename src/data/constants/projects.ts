import type { Project } from "../../types/project";


export const projects: Project[] = [
  {
    name: "Inquestia-ask",
    type: "Full Stack Application",
  
    link: 'https://inquestia-ask.vercel.app',
    img: '/public/inquestia.png',
    repoLink: 'https://github.com/kalachuuchiiii/inquestia',
    description:
      "A full-stack survey platform built to bridge the gap between researchers and participants — powered by React, Node.js, and MongoDB. It rewards respondents for participation while helping researchers gather meaningful data efficiently.",
  },
  {
    name: "Telltale",
    type: "Full Stack Application",

    link: 'https://thetelltale.vercel.app',
     repoLink: 'https://github.com/kalachuuchiiii/telltale-front',
    img: '/public/telltale.png',
    description:
      "This app is a full-stack platform where people share unsent messages, creating a collective archive of personal expression.",
  },
];