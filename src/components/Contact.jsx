import React, { useState } from "react";
import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_email: "",
    message: "",
  });

  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_fsp62rg",
        "template_xo0oefs",
        formData,
        "mi8ZNbpwqHIFi8j8E"
      )
      .then(
        () => {
          setSuccessMsg("Email sent successfully!");
          setFormData({ user_email: "", message: "" });
        },
        (error) => {
          setSuccessMsg("Failed to send email. Try again later.");
          console.error("Email error:", error);
        }
      );
  };

  return (
    <div
      id="contact"
      data-aos="fade-up"
      className="py-16 max-w-[1280px] mx-auto px-5 md:px-0"
    >
      <h1 className="text-3xl md:text-4xl text-center font-bold mb-10 ">
        Contact Me
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-20">
        <div
          data-aos="fade-up"
          className="border border-[#068e79] rounded-2xl w-full h-[336px] p-5 "
        >
          <h1 className="text-2xl font-bold pb-3">Contact Info</h1>
          <p>
            <span className="font-bold">Phone :</span> +8801790102109
          </p>
          <p>
            <span className="font-bold">Email :</span> dayalchandra511@gmail.com
          </p>
          <p>
            <span className="font-bold">Location :</span> Kurigram, Rangpur,
            Bangladesh
          </p>
          <div className="py-4 flex gap-5 justify-start items-center text-[#068e79]">
            <a
              href="https://github.com/dayal-chandra"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition duration-300 hover:scale-150"
            >
              <FaGithub size={35} />
            </a>
            <a
              href="https://www.linkedin.com/in/dayal-chandra"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition duration-300 hover:scale-150"
            >
              <IoLogoLinkedin size={35} />
            </a>
            <a
              href="https://web.facebook.com/dayal.chandra.562"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition duration-300 hover:scale-150"
            >
              <FaFacebookSquare size={35} />
            </a>

            <a
              href="mailto:dayalchandra511@gmail.com"
              className="transform transition duration-300 hover:scale-150"
            >
              <MdEmail size={43} />
            </a>
          </div>
          <div>
            <button className="  btn text-[16px] shadow-none bg-transparent border border-[#068e79] text-[#068e79] hover:text-white hover:bg-[#068e79]">
              <a
                className="flex justify-center items-center gap-1"
                href="/dayal-cv.pdf"
                download
              >
                Resume <FiDownload />
              </a>
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="border border-[#068e79] rounded-2xl w-full h-[336px] p-5 "
        >
          <h1 className="text-2xl font-bold pb-3">Message Me</h1>
          <form onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              value={formData.user_email}
              onChange={handleChange}
              className="border border-[#068e79] px-3 py-2 rounded"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="border border-[#068e79] px-3 py-2 rounded"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="bg-[#068e79] text-white hover:text-[#068e79] py-2 rounded hover:bg-transparent border border-[#068e79] transition"
            >
              Submit
            </button>
            {successMsg && (
              <p className="text-green-600 font-medium mt-2">{successMsg}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
