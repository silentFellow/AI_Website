import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <button className="bg-black p-3">
      <Link to='/admin/login'><span className='text-white'>AdminLogin</span></Link>
    </button>
  )
}

export default Home