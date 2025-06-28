import about from "/about.png";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-4 pt-16 flex flex-col md:flex-row items-center gap-10"
    >
      <div data-aos="fade-up">
        <img
          src={about}
          alt="About Illustration"
          className="w-72 md:w-96 object-contain"
        />
      </div>

      <div data-aos="fade-up" className="max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>

        <p className="text-lg mb-4">
          I'm a dedicated{" "}
          <span className="font-semibold text-[#068e79]">
            Full Stack Web Developer
          </span>{" "}
          passionate about building modern, scalable web applications. My
          expertise covers both front-end and back-end development, enabling me
          to deliver complete solutions.
        </p>

        <p className="text-lg mb-4">
          I work with technologies like{" "}
          <span className="font-semibold text-[#068e79]">React</span>,{" "}
          <span className="font-semibold text-[#068e79]">Tailwind CSS</span>,{" "}
          <span className="font-semibold text-[#068e79]">JavaScript</span>,{" "}
          <span className="font-semibold text-[#068e79]">Node.js</span>, and{" "}
          <span className="font-semibold text-[#068e79]">MongoDB</span>. I enjoy
          crafting seamless user experiences and building reliable server-side
          systems.
        </p>

        <p className="text-lg mb-4">
          Recently, I completed multiple full-stack projects that included both
          front-end and back-end development, reinforcing my ability to manage
          complete development cycles independently.
        </p>

        <p className="text-lg">
          I thrive on solving real-world problems through clean code, creative
          design, and scalable architectures. My goal is to continuously improve
          and contribute to impactful, user-centric projects.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
