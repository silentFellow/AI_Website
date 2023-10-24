import React, { useEffect, useState } from 'react'
import Card from "../components/Card"
import userApi from '../api/app.jsx'
import Footer from "../components/Footer"
import img from "../assets/ai.png"
import img1 from "../assets/peakpx.jpg"
import { Link } from 'react-router-dom'

const Home = () => {

  const[events,setEvents] = useState([])

  useEffect (() => {
    const getEvents = async() => {

      try{
        const Events = await userApi.get('/events')
        setEvents(Events.data)

      } catch(e){
        console.log(e)
      }
      }

  },[])

  return (
    <div className="flex flex-col max-w-full bg-home-bg">
      <div className=" flex justify-end">
        <section className="ellipses bg-blue-400 h-[650px] w-[900px] ">
        
          <img src={img} alt="Ai logo" className="w-[700px] mr-[200px] -mt-[80px] bg-transparent" />
        </section>
        
      </div>
      <h3 className="flex justify-center mt-9 mb-4 text-5xl">On Going Events</h3>
      <Card
        Name={"Event  Name"}
        desc={
          "AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines, allowing them to perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and problem-solving. AI systems are designed to analyze data, learn from it, and make informed decisions or predictions based on that data."
        }
        btn={"Register Now"} endDate={'2/5/2023'} startDate={'12/12/12'} link={'https://youtube.com'} img={img1}
      />

      

      {events.map(event => (
        <Card Name={event.name} rules={event.rules} img={event.image} desc={event.description}
        link={event.link} startDate={event.postedAt} endDate={event.expireAt}/>
      ))}


        <Footer/>
    </div>
  );
}

export default Home