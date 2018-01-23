// @flow
let teamMembers: {
  founders: Array<MemberDataType>,
  advisors: Array<MemberDataType>,
  teamHeads: Array<MemberDataType>,
  teachers: Array<MemberDataType>,
} = {
  founders: [
    {
      name: { first: "Kiera", last: "Peltz" },
      position: "Founder",
      organization: "Brown University",
      description: "Kiera Peltz is a Gates-Cambridge Scholar, pursuing her masters in Political and Economic Sociology at the University of Cambridge. She is a graduate of Brown University, where she received her B.A. in Political Science and Happiness. One summer, while attending an international conference in Seliger, Russia, she met a group of Estonians, who spoke about the importance of early childhood coding, stating that it’s mandatory for every Estonian, starting at age seven, to learn how to code. Upon returning to the United States, Kiera began critically examining the education system and came to realize that while the world has changed drastically in the past 50 years, our country’s public K-12 curriculum has remained relatively unaltered. So she set out to fix the gap in the education system by creating The Coding School to ensure the next generation learns the language that has built – and will continue to build – the modern world.",
      blurb: "White House Intern in the Office of Innovation & Technology; 2012 National Coca-Cola Scholar; World Business Dialogue Ambassador; Professional Businesswomen of CA Scholar.",
      links: {}
    }
  ],
  advisors: [
    {
      name:  { first: "Bill", last: "Derouin" },
      position: "Advisor, Co-Head of Curriculum",
      organization: "SpaceX",
      description: "Employed at SpaceX, I am passionate about coding.  I first started programming in middle school and because I realize how important it is for kids to learn coding at a young age, I have been involved with TCS since I was a freshman at USC.  First serving as an instructor to developing TCS curricula, I am proud to continue serving as an advisor to TCS by overseeing their curricula strategy and development.",
    },
    {
      name:  { first: "Mark", last: "Redekopp" },
      position: "Curriculum Supervisor",
      organization: "USC",
      description: "Mark Redekopp is an Associate Professor of Engineering Practice in the Ming Hsieh Department of Electrical Engineering at USC. Mark serves on the Division of Engineering Education for the Viterbi School of Engineering as well as serving on the Women in Science and Engineering Advisory Board.",
      links: {
        personal: "https://viterbi.usc.edu/directory/faculty/Redekopp/Mark"
      }
    },
    {
      name:  { first: "Gisele", last: "Ragusa" },
      position: "",
      organization: "USC",
      description: "Dr. Gisele Ragusa is a professor at the University of Southern California (USC) in the Viterbi School of Engineering’s Division of Engineering Education. She co-chairs and directs USC’s STEM Education Consortium.",
      links: {
        personal: "https://viterbi.usc.edu/directory/faculty/Ragusa/Gisele"
      }
    },
    {
      name: { first: "Matt", last: "Dababneh" },
      position: "",
      organization: "CA State Assembly",
      description: "Matt Dababneh is a California State Assembly Member and Former Chief of Staff to U.S. Congressman Brad Sherman"
    },
    {
      name: { first: "Jessica", last: "McKellar" },
      position: "Advisor, Director of Engineering",
      organization: "Dropbox"
    },
    {
      name: { first: "Eva", last: "Manolis" },
      position: "Board Member",
      organization: "Shutterfly",
      description: "Eva Manolis is Co-Founder of Shutterfly and a former VP at Amazon.",
    },
    {
      name: { first: "Pamit", last: "Surana" },
      position: "Board Member",
      organization: "Alvarez and Marsal",
      description: "Pamit Surana is Managing Director at Alvarez & Marsal and a former Managing Director at Accenture.",
    },
    {
      name: { first: "Ravi", last: "Pendse" },
      position: "Board Member",
      organization: "Brown University",
      description: "Ravi Pendse is VP Chief Information Officer at Brown University.",
    }
  ],
  teamHeads: [
    {
      name:  { first: "Laura", last: "Felenstein" },
      position: "Graphic Designer",
      organization: "Brown University",
      description: "I am a junior at Brown University and am the Graphics Editor for the Brown Daily Herald. I’m so excited to be a part of something that creates such tremendous opportunities.",
    },
    {
      name:  { first: "Akila", last: "Rajesh" },
      position: "Head of PR & Communications",
      organization: "UCLA",
      description: "I'm a first year computer science and linguistics major. I jumped into CS classes at UCLA with absolutely no background info. It was very intimidating at first, but after I got a feel for it I had lots of fun coding! I think this is a field truly anyone can learn and enjoy!",
    },
    {
      name:  { first: "Crystal", last: "Hsieh" },
      position: "Co-Head of Curriculum",
      organization: "UCLA",
      description: "I am a fourth-year computer science major at UCLA who cherishes her friends, her family, and her faith. I've had the privilege of interning at Google the past three summers, working in their New York, Mountain View, and Zurich offices. I'm also passionate about inspiring the next generation of women techies through developing summer tech camps and teaching coding at local middle schools.",
    },
    {
      name: { first: "Bibek", last: "Ghimire" },
      position: "Co-Head of Web",
      organization: "UCLA",
      description: "I'm a 2nd year Computer Science student at UCLA who loves coding things that people will use, like iOS app development and web development (like making this website!) This summer, I'll be a software engineer intern at Stanza, a startup in San Francisco.",
      links: {
        personal: "http://www.bibekg.com",
        linkedin: "http://www.linkedin.com/in/bibekgg",
        facebook: "http://www.facebook.com/in/bibekghim"
      }
    },
    {
      name:  { first: "Mindi", last: "Cao" },
      position: "Co-Head of Web",
      organization: "UCLA",
      description: "I'm a sophomore at UCLA, and I enjoy teaching. Outside of coding I enjoy rock climbing and painting.",
    },
    {
      name: { first: "Natalie", last: "Ethell" },
      position: "Co-Head of Web",
      organization: "UCLA",
      description: "I am a senior at UCLA studying computer science and I love teaching, dogs, bagels, and anything involving puzzles. I grew up in Southern California and will be moving to Seattle to work at Microsoft after graduation.",
    },
    {
      name:  { first: "Anthony", last: "Mirand" },
      position: "Head of Instructors",
      organization: "UCLA",
      description: "I am a third year computer science student at UCLA! I have been interested in tutoring and education since high school, and even plan on being a high school math teacher after my time in industry. I will be a software engineering intern at Google this summer!",
      links: {
        personal: "http://www.anthonymirand.com"
      }
    },
    {
      name:  { first: "Jason", last: "Lin" },
      position: "Head of Development",
      organization: "USC",
      description: "I am a senior studying Computer Science and Business Administration at the University of Southern California. A technology enthusiast, I enjoyed creating applications and websites that help solve real life problems. I hope to bring my passion for education and my self-taught CS experience together to teach programming the most effective way.",
    },
    {
      name:  { first: "Christie", last: "Matthews" },
      position: "Head of Grants",
      organization: "UCLA",
      description: "I joined The Coding School because I love teaching and working with children. Being able to use my background as a Computer Science major is just a plus! This summer I'll be interning at Facebook as a Production Engineer. I plan on working in the tech industry when I graduate next year, but after that I hope to teach some day whether in K-12 or at a university.",
    },
    {
      name: { first: "Andy", last: "Patterson" },
      position: "Co-Head of Web",
      organization: "Indiana University",
      description: "I am a professional software engineer specializing in web applications at Genesys. I was an undergraduate and graduate instructor at IU teaching an introduction to machine learning course and love to help design curriculum for introductory programming or introductory data science/machine learning.",
    },
    {
      name: { first: "Amy", last: "Baer" },
      position: "Co-Chair of Development",
      organization: "UMich",
      description: "",
    },
    {
      name: { first: "Alejandro", last: "Fischer" },
      position: "Co-Chair of Development",
      organization: "UMich",
      description: "",
    },
    {
      name:  { first: "Stacy", last: "Miller" },
      position: "Co-Chair of Intstructors",
      organization: "UCLA",
      description: "I am a 3rd year student at UCLA studying Computer Science. I teach with The Coding School because I want to help promote interest in Computer Science in the next generations! Last Summer, I was an Explorer Intern at Microsoft, and this upcoming Summer I will return as a SWE intern.",
    },
    {
      name:  { first: "Uma", last: "Lakshminarayan" },
      position: "Co-Chair of Instructors",
      organization: "UCLA",
      description: "I am a 2nd year computer science student at UCLA. I love the logic and practical use of coding, and I want to share that with others. Outside of the classroom, I am part of an acapella team. I am constantly singing or making music. I'm also a huge Game of Thrones fan! This summer I will be interning at Microsoft for their Explore program.",
    },
    {
      name: { first: "Gavin", last: "Mack" },
      position: "Head of codeConnects Curriculum",
      organization: "UCSC",
      description: "",
    }
  ],
  teachers: [
    {
      name:  { first: "Aditi", last: "Sharma" },
      position: "Curriculum Development",
      organization: "UCLA",
      description: "I am a Computer Science and Engineering major at UCLA. I had the opportunity to intern at Wipro in India last summer and I will be interning at Amazon this summer. I enjoy writing, baking, and binge watching TV shows.",
    },
    {
      name:  { first: "Bennett", last: "Lee" },
      position: "Teacher",
      organization: "USC",
      description: "I am an aspiring entrepreneur, veteran software developer, and dabbling musician. After graduating from USC Marshall & Viterbi, I've been a Full Stack Engineer @ Tapiture, Software Engineer @ USC ISI, and a Lead iOS Instructor @ General Assembly. I have a passion for empowering others to build the app of their dreams.",
    },
    {
      name:  { first: "Nicholas", last: "Roewe" },
      position: "Teacher",
      organization: "USC",
      description: "I’ve had the pleasure of interning at Two Bit Circus where we worked on Gala events to get kids excited about STEM! I’ve also worked on a website project where we made a card based multiplayer game with a back end database that stored user info.",
    },
    {
      name:  { first: "Alvin", last: "Vuong" },
      position: "Teacher",
      organization: "UCLA",
      description: "I'm a 4th year computer science major and cognitive science minor at UCLA, working on a VR production company, Escality Games; we are currently making a VR escape room game built with Unity (what I teach)! In my free time, I shoot arrows and play video games.",
      links: {
        personal: "http://imatv.me"
      }
    },
    {
      name:  { first: "Karen", last: "Fann" },
      position: "Teacher",
      organization: "UCLA",
      description: "I am a freshman Computer Science and Engineering student at UCLA. In high school, I became really interested in computers and taught myself how to build and program an electric car. Besides coding, I love playing basketball, swimming, and watching movies.",
    },
    {
      name:  { first: "Baolinh", last: "Nguyen" },
      position: "Teacher",
      organization: "UCLA",
      description: "I am a current first year computer science major at UCLA and I am excited to further my passion for computer science and hopefully foster an interest in computer science in the next generation of computer science students.",
    },
    {
      name:  { first: "Charlie", last: "Hwang" },
      position: "Curriculum Development, Teacher",
      organization: "USC",
      description: "I’m a sophomore studying Computer Science at USC! I have a passion for technology that lets users and developers express themselves creatively - i.e. Web Development, VR, etc.",
    },
    {
      name:  { first: "Sapharah", last: "Prescod" },
      position: "Teacher",
      organization: "Pepperdine University",
      description: "I am a multi-talented individual. My other passions in life are singing and pursuing a healthy lifestyle. I enjoy being active and putting my creative mind to use in technology. I am earning degrees in both computer science and mathematics at Pepperdine University. I love to seek out new experiences and I enjoy inspiring others to reach for their full potential. ",
    },
    {
      name:  { first: "Ezequil", last: "Morales" },
      position: "Teacher",
      organization: "CSU Sacramento",
      description: "I'm a student attending CSU Sacramento, pursuing a degree in computer engineering. I'm a member of Society of Hispanic Professional Engineers and excited to be starting an internship at Intel this Fall.",
    },
    {
      name:  { first: "Ramya", last: "Deshpande" },
      position: "Teacher",
      organization: "Caltech",
      description: "I'm a freshman at the California Institute of Technology, majoring in Bioengineering and minoring in Computer Science. I love the thrill of successful debugging and I'm amazed by the potential artificial intelligence holds for the future. I'm also passionate about writing, Girls in STEM, and Naruto.",
    },
    {
      name: { first: "Eloisa", last: "Esparza" },
      position: "Teacher",
      organization: "CSU Sacramento",
      description: "I am currently a Senior at Sacramento State majoring in Computer Engineering. I enjoy teaching engineering and programming to K-12. I also interned at Intel and served as an advisor for Envision, a National Youth Leadership Forum on Engineering and Technology. I also mentor 6th - 8th grade girls in all areas of STEM through Expand Your Horizons and am a member of SHPE, Society of Hispanic Professional Engineers.",
    },
    {
      name: { first: "Michael", last: "Grieve" },
      position: "Teacher",
      organization: "UCLA",
      description: "I am a sophomore computer science student at UCLA. I am passionate about teaching and hope to make education more involved and personal. I love riding my bike and playing beach volleyball.",
    },
    {
      name: { first: "Richard", last: "Wen" },
      position: "Teacher",
      organization: "UCLA",
      description: "I'm a sophomore computer science student attending UCLA. I'm originally from Redmond Washington and grew up in Microsoft's backyard. In my free time, I enjoy reading, programming, and gaming with close friends. This summer I'll be interning at Taboola as a Front End Engineer.",
    },
    {
      name: { first: "Ashley", last: "Chang" },
      position: "Teacher",
      organization: "UCLA",
      description: "I'm a second year statistics and applied math major at UCLA who loves the challenges of coding. This summer, I’ll be a data science intern at Ticketmaster right here in LA! In my spare time, you can find me running around LA or competing as a fake attorney in mock trial.",
    },
    {
      name: { first: "Micah", last: "Benn" },
      position: "Teacher",
      organization: "Pepperdine University",
      description: "I'm a fourth-year student at Pepperdine University, where I study Computer Science and Math. I've studied in Switzerland, and interned in Singapore as an iOS Engineer with Buuuk. At a hackathon in Zürich, Switzerland, I built a security tool that notifies devices whenever another device wakes or sleeps. I teach children coding because I myself learned in middle school.",
    },
    {
      name: { first: "Arvin", last: "Flores" },
      position: "Teacher",
      organization: "CSU Northridge",
      description: "I worked at a department called Matador Emerging Technology Arts Lab (METALab) at CSUN, where I led the development of the first iOS mobile application utilizing the React Native library. I believe that one of the most valuable things programming teaches individuals to do is how to problem solve and think critically. By equipping students at a young age with this skillset, you're properly preparing them for their futures.",
    },
    {
      name: { first: "Abhimanyu", last: "Muchhal" },
      position: "Teacher",
      organization: "UMich",
      description: "",
    },
    {
      name: { first: "Adel", last: "Beitvashahi" },
      position: "Teacher",
      organization: "Indiana University",
      description: "",
    },
    {
      name: { first: "Aishni", last: "Parab" },
      position: "Teacher",
      organization: "UCSC",
      description: "",
    },
    {
      name: { first: "Alborz", last: "Bral" },
      position: "Teacher",
      organization: "UCSB",
      description: "",
    },
    {
      name: { first: "Alexander", last: "Arnold" },
      position: "Teacher",
      organization: "Capital One",
      description: "",
    },
    {
      name: { first: "Alexander", last: "Ulyanov" },
      position: "Teacher",
      organization: "US Army",
      description: "",
    },
    {
      name: { first: "Alexandre", last: "Rochaix" },
      position: "Teacher",
      organization: "UMich",
      description: "",
    },
    {
      name: { first: "Alison", last: "Chao" },
      position: "Teacher",
      organization: "UCSB",
      description: "",
    },
    {
      name: { first: "Andrea", last: "Bolivar-Matos" },
      position: "Teacher",
      organization: "MIT",
      description: "",
    },
    {
      name: { first: "Andrew", last: "Guan" },
      position: "Teacher",
      organization: "Stanford",
      description: "",
    },
    {
      name: { first: "Andrew", last: "Rosen" },
      position: "Teacher",
      organization: "UMich",
      description: "",
    },
    {
      name: { first: "Ariadna", last: "Gonzalez" },
      position: "Teacher",
      organization: "UNC Greensboro",
      description: "",
    },
    {
      name: { first: "Benjamin", last: "Garlington" },
      position: "Teacher",
      organization: "Jackson State",
      description: "",
    },
    {
      name: { first: "Bo", last: "Curry" },
      position: "Teacher",
      organization: "Duke",
      description: "",
    },
    {
      name: { first: "Brian", last: "Greenberg" },
      position: "Teacher",
      organization: "Bowdoin College",
      description: "",
    },
    {
      name: { first: "Bryan", last: "Hernandez" },
      position: "Teacher",
      organization: "University of Puerto Rico",
      description: "",
    },
    {
      name: { first: "Carlos", last: "Velez" },
      position: "Teacher",
      organization: "Turabo University",
      description: "",
    },
    {
      name: { first: "Chris", last: "Salem" },
      position: "Teacher",
      organization: "Pixel Velocity",
      description: "",
    },
    {
      name: { first: "Daniel", last: "Dover" },
      position: "Teacher",
      organization: "MSState",
      description: "",
    },
    {
      name: { first: "Devanshi", last: "Thakar" },
      position: "Teacher",
      organization: "UCSC",
      description: "",
    },
    {
      name: { first: "Diego", last: "Valdez" },
      position: "Teacher",
      organization: "Gonzaga",
      description: "",
    },
    {
      name: { first: "Dolica", last: "Gopisetty" },
      position: "Teacher",
      organization: "George Mason",
      description: "",
    },
    {
      name: { first: "Emma", last: "Huang" },
      position: "Teacher",
      organization: "Boston College",
      description: "",
    },
    {
      name: { first: "Eva", last: "Lomazov" },
      position: "Teacher",
      organization: "UCSC",
      description: "",
    },
    {
      name: { first: "Fatema", last: "Fakhruddin" },
      position: "Teacher",
      organization: "NEIU",
      description: "",
    },
    {
      name: { first: "Gloria", last: "Fang" },
      position: "Teacher",
      organization: "MIT",
      description: "",
    },
    {
      name: { first: "Harish", last: "Shanker" },
      position: "Teacher",
      organization: "Columbia",
      description: "",
    },
    {
      name: { first: "Holly", last: "McKenzie" },
      position: "Teacher",
      organization: "OLE Miss",
      description: "",
    },
    {
      name: { first: "Imani", last: "Palmer" },
      position: "Teacher",
      organization: "UIUC",
      description: "",
    },
    {
      name: { first: "Isaac", last: "Sheikh" },
      position: "Teacher",
      organization: "George Mason",
      description: "",
    },
    {
      name: { first: "Jack", last: "Lenz" },
      position: "Teacher",
      organization: "Indiana University",
      description: "",
    },
    {
      name: { first: "Jennifer", last: "Lauriello" },
      position: "Teacher",
      organization: "OLE Miss",
      description: "",
    },
    {
      name: { first: "John", last: "Fletcher" },
      position: "Teacher",
      organization: "Indiana University",
      description: "",
    },
    {
      name: { first: "Jordan", last: "Taylor" },
      position: "Teacher",
      organization: "Indiana University",
      description: "",
    },
    {
      name: { first: "Jorge", last: "Salas" },
      position: "Teacher",
      organization: "UNC Greensboro",
      description: "",
    },
    {
      name: { first: "Junius", last: "Murphy" },
      position: "Teacher",
      organization: "UMich",
      description: "",
    },
    {
      name: { first: "Kiarsha", last: "Mannix" },
      position: "Teacher",
      organization: "WCSU",
      description: "",
    },
    {
      name: { first: "KJ", last: "Famulegun" },
      position: "Teacher",
      organization: "Howard University",
      description: "",
    },
    {
      name: { first: "Kristina", last: "Gauthier" },
      position: "Teacher",
      organization: "Ford Motors",
      description: "",
    },
    {
      name: { first: "Lee", last: "Easson" },
      position: "Teacher",
      organization: "OLE Miss",
      description: "",
    },
    {
      name: { first: "Leya", last: "Breanna-Baltaxe" },
      position: "Teacher",
      organization: "UCSC",
      description: "",
    },
    {
      name: { first: "Lisa", last: "Truong" },
      position: "Teacher",
      organization: "JP Morgan",
      description: "",
    },
    {
      name: { first: "Lynette", last: "Lopez" },
      position: "Teacher",
      organization: "Miami University",
      description: "",
    },
    {
      name: { first: "Maheen", last: "Khan" },
      position: "Teacher",
      organization: "UMich",
      description: "",
    },
    {
      name: { first: "Matthew", last: "Chen" },
      position: "Teacher",
      organization: "UMich",
      description: "",
    },
    {
      name: { first: "Matthew", last: "Moreno" },
      position: "Teacher",
      organization: "Puget Sound",
      description: "",
    },
    {
      name: { first: "Matthew", last: "Yang" },
      position: "Teacher",
      organization: "WUSTL",
      description: "",
    },
    {
      name: { first: "Megan", last: "Shea" },
      position: "Teacher",
      organization: "Indiana University",
      description: "",
    },
    {
      name: { first: "Michael", last: "Eberle" },
      position: "Teacher",
      organization: "John Hopkins",
      description: "",
    },
    {
      name: { first: "Mohammed", last: "Faizuddin" },
      position: "Teacher",
      organization: "NEIU",
      description: "",
    },
    {
      name: { first: "Nicole", last: "Seo" },
      position: "Teacher",
      organization: "IBM Watson",
      description: "",
    },
    {
      name: { first: "Nikita", last: "Karim" },
      position: "Teacher",
      organization: "WCSU",
      description: "",
    },
    {
      name: { first: "Ochaun", last: "Marshall" },
      position: "Teacher",
      organization: "UNC Greensboro",
      description: "",
    },
    {
      name: { first: "Omnia", last: "Elemary" },
      position: "Teacher",
      organization: "George Mason",
      description: "",
    },
    {
      name: { first: "Priya", last: "Saravanan" },
      position: "Teacher",
      organization: "Indiana University",
      description: "",
    },
    {
      name: { first: "Priyanka", last: "Lamichhane" },
      position: "Teacher",
      organization: "St Cloud State",
      description: "",
    },
    {
      name: { first: "Ragapriya", last: "Sivakumar" },
      position: "Teacher",
      organization: "USC",
      description: "",
    },
    {
      name: { first: "Reece", last: "Griffith" },
      position: "Teacher",
      organization: "John Hopkins",
      description: "",
    },
    {
      name: { first: "Robert", last: "Garrett" },
      position: "Teacher",
      organization: "Miami University",
      description: "",
    },
    {
      name: { first: "Shane", last: "Johnson" },
      position: "Teacher",
      organization: "Enterprise",
      description: "",
    },
    {
      name: { first: "Sunil", last: "Dokuru" },
      position: "Teacher",
      organization: "Quorum",
      description: "",
    },
    {
      name: { first: "Tessa", last: "Weidmann" },
      position: "Teacher",
      organization: "University of Cincinnati",
      description: "",
    },
    {
      name: { first: "Ugur", last: "Armagan" },
      position: "Teacher",
      organization: "NEIU",
      description: "",
    },
    {
      name: { first: "Viet", last: "Nguyen" },
      position: "Teacher",
      organization: "UCSC",
      description: "",
    },
    {
      name: { first: "Ye-Joo", last: "Oh" },
      position: "Teacher",
      organization: "Calvin College",
      description: "",
    },
    {
      name: { first: "Zachary", last: "Peters" },
      position: "Teacher",
      organization: "West New England",
      description: "",
    },
    {
      name: { first: "Zachary", last: "Sang" },
      position: "Teacher",
      organization: "University of Cincinnati",
      description: "",
    },
    {
      name: { first: "Zhongren", last: "Gao" },
      position: "Teacher",
      organization: "UMich",
      description: "",
    }
  ]
}

const addImagesForUser = (user) => {
  const { first, last } = user.name;
  const imageId = `${first.toLowerCase()}_${last.toLowerCase()}`;

  user.images = {}

  // Load regular image
  try {
    // flow-disable-next-line
    user.images.regular = require(`../images/team/${imageId}.jpg`);
  }
  catch (e) {
    console.log(`Uh oh! No valid regular image for ${first} ${last}.`);
  }

  // Load fun image
  try {
    // flow-disable-next-line
    user.images.fun = require(`../images/team/${imageId}_fun.jpg`);
  }
  catch (e) {
    user.images.fun = user.images.regular;
  }
}

const stringifyMemberName = name => `${name.first} ${name.last}`;

Object.keys(teamMembers).forEach((memberType) => {
  teamMembers[memberType].forEach(addImagesForUser);
});

export default teamMembers;

// Returns the result of a 2-step sorting algorithm on the members parameter
// 1. Make sure all members whose name appear in the hardCodedNameList are
//    sorted first and in the order of that list
// 2. Sort the remaining members using the sortFunc function
export const sortListFirstThenByFunc = (
  members: Array<MemberDataType>,
  hardCodedNameList: Array<string>,
  sortFunc: (a: MemberDataType, b: MemberDataType) => number
) => {
  const sortedList = [];
  let membersRemaining = members.slice();

  hardCodedNameList.forEach(hardCodedName => {
    const hardCodedMember = membersRemaining.find(member =>
      stringifyMemberName(member.name) === hardCodedName
    );

    if (hardCodedMember) {
      sortedList.push(hardCodedMember);
      membersRemaining = membersRemaining.filter(
        member => stringifyMemberName(member.name) !== hardCodedName
      );
    }
  });

  return sortedList.concat(membersRemaining.sort(sortFunc));
}

export const sortMembersAlphabetically = (
  a: MemberDataType,
  b: MemberDataType
) => (stringifyMemberName(a.name) < stringifyMemberName(b.name)) ? -1 : 1;
