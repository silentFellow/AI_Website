import React from 'react'
import Card from "../components/Card"
import img from "../assets/ai.png"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col max-w-full">
      <div className="border border-black flex justify-start">
        <section className="ellipses bg-blue-400 h-[650px] w-[900px] ">
          <Link to='/admin/details'
            className='p-3 text-[1.2rem] bg-ascent rounded-lg text-primary absolute right-[15rem] hover:opacity-75 mt-6'
          >
            LOGIN
          </Link>
          <img src={img} alt="Ai logo" className="w-[700px] mr-[200px] -mt-[80px] bg-transparent" />
        </section>
        
      </div>
      <Card
        Name={"Event  Name"}
        desc={
          "AI, or Artificial Intelligence, refers to the simulation of human intelligence in machines, allowing them to perform tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and problem-solving. AI systems are designed to analyze data, learn from it, and make informed decisions or predictions based on that data."
        }
        btn={'Register Now'}
      />

    </div>
  );
}

export default Home