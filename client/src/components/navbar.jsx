import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex bg-transparent">
      <ul className="flex  space-x-10 text-2xl ml-[5rem] mt-2 bg-transparent">
        <li className="bg-transparent cursor-pointer">
          <Link className="bg-transparent" to={"admin/login"}>
            Home
          </Link>
        </li>
        <li className="bg-transparent cursor-pointer">Events</li>
        <li className="bg-transparent cursor-pointer">Contact Us</li>
      </ul>
      <li className="list-none text-2xl mt-2 bg-transparent ml-[200px] cursor-pointer">
        <Link className="bg-transparent" to={"admin/login"}>
          login
        </Link>
      </li>
    </div>
  );
};

export default Navbar;

