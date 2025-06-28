import React from "react";
import photo from "/photo.png";

const Banner = () => {
  return (
    <div className="bg-[url(/bg.png)] bg-no-repeat bg-cover min-h-screen">
      <div className="max-w-[1280px] mx-auto flex justify-between in-center gap-10">
        <div className="flex flex-col justify-center items-start">
          <h1>
            Hi I'm <br></br>
            Dayal Chandra
          </h1>
          <p>Full Stack Web Developer</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            laborum ipsam officiis distinctio nihil pariatur aut dicta ut
            architecto, qui neque id nesciunt dignissimos repellendus suscipit?
            Ullam harum minima quidem.
          </p>
        </div>
        <div className="w-full">
          <img className="w-full" src={photo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
