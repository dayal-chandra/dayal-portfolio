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
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const skill = [
  {
    icon: <FaHtml5 />,
    title: "HTML5",
    description:
      "The foundation of web pages using semantic and accessible markup.",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS3",
    description:
      "Styling and layout techniques to craft beautiful, responsive designs.",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
    description:
      "Utility-first CSS framework for building modern and fast UIs.",
  },
  {
    icon: <FaJs />,
    title: "JavaScript",
    description: "Adds dynamic behavior and interactivity to websites.",
  },
  {
    icon: <FaReact />,
    title: "React.js",
    description:
      "Builds fast, component-based user interfaces for web applications.",
  },
  {
    icon: <FaNodeJs />,
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
    icon: <SiMongodb />,
    title: "MongoDB",
    description: "NoSQL database designed for flexible, scalable data storage.",
  },
  {
    icon: <FaGithub />,
    title: "Git & GitHub",
    description:
      "Version control and collaboration tools for efficient development.",
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
