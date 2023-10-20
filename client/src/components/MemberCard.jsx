import React from 'react'

const MemberCard = () => {
  return (
    <main className='h-[70%] w-[70%] m-auto mt-3 bg-ascent p-4 rounded-lg flex justify-between items-center'>
      <section className="w-1/3 flex items-center justify-between m-2">
        <span className="text-primary text-[1.2rem]">Gowtham.S</span>
        <span className="text-primary text-[1.2rem]">:</span>
        <span className="text-primary text-[1.2rem]">Admin</span>
      </section>

      <section className="w-[70%] m-2 flex justify-end">
        <button
          className='p-2 bg-secondary text-primary rounded-lg cursor-pointer hover:opacity-80' 
          onClick={console.log('hi')}
        >
          Add Event
        </button>
      </section>
    </main>
  )
}

export default MemberCard