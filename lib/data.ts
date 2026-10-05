import { Code2, Database, Layout, Server, Smartphone, Terminal, Link2, Rocket } from "lucide-react";

export const PORTFOLIO_DATA = {
  personal: {
    name: "Anuj Kumar",
    role: "Full Stack Developer",
    location: "Ranchi, Jharkhand, India",
    email: "anujkumar.techdev@gmail.com",
    github: "https://github.com/Anujkr8674/",
    linkedin: "https://www.linkedin.com/in/anuj-kumar57/",
    about: "I’m a Full Stack Developer with 2+ years of experience building and deploying scalable, responsive web applications using React.js, Next.js, Node.js, Express.js, and PHP. I specialize in developing responsive frontends, robust backend APIs, database-driven applications, authentication, third-party integrations, and deployment. With a Master’s degree in Computer Applications, I combine strong technical knowledge with practical problem-solving to build reliable, high-quality digital solutions."
  },
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Dr. Shyama Prasad Mukherjee University (DSPMU), Ranchi",
      year: "2021 - 2023",
      description: "Focused on advanced software engineering, system architecture, and modern web technologies."
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Dr. Shyama Prasad Mukherjee University (DSPMU), Ranchi",
      year: "2018 - 2021",
      description: "Built a strong foundation in programming, database management, and computer science principles."
    }
  ],
  skills: {
    frontend: [
      { name: "HTML5 & CSS3", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 95 }
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "PHP", level: 90 },
      { name: "Laravel", level: 85 },
      { name: "REST APIs", level: 95 },
      { name: "JWT", level: 90 }
    ],
    database: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "Supabase", level: 80 },
    ],
    ai: [
      { name: "Claude Code", level: 90 },
      { name: "ChatGPT", level: 95 },
      { name: "Anthropic", level: 90 },
      { name: "Perplexity AI", level: 85 },
    ],
    hosting: [
      { name: "Hostinger", level: 90 },
      { name: "cPanel", level: 85 },
      { name: "Vercel", level: 95 },
      { name: "VPS", level: 80 },
    ],
    tools: [
      "Git", "GitHub", "VS Code", "Postman", "Docker"
    ],
    additional: [
      "Java", "Python"
    ]
  },
  services: [
    {
      title: "Web Application Development",
      description: "Building responsive and production-ready web applications using modern frontend and backend technologies.",
      techStack: "React.js · Next.js · Node.js · PHP",
      icon: Layout,
    },
    {
      title: "API & Backend Development",
      description: "Developing REST APIs, authentication systems, database integration and server-side functionality.",
      techStack: "Node.js · Express.js · PHP · REST APIs",
      icon: Server,
    },
    {
      title: "Third-Party Integrations",
      description: "Integrating payment gateways, maps, SMS, authentication, ERP and other third-party services.",
      techStack: "REST APIs · Payment · Maps · SMS · ERP",
      icon: Link2,
    },
    {
      title: "Deployment & Maintenance",
      description: "Deploying, maintaining and managing production applications across modern hosting environments.",
      techStack: "Vercel · Hostinger · cPanel · VPS",
      icon: Rocket,
    }
  ],
  projects: [
    {
      title: "Live4Help",
      description: "Developed an NGO platform for education, healthcare, donations, volunteering and social-impact initiatives.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "REST APIs"],
      image: "/img/live4help_hero_enhanced.png",
      liveUrl: "https://live4help.org",
      githubUrl: "https://github.com/Anujkr8674/ngo1"
    },
    {
      title: "EnCourtyard",
      description: "Developed a coworking/workspace platform with workspace discovery, booking, memberships authentication.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "REST APIs", "Nodemailer"],
      image: "/img/encourtyard_hero_enhanced.png",
      liveUrl: "https://encourtyard.vercel.app/",
      githubUrl: "https://github.com/Anujkr8674/encourtyard"
    },
    {
      title: "Durga Puja Association",
      description: "Developed a community association website for events, announcements and organizational content.",
      tags: ["PHP", "MySQL"],
      image: "/img/bengali_cultural_association_hero_enhanced.png",
      liveUrl: "https://www.bcanoida62.in",
      githubUrl: "https://github.com/Anujkr8674/association"
    },
    {
      title: "Motion Packers & Movers",
      description: "Developed a relocation platform with service listings, quote requests, location coverage and customer enquiry management.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "REST APIs"],
      image: "/img/motion_packers_movers_hero_enhanced.png",
      liveUrl: "https://motionpackersandmovers.in",
      githubUrl: "https://github.com/capitalcoderz/motionmovers"
    },
    {
      title: "Packers Bilty SaaS",
      description: "Developed SaaS billing software for invoices, quotations, Bilty/LR, receipts, GST calculation and PDF sharing.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "REST APIs", "Nodemailer"],
      image: "/img/nextgen_billing_hero_enhanced.png",
      liveUrl: "https://billing-saas-five.vercel.app/",
      githubUrl: "#https://github.com/Anujkr8674/billing-saas"
    },
    {
      title: "Bike Rental Services",
      description: "A comprehensive bike rental platform with availability tracking and user bookings.",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Supabase Storage", "Nodemailer"],
      image: "/img/nextgen_bike_rental_hero_enhanced.png",
      liveUrl: "https://bike-rent-seven.vercel.app/",
      githubUrl: "https://github.com/Anujkr8674/bike-rent"
    },
    {
      title: "Sony Packers Movers",
      description: "A relocation services website providing quote requests and moving solutions.",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Supabase Storage", "Nodemailer"],
      image: "/img/sony_packers_movers_hero_enhanced.png",
      liveUrl: "https://sonypackers.in/",
      githubUrl: "https://github.com/Anujkr8674/soni-packers-and-movers"
    },
    {
      title: "BharatBusiness",
      description: "Developed a unified platform for business listings, local services, B2B marketplace and job opportunities.",
      tags: ["PHP", "JavaScript", "MySQL"],
      image: "/img/bharat_business_services_enhanced.png",
      liveUrl: "https://www.bharatbusinessapp.com",
      githubUrl: "#"
    },
    {
      title: "Evangel Publishing",
      description: "Developed a medical publishing platform for browsing medical books, journals and educational resources. Implemented structured book collections, subject-based resources, author information and online access for medical professionals and students.",
      tags: ["PHP", "CSS", "JavaScript"],
      image: "/img/publication.avif",
      liveUrl: "https://books.epmedicalbooks.com",
      githubUrl: "#"
    },
    {
      title: "IVUS Secure Heart (Cardiology Casebook)",
      description: "Developed a video-based cardiology casebook platform covering complex coronary interventions, IVUS/OCT imaging and procedural case studies. Implemented issue-based case navigation and educational content for interventional cardiology learning.",
      tags: ["Next.js", "Node.js", "TypeScript"],
      image: "img/ivus.avif",
      liveUrl: "https://ivussecurehf.com",
      githubUrl: "#"
    },
    {
      title: "IVUS Secure Heart (IVUS Casebook)",
      description: "Developed a cardiology case-study platform focused on IVUS-guided complex coronary interventions. Implemented multi-issue case collections with detailed educational content and procedure-focused case studies.",
      tags: ["Next.js", "Node.js", "TypeScript"],
      image: "img/sbivus.avif",
      liveUrl: "https://sb.ivussecurehf.com",
      githubUrl: "https://github.com/Anujkr8674/sb.ivussecurehf.com"
    },
    {
      title: "Rosuvas Heart Interventions",
      description: "Developed a video-based educational platform featuring complex interventional cardiology procedures and clinical case studies. Implemented multi-issue case collections with procedure details, references and educational videos for cardiology professionals.",
      tags: ["Next.js", "Node.js", "TypeScript"],
      image: "img/rosuas.avif",
      liveUrl: "https://rosuvasheartinterventions.com",
      githubUrl: "https://github.com/Anujkr8674/www.rosuvasheartinterventions.com"
    },
    {
      title: "Fetal Ultrasound Manual",
      description: "Developed a case-based medical learning platform for fetal ultrasound education and clinical case resources. Implemented structured medical content, case management and user communication features.",
      tags: ["Next.js", "Node.js", "TypeScript", "REST APIs", "NodeMailer", "MySQL"],
      image: "img/fetal.avif",
      liveUrl: "https://fetalultrasoundmanual.com",
      githubUrl: "https://github.com/Anujkr8674/fetalultrasoundmanual.com"
    }
  ]
};
