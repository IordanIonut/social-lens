import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Responce from "../components/Response";
import {
  APIAgeDetector,
  APIEmotionDetector,
  APIFaceDetector,
  APIImageDetector,
  APISceneClassification,
} from "../utils/fetchApi";
import Swal from "sweetalert2";

const Service = ({ cookies, updateCookieValue }) => {
  const [link, setLink] = useState("");
  const [sceneClassification, setSceneClassification] = useState([]);
  const [ageDetector, setAgeDetector] = useState([]);
  const [emotionDetector, setEmotionDetector] = useState([]);
  const [imageDetector, setImageDetector] = useState([]);
  const [faceDetector, setFaceDetector] = useState([]);

  const handleChangeLink = (value) => {
    setLink(value);
  };

  const clickSearch = () => {
    let res = {
      url: link,
    };
    APISceneClassification("scenery-classify", res)
      .then((response) => {
        setSceneClassification(response);
        confirmePopUp();
        if (cookies?.try_good?.value + 1 <= 10)
          updateCookieValue(cookies.try_good.value + 1);
        else
          errorPopUp("Try Limit", "You have reached the limit of daily tries.");
        APIAgeDetector("age-detection", res)
          .then((response) => {
            setAgeDetector(response);
          })
          .catch((error) => {
            errorPopUp(
              "The URL is wrong!",
              "Please check the URL, don't search for this type of image.",
              2000
            );
          });
        APIEmotionDetector("emotion-detection", res)
          .then((response) => {
            setEmotionDetector(response);
          })
          .catch((error) => {
            errorPopUp(
              "The URL is wrong!",
              "Please check the URL, don't search for this type of image.",
              2000
            );
          });
        APIImageDetector("adult-content", res)
          .then((response) => {
            setImageDetector(response);
          })
          .catch((error) => {
            errorPopUp(
              "The URL is wrong!",
              "Please check the URL, don't search for this type of image.",
              2000
            );
          });
        APIFaceDetector("face-detection", res)
          .then((response) => {
            setFaceDetector(response);
          })
          .catch((error) => {
            errorPopUp(
              "The URL is wrong!",
              "Please check the URL, don't search for this type of image.",
              2000
            );
          });
      })
      .catch((error) => {
        errorPopUp(
          "The URL is wrong!",
          "Please check the URL, don't search for this type of image.",
          2000
        );
      });
  };

  const errorPopUp = (title, text, time) => {
    Swal.fire({
      title: title,
      text: text,
      icon: "error",
      timer: time,
      timerProgressBar: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      customClass: {
        container: "bg-opacity-50 backdrop-filter backdrop-blur-lg",
        popup: "bg-white shadow-lg",
        title: "text-red-600",
        text: "text-gray-800",
        confirmButton:
          "bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
      },
    });
  };

  const confirmePopUp = () => {
    Swal.fire({
      title: "Searching!",
      text: "Please wait, now examining the image.",
      icon: "success",
      timer: 3500,
      timerProgressBar: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      customClass: {
        container: "bg-opacity-50 backdrop-filter backdrop-blur-lg",
        popup: "bg-white shadow-lg",
        title: "text-grean-600",
        text: "text-gray-800",
        confirmButton:
          "bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
      },
    });
  };

  const val = {
    "Scene Classification": sceneClassification,
    "Age Detector": ageDetector,
    "Emotion Detector": emotionDetector,
    "Image Detector": imageDetector,
    "Face Detector": faceDetector,
  };
  console.log(cookies.try_good);

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
              src={link}
              alt=" "
            />
          </div>
        </div>

        <div class="flex flex-col md:flex-row md:items-start gap-4 justify-between self-stretch flex-1 relative">
          <div class="flex flex-col gap-3 md:gap-5 items-center justify-start flex-1 relative">
            <div class="self-stretch flex-1 relative">
              <div class="w-[100%] h-20 md:h-24 relative top-[0.5px]">
                <div
                  class="bg-[#ffffff] rounded-[36px] border-solid border-[#e2e1e5] border pt-2.5 pr-[15px] pb-2.5 pl-[15px] flex flex-col 
                gap-0 items-start justify-start w-[100%] relative right-[0%] left-[0%] top-7"
                >
                  <input
                    type="text"
                    value={link}
                    onChange={(e) => handleChangeLink(e.target.value)}
                    placeholder="Insert your link here"
                    class="text-[#443F76] text-left font-['Inter-Regular',_sans-serif] text-sm leading-7 font-normal relative self-stretch 
                    border-transparent focus:border-transparent ring-0 focus:ring-0"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-row items-start justify-between self-stretch shrink-0 relative">
              <button
                onClick={clickSearch}
                class="bg-[#ffffff] rounded-[20px] border-solid border-[rgba(68,63,118,0.38)] border-t-[5px] border-r-[5px] 
            border-b-[10px] border-l-[5px] flex flex-row items-center justify-between shrink-0 w-[100px] h-[50px] sm:w-[110px] sm:h-[60px] md:w-[150px] 
            md:h-[70px] relative overflow-hidden"
              >
                <div className="text-[#000000] text-center font-['KeaniaOne-Regular',_sans-serif] text-lg sm:xl md:text-3xl font-normal relative flex-1">
                  Try Now
                </div>
              </button>
              <div class="text-[#443f76] text-left font-['Inter-Regular',_sans-serif] text-xl font-normal relative">
                {cookies?.try_good?.value}/10
              </div>
            </div>
          </div>
          <Responce val={val} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
