module.exports = {
  email: 'francisco.faustiniel.pf@gmail.com',
  technical_profile: [
     {
        name: '💻 Programming Languages',
        skills: ['Python', 'Csharp', 'JavaScript', 'Java'],
      },
      {
        name: '🧠 Data Science & Analytics',
        skills: ['Pandas', 'Numpy', 'Matplotlib', 'Scikit-Learn', 'Jupyter'],
      },
      {
        name: '🔄 Version Control & CI/CD',
        skills: ['Git', 'GitHub'],
      },
      {
        name: '🌐 Web Development',
        skills: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        name: '📱 Mobile Development',
        skills: ['Android-Studio', 'XML'],
      },
      {
        name: '🎨 UI/UX Design',
        skills: ['Figma','Canva'],
      },
      {
        name: '📊 Productivity Tools',
        skills: ['Excel', 'Google Sheets'],
      }
  ],
  certifications:[
    {
      name :  'Java Fundamentals Course',
      date_acquired: 'June 24, 2023',
      issuer: 'Oracle Academy',
      file: 'JAVA-CERT.jpg',
      skills : [
          'Object-Oriented Programming (OOP)',
          'Java Syntax and Semantics',
          'Exception Handling',
          'Basic Data Structures in Java' 
      ]
    },
     {
      name :  'Python Basic Course',
      date_acquired: 'June 13, 2025',
      issuer: 'Hacker Rank',
      file: 'python-cert-basic.png',
      skills : [
          'Python Syntax and Semantics',
          'Variables and Data Types',
          'Control Structures (if, loops)',
          'Functions and Modules',
          'Basic Data Structures',
          'File Input/Output'
      ]
    },

    {
      name :  'CODEFEST (1st Runner Up 2023)',
      date_acquired: 'March 24, 2024',
      issuer: 'STI COLLEGE OF DASMARINAS',
      file: 'CODEFEST-2023.jpg',
      skills: [
        'Android App Development',
        'Java Programming',
        'XML Layout Design',
        'UI/UX Design for Mobile',
        'Mobile App Debugging and Testing',
        'Android Studio Proficiency',
      ]
    },
    {
      name :  'CODEFEST (CHAMPION 2024)',
      date_acquired: 'March 13, 2024',
      issuer: 'STI COLLEGE OF DASMARINAS',
      file: 'CODEFEST-CHAMP-2024.jpg',
      skills: [
        'Android App Development',
        'Java Programming', 
        'XML Layout Design',
        'UI/UX Design for Mobile',
        'Mobile App Debugging and Testing',
        'Android Studio Proficiency',
      ]
    },
    {
      name :  'CODEFEST (CHAMPION 2025)',
      date_acquired: 'February 28, 2025',
      issuer: 'STI COLLEGE OF DASMARINAS',
      file: 'CHAMP-2025.png',
      skills: [
        'Android App Development',
        'Java Programming',
        'XML Layout Design',
        'UI/UX Design for Mobile',
        'Mobile App Debugging and Testing',
        'Android Studio Proficiency',
      ]
    }, 
    {
      name :  'CODEFEST (2nd Runner Up 2025)',
      date_acquired: 'April 4, 2025',
      issuer: 'STI COLLEGE OF DASMARINAS',
      file: 'CLUSTER-CLUSTER.jpg',
      skills: [
        'Android App Development',
        'Java Programming',
        'XML Layout Design',
        'UI/UX Design for Mobile',
        'Mobile App Debugging and Testing',
        'Android Studio Proficiency',
      ]
    },
    {
      name :  '13th Skills Olympics',
      date_acquired: 'November 22, 2024',
      issuer: 'UNIVERSITY OF MAKATI',
      file: 'UMAK-CODE-OLYMPICS-2024.jpg', 
      skills: [
        'Android App Development',
        'Java Programming',
        'XML Layout Design',
        'UI/UX Design for Mobile',
        'Mobile App Debugging and Testing',
        'Android Studio Proficiency',
      ]
    },
    {
      name :  '10th TOPCIT',
      date_acquired: 'November 20, 2024',
      issuer: 'IITP (Institute for Information & Communication Technology Promotion',
      file: 'TOPCIT.png', 
      skills: [
        'Software Development Fundamentals',
        'Database Management',
        'IT Problem Solving',
        'System and Network Understanding',
        'IT Business Understanding',
        'Information Security Basics',
        'Algorithm and Logic Analysis',
        ]
      },
        {
      name: 'ICS DAY Seminar',
      date_acquired: 'November 18, 2025',
      issuer: 'STI College Dasmariñas',
      file: 'ICS_DAY_Certificate.png',
      skills: [
        'Cybersecurity Awareness',
        'Digital Defense Strategies',
        'Emerging Security Technologies',
        'Digital Nation Security',
      ]
    },
  ],


  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/paufrancisco',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/paulo-faustiniel-angelo-f-0212b12b1/',
    },
    {
      name: 'YouTube',
      url: 'https://www.tiktok.com/@imdocpau',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/whospfaf/',
    },
   
    
    
 
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Skills',
      url: '/#skills',
    },
    {
      name: 'Work',
      url: '/#work',
    },
    {
      name: 'Certifications',
      url: '/#certifications',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
