
const PopupCard = ({close, startDate, endDate}) => {
    
    return (
      <div>
        <div className=" bg-[rgba(0,0,0,.7)]">
          <div className="fixed right-0 top-0 bottom-0 left-0 z-1000 rounded-[15px] w-[900px] h-[600px] bg-white mt-[20px] ml-[300px] ">
            <button className="float-right" onClick={close}>
              <span className="mr-3 mt-[5px]">X</span>
            </button>

            <h3 className="text-center mt-5 text-3xl">Event Name</h3>
            <div className="border-3 border-black"></div>
            <div className="flex flex-col justify-start ml-[100px] mr-[100px] h-[400px] mt-[30px] ">
                <div className="flex justify-center space-x-20 mt-5">
                    <p>Start Date: {startDate}</p>
                    <p>End Date: {endDate}</p>
                </div>
              <h3 className="text-2xl mt-10">Rules:</h3>
              <p className="m-5 text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam, sapiente culpa eius ipsam nisi perferendis blanditiis
                officia cum inventore iusto officiis! Voluptatem aut sunt dicta,
                quod perspiciatis vitae. Ab qui placeat impedit recusandae
                libero quaerat quae repellendus porro nesciunt repellat incidunt
                saepe illum tempore, eius facilis quo ad accusamus vero error
                mollitia. Ipsa minima voluptatem ad, fugit beatae dicta iusto?
              </p>
            </div>
            <button className="float-right mr-10 bg-blue-500 text-white rounded-full  py-2 px-4">
              Register Now
            </button>
          </div>
        </div>
      </div>
    );
}

export default PopupCard