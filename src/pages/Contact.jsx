import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

const Contact = ({ cookies, updateCookieValue }) => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data?.FirstName === "") {
      showErrorAlert(
        "First Name is Incorrect",
        "Please enter a valid first name again",
        2000
      );
    } else if (data?.LastName === "") {
      showErrorAlert(
        "Last Name is Incorrect",
        "Please enter a valid last name again",
        2000
      );
    } else if (data?.Email === "") {
      showErrorAlert(
        "Email is Incorrect",
        "Please enter a valid email again",
        2000
      );
    } else if (data?.Phone === "") {
      showErrorAlert(
        "Phone is Incorrect",
        "Please enter a valid phone number again",
        2000
      );
    } else if (data?.Message === "") {
      showErrorAlert(
        "Message is Incorrect",
        "Please enter a valid message again",
        2000
      );
    } else {
      console.log(data);
      emailSend(data);
    }
  };

  const showErrorAlert = (title, text, time) => {
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

  const emailSend = (data) => {
    const form = document.createElement('form');
    form.id = 'myForm';
      Object.keys(data).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = data[key];
      form.appendChild(input);
    });
      document.body.appendChild(form);

    emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, form, process.env.REACT_APP_KEY).then(
      (response) => {
        sendEmail("Email Sent", "Your email has been sent. We will contact you shortly.", "success", "2000");
      },
      (error) => {
        sendEmail("Something Didn't Work", "Please try again later.", "error", "2000");
      },      
    )
    document.body.removeChild(form);
  }
  const sendEmail = (title, text, icon, time) => {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      timer: time,
      timerProgressBar: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      customClass: {
        container: "bg-opacity-50 backdrop-filter backdrop-blur-lg",
        popup: "bg-white shadow-lg",
        title: icon === "error" ? "text-red-600" : "text-green-600",
        text: "text-gray-800",
        confirmButton:
          "bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
      },
    });
  };
  
  return (
    <div class="bg-[#ffffff] pr-2 pl-2 sm:pr-5 sm:pl-5 md:pr-10 md:pl-10 gap-4 flex flex-col h-dvh justify-between items-start relative">
      <NavBar pageName={"contact"} />

      <div class="flex flex-col md:flex-row items-start justify-start self-stretch shrink-0 relative">
        <div class="flex flex-col items-center justify-between self-stretch flex-1 relative">
          <div class="shrink-0 h-[370px] sm:h-[400px] xl:h-[auto] xl:w-[auto]">
            <div
              class="bg-[#aa72e5] rounded-tl-[195px] rounded-tr-[285px] rounded-br-[365px] rounded-bl-[198px] w-[97%] md:h-[82%] lg:h-[97%] 
            xl:w-[98%] xl:h-[92%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%]"
            ></div>
          </div>
          <div
            class="flex flex-col gap-2.5 items-center justify-center shrink-0 w-[200px] sm:w-[300px] xl:w-[400px] h-7 sm:h-10 absolute left-30 md:left-24 
          lg:left-20 top-14"
          >
            <div class="bg-[#9771c2] rounded-[160px] self-stretch flex-1 relative"></div>
          </div>
          <div
            class="text-[#443f76] text-center font-['KeaniaOne-Regular',_sans-serif] text-2xl md:text-3xl font-normal absolute left-30 top-20
            sm:left-30 sm:top-24 lg:left-20 xl:left-44"
          >
            SocialLens
          </div>
          <svg
            class="shrink-0 overflow-visible absolute w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] left-6 top-[150px] sm:left-[30px] 
             md:left-[20px] lg:left-[25px] xl:left-[42px]"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.0001 6.66666C17.6459 6.66666 11.6667 12.6458 11.6667 20C11.6667 23.8208 14.0276 29.42 16.7751 34.2517C18.1501 36.6675 19.6267 38.865 21.0042 40.4933C21.3709 40.9275 21.7309 41.3183 22.0834 41.6667H12.5001C12.2791 41.6667 12.0671 41.7545 11.9108 41.9107C11.7545 42.067 11.6667 42.279 11.6667 42.5C11.6667 42.721 11.7545 42.933 11.9108 43.0893C12.0671 43.2455 12.2791 43.3333 12.5001 43.3333H37.5001C37.7211 43.3333 37.9331 43.2455 38.0893 43.0893C38.2456 42.933 38.3334 42.721 38.3334 42.5C38.3334 42.279 38.2456 42.067 38.0893 41.9107C37.9331 41.7545 37.7211 41.6667 37.5001 41.6667H27.9167C28.2692 41.3192 28.6284 40.9275 28.9959 40.4933C30.3734 38.865 31.8501 36.6675 33.2242 34.2517C35.9726 29.42 38.3334 23.8208 38.3334 20C38.3334 12.6458 32.3542 6.66666 25.0001 6.66666ZM25.0001 8.33333C31.4534 8.33333 36.6667 13.5467 36.6667 20C36.6667 23.0833 34.4442 28.7333 31.7751 33.4258C30.4417 35.7725 29.0017 37.9058 27.7234 39.4175C27.0842 40.1725 26.4826 40.7725 25.9851 41.1567C25.4876 41.5408 25.0917 41.6667 25.0001 41.6667C24.9084 41.6667 24.5134 41.5417 24.0151 41.1567C23.5167 40.7717 22.9167 40.1733 22.2776 39.4175C20.9984 37.9058 19.5592 35.7725 18.2242 33.4258C15.5559 28.7333 13.3334 23.0825 13.3334 20C13.3334 13.5467 18.5467 8.33333 25.0001 8.33333Z"
              fill="#443F76"
            />
            <path
              d="M24.9999 15.8333C22.7083 15.8333 20.8333 17.7083 20.8333 20C20.8333 22.2917 22.7083 24.1667 24.9999 24.1667C27.2916 24.1667 29.1666 22.2917 29.1666 20C29.1666 17.7083 27.2916 15.8333 24.9999 15.8333ZM24.9999 17.5C26.3908 17.5 27.4999 18.6092 27.4999 20C27.4999 21.3908 26.3908 22.5 24.9999 22.5C23.6091 22.5 22.4999 21.3908 22.4999 20C22.4999 18.6092 23.6091 17.5 24.9999 17.5Z"
              fill="#443F76"
            />
          </svg>
          <svg
            class="shrink-0 overflow-visible absolute w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] left-6 top-[220px] sm:left-[30px]
            md:left-[20px] lg:left-[25px] xl:left-[42px]"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.631 46.5879C33.8565 46.5885 32.1127 46.1256 30.5723 45.2448L30.3551 45.1224C20.3399 39.3934 11.961 31.192 6.01889 21.3017L4.88613 19.4138C3.72594 17.4837 3.24518 15.2208 3.52047 12.9857C3.79575 10.7506 4.81124 8.67195 6.40509 7.08103L8.66199 4.82414C10.5585 2.92759 13.643 2.92759 15.5379 4.82414L20.5103 9.79655C21.2586 10.5484 21.7415 11.5237 21.8859 12.5746C22.0302 13.6255 21.8281 14.6949 21.3103 15.6207L19.4413 18.9397C19.402 19.0095 19.3867 19.0902 19.3976 19.1696C19.4084 19.249 19.445 19.3226 19.5016 19.3793L30.5723 30.45C30.6299 30.5064 30.7042 30.5426 30.7841 30.5532C30.864 30.5637 30.9452 30.5481 31.0154 30.5086L34.3292 28.6414L34.331 28.6397C35.2569 28.1223 36.3261 27.9206 37.3769 28.0649C38.4277 28.2093 39.4029 28.6918 40.1551 29.4397L45.1292 34.4155C47.0258 36.3121 47.0258 39.3966 45.1292 41.2914L42.7723 43.6466C41.8337 44.5821 40.7198 45.3234 39.4944 45.8281C38.2691 46.3328 36.9562 46.591 35.631 46.5879ZM12.0999 6.85C11.7379 6.85 11.3758 6.98793 11.0999 7.26379L8.84302 9.51897C7.79401 10.5661 7.12564 11.9342 6.94441 13.4053C6.76318 14.8764 7.07952 16.3658 7.84302 17.6362L8.97578 19.5241C14.6122 28.9064 22.5601 36.6869 32.0603 42.1224L32.2775 42.2448C34.9085 43.75 38.2189 43.3241 40.3327 41.2069L42.6896 38.8517C42.8209 38.7204 42.9252 38.5645 42.9963 38.393C43.0674 38.2214 43.104 38.0375 43.104 37.8517C43.104 37.666 43.0674 37.4821 42.9963 37.3105C42.9252 37.1389 42.8209 36.983 42.6896 36.8517L37.7154 31.8759C37.4965 31.6582 37.2126 31.518 36.9067 31.4763C36.6009 31.4346 36.2898 31.4938 36.0206 31.6448L32.7068 33.5121C31.9802 33.9189 31.1408 34.0778 30.3158 33.9649C29.4908 33.852 28.725 33.4733 28.1344 32.8862L17.0637 21.8155C16.476 21.2257 16.0969 20.4601 15.9839 19.6352C15.871 18.8102 16.0303 17.9709 16.4379 17.2448L18.3068 13.9276C18.457 13.6583 18.5155 13.3475 18.4735 13.0421C18.4315 12.7367 18.2913 12.4532 18.0741 12.2345L13.0999 7.26379C12.9687 7.13238 12.8128 7.02817 12.6412 6.95716C12.4696 6.88615 12.2856 6.84973 12.0999 6.85Z"
              fill="#443F76"
            />
          </svg>
          <svg
            class="shrink-0 overflow-visible absolute w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] left-6 top-[290px] sm:left-[30px] 
            md:left-[20px] lg:left-[25px] xl:left-[42px]"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.4582 8.07617H6.54517C5.25062 8.07765 4.00951 8.59256 3.09412 9.50794C2.17874 10.4233 1.66383 11.6644 1.66235 12.959V37.041C1.66383 38.3356 2.17874 39.5767 3.09412 40.4921C4.00951 41.4074 5.25062 41.9223 6.54517 41.9238H43.4581C44.7526 41.9223 45.9937 41.4074 46.9091 40.4921C47.8245 39.5767 48.3394 38.3356 48.3409 37.041V12.959C48.3394 11.6644 47.8246 10.4233 46.9092 9.50792C45.9938 8.59253 44.7527 8.07762 43.4582 8.07617ZM34.7765 24.9934L46.3878 15.8803V36.2648L34.7765 24.9934ZM6.54517 10.0293H43.4581C44.2348 10.0302 44.9795 10.3391 45.5287 10.8884C46.0779 11.4376 46.3869 12.1823 46.3877 12.959V13.3975L27.5977 28.1453C26.9107 28.6816 26.064 28.9726 25.1924 28.9719C24.3209 28.9712 23.4746 28.6788 22.7885 28.1414L3.61548 13.3937V12.959C3.61636 12.1823 3.9253 11.4376 4.47453 10.8884C5.02377 10.3391 5.76843 10.0302 6.54517 10.0293ZM15.5723 25.0547L3.61548 36.3042V15.8578L15.5723 25.0547ZM43.4582 39.9707H6.54517C6.04501 39.9704 5.55325 39.8421 5.1167 39.598C4.68016 39.3539 4.31336 39.0021 4.05122 38.5762L17.1405 26.2617L21.5918 29.6855C22.6213 30.4897 23.8902 30.9263 25.1965 30.926C26.5028 30.9256 27.7714 30.4883 28.8004 29.6837L33.2261 26.2109L45.9571 38.5684C45.6954 38.9965 45.3282 39.3502 44.8907 39.5958C44.4531 39.8413 43.9599 39.9704 43.4582 39.9707Z"
              fill="#443F76"
            />
          </svg>
          <div
            class="text-[#000000] text-center font-['KeaniaOne-Regular',_sans-serif] font-normal absolute text-base sm:text-xl md:text-2xl xl:text-3xl left-20 
            top-[160px] sm:left-24 md:left-20 xl:left-[110px]"
          >
            Bulevardul I. C. Brătianu 48, Pitești
          </div>
          <div
            class="text-[#000000] text-center font-['KeaniaOne-Regular',_sans-serif] font-normal absolute text-base sm:text-xl md:text-2xl xl:text-3xl left-20 top-[230px] 
            sm:left-24 xl:left-[110px]  md:left-20 "
          >
            (+40) 760000000
          </div>
          <div
            class="ttext-[#000000] text-center font-['KeaniaOne-Regular',_sans-serif] font-normal absolute text-base sm:text-xl md:text-2xl xl:text-3xl left-20 top-[300px] 
            sm:left-24 xl:left-[110px]  md:left-20"
          >
            SocialLens@gamil.com
          </div>
        </div>

        <div class="flex flex-col items-center justify-start self-stretch flex-1 relative">
          <div class="text-[#000000] text-center font-['KaushanScript-Regular',_sans-serif] text-3xl font-normal relative">
            Contact
          </div>
          <form id="myForm"
            onSubmit={handleSubmit(onSubmit)}
            class="flex flex-col gap-2 md:gap-3 items-center justify-center self-stretch shrink-0 relative"
          >
            <div class="flex flex-col gap-2 md:gap-3 items-start justify-center self-stretch shrink-0 relative">
              <div class="flex flex-row gap-2 md:gap-3 items-start justify-center self-stretch shrink-0 h-[84px] relative">
                <div class="self-stretch flex-1 relative overflow-hidden">
                  <div class="text-[#000000] text-left font-['Inter-Regular',_sans-serif] text-sm leading-7 font-normal absolute right-[0%] left-[0%] w-[100%] bottom-[65.48%] top-[1.19%] h-[33.33%]">
                    First Name
                  </div>
                  <div class="bg-[#ffffff] rounded-[36px] border-solid border-[#e2e1e5] border pt-2.5 pr-[15px] pb-2.5 pl-[15px] flex flex-col gap-0 items-start justify-start w-[100%] absolute right-[0%] left-[0%] top-7">
                    <input
                      {...register("FirstName", {
                        minLength: { value: 7, message: "error message" },
                        maxLength: { value: 20, message: "error message" },
                      })}
                      class="text-[#443F76] text-left font-['Inter-Regular',_sans-serif] text-sm leading-7 font-normal relative self-stretch w-full"
                    />
                  </div>
                </div>
                <div class="self-stretch flex-1 relative overflow-hidden">
                  <div class="text-[#000000] text-left font-['Inter-Regular',_sans-serif] text-sm leading-7 font-normal absolute right-[0%] left-[0%] w-[100%] bottom-[65.48%] top-[1.19%] h-[33.33%]">
                    Last Name
                  </div>
                  <div class="bg-[#ffffff] rounded-[36px] border-solid border-[#e2e1e5] border pt-2.5 pr-[15px] pb-2.5 pl-[15px] flex flex-col gap-0 items-start justify-start w-[100%] absolute right-[0%] left-[0%] top-7">
                    <input
                      {...register("LastName", { minLength: 7, maxLength: 20 })}
                      class="text-[#443F76] text-left font-['Inter-Regular',_sans-serif] text-sm leading-7 font-normal relative w-full"
                    />
                  </div>
                </div>
              </div>
              <div class="self-stretch shrink-0 h-[84px] relative overflow-hidden">
                <div class="text-[#000000] text-left font-['Inter-Regular',_sans-serif] text-sm leading-7 font-normal absolute right-[0%] left-[0%] w-[100%] bottom-[65.48%] top-[1.19%] h-[33.33%]">
                  Email
                </div>
                <div class="bg-[#ffffff] rounded-[36px] border-solid border-[#e2e1e5] border pt-2.5 pr-[15px] pb-2.5 pl-[15px] flex flex-col gap-0 items-start justify-start w-[100%] absolute right-[0%] left-[0%] top-7 ">
                  <input
                    type="email"
                    {...register("Email", { pattern: /^\S+@\S+\.\S+$/ })}
                    class="text-[#443F76] text-left font-['Inter-Regular',_sans-serif] text-sm leading-7 font-normal relative w-full"
                  />
                </div>
              </div>
              <div class="self-stretch shrink-0 h-[84px] relative overflow-hidden">
                <div class="text-[#000000] text-left font-['Inter-Regular',_sans-serif] text-sm leading-7 font-normal absolute right-[0%] left-[0%] w-[100%] bottom-[65.48%] top-[1.19%] h-[33.33%]">
                  Phone
                </div>
                <div class="bg-[#ffffff] rounded-[36px] border-solid border-[#e2e1e5] border pt-2.5 pr-[15px] pb-2.5 pl-[15px] flex flex-col gap-0 items-start justify-start w-[100%] absolute right-[0%] left-[0%] top-7">
                  <input
                    type="phone"
                    {...register("Phone", { minLength: 10, maxLength: 10 })}
                    class="text-[#443F76] text-left font-['Inter-Regular',_sans-serif] text-sm leading-7 font-normal relative w-full"
                  />
                </div>
              </div>
              <div class="self-stretch shrink-0 h-[84px] relative overflow-hidden">
                <div class="text-[#000000] text-left font-['Inter-Regular',_sans-serif] text-sm leading-7 font-normal absolute right-[0%] left-[0%] w-[100%] bottom-[65.48%] top-[1.19%] h-[33.33%]">
                  Message
                </div>
                <div class="bg-[#ffffff] rounded-[36px] border-solid border-[#e2e1e5] border pt-2.5 pr-[15px] pb-2.5 pl-[15px] flex flex-col gap-0 items-start justify-start w-[100%] absolute right-[0%] left-[0%] top-7 ">
                  <input
                    {...register("Message", {
                      minLength: 1,
                      maxLength: 2000000,
                    })}
                    class="text-[#443F76] text-left font-['Inter-Regular',_sans-serif] text-sm leading-7 font-normal relative w-full"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              class="bg-[#ffffff] rounded-[20px] border-solid border-[rgba(68,63,118,0.38)] border-t-[5px] border-r-[5px] 
            border-b-[10px] border-l-[5px] flex flex-row items-center justify-between shrink-0 w-[100px] h-[50px] sm:w-[110px] sm:h-[60px] md:w-[150px] 
            md:h-[70px] relative overflow-hidden"
            >
              <div class="text-[#000000] text-center font-['KeaniaOne-Regular',_sans-serif] text-lg sm:xl md:text-3xl font-normal relative flex-1">
                Send
              </div>
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
