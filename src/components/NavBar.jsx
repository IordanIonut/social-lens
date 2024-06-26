import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = ({ pageName }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div class="flex flex-row gap-0 items-center justify-start self-stretch shrink-0 relative">
        <div class="flex flex-col gap-2.5 items-center justify-start shrink-0 relative">
          <img
            class="shrink-0 w-14 xl:w-20 relative"
            style={{ objectFit: "cover" }}
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="logo"
          />
        </div>
        <div class="pt-5 pb-3 flex flex-row gap-[30px] items-center justify-end flex-1 lg:h-[80px] xl:h-[100px] relative">
          <Link
            to="/"
            className={`flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative hidden sm:flex ${
              pageName === ""
                ? "rounded-md border-solid border-[#aa72e5] sm:border-b-[5px] md:border-b-[5px] lg:border-b-[8px] xl:border-b-[10px]"
                : "hover:rounded-md hover:border-solid hover:border-[#aa72e5] hover:md:border-b-[5px] hover:lg:border-b-[8px] hover:xl:border-b-[10px]"
            }`}
            style={{
              transformOrigin: "0 0",
              transform: "rotate(0deg) scale(1, 1)",
            }}
          >
            <div
              className="text-[#aa72e5] text-center font-['KaushanScript-Regular',_sans-serif] md:text-lg lg:text-xl xl:text-2xl 
            font-normal relative"
            >
              Home
            </div>
          </Link>
          <Link
            to="/about"
            className={`flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative hidden sm:flex ${
              pageName === "about"
                ? "rounded-md border-solid border-[#aa72e5] sm:border-b-[5px] md:border-b-[5px] lg:border-b-[8px] xl:border-b-[10px]"
                : "hover:rounded-md hover:border-solid hover:border-[#aa72e5] hover:md:border-b-[5px] hover:lg:border-b-[8px] hover:xl:border-b-[10px]"
            }`}
            style={{
              transformOrigin: "0 0",
              transform: "rotate(0deg) scale(1, 1)",
            }}
          >
            <div className="text-[#aa72e5] text-center font-['KaushanScript-Regular',_sans-serif]  md:text-lg lg:text-xl xl:text-2xl  font-normal relative">
              About
            </div>
          </Link>
          <Link
            to="/service"
            className={`flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative hidden sm:flex ${
              pageName === "service"
                ? "rounded-md border-solid border-[#aa72e5] sm:border-b-[5px] md:border-b-[5px] lg:border-b-[8px] xl:border-b-[10px]"
                : "hover:rounded-md hover:border-solid hover:border-[#aa72e5] hover:md:border-b-[5px] hover:lg:border-b-[8px] hover:xl:border-b-[10px]"
            }`}
            style={{
              transformOrigin: "0 0",
              transform: "rotate(0deg) scale(1, 1)",
            }}
          >
            <div className="text-[#aa72e5] text-center font-['KaushanScript-Regular',_sans-serif]  md:text-lg lg:text-xl xl:text-2xl  font-normal relative">
              Service
            </div>
          </Link>
          <Link
            to="/contact"
            className={`flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative hidden sm:flex ${
              pageName === "contact"
                ? "rounded-md border-solid border-[#aa72e5] sm:border-b-[5px] md:border-b-[5px] lg:border-b-[8px] xl:border-b-[10px]"
                : "hover:rounded-md hover:border-solid hover:border-[#aa72e5] hover:md:border-b-[5px] hover:lg:border-b-[8px] hover:xl:border-b-[10px]"
            }`}
            style={{
              transformOrigin: "0 0",
              transform: "rotate(0deg) scale(1, 1)",
            }}
          >
            <div className="text-[#aa72e5] text-center font-['KaushanScript-Regular',_sans-serif]  md:text-lg lg:text-xl xl:text-2xl  font-normal relative">
              Contact
            </div>
          </Link>
          <div className="sm:hidden">
            <button onClick={toggleOpen}>
              {isOpen ? (
                <X color="#aa72e5" size={32} />
              ) : (
                <Menu color="#aa72e5" size={32} />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div class="self-center">
          <div class="flex flex-col gap-4 items-end justify-center relative">
          <Link
            to="/"
            className={`flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative ${
              pageName === ""
                ? "rounded-md border-solid border-[#aa72e5] border-b-[5px] md:border-b-[5px] lg:border-b-[8px] xl:border-b-[10px]"
                : "hover:rounded-md hover:border-solid hover:border-[#aa72e5] hover:border-b-[5px] hover:md:border-b-[5px] hover:lg:border-b-[8px] hover:xl:border-b-[10px]"
            }`}
            style={{
              transformOrigin: "0 0",
              transform: "rotate(0deg) scale(1, 1)",
            }}
          >
            <div
              className="text-[#aa72e5] text-center font-['KaushanScript-Regular',_sans-serif] md:text-lg lg:text-xl xl:text-2xl 
            font-normal relative"
            >
              Home
            </div>
          </Link>
          <Link
            to="/about"
            className={`flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative ${
              pageName === "about"
                ? "rounded-md border-solid border-[#aa72e5] border-b-[5px] md:border-b-[5px] lg:border-b-[8px] xl:border-b-[10px]"
                : "hover:rounded-md hover:border-solid hover:border-[#aa72e5] hover:border-b-[5px] hover:md:border-b-[5px] hover:lg:border-b-[8px] hover:xl:border-b-[10px]"
            }`}
            style={{
              transformOrigin: "0 0",
              transform: "rotate(0deg) scale(1, 1)",
            }}
          >
            <div className="text-[#aa72e5] text-center font-['KaushanScript-Regular',_sans-serif]  md:text-lg lg:text-xl xl:text-2xl  font-normal relative">
              About
            </div>
          </Link>
          <Link
            to="/service"
            className={`flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative ${
              pageName === "service"
                ? "rounded-md border-solid border-[#aa72e5] border-b-[5px] md:border-b-[5px] lg:border-b-[8px] xl:border-b-[10px]"
                : "hover:rounded-md hover:border-solid hover:border-[#aa72e5] hover:border-b-[5px] hover:md:border-b-[5px] hover:lg:border-b-[8px] hover:xl:border-b-[10px]"
            }`}
            style={{
              transformOrigin: "0 0",
              transform: "rotate(0deg) scale(1, 1)",
            }}
          >
            <div className="text-[#aa72e5] text-center font-['KaushanScript-Regular',_sans-serif]  md:text-lg lg:text-xl xl:text-2xl  font-normal relative">
              Service
            </div>
          </Link>
          <Link
            to="/contact"
            className={`flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative ${
              pageName === "contact"
                ? "rounded-md border-solid border-[#aa72e5] border-b-[5px] md:border-b-[5px] lg:border-b-[8px] xl:border-b-[10px]"
                : "hover:rounded-md hover:border-solid hover:border-[#aa72e5] hover:border-b-[5px] hover:md:border-b-[5px] hover:lg:border-b-[8px] hover:xl:border-b-[10px]"
            }`}
            style={{
              transformOrigin: "0 0",
              transform: "rotate(0deg) scale(1, 1)",
            }}
          >
            <div className="text-[#aa72e5] text-center font-['KaushanScript-Regular',_sans-serif]  md:text-lg lg:text-xl xl:text-2xl  font-normal relative">
              Contact
            </div>
          </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
