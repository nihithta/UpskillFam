import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'React Utility Components',
        description: "Developed a collection of 20+ reusable React components, including a comments section, money manager, emoji game, and appointments app, designed to be easily integrated into any web application.\nThese projects focus on all the core aspects of React such as Classes, Routers, Authentication, etc",
        tools: ['Express', 'SQLite', 'ReactJS', 'bCrypt', 'CoinAPI', 'CCBP APIs'],
        role: 'Front-end Developer',
        code: 'https://github.com/nihithta/Tweet-Board-App',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Tweet Board App',
        description: 'The Tweet Board App is a microblogging and social interaction web application. It enables users to register, log in, post tweets, follow other users, and interact with tweets, etc \nIts built using React.js for the frontend and Express.js for the backend, with SQLite as the database and axios for handling the 13 custom API Requests. Security and authentication are handled using bcrypt and JWT, ensuring a secure user experience',
        tools: ['Express', 'NodeJS', "ReactJS", "bCrpyt", "SQLite", "axios", "CCBP APIs", "JWT Token"],
        role: 'Full Stack Developer',
        code: 'https://github.com/nihithta/Tweet-Board-App',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Resume Evaluator',
        description: 'Built a Resume Evaluator website that takes in a resume PDF and provides the most suitable job for you as the outputbased on data driven insights. \nThe website boasts a user friendly and attractive interface with backend hosted on Firebase. The Resume Evaluation is based on a k-NN classifier ML model providing 98% accuracy',
        tools: ['HTML', 'Bootstrap', 'Javascript', 'Firebase', 'Natural Language Processing', 'Machine Learning', 'Python'],
        code: 'https://github.com/nihithta/HTF23-Team-54',
        role: 'Front End Developer & Data Analysis',
        demo: '',
        image: realEstate,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },