import type { Project } from "../../types/project";
import inq from '/inquestia.png';
import telltl from '/telltale.png';


export const projects: Project[] = [
  {
    name: "Inquestia-ask",
    type: "Full Stack Application",
  
    link: 'https://inquestia-ask.vercel.app',
    img: inq,
    repoLink: 'https://github.com/kalachuuchiiii/inquestia',
    description:
      "A full-stack survey platform built to bridge the gap between researchers and participants — powered by React, Node.js, and MongoDB. It rewards respondents for participation while helping researchers gather meaningful data efficiently.",
  }, //edit
  {
    name: "Telltale",
    type: "Full Stack Application",

    link: 'https://thetelltale.vercel.app',
     repoLink: 'https://github.com/kalachuuchiiii/telltale-front',
    img: telltl,
    description:
      "This app is a full-stack platform where people share unsent messages, creating a collective archive of personal expression.",
  },
];