// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Avish",
  middleName: "",
  lastName: "Parmar",
  message: " Student, Programmer, Researcher ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/AvishParmar",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/avishparmar/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/avish-parmar-40951915a/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/AvpAvish",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/avishparmar.png"),
  imageSize: 375,
  message:
    "I am currently a Senior at Stony Brook University majoring in Computer Science with a specialization in Artificial Intelligence. I am passionate about using my technical skills and critical thinking to solve complex problems that benefit the world. In my free time I like to work on projects, practice & teach yoga, read books, and play drums.",
  resume: require("../editable-stuff/AvishParmarResume2022.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "AvishParmar", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["uamp", "Language-Model-Generation", "Sentence-Representation-Models", "Word-Representation-Model"],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "As a student I hold several leadership positions: Vice President of Stony Brook Computing Society, Peer Mentor for the College of Engineering and Applied Sciences, and a Teaching Assistant for Dept. of Computer Science. I am also an Undergraduate Research Assistant for Prof. Banerjee working on the Information Distortion Project; the goal of which is to create a ML model that detects distortions in news headlines and determines whether it is an exaggeration or a meosis. This model would then serve as a tool for individuals to detect fake news as well as determine the bias of their news provider.",
  images: [
    { 
      img: require("../assets/img/sbcs2.jpg"), 
      label: "Vice President of SBCS", 
      paragraph: "" 
    },
    { 
      img: require("../assets/img/ceas_peer_mentor.jpg"), 
      label: "Peer Mentor", 
      paragraph: "" 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 90 },
    { name: "Python", value: 85 },
    { name: "Data Structures", value: 85 },
    { name: "Full Stack Development", value: 85 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 85 },
    { name: "HTML/CSS", value: 90},
    { name: "MERN", value: 90 },
  ],
  softSkills: [
    { name: "Project Management", value: 92 },
    { name: "Team-based work", value: 90 },
    { name: "Critical Thinking", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 95 },
    { name: "Approachability", value: 90 },
    { name: "Organization", value: 86 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Software Engineering / Research Internship opportunities for Summer 2023, please feel free to contact me with my email",
  email: "avishparmar53@gmail.com", 
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Developer Programs Engineer Intern',// Here Add Company Name
      companylogo: require('../assets/img/Google-logo.png'),
      date: 'May 2022 - August 2022',
    },
    {
      role: 'Undergraduate Research Assistant',// Here Add Company Name
      companylogo: require('../assets/img/DeptOfCS3.jpg'),
      date: 'September 2022 - Present',
    },
    {
      role: 'Researcher/Full Stack Developer',// Here Add Company Name
      companylogo: require('../assets/img/TBD2.png'),
      date: 'January 2021 - Present',
    },
    {
      role: 'Partner Relations',
      companylogo: require('../assets/img/SBUHacks1.png'),
      date: 'September 2022 - Present',
    },
    {
      role: 'Fundamentals of Software Development (CSE316) Teaching Assistant',
      companylogo: require('../assets/img/DeptOfCS3.jpg'),
      date: 'August 2022 - Present',
    },
    {
      role: 'Peer Mentor',
      companylogo: require('../assets/img/CEAS.png'),
      date: 'August 2021 - Present',
    },
    {
      role: 'Event Coordinator',
      companylogo: require('../assets/img/SBUHacks2.png'),
      date: 'August 2021 - September 2022',
    },
    {
      role: 'Data Structures & Algorithms (CSE214) Teaching Assistant',
      companylogo: require('../assets/img/DeptOfCS3.jpg'),
      date: 'August 2021 - December 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
