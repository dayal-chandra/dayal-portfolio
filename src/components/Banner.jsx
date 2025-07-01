import React from "react";
import photo from "/dayal.png";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-scroll";
import { MdEmail } from "react-icons/md";

const Banner = ({ setActiveRoute }) => {
  return (
    <div
      id="home"
      className="bg-[url(/bg.png)] bg-no-repeat bg-cover min-h-[650px] px-5 md:px-0"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col-reverse md:flex-row justify-between in-center gap-10">
        <div
          data-aos="fade-up"
          className="w-full flex flex-col justify-center items-start text-white"
        >
          <h1 className="text-3xl font-semibold">
            Hi I'm <br></br>
            <span className="text-5xl font-bold text-[#068e79]">
              Dayal Chandra
            </span>
          </h1>

          <h2 className="text-2xl my-4">
            <Typewriter
              words={["Full-Stack Developer", "MERN Stack Enthusiast"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p className="text-[18px]">
            I help businesses and individuals build responsive, fast, and
            scalable full-stack web applications using the MERN stack.
          </p>

          <div className="py-4 flex justify-start items-center gap-5 text-[#068e79]">
            <a
              href="https://github.com/dayal-chandra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transform transition duration-300 hover:scale-150 "
            >
              <FaGithub size={35} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transform transition duration-300 hover:scale-150 "
            >
              <IoLogoLinkedin size={35} />
            </a>
            <a
              href="https://web.facebook.com/dayal.chandra.562"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transform transition duration-300 hover:scale-150 "
            >
              <FaFacebookSquare size={35} />
            </a>
            <a
              href="mailto:dayalchandra511@gmail.com"
              className="hover:text-white transform transition duration-300 hover:scale-150 "
            >
              <MdEmail size={43} />
            </a>
          </div>

          <div className="flex gap-5 pb-10">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setActiveRoute("contact")}
            >
              <button className="flex justify-center items-center gap-1 btn text-[16px] text-white border-[#068e79] bg-[#068e79] hover:bg-transparent shadow-none">
                <BsTelephone />
                Contact
              </button>
            </Link>
            <a href="/dayal-cv.pdf" download>
              <button className="flex justify-center items-center gap-1  btn text-[16px] shadow-none bg-transparent border border-[#068e79] text-[#068e79] hover:bg-[#068e79] hover:text-white">
                <FiDownload /> Download CV
              </button>
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="w-full mt-20">
          <img
            className="w-full rounded-t-4xl"
            src={photo}
            alt="Profile of Dayal Chandra - Full Stack Developer"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
