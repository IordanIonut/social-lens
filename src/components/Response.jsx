import React from "react";
import SceneClassification from "./response/SceneClassification";
import AgeDetector from "./response/AgeDetector";
import EmotionDetector from "./response/EmotionDetector";
import ImageDetector from "./response/ImageDetector";
import FaceDetector from "./response/FaceDetector";

const Responce = ({ val }) => {
  return (
    <div className="w-full flex flex-col items-start justify-start py-0 px-10 box-border">
      <FaceDetector 
        value={val["Face Detector"]} 
        name={"Face Detector"} 
      />
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
  );
};

export default Responce;
