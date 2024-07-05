import { meta, sebpo, shopify, starbucks, cikatech, aust , milestone, phero } from "../assets/images";
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
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
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
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "Analyst, Risk & Compliance",
        company_name: "SEBPO",
        icon: sebpo,
        iconBg: "#fbc3bc",
        date: "Dec 2020 - May 2023",
        points: [
            "Process customer inquiries performing CDD (Customer due diligence) and conducting risk background screening (i.e., OFAC, Sanctions, politically exposed persons and adverse information checks). ",
            "Understand the basics of risk in regulatory compliance and the key terms in risk relevant activities.",
            "Conduct research using open source information, and multiple internal systems to complete the risk reviews.",
            "Aggregate, process, and evaluate risk-related data and analyze the gathered information leveraging knowledge of Google search results.",
        ],
    },
    {
        title: "QA Engineer",
        company_name: "Cikatech Inc",
        icon: cikatech,
        iconBg: "#accbe1",
        date: "Feb 2022 - May 2022",
        points: [
            "Ensure functionality of applications and they match the specifications.",
            "Monitor logs for output to ensure confidential credentials are not outputting to them.",
            "Identify and report bugs for developers to fix. Assist developers recreate bugs.",
            "Provide suggestions to enhance different systems or software.",
        ],
    },
    
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const education = [
    {
        institute: "Ahsanullah University of Science & Technology",
        Degree: "BSc in Computer Science & Engineering",
        icon: aust,
        iconBg: "#b7e4c7",
        date: "Nov 2015 - Feb 2020",
        des: "Ahsanullah University of Science and Technology (AUST) stands as a beacon of excellence in higher education, particularly in the realm of science and technology. Situated in Bangladesh, AUST has carved a distinguished reputation for imparting quality education and fostering innovation across various disciplines."

    },
    {
        institute: "Milestone College",
        Degree: "Higher Secondary Certificate, Science",
        icon: milestone,
        iconBg: "#a2d2ff",
        date: "July 2012 - July 2014",
        des: "Milestone College, situated in Bangladesh, is a distinguished educational institution known for its commitment to academic excellence and holistic development. With a strong focus on nurturing young minds, Milestone College offers a comprehensive educational experience from the school level to higher secondary education."

    },
]

export const trainings = [
    {

        
            institute: "Programming Hero",
            Degree: "Complete Web Development Course With Jhankar Mahbub",
            icon: phero,
            iconBg: "#accbe1",
            date: "July 2023 - Dec 2023",
            des: "Programming Hero is an innovative and dynamic platform dedicated to empowering individuals in the world of coding and programming. Based in Bangladesh, Programming Hero stands out as a revolutionary learning hub that facilitates the mastery of coding skills through an engaging and user-friendly interface."
    
        
    }
]

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'SURVO',
        category: 'Online Survey Website',
        description: 'The platform employs distinct user roles - user, surveyor, admin, and pro-user - each with specific permissions. Admins wield control over user roles, including the ability to promote users to admin or surveyor status. Survey creation and updates, featuring diverse question types, occur via the Surveyor Dashboard. Surveys encompass titles, descriptions, option sets, like/dislike counters, and categories. Participation in surveys is exclusive to logged-in users, who can express preferences through the like/dislike functionality and report any inappropriate content. Surveyors hold the capability to access feedback on individual surveys provided by users. User authentication is ensured through email/password and social media, generating and storing JWT tokens for secure authentication. Tailwind CSS, React.js, Node.js, MongoDB, Firebase, and Vercel serve as the underlying technologies powering this comprehensive functionality.',
        link: 'https://survo-cd76d.web.app/',
        link1: 'https://github.com/SamirSadek/survo-client-side',
        link2: 'https://github.com/SamirSadek/survo-server-side',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'JOBCONNECT',
        category: 'Online Job Marketplace Website',
        description: 'The login page offers email and password login options, alongside the convenience of Google Sign-in functionality for users. Users can easily navigate to the Registration Page via a link, where they can input their name, email, password, and a photo URL. The platform features a dynamic banner carousel and tab-based job browsing options, such as web development, marketing, and design. Job cards provide comprehensive details sourced from MongoDB. Additionally, private routes enable the addition of products, encompassing fields for images, names, brands, types, prices, descriptions, and ratings. Employers can utilize the "Add Job" feature, inputting details like their email, job title, deadline, description, category, and price range. Further functionalities include comprehensive job details, user management capabilities, and progress tracking. This multifaceted platform harnesses Tailwind CSS, React.js, Node.js, MongoDB, Firebase, and Vercel to provide a seamless and efficient user experience.',
        link: 'https://online-marketplace-481d3.web.app/',
        link1: 'https://github.com/SamirSadek/online-marketplace-client',
        link2: 'https://github.com/SamirSadek/online-marketplace-server',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'GADGETLUXE!',
        category: 'Shopping website for tech products',
        description: "This specialized website concentrates solely on the 'Technology and Electronics' category, providing access to a curated selection of products from renowned brands within this niche. The homepage showcases brand names alongside their respective brand images, dynamically loaded from a database. Users can click on a brand to explore available products; for brands without available products, a relevant message informs users on the brand's page. Authentication options include email/password login and a convenient Google social media login. A protected route enables users to contribute by adding new products to the database via a form featuring fields for images, names, brand names, types, prices, short descriptions, ratings, and an 'Add' button. Detailed product information is available upon clicking, allowing users to add items to their carts. The shopping cart page facilitates item viewing and deletion. Moreover, a private route permits updates to product details, including images, names, brands, types, prices, and ratings, ensuring authentication and enforced password requirements. Users can seamlessly navigate between login/registration views and utilize Google login. Technologies utilized encompass Tailwind CSS, React.js, Node.js, MongoDB, Firebase, and Vercel, harmonizing to deliver a cohesive and user-friendly experience focused on technology enthusiasts.",
        link: 'https://gadget-luxe-auth.web.app/',
        link1: 'https://github.com/SamirSadek/GadgetLuxe-client-side-react',
        link2: 'https://github.com/SamirSadek/gadgetluxe-server-side-express-mongodb',
    },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];