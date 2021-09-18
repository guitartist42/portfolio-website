import Link from 'next/Link';

export const projects = [
  {
    title: 'DOD 4th Medical Group',
    description: "This app includes features such as: dual language accessibility, night shift mode, geo-location, web portal access, and a sleek UI. I built it with a team of software engineers in my previous internship experience.",
      image: '/images/dod4.JPG',
      tags: ['React Native', 'Android Studio', 'Swift', 'Expo'],
    source: 'https://docs.google.com/presentation/d/13aqSPiWbtGwWNXUu5Y761GB4w9bLUFdHS_PV5tdrxmM/edit#slide=id.g7187a9d989_2_166',
    visit: 'https://github.com/choojoe/dod-4th-medical-team',
    id: 0,
  },
  {
    title: <Link href="/ExquisiteCorpses"> Exquisite Corpses UNDER CONSTRUCTION </Link>,
    description: "An app that let's you play with a creative writing game and surrealism technique!",
      image: '/images/exquisite corpse.jpg',
      tags: ['React.js', 'Next.js', 'SQL'],
    source: '',
    visit: 'https://github.com/guitartist42',
    id: 1,
  },
 
];

export const TimeLineData = [
  { year: 2019, text: 'Finished my major in Linguistics and began my journey in Computer Science',},
  { year: 2020, text: 'Worked as a full stack engineer at my first internship', },
  { year: 2021, text: 'Graduated from Duke and worked on extensive projects', },
];