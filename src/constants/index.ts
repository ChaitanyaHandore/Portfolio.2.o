import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  // carrent,
  // jobit,
  // tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "AI/ML Engineer",
    icon: web,
  },
  {
    title: "Data Scientist",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: html,
  },
  {
    name: "Java",
    icon: css,
  },
  {
    name: "C++",
    icon: javascript,
  },
  {
    name: "SQL",
    icon: typescript,
  },
  {
    name: "PyTorch",
    icon: reactjs,
  },
  {
    name: "TensorFlow",
    icon: redux,
  },
  {
    name: "FastAPI",
    icon: tailwind,
  },
  {
    name: "Flask",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "AWS",
    icon: figma,
  },
  {
    name: "Azure",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "MSc in Artificial Intelligence",
    companyName: "Dublin Business School",
    icon: web,
    iconBg: "#383E56",
    date: "Sept 2024 - Present",
    points: [
      "Coursework: Machine Learning & Pattern Recognition, Deep Learning, Data Analytics, Cognitive & Ethical AI",
      "Thesis: Crop Pest & Disease Detection — built CNN/Transformer pipelines (ResNet-50, ViT, ConvNeXt) for 22-class classification",
      "Deployed models via FastAPI & Docker with CI/CD integration",
      "Developed expertise in PyTorch, TensorFlow, and cloud deployment technologies",
    ],
  },
  {
    title: "BSc in Computer Science",
    companyName: "K. K. Wagh College",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - May 2024",
    points: [
      "Coursework: Python, Java, C++, SQL/DBMS, Operating Systems, Data Structures & Algorithms",
      "Final Year Project: Leave Management System — automated staff leave approvals using PHP/MySQL",
      "Reduced query load by 50% through efficient database design and optimization",
      "Developed strong foundation in software development and system design",
    ],
  },
  {
    title: "Certifications & Learning",
    companyName: "Various Platforms",
    icon: mobile,
    iconBg: "#383E56",
    date: "2022 - Present",
    points: [
      "PostgreSQL — Infosys Springboard",
      "Communication Skills — Tata Consultancy Services",
      "Microsoft Azure Data Fundamentals (In Progress)",
      "Solved 600+ LeetCode problems — developed strong foundation in DSA and algorithm optimization",
    ],
  },
  {
    title: "Achievements & Activities",
    companyName: "Academic & Professional",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "2021 - Present",
    points: [
      "NSS Camp Coordinator — organized sustainability and awareness initiatives",
      "Avishkar Competition — presented AI-driven forecasting and analytics solutions to academic panels",
      "Active on LinkedIn — share insights on AI, ML, and software engineering",
      "Maintains a 365+ day coding streak on GitHub and LinkedIn",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Chaitanya's AI projects are incredible! His crop disease detection system could revolutionize agriculture. His technical skills and dedication to solving real-world problems are truly inspiring.",
    name: "Rohan Handore",
    designation: "Friend & Colleague",
    company: "Tech Enthusiast",
    image: "https://api.dicebear.com/7.x/lorelei/svg?seed=Rohan&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf&hairColor=0e0e0e,2c1b18,724133,a06128,c93305,dc2626&clothingColor=262e33,65c9ff,5199e4,929598,3c4f5c,1f2937",
  },
  {
    testimonial:
      "Working with Chaitanya on projects has been amazing. His recipe recommender AI is so useful, and his disaster relief routing system shows his algorithmic expertise. He's always ready to help and explain complex concepts.",
    name: "Yash Wankhade",
    designation: "Study Partner",
    company: "Computer Science Student",
    image: "https://api.dicebear.com/7.x/lorelei/svg?seed=Yash&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf&hairColor=0e0e0e,2c1b18,724133,a06128,c93305,dc2626&clothingColor=262e33,65c9ff,5199e4,929598,3c4f5c,1f2937",
  },
  {
    testimonial:
      "Chaitanya's passion for AI and machine learning is contagious! His consistent coding streak and innovative projects like the stock price analyzer demonstrate his commitment to continuous learning and growth.",
    name: "Prathmesh Kalamkar",
    designation: "Friend & Developer",
    company: "Software Development",
    image: "https://api.dicebear.com/7.x/lorelei/svg?seed=Prathmesh&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf&hairColor=0e0e0e,2c1b18,724133,a06128,c93305,dc2626&clothingColor=262e33,65c9ff,5199e4,929598,3c4f5c,1f2937",
  },
];

const projects: TProject[] = [
  {
    name: "Crop Pest & Disease Detection",
    description:
      "Deep learning project using CNNs and Transformers (ResNet-50, ViT, ConvNeXt) for multi-class classification of crop diseases. Deployed via FastAPI & Docker with CI/CD integration and Power BI dashboards for visualization.",
    tags: [
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: "/Images/Crop.png",
    sourceCodeLink: "https://github.com/ChaitanyaHandore/crop_detection_thesis",
  },
  {
    name: "Disaster Relief Routing System",
    description:
      "Routing optimization system using Dijkstra's Algorithm and Knapsack DP. Python CLI application that calculates minimum-cost paths and resource allocation for relief logistics.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "algorithms",
        color: "green-text-gradient",
      },
      {
        name: "optimization",
        color: "pink-text-gradient",
      },
    ],
    image: "/Images/Disaster.png",
    sourceCodeLink: "https://github.com/ChaitanyaHandore/Disaster-Relief-Routing-System",
  },
  {
    name: "Recipe Recommender AI",
    description:
      "NLP-based recommendation system using TF-IDF and cosine similarity. Implemented FastAPI backend and JavaScript frontend for real-time recipe suggestions based on user preferences.",
    tags: [
      {
        name: "nlp",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: "/Images/Recipe.png",
    sourceCodeLink: "https://github.com/ChaitanyaHandore/RecipeRecommender_AI-main",
  },
  {
    name: "Stock Price Analyzer",
    description:
      "Implemented segment tree and sliding window algorithms to analyze stock price trends. Built visualization tools using Matplotlib for identifying buying and selling points with real-time data processing.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "algorithms",
        color: "green-text-gradient",
      },
      {
        name: "data-analysis",
        color: "pink-text-gradient",
      },
    ],
    image: "/Images/Stock.png",
    sourceCodeLink: "https://github.com/ChaitanyaHandore",
  },
];

export { services, technologies, experiences, testimonials, projects };
