import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  php,
  html,
  css,
  reactjs,
  java,
  sass,
  jquery,
  phpmysql,
  git,
  figma,
  wp,
  ps,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Php Developer",
    icon: backend,
  },
  {
    title: "Wordpress developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Php",
    icon: php,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Wordpress",
    icon: wp,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Jquery",
    icon: jquery,
  },
  {
    name: "Phpmysql",
    icon: phpmysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Ps",
    icon: ps,
  },
];

const experiences = [
  {
    title: "JAVA/JEE DEVELOPER",
    company_name: "MIC Consulting group",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2015 - August 2016",
    points: [
      "Design and production of an urban planning web application for the management of private and public assets; the solution also makes it possible to manage the fixed assets of these owners",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "FRONT END DEVELOPER",
    company_name: "BIG M",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "September 2016 - March 2020",
    points: [
      "Developing and maintaining web applications using Php and other related technologies.",
      "Take charge of the corrective maintenance of web projects.",
      "Participate in the continuous improvement of development techniques.",
    ],
  },
  {
    title: "FRONT END DEVELOPER",
    company_name: "Lisara Agency",
    icon: shopify,
    iconBg: "#383E56",
    date: "April 2020 - Present",
    points: [
      "Design and Realization of Atout-commerce the number 1 site of directories in Belgium under Symfony.",
      "Integration and configuration of WordPress plugins.",
      "Realization of developments in compliance with WordPress standards.",
      " Integration of PSD/XD models.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Hamza proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Hamza does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Hamza optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Atout commerce",
    description:
      "Web-based platform that allows users to search, call, and manage professionals all over belgium. Atout-Commerces is a comprehensive directory regularly updated.",
    tags: [
      {
        name: "Symfony 8",
        color: "blue-text-gradient",
      },
      {
        name: "PhpmySql",
        color: "green-text-gradient",
      },
      {
        name: "Sass",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.atout-commerces.be/",
  },
  {
    name: "Koredge Agency",
    description:
      "Create the Website for the great agency based in France called Koregde. the project was full of experience.",
    tags: [
      {
        name: "Php",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Sass",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.koredge.fr/",
  },
  {
    name: "Dax Tourisme",
    description:
      "A comprehensive travel Website that allows users to book Excursions, hotels, and rental cars, and offers curated recommendations for popular destinations in Dax commune in France.",
    tags: [
      {
        name: "Php",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.dax-tourisme.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
