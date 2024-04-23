import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div class="bg-[#ffffff] pr-2 pl-2 sm:pr-5 sm:pl-5 md:pr-10 md:pl-10 flex flex-col h-dvh gap-[15px] items-start justify-start relative">
      <NavBar pageName={"about"} />

      <div class="flex flex-row items-start justify-between shrink-0 relative h-fit">
        <div class="flex flex-col gap-12 xl:gap-36 items-start justify-start self-stretch flex-1 relative h-fit">
          <div class="flex flex-col  gap-3 xl:gap-8 items-center justify-start self-stretch shrink-0 relative">
            <div
              class="text-[#443f76] text-center font-['KeaniaOne-Regular',_sans-serif] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
              font-normal relative self-stretch">
              Images Detection and Classification
            </div>
            <div
              class="text-[#000000] text-left font-['KeaniaOne-Regular',_sans-serif] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
              font-normal relative self-stretch">
              Our adult content detection technology can recognize any
              not-safe-for-work (NSFW) content in an image. The model
              differentiates between explicit/non-explicit content in real time,
              returns the label, coordinates, and restricts the accessibility of
              any improper content.
            </div>
          </div>
          <div class="flex flex-col  gap-3 xl:gap-8 items-center justify-start self-stretch shrink-0 relative">
            <div
              class="text-[#443f76] text-center font-['KeaniaOne-Regular',_sans-serif] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
              font-normal relative self-stretch">
              Logo Detection
            </div>
            <div
              class="text-[#000000] text-left font-['KeaniaOne-Regular',_sans-serif] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
              font-normal relative self-stretch">
              Our logo detection dataset includes a vast library of existing
              brand logo images and detects popular brand logos in images,
              videos, and GIFs. With our logo recognition software, brands can
              check how often their logos are displayed on social media
              platforms and elsewhere online and how they appear.
            </div>
          </div>
          <div class="flex flex-col  gap-3 xl:gap-8 items-center justify-start self-stretch shrink-0 relative">
            <div
              class="text-[#443f76] text-center font-['KeaniaOne-Regular',_sans-serif] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
              font-normal relative self-stretch">
              Age Detector
            </div>
            <div
              class="text-[#000000] text-left font-['KeaniaOne-Regular',_sans-serif] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
              font-normal relative self-stretch">
              Age detection automatically estimates a person&#039;s age from an
              image or video. The age detector model is built based on a large
              number of pictures of different ages as a training dataset.
            </div>
          </div>
        </div>
        <svg
          class="flex flex-col items-center justify-between self-stretch shrink-0 w-12 h-[auto] xl:w-36 xl:h-full relative overflow-visible"
          width="100px"
          height="100px"
          viewBox="0 0 157 1313"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M111.835 1013.37L114.756 1014.05L111.835 1013.37ZM39.202 1314.78C40.0761 1316.18 41.9258 1316.62 43.3333 1315.74L66.2696 1301.5C67.6771 1300.62 68.1095 1298.77 67.2353 1297.37C66.3612 1295.96 64.5115 1295.53 63.1041 1296.4L42.7162 1309.06L30.0539 1288.68C29.1797 1287.27 27.3301 1286.84 25.9226 1287.71C24.5151 1288.58 24.0827 1290.43 24.9569 1291.84L39.202 1314.78ZM74.0507 -15.9861C65.2143 -15.9414 58.0872 -8.74178 58.1319 0.0946645C58.1766 8.93111 65.3762 16.0582 74.2127 16.0135C83.0491 15.9688 90.1762 8.76914 90.1315 -0.0673013C90.0868 -8.90375 82.8872 -16.0308 74.0507 -15.9861ZM118.532 171.393L115.628 172.145L118.532 171.393ZM89.4772 442.6L92.1561 443.951L92.1561 443.951L89.4772 442.6ZM79.3223 462.744L76.6435 461.393L76.6435 461.393L79.3223 462.744ZM81.7203 776.225L79.0625 777.616L79.0625 777.616L81.7203 776.225ZM108.914 1012.69L38.8292 1312.51L44.6717 1313.88L114.756 1014.05L108.914 1012.69ZM71.2276 0.766072L115.628 172.145L121.436 170.641L77.0358 -0.738709L71.2276 0.766072ZM86.7984 441.25L76.6435 461.393L82.0011 464.094L92.1561 443.951L86.7984 441.25ZM76.6435 461.393C26.4153 561.025 27.316 678.764 79.0625 777.616L84.3782 774.833C33.529 677.696 32.6439 561.998 82.0011 464.094L76.6435 461.393ZM115.628 172.145C139.004 262.372 128.757 358.022 86.7984 441.25L92.1561 443.951C134.77 359.422 145.177 262.278 121.436 170.641L115.628 172.145ZM114.756 1014.05C133.644 933.251 122.863 848.351 84.3782 774.833L79.0625 777.616C116.88 849.859 127.474 933.287 108.914 1012.69L114.756 1014.05Z"
            fill="#4142AE"
          />
        </svg>
        <div class="flex flex-col gap-12 gap-36 items-start justify-start self-stretch flex-1 relative h-fit">
          <div class="flex flex-col gap-3 xl:gap-8 items-center justify-start self-stretch shrink-0 relative">
            <div
              class="text-[#443f76] text-center font-['KeaniaOne-Regular',_sans-serif] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
              font-normal relative self-stretch">
              Scene Classification
            </div>
            <div
              class="text-[#000000] text-left font-['KeaniaOne-Regular',_sans-serif] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
              font-normal relative self-stretch">
              Our scene classification and analysis API identifies the apparent
              location of the scene in a given image or video. The system
              returns multiple scene labels and classifies them at scale. The
              model checks whether it is an indoor or outdoor space and groups
              the scene under possible categories and attributes, such as,
              outdoors on a farm, around sunny mountains, etc.
            </div>
          </div>
          <div class="flex flex-col  gap-3 xl:gap-8 items-center justify-start self-stretch shrink-0 relative">
            <div
              class="text-[#443f76] text-center font-['KeaniaOne-Regular',_sans-serif] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
              font-normal relative self-stretch">
              Face Detection
            </div>
            <div
              class="text-[#000000] text-left font-['KeaniaOne-Regular',_sans-serif] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
              font-normal relative self-stretch">
              Our face detection API detects the existence and location of faces
              in an image or video, identifies facial landmarks. Our face
              detection technology is highly reliable and accurate in detecting
              human faces in different applications.
            </div>
          </div>
          <div class="flex flex-col  gap-3 xl:gap-8 items-center justify-start self-stretch shrink-0 relative">
            <div
              class="text-[#443f76] text-center font-['KeaniaOne-Regular',_sans-serif] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
              font-normal relative self-stretch">
              Emotion Detection
            </div>
            <div
              class="text-[#000000] text-left font-['KeaniaOne-Regular',_sans-serif] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
              font-normal relative self-stretch">
              People are used to taking in visual cues such as facial
              expressions for reading the emotions of others. With the help of
              AI technology, emotion recognition models get even better at
              analyzing expressions on a human’s face and detecting their
              emotional states.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
