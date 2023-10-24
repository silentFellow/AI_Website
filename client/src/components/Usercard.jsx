import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import userApi from '../api/app'

const Usercard = ( {userName, role, changed, setChanged} ) => {

  const deleteUser = async () => {
    try {
      await userApi.delete(`/users/remove/${userName}`)
      setChanged(!changed)
    }
    catch(e) {
      console.log(e)
    }
  }

  return (
    <div className="h-[8.1rem] w-full md:w-[90%] bg-green-800 rounded-lg flex mt-4">
      <section className="h-full w-[69%] p-3 flex  flex-col justify-center items-center">
        <div className="text-[1.2rem] text-primary opacity-80">{userName}</div>
        <div className="text-[1.2rem] mt-1 text-primary opacity-80">({role})</div>
      </section>
      <section className="w-[31%] flex justify-center items-center">
        <RiDeleteBin6Line 
          onClick={deleteUser}
          className='text-[3.6rem] p-3 cursor-pointer text-primary'
        />
      </section>
    </div>
  )
}

export default Usercard