import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import room1 from "/room1.png";
import room2 from "/room2.png";
import room3 from "/room3.png";
import { Link } from "react-router";

const Projects = () => {
  return (
    <div
      data-aos="fade-up"
      className="pt-16 max-w-[1280px] mx-auto px-5 md:px-0"
    >
      <h1 className="text-3xl md:text-4xl text-center font-bold pb-10">
        My Recent Projects
      </h1>
      <div className="w-full border border-[#068e79] rounded-2xl p-5 flex flex-col md:flex-row justify-center items-center gap-5">
        <div className="w-full md:w-1/2">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
          >
            <SwiperSlide>
              <img src={room1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={room2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={room3} alt="" />
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
          </ul>

          <div className="space-x-2 pt-4">
            <a
              className="btn bg-[#068e79]"
              href="http://dayal.roomwala-10.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
            <a
              className="btn bg-[#068e79]"
              href="https://github.com/dayal-chandra/roommate-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              Client Code
            </a>
            <a
              className="btn bg-[#068e79]"
              href="https://github.com/dayal-chandra/roommate-server"
              target="_blank"
              rel="noopener noreferrer"
            >
              Server Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
