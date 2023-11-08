import { PulseIcon, ScissorIcon, UserIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon } from "../assets/svgs/icons.js";

import { Facebook, Twitter, GitHub } from "../assets/svgs/icons.js";

export const featureCards = [
  {
    featureHeading: "Interactive Methods",
    featureDescription: "Learn through interactive methods such as quizzes, discussion boards, challenges and multimedia content.",
    featureIcon: <PulseIcon />
  },
  {
    featureHeading: "24/7 Access",
    featureDescription: "Provides 24/7 access to all the courses you have enrolled in so you can learn at your own pace without any time limit.",
    featureIcon: <UserIcon />
  },
  {
    featureHeading: "Community Support",
    featureDescription: "Learn along with a community of students and instructors who are there to help you at every step and answer your queries.",
    featureIcon: <ScissorIcon />
  },
];

export const testimonialData = [
  {
    userImage: "https://i.pravatar.cc/100?img=1",
    userName: "Kenzie Edgar.",
    userMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.",
  },
  {
    userImage: "https://i.pravatar.cc/100?img=2",
    userName: "Stevie Tifft.",
    userMessage: "Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.",
  },
  {
    userImage: "https://i.pravatar.cc/100?img=3",
    userName: "Tommie Ewart.",
    userMessage: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.",
  },
  {
    userImage: "https://i.pravatar.cc/100?img=4",
    userName: "Charlie Howse.",
    userMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.",
  },
  {
    userImage: "https://i.pravatar.cc/100?img=5",
    userName: "Nevada Herbertson.",
    userMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur deserunt tempora molestiae assumenda nesciunt alias eius? Illo, autem!",
  },
  {
    userImage: "https://i.pravatar.cc/100?img=6",
    userName: "Kris Stanton.",
    userMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!",
  },
];

export const faqCardData = [
  {
    q: "What are some random questions to ask?",
    a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
  },
  {
    q: "Do you include common questions?",
    a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
  },
  {
    q: "Can I use this for 21 questions?",
    a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
  },
  {
    q: "Are these questions for girls or for boys?",
    a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
  },
  {
    q: "What do you wish you had more talent doing?",
    a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
  },
];

export const footerLinks = [
  {
    id: "1",
    url: "/",
    linksHeader: "new & tranding",
    linkName: ["new course", "free course", "learn artificial intelligence", "learn mern stack"]
  },
  {
    id: "2",
    url: "/",
    linksHeader: "popular skills",
    linkName: ["learn computer science", "learn data analysis", "learn digital marketing", "learn information technology"]
  },
  {
    id: "3",
    url: "/",
    linksHeader: "our services",
    linkName: ["about", "what we offer", "leadership", "carriers"]
  },
  {
    id: "4",
    url: "/",
    linksHeader: "community",
    linkName: ["learners", "partners", "translate", "teaching center"]
  },
];

export const footerBottomLinks = [
  {
    id: "1",
    url: "/",
    linkIcon: <FacebookIcon />
  },
  {
    id: "2",
    url: "/",
    linkIcon: <TwitterIcon />
  },
  {
    id: "3",
    url: "/",
    linkIcon: <InstagramIcon />
  },
  {
    id: "4",
    url: "/",
    linkIcon: <LinkedInIcon />
  },
];

export const selectOptions = [
  { option: "Business", optionValue: "Business" },
  { option: "Computer Science", optionValue: "Computer Science" },
  { option: "Data Science", optionValue: "Data Science" },
  { option: "Engineering", optionValue: "Engineering" },
  { option: "Web Development", optionValue: "Web Development" },
  { option: "Health", optionValue: "Health" },
  { option: "Mathematics", optionValue: "Mathematics" },
  { option: "Personal Development", optionValue: "Personal Development" },
];

export const SECTION_FORM_INITIAL_VALUE = {
  section_name: "",
  section_description: "",
  video_title: "",
  video_url: "",
  quiz_title: "",
  quiz_answer: "",
};

export const COURSE_FORM_INITIAL_VALUE = {
  course_name: "",
  course_details: "",
  author: "",
  level: "",
  category: "",
  course_img: "",
};

export const CONTACT_FORM_INITIAL_VALUE = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

export const formSocialButtons = [
  {
    href: "/",
    icon: <Facebook />,
    linkName: "Sign in with Facebook"
  },
  {
    href: "/",
    icon: <Twitter />,
    linkName: "Sign in with Twitter"
  },
  {
    href: "/",
    icon: <GitHub />,
    linkName: "Sign in with GitHub"
  }
];

export const courseFormInput = [
  {
    labelName: "course name",
    htmlFor: "course_name",
    type: "text",
    name: "course_name",
    id: "course_name",
    placeholder: "Enter a course name",
  },
  {
    labelName: "course details",
    htmlFor: "course_details",
    name: "course_details",
    id: "course_details",
    placeholder: "Enter course description",
  },
  {
    labelName: "author",
    htmlFor: "author",
    type: "text",
    name: "author",
    id: "author",
    placeholder: "Enter course author name",
  },
  {
    labelName: "level",
    htmlFor: "level",
    type: "text",
    name: "level",
    id: "level",
    placeholder: "Enter course level",
  },
  {
    labelName: "category",
    htmlFor: "category",
    type: "text",
    name: "category",
    id: "category",
    placeholder: "Enter course category",
  },
];