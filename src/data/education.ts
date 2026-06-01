export interface Education {
  year: string;
  institution: string;
  degree: string[];
  cgpa?: string[];
  logoUrl?: string;
  gpa?: string[];
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  // {
  //   year: "2027",
  //   institution: "Bangladesh University of Engineering and Technology (BUET)",
  //   logoUrl: "/assets/logos/buet.png",
  //   degree: ["B.Sc. in Computer Science and Engineering (CSE)"],
  //   cgpa: ["3.67/4.00"],
  // },
  {
    year: "2021",
    institution: "Govt. M.M. City College, Khulna",
    logoUrl: "/assets/logos/gmmcck.jpg",
    degree: ["Higher Secondary Certificate (HSC)"],
    gpa: ["5.00/5.00"],
  },
  {
    year: "2019",
    institution: "Khulna Zilla School, Khulna",
    logoUrl: "/assets/logos/kzs.png",
    degree: ["Secondary School Certificate (SSC)"],
    gpa: ["5.00/5.00"],
  },
];
