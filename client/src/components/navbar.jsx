
const Navbar = () =>{

    return(
      <div className="flex">
        <ul className="flex flex-evenly space-x-10 text-2xl ml-[5rem] mt-2">
          <li>Home</li>
          <li>Events</li>
          <li>Contact Us</li>
        </ul>
        <li className="list-none text-2xl mt-2  ml-[200px]">Login</li>
      </div>
    )
}

export default Navbar