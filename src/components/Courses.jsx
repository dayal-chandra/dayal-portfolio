import React from "react";
import { PiCertificateBold } from "react-icons/pi";

const Courses = () => {
  return (
    <section data-aos="fade-up" className="pt-16" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 ">
          Certifications & Courses
        </h2>
        <div className="flex flex-col md:flex-row items-center border border-[#068e79] shadow-md rounded-2xl p-6 hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_15px_#068e79]">
          <div className="text-[#068e79] text-6xl mb-4 md:mb-0 md:mr-6">
            <PiCertificateBold />
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#068e79]">
              Web Development Level-1
            </h3>
            <p>
              Trained Full Stack Developer with hands-on project experience from
              Programming Hero's rigorous web development program.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
