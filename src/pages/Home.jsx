import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = ({cookies, updateCookieValue}) => {
  return (
    <div class="bg-[#ffffff] pr-2 pl-2 sm:pr-5 sm:pl-5 md:pr-10 md:pl-10 flex flex-col h-dvh gap-[15px] items-start justify-start relative overflow-hidden">
      <NavBar pageName={""} />

      <div class="flex flex-col sm:flex-row items-center justify-between flex-1 relative">
        <div class="flex flex-col gap-2.5 sm:gap-7 items-center justify-start self-stretch relative">
          <div
            class="text-[#443f76] text-center font-['KeaniaOne-Regular',_sans-serif] text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
            xl:text-8xl font-normal relative"
          >
            SocialLens
          </div>
          <div
            class="text-[#000000] text-center font-['KeaniaOne-Regular',_sans-serif] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
          font-normal relative self-stretch"
          >
            Recognition tehnology, a new look from then
          </div>
          <Link
            to="/service"
            class="bg-[#ffffff] rounded-[20px] border-solid border-[rgba(68,63,118,0.38)] border-t-[5px] border-r-[5px] 
            border-b-[10px] border-l-[5px] flex flex-row items-center justify-between shrink-0 w-[100px] h-[70px] sm:w-[110px] h-[60px] md:w-[150px] 
            md:h-[100px] relative overflow-hidden"
          >
            <div class="text-[#000000] text-center font-['KeaniaOne-Regular',_sans-serif] text-lg sm:xl md:text-3xl font-normal relative flex-1">
              Try Now
            </div>
          </Link>
        </div>
        <div class="flex flex-col gap-2.5 items-center justify-center self-stretch relative">
          <img
            class="rounded-[191px] self-stretch relative"
            style={{ objectFit: "cover" }}
            src={`${process.env.PUBLIC_URL}/image 2.png`}
            alt="img"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
