import { internimg, freelance } from "../assets/images";

import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Free lance Work",
        company_name: "AS Enterprise",
        icon: freelance,
        iconBg: "#b7e4c7",
        date: "June 2023 - September 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility also added payment gateway.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Freelance Work",
        company_name: "AS Enterprise",
        icon: freelance,
        iconBg: "#e06378",
       
       
        date: "June 2023 - October 2023",
        points: [
            "Developing and maintaining web applications using next.js,Firebase and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "provides the stock information and also makes easy for user to place order, which allows user to connect securly.",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "entriprise",
    //     icon: freelance,
    //     iconBg: "#a773f0",
    //     date: "Jan 2022 - june 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "Full stack Developer",
        company_name: "Simmi Foundation",
        icon: internimg,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - july2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Developed a deep understanding of user experience and user interface design, and implemented design elements that improved the overall usability and functionality of the web applications.",
            "Worked on various projects during the internship, ranging from small-scale websites to large-scale web applications, and gained extensive experience in front-end development technologies such as React,Next js and for backend mongoose, Rest Api.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Akhilesh-pujar',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/akhilesh-pujar-70aa26212/',
    }

];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'IdeaForge: NextGen Notes ',
        description: ' IdeaForge redifines note-taking with NextGen Notes, a cutting-edge platform that seamlessly combines the power of Next.js, Convex, and Clerk technologies',
        link: 'https://tasktaking.vercel.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-black',
        name: 'WebWeave: MeshMeet',
        description: 'A dynamic and seamless WebRTC-powered video conferencing platform employing a mesh topology for enhanced connectivity and collaboration.',
        link: 'https://peer-to-peer-communication-xwnc.vercel.app/',
    },

    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Payment Application.',
        description: 'I built a web application that allows users to transfer and receive money from other registered users on my platform. It is a small payment application created for educational use exclusively, and it uses a simple architecture using MERN.',
        link: 'https://github.com/Akhilesh-pujar/PAYTM_COMPLETED',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy blogs and website and it summerizes the web for you.',
        link: 'https://article-summerizer-using-open-ai-gpt4.vercel.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-green',
        name: 'CogniQuest: AI Quiz Realm ',
        description: 'App that leverages AI to automatically generate concise questions for user according to there needs and you can choose the difficulty of the questions You want to set.',
        link: 'https://github.com/Akhilesh-pujar/Quiz-app-with-ai',

    }
];