import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Responce from "../components/Response";
import {
  APIAgeDetector,
  APIEmotionDetector,
  APIFaceDetector,
  APIImageDetector,
  APILogoDetector,
  APISceneClassification,
} from "../utils/fetchApi";

const Service = () => {
  const [link, setLink] = useState("");
  const [sceneClassification, setSceneClassification] = useState([{
    "Indoor": true,
    "categories": [
      "booth/indoor",
      "conference_center",
      "legislative_chamber",
      "television_studio",
      "martial_arts_gym"
    ],
    "attributes": [
      "cloth",
      "no horizon",
      "enclosed area",
      "man-made",
      "indoor lighting",
      "working",
      "congregating",
      "stressful",
      "training"
    ]
  }]);
  const [ageDetector, setAgeDetector] = useState([[
    {
      "face_coordinate": [
        353,
        67,
        380,
        100
      ],
      "age": 41
    },
    {
      "face_coordinate": [
        233,
        60,
        262,
        101
      ],
      "age": 38
    },
    {
      "face_coordinate": [
        92,
        51,
        123,
        91
      ],
      "age": 39
    },
    {
      "face_coordinate": [
        431,
        88,
        471,
        137
      ],
      "age": 63
    },
    {
      "face_coordinate": [
        64,
        97,
        102,
        145
      ],
      "age": 59
    },
    {
      "face_coordinate": [
        300,
        88,
        335,
        137
      ],
      "age": 48
    },
    {
      "face_coordinate": [
        176,
        63,
        210,
        111
      ],
      "age": 55
    }
  ]]);
  const [emotionDetector, setEmotionDetector] = useState([[
    {
      "probability": 0.9991372227668762,
      "rectangle": {
        "left": 620.0232929018126,
        "top": 129.02614450004575,
        "right": 673.9662855282717,
        "bottom": 197.66665177342173
      },
      "emotion": {
        "value": "happy",
        "probability": 0.7791293859481812,
        "sentiments": {
          "angry": 0.0013479850022122264,
          "disgust": 0.03111952356994152,
          "fear": 0.0006793117499910295,
          "happy": 0.7791293859481812,
          "sad": 0.0032712130341678858,
          "surprise": 0.17392386496067047,
          "neutral": 0.010528728365898132
        }
      }
    },
    {
      "probability": 0.9999926090240479,
      "rectangle": {
        "left": 91.39053083431239,
        "top": 143.74200551130343,
        "right": 144.2929745614082,
        "bottom": 207.79942224229066
      },
      "emotion": {
        "value": "neutral",
        "probability": 0.9429019093513489,
        "sentiments": {
          "angry": 0.014679694548249245,
          "disgust": 0.0012380264233797789,
          "fear": 0.0002548169286455959,
          "happy": 0.03197614848613739,
          "sad": 0.0041494229808449745,
          "surprise": 0.004799974616616964,
          "neutral": 0.9429019093513489
        }
      }
    },
    {
      "probability": 0.9999935626983643,
      "rectangle": {
        "left": 430.887368093545,
        "top": 131.61519337057447,
        "right": 480.8194609060102,
        "bottom": 196.67593513867664
      },
      "emotion": {
        "value": "happy",
        "probability": 0.9915614724159241,
        "sentiments": {
          "angry": 0.000365958345355466,
          "disgust": 0.001287331571802497,
          "fear": 0.00003784139335039072,
          "happy": 0.9915614724159241,
          "sad": 0.00012913135287817568,
          "surprise": 0.0020563947036862373,
          "neutral": 0.004561923909932375
        }
      }
    },
    {
      "probability": 0.9996495246887207,
      "rectangle": {
        "left": 255.84697351641563,
        "top": 94.11450168505932,
        "right": 300.72590765030844,
        "bottom": 155.99649619834963
      },
      "emotion": {
        "value": "happy",
        "probability": 0.9989836812019348,
        "sentiments": {
          "angry": 0.00044294679537415504,
          "disgust": 0.00006342420965665951,
          "fear": 0.000020906649297103286,
          "happy": 0.9989836812019348,
          "sad": 0.00011117037502117455,
          "surprise": 0.00031401499290950596,
          "neutral": 0.00006376232340699062
        }
      }
    },
    {
      "probability": 0.9999916553497314,
      "rectangle": {
        "left": 336.15948085127206,
        "top": 90.61625871186456,
        "right": 376.03510301867345,
        "bottom": 142.9397579121481
      },
      "emotion": {
        "value": "happy",
        "probability": 0.9975346326828003,
        "sentiments": {
          "angry": 0.000007636019290657714,
          "disgust": 0.00008234853157773614,
          "fear": 0.000016886053344933316,
          "happy": 0.9975346326828003,
          "sad": 0.000013444991054711863,
          "surprise": 0.0023387076798826456,
          "neutral": 0.000006342078449961264
        }
      }
    },
    {
      "probability": 0.9999896287918091,
      "rectangle": {
        "left": 135.12565610648275,
        "top": 78.90998147428036,
        "right": 175.01576640259202,
        "bottom": 130.59836944409957
      },
      "emotion": {
        "value": "happy",
        "probability": 0.9645068049430847,
        "sentiments": {
          "angry": 0.0020117820240557194,
          "disgust": 0.00036471508792601526,
          "fear": 0.00036297301994636655,
          "happy": 0.9645068049430847,
          "sad": 0.005330697167664766,
          "surprise": 0.003686164505779743,
          "neutral": 0.023736732080578804
        }
      }
    },
    {
      "probability": 0.9997894167900085,
      "rectangle": {
        "left": 509.52507602399976,
        "top": 98.5075744241476,
        "right": 544.6536207842505,
        "bottom": 143.37604717661938
      },
      "emotion": {
        "value": "happy",
        "probability": 0.9358134269714355,
        "sentiments": {
          "angry": 0.000830862030852586,
          "disgust": 0.000968610227573663,
          "fear": 0.0034144946839660406,
          "happy": 0.9358134269714355,
          "sad": 0.0035251458175480366,
          "surprise": 0.055162832140922546,
          "neutral": 0.0002847062423825264
        }
      }
    }
  ]]);
  const [imageDetector, setImageDetector] = useState([{
    
      "unsafe": false,
      "objects": [
        {
          "box": [
            299,
            220,
            427,
            348
          ],
          "score": 0.9658822417259216,
          "label": "FACE_F"
        },
        {
          "box": [
            264,
            599,
            406,
            778
          ],
          "score": 0.7442929744720459,
          "label": "EXPOSED_BELLY"
        },
        {
          "box": [
            291,
            827,
            353,
            889
          ],
          "score": 0.6845396161079407,
          "label": "COVERED_GENITALIA_F"
        }
      ]
    
  }]);
  const [logoDetector, setLogoDetector] = useState([{
    "Indoor": true,
    "categories": [
      "booth/indoor",
      "conference_center",
      "legislative_chamber",
      "television_studio",
      "martial_arts_gym"
    ],
    "attributes": [
      "cloth",
      "no horizon",
      "enclosed area",
      "man-made",
      "indoor lighting",
      "working",
      "congregating",
      "stressful",
      "training"
    ]
  }]);
  const [faceDetector, setFaceDetector] = useState([
    {
      "probability": 0.9991372227668762,
      "rectangle": {
        "left": 620.0232929018126,
        "top": 129.02614450004575,
        "right": 673.9662855282717,
        "bottom": 197.66665177342173
      },
      "margin_rectangle": {
        "left": 620,
        "top": 129,
        "right": 674,
        "bottom": 198
      },
      "landmarks": {
        "left_eye": {
          "x": 635.194091796875,
          "y": 156.8349151611328
        },
        "right_eye": {
          "x": 658.2267456054688,
          "y": 157.42486572265625
        },
        "nose": {
          "x": 646.5117797851562,
          "y": 171.4055633544922
        },
        "mouth_left": {
          "x": 633.8279418945312,
          "y": 178.3621826171875
        },
        "mouth_right": {
          "x": 658.9248046875,
          "y": 178.6457061767578
        }
      }
    },
    {
      "probability": 0.9999926090240479,
      "rectangle": {
        "left": 91.39053083431239,
        "top": 143.74200551130343,
        "right": 144.2929745614082,
        "bottom": 207.79942224229066
      },
      "margin_rectangle": {
        "left": 91,
        "top": 144,
        "right": 144,
        "bottom": 208
      },
      "landmarks": {
        "left_eye": {
          "x": 108.32344818115234,
          "y": 168.29725646972656
        },
        "right_eye": {
          "x": 132.9398956298828,
          "y": 167.88507080078125
        },
        "nose": {
          "x": 122.27770233154297,
          "y": 178.70425415039062
        },
        "mouth_left": {
          "x": 110.71947479248047,
          "y": 192.32791137695312
        },
        "mouth_right": {
          "x": 133.0614776611328,
          "y": 191.4375457763672
        }
      }
    },
    {
      "probability": 0.9999935626983643,
      "rectangle": {
        "left": 430.887368093545,
        "top": 131.61519337057447,
        "right": 480.8194609060102,
        "bottom": 196.67593513867664
      },
      "margin_rectangle": {
        "left": 431,
        "top": 132,
        "right": 481,
        "bottom": 197
      },
      "landmarks": {
        "left_eye": {
          "x": 443.6985778808594,
          "y": 156.7147979736328
        },
        "right_eye": {
          "x": 465.9672546386719,
          "y": 156.20477294921875
        },
        "nose": {
          "x": 454.90380859375,
          "y": 170.28704833984375
        },
        "mouth_left": {
          "x": 443.9219055175781,
          "y": 178.9304962158203
        },
        "mouth_right": {
          "x": 467.61004638671875,
          "y": 178.5034637451172
        }
      }
    },
    {
      "probability": 0.9996495246887207,
      "rectangle": {
        "left": 255.84697351641563,
        "top": 94.11450168505932,
        "right": 300.72590765030844,
        "bottom": 155.99649619834963
      },
      "margin_rectangle": {
        "left": 256,
        "top": 94,
        "right": 301,
        "bottom": 156
      },
      "landmarks": {
        "left_eye": {
          "x": 267.6152648925781,
          "y": 115.74857330322266
        },
        "right_eye": {
          "x": 289.2046813964844,
          "y": 117.43071746826172
        },
        "nose": {
          "x": 277.9027404785156,
          "y": 130.5225372314453
        },
        "mouth_left": {
          "x": 265.71368408203125,
          "y": 138.45809936523438
        },
        "mouth_right": {
          "x": 289.5555419921875,
          "y": 139.68080139160156
        }
      }
    },
    {
      "probability": 0.9999916553497314,
      "rectangle": {
        "left": 336.15948085127206,
        "top": 90.61625871186456,
        "right": 376.03510301867345,
        "bottom": 142.9397579121481
      },
      "margin_rectangle": {
        "left": 336,
        "top": 91,
        "right": 376,
        "bottom": 143
      },
      "landmarks": {
        "left_eye": {
          "x": 347.5387268066406,
          "y": 109.94681549072266
        },
        "right_eye": {
          "x": 365.2668151855469,
          "y": 110.04437255859375
        },
        "nose": {
          "x": 356.8940124511719,
          "y": 120.26425170898438
        },
        "mouth_left": {
          "x": 345.6869812011719,
          "y": 127.72679901123047
        },
        "mouth_right": {
          "x": 366.6736755371094,
          "y": 127.82222747802734
        }
      }
    },
    {
      "probability": 0.9999896287918091,
      "rectangle": {
        "left": 135.12565610648275,
        "top": 78.90998147428036,
        "right": 175.01576640259202,
        "bottom": 130.59836944409957
      },
      "margin_rectangle": {
        "left": 135,
        "top": 79,
        "right": 175,
        "bottom": 131
      },
      "landmarks": {
        "left_eye": {
          "x": 150.61366271972656,
          "y": 96.74077606201172
        },
        "right_eye": {
          "x": 168.80435180664062,
          "y": 100.53669738769531
        },
        "nose": {
          "x": 161.1516876220703,
          "y": 109.21188354492188
        },
        "mouth_left": {
          "x": 147.84202575683594,
          "y": 115.4309310913086
        },
        "mouth_right": {
          "x": 165.19476318359375,
          "y": 118.94984436035156
        }
      }
    },
    {
      "probability": 0.9997894167900085,
      "rectangle": {
        "left": 509.52507602399976,
        "top": 98.5075744241476,
        "right": 544.6536207842505,
        "bottom": 143.37604717661938
      },
      "margin_rectangle": {
        "left": 510,
        "top": 99,
        "right": 545,
        "bottom": 143
      },
      "landmarks": {
        "left_eye": {
          "x": 519.1238403320312,
          "y": 113.03215789794922
        },
        "right_eye": {
          "x": 535.996826171875,
          "y": 113.18169403076172
        },
        "nose": {
          "x": 526.6972045898438,
          "y": 122.05176544189453
        },
        "mouth_left": {
          "x": 517.5840454101562,
          "y": 129.81289672851562
        },
        "mouth_right": {
          "x": 536.2515258789062,
          "y": 129.9630126953125
        }
      }
    }
  ]);

  const handleChangeLink = (value) => {
    setLink(value);
  };

  const clickSearch = () => {
    let res = {
      url: "https://media.licdn.com/dms/image/D4E10AQEoYOVV8Vs60g/image-shrink_800/0/1713960964414?e=1714568400&v=beta&t=5XJ6YwvX7g1OdzYcIFhwD3bC7jsmMzrrSdCBMEc5WmA",
    };
    APISceneClassification("scenery-classify", res)
      .then((response) => {
        setSceneClassification(response);
      })
      .catch((error) => {
        console.error(error);
      });
    APIAgeDetector("age-detection", res)
      .then((response) => {
        setAgeDetector(response);
      })
      .catch((error) => {
        console.error(error);
      });
    APIEmotionDetector("emotion-detection", res)
      .then((response) => {
        setEmotionDetector(response);
      })
      .catch((error) => {
        console.error(error);
      });
    APIImageDetector("adult-content", res)
      .then((response) => {
        setImageDetector(response);
      })
      .catch((error) => {
        console.error(error);
      });
    APILogoDetector("logo-recognition/url", res)
      .then((response) => {
        setLogoDetector(response);
      })
      .catch((error) => {
        console.error(error);
      });
    APIFaceDetector("face-detection", res)
      .then((response) => {
        setFaceDetector(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const val = {
    "Scene Classification": sceneClassification,
    "Age Detector": ageDetector,
    "Emotion Detector": emotionDetector,
    "Image Detector": imageDetector,
    "Logo Detector": logoDetector,
    "Face Detector": faceDetector,
  };

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
              src="https://media.licdn.com/dms/image/D4E10AQEoYOVV8Vs60g/image-shrink_800/0/1713960964414?e=1714568400&v=beta&t=5XJ6YwvX7g1OdzYcIFhwD3bC7jsmMzrrSdCBMEc5WmA"
              alt="img"
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
                onClick={clickSearch} disabled
                class="bg-[#ffffff] rounded-[20px] border-solid border-[rgba(68,63,118,0.38)] border-t-[5px] border-r-[5px] 
            border-b-[10px] border-l-[5px] flex flex-row items-center justify-between shrink-0 w-[100px] h-[50px] sm:w-[110px] sm:h-[60px] md:w-[150px] 
            md:h-[70px] relative overflow-hidden"
              >
                <div className="text-[#000000] text-center font-['KeaniaOne-Regular',_sans-serif] text-lg sm:xl md:text-3xl font-normal relative flex-1">
                  Try Now
                </div>
              </button>
              <div class="text-[#443f76] text-left font-['Inter-Regular',_sans-serif] text-xl font-normal relative">
                1/10
              </div>
            </div>
          </div>

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
            <Responce val={val}/>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Service;
