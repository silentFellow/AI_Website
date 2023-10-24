import { AiOutlineClose } from "react-icons/ai"; 
import EventUpdateForm from './EventUpdateForm'; 
import { useState } from "react";

const PopupCard = ({ close, startDate, rules, link, endDate, btn, changed, setChanged, Name, desc, img, id }) => {
  const [editEvent, setEditEvent] = useState(false)
  const startDtDate = new Date(startDate).getDate()
  const startDtMonth = new Date(startDate).getMonth()
  const startDtYear = new Date(startDate).getFullYear()
  const startDt = `${startDtDate}/${startDtMonth}/${startDtYear}`

  const endDtDate = new Date(endDate).getDate()
  const endDtMonth = new Date(endDate).getMonth()
  const endDtYear = new Date(endDate).getFullYear()
  const endDt = `${endDtDate}/${endDtMonth}/${endDtYear}`
  
  return (
    <div>
      <div className="bg-[rgba(0,0,0,.7)]">
        <div className="fixed right-0 top-0 bottom-0 left-0 z-1000 rounded-[15px] w-full sm:w-[900px] h-[600px] bg-white mt-5 ml-5 sm:ml-[300px] border border-blue-600">
          <div className="mt-[30px]">
            <button
              className="float-right flex  justify-center transition duration-300 ease-in-out hover:border border-blue-500 items-center rounded-[5px] bg-blue-100 w-[30px] sm:mr-5 h-[30px] mt-5 sm:mt-0"
              onClick={close}
            >
              <span className="mr-3 m-3 mb-2 flex justify-center items-center">
                <AiOutlineClose className="flex justify-center text-gray-800 -mt-[5px]" />
              </span>
            </button>
          </div>

          <h3 className="text-center mt-5 text-3xl">{Name}</h3>
          <div className="border-3 border-black"></div>
          <div className="flex flex-col justify-start ml-5 sm:ml-[100px] mr-5 sm:mr-[100px] h-[400px] mt-5 sm:mt-[30px]">
            <div className="flex justify-center space-x-4 sm:space-x-20 mt-5">
              <p>Start Date: {startDt}</p>
              <p>End Date: {endDt}</p>
            </div>
            <h3 className="text-2xl mt-10">Rules:</h3>
            <p className="m-5 text-left overflow-auto">{rules}</p>
          </div>
          <button
            className="float-right mt-5 sm:mr-10 bg-blue-500 text-white rounded-full py-2 px-4"
            onClick={() => {
              if(btn == 'Register Now') {
                window.open(link, "_blank")
              }
              else {
                setEditEvent(true)
              }
            }}
          >
            Register Now
          </button>
        </div>
      </div>
      <section className={`${editEvent ? "absolute top-0 left-0 flex justify-center items-center min-h-screen w-screen z-40 bg-primary" : 'hidden'}`}>
        <EventUpdateForm 
          editEvent={editEvent} 
          setEditEvent={setEditEvent} 
          changed={changed} 
          setChanged={setChanged} 
          name={Name} 
          rules={rules} 
          link={link} 
          date={endDate} 
          description={desc} 
          image={img} 
          id={id} 
        />
          </section>
    </div>
  );
};

export default PopupCard;
