import React from 'react'
 import Navbar from '../components/navbar'
import Card from "../components/Card"
import img from "../assets/ai.png"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col max-w-full bg-home-bg">
      <div className="border border-black flex justify-end">
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
        btn={"Register Now"} endDate={'2/5/2023'}
      />
    </div>
  );
}

export default Home