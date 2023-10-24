import React, { useState } from "react";
import PopupCard from "./PopupCard";
import { Link } from "react-router-dom";

const Card = ({Name,btn,desc,rules,img,link,startDate,endDate}) => {

    const[popup,setPopup] = useState(false)

    const onClose = ()=>{setPopup(!popup)}
    return (
      <div>
        {popup && <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <PopupCard close={onClose} startDate={startDate} endDate={endDate} rules={rules} btn={btn}
              link={link}/>
          </div>
        </div>}
        <section className="flex flex-col mb-9 ">
          <div className="flex rounded-[15px]  mt-[50px] ml-[300px] bg-white w-[1000px] h-[400px] transition duration-300 ease-in-out border border-bg-home hover:border-blue-500">
            
            <div className="flex ml-[20px] bg-transparent mt-[20px] ">
              <img
                src={img}
                alt=""
                className="w-[300px] h-[350px] rounded-lg"
              />
            </div>
            <div className="flex flex-col bg-transparent  items-center  ml-[80px] w-[500px]">
              <h3 className="text-2xl bg-transparent mt-4">{Name}</h3>
              <span className="border-1 border-blue rounded-full w-full h-1 mt-3 bg-slate-800"></span>
              <p className="mt-[50px] bg-transparent m-8">{desc}</p>
              <span className="flex flex-row bg-transparent items-center">
                <p className="mr-[100px] align-center text-px bg-transparent">
                  End date: {endDate}
                </p>
                <button className="bg-blue-500 text-white rounded-full ml-[50px] py-2 px-4"
                    onClick={() => setPopup(true)}>
                  Know More
                </button>
              </span>
              
            </div>
          </div>
        </section>
      </div>
    );
}

export default Card