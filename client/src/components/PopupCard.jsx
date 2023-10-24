import { AiOutlineClose } from "react-icons/ai";

const PopupCard = ({ close, startDate, rules, link, endDate, btn }) => {
  return (
    <div>
      <div className=" bg-[rgba(0,0,0,.7)]">
        <div
          className="fixed right-0 top-0 bottom-0 left-0 z-1000 rounded-[15px] w-[900px] h-[600px] bg-white mt-[20px] ml-[300px]
            border border-blue-600 "
        >
          <button
            className="float-right flex justify-center transition duration-300 ease-in-out hover:border border-blue-500 item-center rounded-[5px] bg-blue-100 w-[30px]  mr-5 h-[30px] mt-5"
            onClick={close}
          >
            <span className="mr-3  m-3 flex justify-center item-center ">
              <AiOutlineClose className="flex justify-center text-gray-800 -mt-[5px]" />
            </span>
          </button>

          <h3 className="text-center mt-5 text-3xl">Event Name</h3>
          <div className="border-3 border-black"></div>
          <div className="flex flex-col justify-start ml-[100px] mr-[100px] h-[400px] mt-[30px] ">
            <div className="flex justify-center space-x-20 mt-5">
              <p>Start Date: {startDate}</p>
              <p>End Date: {endDate}</p>
            </div>
            <h3 className="text-2xl mt-10">Rules:</h3>
            <p className="m-5 text-left">{rules}</p>
          </div>
          <button
            className="float-right mr-10 bg-blue-500 text-white rounded-full  py-2 px-4"
            onClick={() => window.open(link, "_blank")}
          >
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
