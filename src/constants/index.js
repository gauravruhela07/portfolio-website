import {    
    backend,    
    mern,
    javascript,    
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,    
    docker,
    veratech,
    dealshare,
    threedtshirt,
    carrent,
    jobit,
    tripguide,   
    aiimagegenerator, 
    cafelofi,
    springboot,
    kafka,
    java,
    mysql
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
      title: "MERN Developer",
      icon: mern,
    },
    {
      title: "React Developer",
      icon: reactjs,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Java Developer",
      icon: java
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
      name: "Java",
      icon: java
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },  
    {
      name: "docker",
      icon: docker,
    },    
    {
      name: "kafka",
      icon: kafka
    },
    {
      name: 'Spring Boot',
      icon: springboot,
    },
    {
      name: 'MySql',
      icon: mysql
    }
  ];
  
  const experiences = [
    {
      title: "Machine Learning Intern",
      company_name: "VeraTech Intelligence",
      icon: veratech,
      iconBg: "white",
      date: "Dec 2019 - Jan 2020",
      points: [
        "Developing Content Based Image Retrieval System (CBIR) for finding out image similarity by checking their content"
      ],
    },
    {
      title: "Software Development Engineer",
      company_name: "Dealshare",
      icon: dealshare,
      iconBg: "white",
      date: "May 2021 - Present",
      points: [
        "Streamlined the creation logic of Stock Transfer Notes (STNs) used for transferring inventory between warehouses, resulting in a 10x reduction in overall processing time and a 3x decrease in infrastructure costs. Achieved this by evenly distributing the workload across multiple smaller containers.",
        "Configuration of Jenkins job for deploying multiple tasks in a pipeline improving the overall deployment time by 3x.",
        "Designed and implemented a robust Petty Cash Management System specifically tailored for efficient tracking and management of daily expenses within a warehouse environment. Saving on an average of 5 Lakhs INR per month.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3D T-Shirt Designer",
      description:
        "AI powered web application that enables users to design t-shirts.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: threedtshirt,
      source_code_link: "https://github.com/gauravruhela07/3dtshirt/tree/main",
    },
    {
      name: "AI Image Generator",
      description:
        "Web application that enables users to generate images by writing whatever comes to their mind.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: aiimagegenerator,
      source_code_link: "https://github.com/gauravruhela07/image_generator",
    },
    {
      name: "CafeLofi",
      description:
        "Now focus on your work with a collection of lofi music.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: cafelofi,
      source_code_link: "https://github.com/gauravruhela07/cafe-lofi",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };