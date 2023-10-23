import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex">
      <ul className="flex justify-between space-x-10 text-2xl ml-[5rem] mt-2">
        <li>Home</li>
        <li>Events</li>
        <li>Contact Us</li>
      </ul>
      <button
        className='cursor-pointer'
      >
        Login
      </button>
    </div>
  )
}

export default Navbar