import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiReactrouter,
  SiJsonwebtokens,
  SiVercel,
  SiNetlify,
  SiFigma,
} from "react-icons/si";

const skill = [
  {
    icon: <FaHtml5 className="text-[#E34F26]" />,
    title: "HTML5",
    description:
      "The foundation of web pages using semantic and accessible markup.",
  },
  {
    icon: <FaCss3Alt className="text-[#1572B6]" />,
    title: "CSS3",
    description:
      "Styling and layout techniques to craft beautiful, responsive designs.",
  },
  {
    icon: <SiTailwindcss className="text-[#06B6D4]" />,
    title: "Tailwind CSS",
    description:
      "Utility-first CSS framework for building modern and fast UIs.",
  },
  {
    icon: <FaJs className="text-[#F7DF1E]" />,
    title: "JavaScript",
    description: "Adds dynamic behavior and interactivity to websites.",
  },
  {
    icon: <FaReact className="text-[#61DAFB]" />,
    title: "React.js",
    description:
      "Builds fast, component-based user interfaces for web applications.",
  },
  {
    icon: <FaNodeJs className="text-[#68A063]" />,
    title: "Node.js",
    description:
      "Server-side JavaScript environment for building scalable backend systems.",
  },
  {
    icon: <SiExpress />,
    title: "Express.js",
    description:
      "Minimalist web framework for Node.js to build APIs and backend logic.",
  },
  {
    icon: <SiMongodb className="text-[#4DB33D]" />,
    title: "MongoDB",
    description: "NoSQL database designed for flexible, scalable data storage.",
  },
  {
    icon: <FaGithub />,
    title: "Git & GitHub",
    description:
      "Version control and collaboration tools for efficient development.",
  },
  {
    icon: <SiFirebase className="text-[#FFA611]" />,
    title: "Firebase",
    description:
      "For real-time databases, authentication, and cloud hosting, enabling rapid development.",
  },
  {
    icon: <SiReactrouter className="text-[#CA4245]" />,
    title: "React Router",
    description:
      "Declarative routing solution for React, enabling seamless navigation in single-page applications.",
  },
  {
    icon: <SiJsonwebtokens className="text-yellow-500" />,
    title: "JWT",
    description:
      "Secure token-based authentication for protecting APIs and user data in web applications.",
  },
  {
    icon: <SiVercel />,
    title: "Vercel",
    description:
      "Cloud platform for frontend deployment, optimized for Next.js and modern static sites.",
  },
  {
    icon: <SiNetlify className="text-[#00C7B7]" />,
    title: "Netlify",
    description:
      "Fast and reliable platform for hosting static sites and deploying frontend applications.",
  },
  {
    icon: <FaCode className="text-[#007ACC]" />,
    title: "VS Code",
    description:
      "Powerful code editor with a rich ecosystem of extensions for web development.",
  },
  {
    icon: <SiFigma className="text-[#F24E1E]" />,
    title: "Figma",
    description:
      "Collaborative design tool for creating UI/UX prototypes, wireframes, and visual assets.",
  },
];

const Skills = () => {
  return (
    <section data-aos="fade-up" className="pt-16 overflow-visible" id="skills">
      <div className="max-w-6xl mx-auto px-4 text-center overflow-visible">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 ">My Skills</h2>

        <div className="relative overflow-visible">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="overflow-visible"
          >
            {skill.map((talent, index) => (
              <SwiperSlide key={index} className="overflow-visible">
                {" "}
                <div className="flex flex-col items-center justify-center border border-[#068e79] hover:bg-[#068e7a2a] shadow-md p-6 my-6 rounded-2xl hover:scale-105 transition-transform duration-300 w-60 h-60 mx-auto text-center">
                  <div className="text-4xl mb-3 text-[#068e79]">
                    {talent.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{talent.title}</h3>
                  <p className="text-sm">{talent.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Skills;
