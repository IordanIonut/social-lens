import React from "react";
import SceneClassification from "./response/SceneClassification";
import AgeDetector from "./response/AgeDetector";
import EmotionDetector from "./response/EmotionDetector";
import ImageDetector from "./response/ImageDetector";
import FaceDetector from "./response/FaceDetector";

const Responce = ({ val }) => {
  return (
    <>
      {val?.["Age Detector"]?.length !== 0 &&
      val?.["Scene Classification"]?.length !== 0 &&
      val?.["Emotion Detector"]?.length !== 0 &&
      val?.["Image Detector"]?.length !== 0 &&
      val?.["Face Detector"]?.length !== 0 ? (
        <div
          className="flex-1 flex flex-col items-start justify-start min-w-[439px] max-w-full text-center text-17xl text-darkslateblue-100 
      font-keania-one mq750:min-w-full"
        >
          <div className="w-[223px] h-[55px] flex flex-row items-end justify-center relative">
            <div className="h-[3px] w-[123px] absolute !m-[0] top-[55px] left-[0px] box-border border-t-[3px] border-dashed border-[#443f76]" />
            <div className="h-full w-full absolute !m-[0] top-[0px] left-[0px]">
              <div className="absolute top-[0px] left-[0px] box-border w-[3px] h-[58px] border-r-[3px] border-dashed border-[#443f76]" />
              <div className="absolute top-[11px] left-[120px] inline-block text-4xl">
                Rezult
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start py-0 px-10 box-border">
            <FaceDetector value={val["Face Detector"]} name={"Face Detector"} />
            <ImageDetector
              value={val["Image Detector"]}
              name={"Image Detector"}
            />
            <EmotionDetector
              value={val["Emotion Detector"]}
              name={"Emotion Detector"}
            />
            <AgeDetector value={val["Age Detector"]} name={"Age Detector"} />
            <SceneClassification
              value={val["Scene Classification"]}
              name={"Scene Classification"}
            />
          </div>
        </div>
      ) : (
        <div />
      )}
    </>
  );
};

export default Responce;
