import React from 'react'
import { useRef, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai' 
import userApi from '../api/app'

const EventRegisterForm = ({ setAddEvent, type }) => {

  const [message, setMessage] = useState('')
  const eventNameRef = useRef()
  const linkRef = useRef()
  const rulesRef = useRef()
  const dtRef = useRef()
  const descRef = useRef()

  const eventRegister = async (e) => {
    e.preventDefault()
    const rules = rulesRef.current.value
    const link = linkRef.current.value
    const name = eventNameRef.current.value
    const dt = dtRef.current.value
    const description = descRef.current.value
    if(rules == '' || link == '' || name == '' || dt == 'undefined') {
      setMessage("Enter valid details...")
      return
    }
    try {
      setMessage('Please wait...')
      const res = await userApi.post('/events/add', {
        name, 
        link, 
        description, 
        rules, 
        'expireAt': new Date(dt).toISOString()
      })
      if(res.status == 200) {
        setMessage('')
        setAddEvent(false)
        rulesRef.current.value = '' 
        linkRef.current.value = '' 
        eventNameRef.current.value = '' 
        dtRef.current.value = '' 
      }
      else setMessage('Something went wrong...')
    }
    catch(e) {
      console.log(e)
    }
  }

  return (
    <form className="relative h-screen w-full max-w-5xl bg-primary z-30 rounded-lg p-6 flex flex-col justify-center items-center">
      <AiOutlineClose 
        className='text-[1.8rem] text-red-950 absolute top-6 md:top-12 right-6 md:right-12 font-extrabold cursor-pointer' 
        onClick={() => {
        setAddEvent(false)
        setMessage('')
        eventNameRef.current.value = ''
        linkRef.current.value = ''
        rulesRef.current.value = ''
        dtRef.current.value = ''
        }}
      />
      <input 
        type="text" 
        placeholder='Enter event name...'
        className='h-[3.9rem] w-[93%] md:w-[72%] p-3 px-6 outline-none rounded-xl m-3 bg-primary border-b-4 border-dotted border-ascent' 
        ref={eventNameRef}
      />
      <input 
        type="text" 
        placeholder='Enter google form link...'
        className='h-[3.8rem] w-[93%] md:w-[72%] p-3 px-6 outline-none rounded-xl m-3 bg-primary border-b-4 border-dotted border-ascent'
        ref={linkRef}
      />
      <textarea
        placeholder='Enter Description...' 
        cols='9'
        rows='9'
        className='w-[93%] md:w-[72%] p-3 px-6 outline-none rounded-xl m-3 bg-primary border-4 border-dotted border-ascent'
        ref={descRef}
      />
      <textarea
        placeholder='Enter Rules...' 
        cols='9'
        rows='9'
        className='w-[93%] md:w-[72%] p-3 px-6 outline-none rounded-xl m-3 bg-primary border-4 border-dotted border-ascent'
        ref={rulesRef}
      />
      <input 
        type="datetime-local"  
        className='h-[3.8rem] w-[93%] md:w-[72%] p-3 px-6 outline-none rounded-xl m-3 bg-primary border-b-4 border-dotted border-ascent'
        ref={dtRef}
      />
      <button
        className='p-3 px-12 bg-ascent rounded-xl hover:opacity-80 m-3' 
        onClick={eventRegister}
      >
        {type}
      </button>
      <div
        className={`${message != '' ? 'p-3 h-[3.9rem] w-[93%] md:w-[72%] text-primary bg-secondary mt-3 rounded-xl flex justify-center items-center' : 'hidden'}`}
      >{message}</div>
    </form>
  )
}

export default EventRegisterForm