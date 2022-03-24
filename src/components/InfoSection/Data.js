import logo from '../../images/IMG_1224.png' // need to import the pngs, svgs can access directly

export const homeObjOne = {
  id: 'about',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Matthew Hu?',
  headline: 'Full Stack Developer',
  description: "After graduating from Lighthouse Labs, I began pursuing my dreams of becoming a Developer. Every day I try my best, and have picked up AlgoExpert and SystemsExpert to help strengthen my knowledge of Data Structures & Algorithms",
  // buttonLabel: 'Get started',
  imgStart: false,
  img: logo,
  alt: 'Myself',
  dark: false,
  primary: false,
  darkText: true,
  picHover: false
};

export const homeObjTwo = {
  id: 'contact',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "What's next?",
  headline: 'Get In Touch',
  description:  "Whether you have any questions or would like to say hi, shoot me an E-Mail and I will try my best to get back to you.",
  buttonLabel: 'Email Me',
  imgStart: true,
  img: require('../../images/email-svgrepo-com.svg').default,
  alt: 'Click Me To Email!',
  dark: false,
  primary: false,
  darkText: true
};


