import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import room1 from "/room1.png";
import room2 from "/room2.png";
import room3 from "/room3.png";

import neighbor1 from "/neighbor1.png";
import neighbor2 from "/neighbor2.png";
import neighbor3 from "/neighbor3.png";

const Projects = () => {
  return (
    <div
      id="projects"
      data-aos="fade-up"
      className="pt-16 max-w-[1280px] mx-auto px-5 md:px-0"
    >
      <h1 className="text-3xl md:text-4xl text-center font-bold pb-10">
        My Recent Projects
      </h1>
      <div className="space-y-5">
        <div
          data-aos="fade-up"
          className="w-full border border-[#068e79] rounded-2xl p-5 flex flex-col md:flex-row justify-center items-center gap-5"
        >
          <div className="w-full md:w-1/2">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className="rounded-2xl"
            >
              <SwiperSlide>
                <img src={room1} alt="project slide" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={room2} alt="project slide" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={room3} alt="project slide" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-bold">RoomWala</h1>
            <p>
              This is an online platform, where users can find rent houses and
              roommate as well. Users can find roommate and also can post for
              roommate. They can contact each other through this platform.
            </p>
            <ul className="pt-4 ml-4">
              <li className="list-disc">
                Filtering functionality according rent amount.
              </li>
              <li className="list-disc">Users can manage their posts.</li>
              <li className="list-disc">Users can't like their own posts.</li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-2 py-1 bg-gray-200 text-gray-800 text-sm rounded-md">
                React
              </span>
              <span className="px-2 py-1 bg-gray-200 text-gray-800 text-sm rounded-md">
                Tailwind CSS
              </span>
              <span className="px-2 py-1 bg-gray-200 text-gray-800 text-sm rounded-md">
                JavaScript
              </span>
              <span className="px-2 py-1 bg-gray-200 text-gray-800 text-sm rounded-md">
                Node.js
              </span>
              <span className="px-2 py-1 bg-gray-200 text-gray-800 text-sm rounded-md">
                MongoDB
              </span>
            </div>

            <div className="space-x-2 pt-4">
              <a
                className="btn bg-[#068e79] text-white hover:text-[#068e79] hover:bg-transparent hover:border-[#068e79]"
                href="http://dayal.roomwala-10.surge.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Link
              </a>
              <a
                className="btn bg-[#068e79] text-white hover:text-[#068e79] hover:bg-transparent hover:border-[#068e79]"
                href="https://github.com/dayal-chandra/roommate-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                Client Code
              </a>
              <a
                className="btn bg-[#068e79] text-white hover:text-[#068e79] hover:bg-transparent hover:border-[#068e79]"
                href="https://github.com/dayal-chandra/roommate-server"
                target="_blank"
                rel="noopener noreferrer"
              >
                Server Code
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="w-full border border-[#068e79] rounded-2xl p-5 flex flex-col-reverse md:flex-row justify-center items-center gap-5"
        >
          <div className="w-full md:w-1/2 md:pl-5">
            <h1 className="text-2xl font-bold">Neighborly</h1>
            <p>
              In this platform users can create, manage and join local events
              like Charity,Tree Plantation, Road cleaning, Helping needy people
              through this web application.
            </p>
            <ul className="pt-4 ml-4">
              <li className="list-disc">User can create an event.</li>
              <li className="list-disc">Join event what others posted.</li>
              <li className="list-disc">
                Manage event like delete and update.
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-2 py-1 bg-gray-200 text-gray-800 text-sm rounded-md">
                React
              </span>
              <span className="px-2 py-1 bg-gray-200 text-gray-800 text-sm rounded-md">
                Tailwind CSS
              </span>
              <span className="px-2 py-1 bg-gray-200 text-gray-800 text-sm rounded-md">
                JavaScript
              </span>
              <span className="px-2 py-1 bg-gray-200 text-gray-800 text-sm rounded-md">
                Node.js
              </span>
              <span className="px-2 py-1 bg-gray-200 text-gray-800 text-sm rounded-md">
                MongoDB
              </span>
            </div>

            <div className="space-x-2 pt-4">
              <a
                className="btn bg-[#068e79] text-white hover:text-[#068e79] hover:bg-transparent hover:border-[#068e79]"
                href="https://neighborly-65959.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Link
              </a>
              <a
                className="btn bg-[#068e79] text-white hover:text-[#068e79] hover:bg-transparent hover:border-[#068e79]"
                href="https://github.com/dayal-chandra/social-event"
                target="_blank"
                rel="noopener noreferrer"
              >
                Client Code
              </a>
              <a
                className="btn bg-[#068e79] text-white hover:text-[#068e79] hover:bg-transparent hover:border-[#068e79]"
                href="https://github.com/dayal-chandra/social-event"
                target="_blank"
                rel="noopener noreferrer"
              >
                Server Code
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className="rounded-2xl"
            >
              <SwiperSlide>
                <img src={neighbor1} alt="project slide" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={neighbor2} alt="project slide" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={neighbor3} alt="project slide" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
