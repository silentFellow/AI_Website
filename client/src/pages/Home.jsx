import React, { useEffect, useState } from 'react'
import Card from "../components/Card"
import userApi from '../api/app.jsx'
import Footer from "../components/Footer"
import img from "../assets/ai.png"
import img1 from "../assets/peakpx.jpg"
import { Link } from 'react-router-dom'

const Home = () => {

  const [events,setEvents] = useState([])
  const [slideImages, setSlideImages] = useState([img1, img])
  const [imageCounter, setImageCounter] = useState(0)

  useEffect (() => {
    const getEvents = async() => {

      try {
        const Events = await userApi.get('/events')
        setEvents(Events.data)
      } catch(e) {
        console.log(e)
      }

    }
    getEvents()
  },[])
  
  return (
    <div className="flex flex-col max-w-full bg-home-bg">
      <div className="mt-6 flex flex-col sm:flex-row justify-center sm:justify-end">
        <section className="hidden lg:block ellipses bg-blue-100 sm:h-[650px] w-[90%] sm:w-[810px]">
          <img
            src={img}
            alt="AI logo"
            class="w-full mt-[-0.9rem] mr-[90rem] sm:w-[700px] lg:w-[700px] bg-transparent"
          />
        </section>
        <section className="min-h-full w-full max-w-3xl flex flex-col justify-evenly items-center mr-[12rem]">
          <section className="w-[72%] h-[66%] bg-black rounded-md relative">
            <img 
              src={slideImages[imageCounter]} 
              className='h-full w-full'
            />
            <Link to={"admin/login"}>
              <button className="absolute top-6 right-6 bg-transparent text-primary p-2 px-6 rounded-xl text-[20px] cursor-pointer hover:opacity-70 border-2 border-solid border-ascent">
                Login
              </button>
            </Link>
          </section>
        </section>
      </div>

      <h3 className="flex justify-center mt-9 mb-4 text-3xl m-3">
        On Going Events
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          Name={"Event  Name"}
          desc={
            "AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines, allowing them to perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and problem-solving. AI systems are designed to analyze data, learn from it, and make informed decisions or predictions based on that data."
          }
          btn={"Register Now"}
          endDate={"2/5/2023"}
          startDate={"12/12/12"}
          link={"https://youtube.com"}
          img={img1}
        />

        <Card
          Name={"Event  Name"}
          desc={
            "AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines, allowing them to perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and problem-solving. AI systems are designed to analyze data, learn from it, and make informed decisions or predictions based on that data."
          }
          btn={"Register Now"}
          endDate={"2/5/2023"}
          startDate={"12/12/12"}
          link={"https://youtube.com"}
          img={img1}
        />
        <Card
          Name={"Event  Name"}
          desc={
            "AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines, allowing them to perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and problem-solving. AI systems are designed to analyze data, learn from it, and make informed decisions or predictions based on that data."
          }
          btn={"Register Now"}
          endDate={"2/5/2023"}
          startDate={"12/12/12"}
          link={"https://youtube.com"}
          img={img1}
        />
        {events.map((event) => (
        <Card
          Name={event.name}
          desc={event.description} 
          btn={'Register Now'}
          endDate={event.expireAt}
          startDate={event.postedAt}
          link={event.link}
          img={event.image}
          rules={event.rules} 
          key={event._id} 
          id={event._id}
        />
      ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home