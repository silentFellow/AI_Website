import EventUpdateForm from "./EventUpdateForm"; 
import React, { useState } from "react";
import PopupCard from "./PopupCard";
import { Link } from "react-router-dom";

const Card = ({ Name, btn, desc, rules, img, link, startDate, endDate, id, changed, setChanged}) => {
  const [popup, setPopup] = useState(false);
  const [editEvent, setEditEvent] = useState(false)

  const onClose = () => {
    setPopup(!popup);
  };
  return (
    <div>
      {popup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <PopupCard
              close={onClose}
              startDate={startDate}
              endDate={endDate}
              rules={rules}
              btn={btn}
              link={link}
            />
          </div>
        </div>
      )}
      <section>
        <div className="flex flex-col items-center bg-white shadow-lg h-[720px] w-[350px] mx-auto mb-5 rounded-[15px]
              sm:flex flex-row w-screen ">
          <div className="border  h-[300px]  rounded-[15px]">
            <img className="h-[300px] width-[300px] rounded-[15px] mt-[20px]" src={img} alt="" />
          </div>
          <div className="flex flex-col py-[10px] mt-[25px] items-center w-[340px] h-[330px]  ">
            <h3 className="text-2xl">{Name}</h3>
            <span className="border-2 w-[200px] border-blue-900"></span>
            <p className="mt-[18px] text-center">{desc}</p>
            <p className="mt-[20px]">End Date: {endDate}</p>
          </div>
          <button onClick={() => setPopup(true)} className="bg-blue-500 mt-3 py-[8px] px-[30px] rounded-full text-white">Know More</button>
        </div>
      </section>

      <section className={`${editEvent ? "absolute top-0 left-0 flex justify-center items-center min-h-screen w-screen z-40 bg-primary" : 'hidden'}`}>
          <EventUpdateForm 
            editEvent={editEvent} 
            setEditEvent={setEditEvent} 
            changed={changed} 
            setChanged={setChanged} 
            name={Name} 
            link={link} 
            rules={rules} 
            date={endDate} 
            description={desc} 
            image={img} 
            id={id} 
          />
        </section>
    </div>
  );
};

export default Card;