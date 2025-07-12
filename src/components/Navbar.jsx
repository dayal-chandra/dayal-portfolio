import { TiThMenu } from "react-icons/ti";
import { Link } from "react-scroll";

const Navbar = ({ activeRoute, setActiveRoute }) => {
  const handleSetActive = (route) => {
    setActiveRoute(route);
  };

  const navItems = (
    <>
      <li>
        <Link
          to="home"
          smooth={true}
          duration={500}
          onClick={() => handleSetActive("home")}
          className={`cursor-pointer ${
            activeRoute === "home" ? "text-[#39c2ae] border" : ""
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="about"
          smooth={true}
          duration={500}
          onClick={() => handleSetActive("about")}
          className={`cursor-pointer ${
            activeRoute === "about" ? "text-[#39c2ae] border" : ""
          }`}
        >
          About Me
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          onClick={() => handleSetActive("skills")}
          className={`cursor-pointer ${
            activeRoute === "skills" ? "text-[#39c2ae] border" : ""
          }`}
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="education"
          smooth={true}
          duration={500}
          onClick={() => handleSetActive("education")}
          className={`cursor-pointer ${
            activeRoute === "education" ? "text-[#39c2ae] border" : ""
          }`}
        >
          Education
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          onClick={() => handleSetActive("projects")}
          className={`cursor-pointer ${
            activeRoute === "projects" ? "text-[#39c2ae] border" : ""
          }`}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          onClick={() => handleSetActive("contact")}
          className={`cursor-pointer ${
            activeRoute === "contact" ? "text-[#39c2ae] border" : ""
          }`}
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#15564c] shadow-sm ">
      <div className="navbar max-w-[1280px] mx-auto px-0 md:px-20 xl:px-0 text-white backdrop-blur-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost  lg:hidden"
            >
              <TiThMenu size={25} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-[#068e79] rounded-box z-1 mt-3 w-32 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-3xl font-bold"
            onClick={() => handleSetActive("home")}
          >
            DA<span className="text-[#068e79]">Y</span>AL
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        <div className="navbar-end px-5 md:px-0">
          <Link
            className="btn bg-white hover:bg-transparent text-[#087c6b] hover:text-white shadow-none border border-[#15564c] hover:border-white"
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => handleSetActive("contact")}
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
