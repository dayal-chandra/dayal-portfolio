const Footer = () => {
  return (
    <footer className="bg-[#15564c] text-white py-6 mt-10">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20 xl:px-0 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Dayal Chandra | MERN Stack Developer
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/dayal-chandra"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#068e79]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dayal-chandra"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#068e79]"
          >
            LinkedIn
          </a>
          <a
            href="mailto:dayalchandra511@gmail.com"
            className="hover:text-[#068e79]"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
