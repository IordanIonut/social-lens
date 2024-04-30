import axios from "axios";

const BASE_URL1 = "https://scene-classification.p.rapidapi.com";
const BASE_URL2 = "https://age-detector.p.rapidapi.com";
const BASE_URL3 = "https://emotion-detection2.p.rapidapi.com";
const BASE_URL4 =
  "https://nsfw-images-detection-and-classification.p.rapidapi.com";
const BASE_URL5 = "https://logo-recognition.p.rapidapi.com";
const BASE_URL6 = "https://face-detection13.p.rapidapi.com";

const apiSceneClassification = {
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "scene-classification.p.rapidapi.com",
  },
};

const apiAgeDetector = {
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "age-detector.p.rapidapi.com",
  },
};

const apiEmotionDetector = {
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "emotion-detection2.p.rapidapi.com",
  },
};

const apiImageDetector = {
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host":
      "nsfw-images-detection-and-classification.p.rapidapi.com",
  },
};

const apiLogoDetector = {
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "logo-recognition.p.rapidapi.com",
  },
};

const apiFaceDetector = {
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "face-detection13.p.rapidapi.com",
  },
};

export const APISceneClassification = async (url, postData) => {
  const { data } = await axios.post(
    `${BASE_URL1}/${url}`,
    postData,
    apiSceneClassification
  );
  return data;
};

export const APIAgeDetector = async (url, postData) => {
  const { data } = await axios.post(
    `${BASE_URL2}/${url}`,
    postData,
    apiAgeDetector
  );
  return data;
};

export const APIEmotionDetector = async (url, postData) => {
  const { data } = await axios.post(
    `${BASE_URL3}/${url}`,
    postData,
    apiEmotionDetector
  );
  return data;
};

export const APIImageDetector = async (url, postData) => {
  const { data } = await axios.post(
    `${BASE_URL4}/${url}`,
    postData,
    apiImageDetector
  );
  return data;
};

export const APILogoDetector = async (url, postData) => {
  const { data } = await axios.post(
    `${BASE_URL5}/${url}`,
    postData,
    apiLogoDetector
  );
  return data;
};

export const APIFaceDetector = async (url, postData) => {
  const { data } = await axios.post(
    `${BASE_URL6}/${url}`,
    postData,
    apiFaceDetector
  );
  return data;
};
