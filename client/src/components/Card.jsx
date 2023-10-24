import EventUpdateForm from "./EventUpdateForm"; 
import { useState } from "react";

const Card = ({ id, name, buttonType, image, rules, description, link, endDate, changed, setChanged }) => {
    const [editEvent, setEditEvent] = useState(false)
    return (
      <div>
        <section className="flex flex-col mb-9 mt-6">
          <div className="flex rounded-[15px] bg-white w-[960px] h-[400px]">
            <div className="flex ml-[20px] bg-transparent mt-[20px] ">
              <img
                src={image}
                alt=""
                className="w-[300px] h-[350px] rounded-lg"
              />
            </div>
            <div className="flex flex-col bg-transparent  items-center  ml-[80px] w-[500px]">
              <h3 className="text-2xl bg-transparent mt-4">{name}</h3>
              <span className="border-1 border-blue rounded-full w-full h-1 mt-3 bg-slate-800"></span>
              <p className="mt-[50px] bg-transparent m-8">{description}</p>
              <span className="flex flex-row bg-transparent items-center">
                <p className="mr-[100px] align-center text-px bg-transparent">End date: {endDate}</p>
                {buttonType == 'Register' ? (
                  <button className="bg-blue-500 text-white rounded-full ml-[50px] py-2 px-4">
                    Know More
                  </button>
                ) : (
                  <button 
                    className="bg-blue-500 text-white rounded-full ml-[50px] py-2 px-4"
                    onClick={() => setEditEvent(true)}
                  >
                    Update Now
                  </button>
                )}
              </span>
            </div>
          </div>
        </section>

        <section className={`${editEvent ? "absolute top-0 left-0 flex justify-center items-center min-h-screen w-screen z-40 bg-primary" : 'hidden'}`}>
          <EventUpdateForm 
            editEvent={editEvent} 
            setEditEvent={setEditEvent} 
            changed={changed} 
            setChanged={setChanged} 
            name={name} 
            link={link} 
            rules={rules} 
            date={endDate} 
            description={description} 
            image={image} 
            id={id} 
          />
        </section>
      </div>
    );
}

export default Card