import React from "react";

const FaceDetector = ({ value, name }) => {

  return (
    <div>
      <div className="self-stretch h-[55px] flex flex-row items-end justify-start relative">
        <div className="h-[3px] w-[123px] absolute !m-[0] top-[55px] left-[0px] box-border border-t-[3px] border-dashed border-[#443f76]" />
        <div className="h-full w-full absolute !m-[0] top-[0px] left-[0px]">
          <div className="absolute top-[0px] left-[0px] box-border w-[3px] h-[58px] border-r-[3px] border-dashed border-[#443f76]" />
          <div className="absolute top-[11px] left-[120px] text-3xl w-full text-justify ">
            {name}
          </div>
        </div>
      </div>
      {value?.map((item, key) => (
        <div className="items-baseline flex flex-col items-center w-[400px] justify-start py-0 px-10 border-l-[3px] border-dashed border-[#443f76]">
          <div className="w-[365px] flex flex-row items-start justify-start py-0 box-border">
            <div className="h-[55px] flex-1 flex flex-row items-end justify-center relative">
              <div className="h-[58px] w-[3px] absolute !m-[0] top-[0px] left-[0px] box-border border-r-[3px] border-dashed border-[#443f76]" />
              <div className="h-[3px] w-[100px] absolute !m-[0] top-[55px] left-[0px] box-border border-t-[3px] border-dashed border-[#443f76]" />
              <div className="relative text-2xl">Person #{key + 1}</div>
            </div>
          </div>
          <div className="px-10 w-full flex flex-row items-start justify-center border-l-[3px] border-dashed border-[#443f76]">
            <div className="h-[55px] flex-1 flex flex-row items-end justify-center relative">
              <div className="h-[58px] w-[3px] absolute  top-[0px] left-[0px] box-border border-r-[3px] border-dashed border-[#443f76]" />
              <div className="h-[3px] w-[100px] absolute top-[55px] left-[0px] box-border border-t-[3px] border-dashed border-[#443f76]" />
              <div className="relative text-2xl">Left Eye</div>
            </div>
          </div>
          <div>
            <div className="items-baseline flex flex-col items-center w-[400px] justify-start py-0 px-10 border-l-[3px] border-dashed border-[#443f76]">
              <div className="px-10 w-full flex flex-row items-start justify-center border-l-[3px] border-dashed border-[#443f76]">
                <div className="h-[55px] flex-1 flex flex-row items-end justify-center relative">
                  <div className="h-[58px] w-[3px] absolute  top-[0px] left-[0px] box-border border-r-[3px] border-dashed border-[#443f76]" />
                  <div className="h-[3px] w-[100px] absolute top-[55px] left-[0px] box-border border-t-[3px] border-dashed border-[#443f76]" />
                  <div className="relative text-2xl">
                    {item?.landmarks?.left_eye?.x}
                  </div>
                </div>
              </div>
            </div>
            <div className="items-baseline flex flex-col items-center w-[400px] justify-start py-0 px-10 border-l-[3px] border-dashed border-[#443f76]">
              <div className="px-10 w-full flex flex-row items-start justify-center border-l-[3px] border-dashed border-[#443f76]">
                <div className="h-[55px] flex-1 flex flex-row items-end justify-center relative">
                  <div className="h-[58px] w-[3px] absolute  top-[0px] left-[0px] box-border border-r-[3px] border-dashed border-[#443f76]" />
                  <div className="h-[3px] w-[100px] absolute top-[55px] left-[0px] box-border border-t-[3px] border-dashed border-[#443f76]" />
                  <div className="relative text-2xl">
                    {item?.landmarks?.left_eye?.y}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 w-full flex flex-row items-start justify-center border-l-[3px] border-dashed border-[#443f76]">
            <div className="h-[55px] flex-1 flex flex-row items-end justify-center relative">
              <div className="h-[58px] w-[3px] absolute  top-[0px] left-[0px] box-border border-r-[3px] border-dashed border-[#443f76]" />
              <div className="h-[3px] w-[100px] absolute top-[55px] left-[0px] box-border border-t-[3px] border-dashed border-[#443f76]" />
              <div className="relative text-2xl">Left Mouth</div>
            </div>
          </div>
          <div>
            <div className="items-baseline flex flex-col items-center w-[400px] justify-start py-0 px-10 border-l-[3px] border-dashed border-[#443f76]">
              <div className="px-10 w-full flex flex-row items-start justify-center border-l-[3px] border-dashed border-[#443f76]">
                <div className="h-[55px] flex-1 flex flex-row items-end justify-center relative">
                  <div className="h-[58px] w-[3px] absolute  top-[0px] left-[0px] box-border border-r-[3px] border-dashed border-[#443f76]" />
                  <div className="h-[3px] w-[100px] absolute top-[55px] left-[0px] box-border border-t-[3px] border-dashed border-[#443f76]" />
                  <div className="relative text-2xl">
                    {item?.landmarks?.mouth_left?.x}
                  </div>
                </div>
              </div>
            </div>
            <div className="items-baseline flex flex-col items-center w-[400px] justify-start py-0 px-10 border-l-[3px] border-dashed border-[#443f76]">
              <div className="px-10 w-full flex flex-row items-start justify-center border-l-[3px] border-dashed border-[#443f76]">
                <div className="h-[55px] flex-1 flex flex-row items-end justify-center relative">
                  <div className="h-[58px] w-[3px] absolute  top-[0px] left-[0px] box-border border-r-[3px] border-dashed border-[#443f76]" />
                  <div className="h-[3px] w-[100px] absolute top-[55px] left-[0px] box-border border-t-[3px] border-dashed border-[#443f76]" />
                  <div className="relative text-2xl">
                    {item?.landmarks?.mouth_left?.y}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 w-full flex flex-row items-start justify-center border-l-[3px] border-dashed border-[#443f76]">
            <div className="h-[55px] flex-1 flex flex-row items-end justify-center relative">
              <div className="h-[58px] w-[3px] absolute  top-[0px] left-[0px] box-border border-r-[3px] border-dashed border-[#443f76]" />
              <div className="h-[3px] w-[100px] absolute top-[55px] left-[0px] box-border border-t-[3px] border-dashed border-[#443f76]" />
              <div className="relative text-2xl">Right Mouth</div>
            </div>
          </div>
          <div>
            <div className="items-baseline flex flex-col items-center w-[400px] justify-start py-0 px-10 border-l-[3px] border-dashed border-[#443f76]">
              <div className="px-10 w-full flex flex-row items-start justify-center border-l-[3px] border-dashed border-[#443f76]">
                <div className="h-[55px] flex-1 flex flex-row items-end justify-center relative">
                  <div className="h-[58px] w-[3px] absolute  top-[0px] left-[0px] box-border border-r-[3px] border-dashed border-[#443f76]" />
                  <div className="h-[3px] w-[100px] absolute top-[55px] left-[0px] box-border border-t-[3px] border-dashed border-[#443f76]" />
                  <div className="relative text-2xl">
                    {item?.landmarks?.mouth_right?.x}
                  </div>
                </div>
              </div>
            </div>
            <div className="items-baseline flex flex-col items-center w-[400px] justify-start py-0 px-10 border-l-[3px] border-dashed border-[#443f76]">
              <div className="px-10 w-full flex flex-row items-start justify-center border-l-[3px] border-dashed border-[#443f76]">
                <div className="h-[55px] flex-1 flex flex-row items-end justify-center relative">
                  <div className="h-[58px] w-[3px] absolute  top-[0px] left-[0px] box-border border-r-[3px] border-dashed border-[#443f76]" />
                  <div className="h-[3px] w-[100px] absolute top-[55px] left-[0px] box-border border-t-[3px] border-dashed border-[#443f76]" />
                  <div className="relative text-2xl">
                    {item?.landmarks?.mouth_right?.y}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 w-full flex flex-row items-start justify-center border-l-[3px] border-dashed border-[#443f76]">
            <div className="h-[55px] flex-1 flex flex-row items-end justify-center relative">
              <div className="h-[58px] w-[3px] absolute  top-[0px] left-[0px] box-border border-r-[3px] border-dashed border-[#443f76]" />
              <div className="h-[3px] w-[100px] absolute top-[55px] left-[0px] box-border border-t-[3px] border-dashed border-[#443f76]" />
              <div className="relative text-2xl">Nose</div>
            </div>
          </div>
          <div>
            <div className="items-baseline flex flex-col items-center w-[400px] justify-start py-0 px-10 border-l-[3px] border-dashed border-[#443f76]">
              <div className="px-10 w-full flex flex-row items-start justify-center border-l-[3px] border-dashed border-[#443f76]">
                <div className="h-[55px] flex-1 flex flex-row items-end justify-center relative">
                  <div className="h-[58px] w-[3px] absolute  top-[0px] left-[0px] box-border border-r-[3px] border-dashed border-[#443f76]" />
                  <div className="h-[3px] w-[100px] absolute top-[55px] left-[0px] box-border border-t-[3px] border-dashed border-[#443f76]" />
                  <div className="relative text-2xl">
                    {item?.landmarks?.nose?.x}
                  </div>
                </div>
              </div>
            </div>
            <div className="items-baseline flex flex-col items-center w-[400px] justify-start py-0 px-10 border-l-[3px] border-dashed border-[#443f76]">
              <div className="px-10 w-full flex flex-row items-start justify-center border-l-[3px] border-dashed border-[#443f76]">
                <div className="h-[55px] flex-1 flex flex-row items-end justify-center relative">
                  <div className="h-[58px] w-[3px] absolute  top-[0px] left-[0px] box-border border-r-[3px] border-dashed border-[#443f76]" />
                  <div className="h-[3px] w-[100px] absolute top-[55px] left-[0px] box-border border-t-[3px] border-dashed border-[#443f76]" />
                  <div className="relative text-2xl">
                    {item?.landmarks?.nose?.y}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 w-full flex flex-row items-start justify-center border-l-[3px] border-dashed border-[#443f76]">
            <div className="h-[55px] flex-1 flex flex-row items-end justify-center relative">
              <div className="h-[58px] w-[3px] absolute  top-[0px] left-[0px] box-border border-r-[3px] border-dashed border-[#443f76]" />
              <div className="h-[3px] w-[100px] absolute top-[55px] left-[0px] box-border border-t-[3px] border-dashed border-[#443f76]" />
              <div className="relative text-2xl">Right Eye</div>
            </div>
          </div>
          <div>
            <div className="items-baseline flex flex-col items-center w-[400px] justify-start py-0 px-10 border-l-[3px] border-dashed border-[#443f76]">
              <div className="px-10 w-full flex flex-row items-start justify-center border-l-[3px] border-dashed border-[#443f76]">
                <div className="h-[55px] flex-1 flex flex-row items-end justify-center relative">
                  <div className="h-[58px] w-[3px] absolute  top-[0px] left-[0px] box-border border-r-[3px] border-dashed border-[#443f76]" />
                  <div className="h-[3px] w-[100px] absolute top-[55px] left-[0px] box-border border-t-[3px] border-dashed border-[#443f76]" />
                  <div className="relative text-2xl">
                    {item?.landmarks?.right_eye?.x}
                  </div>
                </div>
              </div>
            </div>
            <div className="items-baseline flex flex-col items-center w-[400px] justify-start py-0 px-10 border-l-[3px] border-dashed border-[#443f76]">
              <div className="px-10 w-full flex flex-row items-start justify-center border-l-[3px] border-dashed border-[#443f76]">
                <div className="h-[55px] flex-1 flex flex-row items-end justify-center relative">
                  <div className="h-[58px] w-[3px] absolute  top-[0px] left-[0px] box-border border-r-[3px] border-dashed border-[#443f76]" />
                  <div className="h-[3px] w-[100px] absolute top-[55px] left-[0px] box-border border-t-[3px] border-dashed border-[#443f76]" />
                  <div className="relative text-2xl">
                    {item?.landmarks?.right_eye?.y}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-10 w-full flex flex-row items-start justify-center border-l-[3px] border-dashed border-[#443f76]">
            <div className="h-[55px] flex-1 flex flex-row items-end justify-center relative">
              <div className="h-[58px] w-[3px] absolute  top-[0px] left-[0px] box-border border-r-[3px] border-dashed border-[#443f76]" />
              <div className="h-[3px] w-[100px] absolute top-[55px] left-[0px] box-border border-t-[3px] border-dashed border-[#443f76]" />
              <div className="relative text-2xl">Face</div>
            </div>
          </div>
          <div>
            <div className="items-baseline flex flex-col items-center w-[400px] justify-start py-0 px-10 border-l-[3px] border-dashed border-[#443f76]">
              <div className="px-10 w-full flex flex-row items-start justify-center border-l-[3px] border-dashed border-[#443f76]">
                <div className="h-[55px] flex-1 flex flex-row items-end justify-center relative">
                  <div className="h-[58px] w-[3px] absolute  top-[0px] left-[0px] box-border border-r-[3px] border-dashed border-[#443f76]" />
                  <div className="h-[3px] w-[100px] absolute top-[55px] left-[0px] box-border border-t-[3px] border-dashed border-[#443f76]" />
                  <div className="relative text-2xl">
                    {item?.rectangle?.bottom}
                  </div>
                </div>
              </div>
            </div>
            <div className="items-baseline flex flex-col items-center w-[400px] justify-start py-0 px-10 border-l-[3px] border-dashed border-[#443f76]">
              <div className="px-10 w-full flex flex-row items-start justify-center border-l-[3px] border-dashed border-[#443f76]">
                <div className="h-[55px] flex-1 flex flex-row items-end justify-center relative">
                  <div className="h-[58px] w-[3px] absolute  top-[0px] left-[0px] box-border border-r-[3px] border-dashed border-[#443f76]" />
                  <div className="h-[3px] w-[100px] absolute top-[55px] left-[0px] box-border border-t-[3px] border-dashed border-[#443f76]" />
                  <div className="relative text-2xl">
                    {item?.rectangle?.left}
                  </div>
                </div>
              </div>
            </div>
            <div className="items-baseline flex flex-col items-center w-[400px] justify-start py-0 px-10 border-l-[3px] border-dashed border-[#443f76]">
              <div className="px-10 w-full flex flex-row items-start justify-center border-l-[3px] border-dashed border-[#443f76]">
                <div className="h-[55px] flex-1 flex flex-row items-end justify-center relative">
                  <div className="h-[58px] w-[3px] absolute  top-[0px] left-[0px] box-border border-r-[3px] border-dashed border-[#443f76]" />
                  <div className="h-[3px] w-[100px] absolute top-[55px] left-[0px] box-border border-t-[3px] border-dashed border-[#443f76]" />
                  <div className="relative text-2xl">
                    {item?.rectangle?.right}
                  </div>
                </div>
              </div>
            </div>
            <div className="items-baseline flex flex-col items-center w-[400px] justify-start py-0 px-10 border-l-[3px] border-dashed border-[#443f76]">
              <div className="px-10 w-full flex flex-row items-start justify-center border-l-[3px] border-dashed border-[#443f76]">
                <div className="h-[55px] flex-1 flex flex-row items-end justify-center relative">
                  <div className="h-[58px] w-[3px] absolute  top-[0px] left-[0px] box-border border-r-[3px] border-dashed border-[#443f76]" />
                  <div className="h-[3px] w-[100px] absolute top-[55px] left-[0px] box-border border-t-[3px] border-dashed border-[#443f76]" />
                  <div className="relative text-2xl">
                    {item?.rectangle?.top}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaceDetector;
