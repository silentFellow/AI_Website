import img from "../assets/peakpx.jpg"

const Card = ({Name,btn,desc,rules}) => {

    return (
      <div>
        <section className="flex flex-col mb-9">
          <h3 className="flex justify-center mt-9 text-[30px]">
            On Going Events
          </h3>
          <div className="flex  mt-9 ml-[300px] border border-black w-[900px] h-[500px]">
            <div className="flex ml-[20px] mt-[20px] ">
              <img src={img} alt="" className="w-[300px] h-[400px]" />
            </div>
            <div className="flex flex-col  items-center  ml-9 w-[500px]">
              <h3 className="text-2xl mt-4">{Name}</h3>
              <p className="mt-[50px] m-8">{desc}</p>
              <button class="bg-blue-500 text-white rounded-full py-2 px-4">
                {btn}
              </button>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Card