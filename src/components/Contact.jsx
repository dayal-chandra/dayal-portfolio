import React from "react";

const Contact = () => {
  return (
    <div className="pt-16 max-w-[1280px] mx-auto">
      <h1 className="text-3xl md:text-4xl text-center font-bold mb-10 ">
        Contact Me
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Contact Info</h1>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Mail Me</h1>
          <fieldset>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Message</label>
            <textarea name="" id="" placeholder="Your Message"></textarea>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Contact;
