import React, { useState } from "react";
import PopupCard from "./PopupCard"; 

const Card = ({ Name, btn, desc, rules, img, link, startDate, endDate, changed, setChanged, id }) => {
  const [popup, setPopup] = useState(false);
  const endDtDate = new Date(endDate).getDate()
  const endDtMonth = new Date(endDate).getMonth()
  const endDtYear = new Date(endDate).getFullYear()
  const endDt = `${endDtDate}/${endDtMonth}/${endDtYear}`

  const onClose = () => {
    setPopup(!popup);
  };
  return (
    <div>
      {popup && (
        <div className="top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <PopupCard
              close={onClose}
              startDate={startDate}
              endDate={endDate}
              rules={rules}
              btn={btn}
              link={link} 
              changed={changed} 
              setChanged={setChanged} 
              Name={Name} 
              desc={desc} 
              img={img} 
              id={id}
            />
          </div>
        </div>
      )}
      <section>
        <div
          className="flex flex-col items-center bg-white shadow-lg h-[720px] sm:w-full mx-auto mb-5 rounded-[15px]
               sm:flex w-full md:w-full"
        >
          <div className="h-[300px]  rounded-[15px]">
            <img
              className="h-[300px] width-[300px] rounded-[15px] mt-[20px]"
              src={img}
              alt=""
            />
          </div>
          <div className="flex flex-col py-[10px] mt-[25px] items-center w-[340px] h-[330px]  ">
            <h3 className="text-2xl">{Name}</h3>
            <span className="border-2 w-[200px] border-blue-900"></span>
            <p className="mt-[18px] text-center overflow-auto">{desc}</p>
            <p className="mt-[20px]">End Date: {endDt}</p>
          </div>
          <button
            onClick={() => setPopup(true)}
            className="bg-blue-500 mt-3 py-[8px] px-[30px] rounded-full text-white"
          >
            Know More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Card;
