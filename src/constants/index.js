import {
    mobile,
    backend,
    web,
    javascript,
    reactjs,
    git,
    docker,
    meta,
    azure,
    shopify,
    adasuite,
    laravel,
    linux,
    vue,
    tripguide,
    harveyteck,
    techhubsquare,
    easyspend,
    facedrip,
    api,
    mysql,
    qwikcountr,
    sarutech,
    terraform,
    aws
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
      title: "Inquire",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: web,
    },
    {
      title: "Backend Engineer",
      icon: backend,
    },
    {
      title: "DevOps Engineer",
      icon: docker,
    },
   
  ];
  
  const technologies = [
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "vue",
      icon: vue,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
  
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Terraform",
      icon: terraform,
    },
    {
      name: "AWS",
      icon: aws,
    }
   
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "SARUTECH",
      icon: sarutech,
      iconBg: "#383E56",
      date: "Jan-2018 - August-2018",
      points: [
        "Learning software developement technologies",
        "Building collaborative tasks using HTML, CSS, Bootstrap, Php, MySQL and Javascript",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Fullstack Engineer(Laravel & Vuejs)",
      company_name: "Harveyteck",
      icon: harveyteck,
      iconBg: "#383E56",
      date: "Sep-2020 - April 2022",
      points: [
        "Developing B2B Saas application using Laravel Php and Vuejs",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Backend Engineer (Php)",
      company_name: "Qwikcountr",
      icon: qwikcountr,
      iconBg: "#E6DEDD",
      date: "Nov-2022 - Jan-2023",
      points: [
        "Built Rest API with Php Laravel for cross platform applications",
        "Integrated automated test for all endpoints created",
        "Implementing responsive design and ensuring cross-browser compatibility with Reactjs",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Fullstack Engineer(Php, Javascript)",
      company_name: "Paytub",
      icon: shopify,
      iconBg: "#383E56",
      date: "Feb-2023- Aug-2023",
      points: [
        "Building REST API endpoints for cross platform fintech application with Laravel framework",
        "Conducting Integrated and Unit test for all endpoints created",
        "Liasing with team lead and product owner to ensure application meets business requirement",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Fullstack Engineer",
      company_name: "Everview",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Nov-2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },

    {
      title: "Fullstack Engineer",
      company_name: "Techubsquare Inc.",
      icon: techhubsquare,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - January-2025",
      points: [
        "Build Saas API (REST and GrapQL) for cross platform applications",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Conducting Sprint planning  with the project manager.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Eleanor Armstrong",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Kolawole Lawal",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Armstrong Enefe",
      designation: "Software engineer",
      company: "Clusterwink",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Facedrip",
      description:
        "A video automation and email marketing software. It has CRM, lead generation features. A chrome extension feature that helps to share video and get real time analytics",
      tags: [
        {
          name: "vue",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "laravel",
          color: "pink-text-gradient",
        },
      ],
      image: facedrip,
      source_code_link: "https://facedrip.io",
    },
    {
      name: "ADASuite",
      description:
        "This application ensure Americans with Disabilities can surf the internet using built in widget that aids this . It also have GDPR compliance features and more ",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Php",
          color: "pink-text-gradient",
        },
      ],
      image: adasuite,
      source_code_link: "https://github.com/armstrong-series/adasuite",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },

    {
      name: "Easyspend",
      description:
        "Mobile Banking app that enables banking as easy as possible. It contains receiving and transferring money across multiple banks in Nigeria, virtual POS using NFC technology, buying and selling of Bitcoins and Altcoins",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "laravel",
          color: "pink-text-gradient",
        },
      ],
      image: easyspend,
      source_code_link: "https://github.com/paybuymaxlimited/easyspend-api",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  