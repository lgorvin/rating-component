import React, { useState } from "react";
import NewCard from "./newcard";

function Card() {
  const [btnColor, setBtnColor] = useState(false);
  const handleClick = () => {
    setBtnColor(!btnColor);
  };
  const [btnColor2, setBtnColor2] = useState(false);
  const handleClick2 = () => {
    setBtnColor2(!btnColor2);
  };
  const [btnColor3, setBtnColor3] = useState(false);
  const handleClick3 = () => {
    setBtnColor3(!btnColor3);
  };
  const [btnColor4, setBtnColor4] = useState(false);
  const handleClick4 = () => {
    setBtnColor4(!btnColor4);
  };
  const [btnColor5, setBtnColor5] = useState(false);
  const handleClick5 = () => {
    setBtnColor5(!btnColor5);
  };

  let counter = 0;

  const [submit, setSubmit] = useState(false);
  const submitClick = () => setSubmit(!submit);

  return (
    <div>
      {!submit ? (
        <div></div>
      ) : (
        <NewCard
          counter={counter}
          btnColor={btnColor}
          btnColor2={btnColor2}
          btnColor3={btnColor3}
          btnColor4={btnColor4}
          btnColor5={btnColor5}
        />
      )}

      <div className="flex justify-center items-center h-screen">
        <div className="h-[350px] w-[350px] rounded-2xl darkBlueBg">
          <ul className="px-6 py-6">
            <li className="mr-6 inline-block h-[40px] w-[40px] circle bg-slate-700">
              {/* <p className="lightGray text-center mt-2">1</p> */}
              <svg
                width="17"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-3 ml-3"
              >
                <path
                  d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
                  fill="#FC7614"
                />
              </svg>
            </li>
          </ul>

          <div>
            <h1 className="text-white text-2xl px-7 font-bold">
              How did we do?
            </h1>
            <p className="lightGray text-sm px-7 py-3">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <div>
            <ul className="px-6 py-2">
              <li
                onClick={handleClick}
                className={
                  !btnColor
                    ? "mr-6 inline-block h-[40px] w-[40px] hover:bg-slate-500 duration-300 circle bg-slate-700 cursor-pointer "
                    : "mr-6 inline-block h-[40px] w-[40px] circle bg-orange-600 cursor-pointer"
                }
              >
                <p className="text-white font-bold text-center mt-2">1</p>
              </li>
              <li
                onClick={handleClick2}
                className={
                  !btnColor2
                    ? "mr-6 inline-block h-[40px] w-[40px] hover:bg-slate-500 duration-300 circle bg-slate-700 cursor-pointer"
                    : "mr-6 inline-block h-[40px] w-[40px] circle bg-orange-600 cursor-pointer"
                }
              >
                <p className="text-white font-bold text-center mt-2">2</p>
              </li>
              <li
                onClick={handleClick3}
                className={
                  !btnColor3
                    ? "mr-6 inline-block h-[40px] w-[40px] hover:bg-slate-500 duration-300 circle bg-slate-700 cursor-pointer"
                    : "mr-6 inline-block h-[40px] w-[40px] circle bg-orange-600 cursor-pointer"
                }
              >
                <p className="text-white font-bold text-center mt-2">3</p>
              </li>
              <li
                onClick={handleClick4}
                className={
                  !btnColor4
                    ? "mr-6 inline-block h-[40px] w-[40px] hover:bg-slate-500 duration-300 circle bg-slate-700 cursor-pointer"
                    : "mr-6 inline-block h-[40px] w-[40px] circle bg-orange-600 cursor-pointer"
                }
              >
                <p className="text-white font-bold text-center mt-2">4</p>
              </li>
              <li
                onClick={handleClick5}
                className={
                  !btnColor5
                    ? "inline-block h-[40px] w-[40px] hover:bg-slate-500 duration-300 circle bg-slate-700 cursor-pointer"
                    : "inline-block h-[40px] w-[40px] circle bg-orange-600 cursor-pointer"
                }
              >
                <p className="text-white font-bold text-center mt-2">5</p>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center my-4">
            <button
              onClick={submitClick}
              className="text-white hover:bg-orange-400 active:text-orange-600 text-sm orangeBg active:bg-white leading-6 rounded-3xl px-[122px] py-2"
            >
              S U B M I T
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
