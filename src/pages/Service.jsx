import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Responce from "../components/Response";

const Service = () => {
  return (
    <div class="bg-[#ffffff] pr-2 pl-2 sm:pr-5 sm:pl-5 md:pr-10 md:pl-10 flex flex-col h-dvh gap-[15px] items-start justify-start relative">
      <NavBar pageName={"service"} />

      <div class="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
        <div
          class="border-dashed border-[#443f76] border-[3px] pt-[5px] pr-2.5 pb-[5px] pl-2.5 flex flex-col gap-0 items-center
            justify-center self-stretch flex-1 relative"
        >
          <div class="h-[auto] w-[auto] right-[-10px] left-0 top-5">
            <img
              class="right-[-10px] left-0 top-5"
              style={{ objectFit: "cover" }}
              src="https://media.licdn.com/dms/image/D4D22AQGKwtrHDk8nlQ/feedshare-shrink_800/0/1713863145946?e=1717027200&v=beta&t=em23UheQaNa2jU74jbsruT4CPMpjenA8GVAAeAc0K84"
              alt="img"
            />
          </div>
        </div>

        <div class="flex flex-col md:flex-row md:items-start gap-4 justify-between self-stretch flex-1 relative">
          <div class="flex flex-col gap-3 md:gap-5 items-center justify-start flex-1 h-[166px] relative">
            <div class="self-stretch flex-1 relative">
              <div class="w-[100%] h-20 md:h-24 relative top-[0.5px]">
                <div
                  class="bg-[#ffffff] rounded-[36px] border-solid border-[#e2e1e5] border pt-2.5 pr-[15px] pb-2.5 pl-[15px] flex flex-col 
                gap-0 items-start justify-start w-[100%] relative right-[0%] left-[0%] top-7"
                >
                  <div class="text-[#d2d2d2] text-left font-['Inter-Regular',_sans-serif] text-sm leading-7 font-normal relative self-stretch">
                    Insert your link here
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-row items-start justify-between self-stretch shrink-0 relative">
              <div
                class="bg-[#ffffff] rounded-[20px] border-solid border-[rgba(68,63,118,0.38)] border-t-[5px] border-r-[5px] 
            border-b-[10px] border-l-[5px] flex flex-row items-center justify-between shrink-0 w-[100px] h-[50px] sm:w-[110px] sm:h-[60px] md:w-[150px] 
            md:h-[70px] relative overflow-hidden"
              >
                <div class="text-[#000000] text-center font-['KeaniaOne-Regular',_sans-serif] text-lg sm:xl md:text-3xl font-normal relative flex-1">
                  Send
                </div>
              </div>
              <div class="text-[#443f76] text-left font-['Inter-Regular',_sans-serif] text-xl font-normal relative">
                1/10
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-2.5 items-center justify-start self-stretch flex-1 relative">
            <div class="text-[#000000] text-center font-['KeaniaOne-Regular',_sans-serif] text-4xl font-normal relative">
              Responses
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Service;
