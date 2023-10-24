import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai' 
import userApi from '../api/app'
import { BiImageAdd } from 'react-icons/bi'

const EventUpdateForm = ({ editEvent, setEditEvent, changed, setChanged, name, link, rules, date, description, image, id }) => {

  const dateConvert = (dateISO) => {
    const date = new Date(dateISO)

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;

    return formattedDate

  }

  useEffect(() => {
    eventNameRef.current.value = name 
    linkRef.current.value = link 
    rulesRef.current.value = rules 
    descRef.current.value = description 
    dtRef.current.value = dateConvert(date) 
    setPoster(image)
    setPosterPreview(image)
  }, [editEvent]) 

  const [message, setMessage] = useState('')
  const [poster, setPoster] = useState('')
  const [posterPreview, setPosterPreview] = useState('')
  const eventNameRef = useRef()
  const linkRef = useRef()
  const rulesRef = useRef()
  const dtRef = useRef()
  const descRef = useRef()

  const imageConvert = async (file) => {
    return new Promise((resolve, reject) => {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        resolve(reader.result)
      }
      reader.onerror = (error) => {
        reject(error)
      }
    })
  }

  const eventUpdate = async (e) => {
    e.preventDefault()
    const rules = rulesRef.current.value
    const link = linkRef.current.value
    const name = eventNameRef.current.value
    const dt = dtRef.current.value
    const description = descRef.current.value
    if(rules == '' || link == '' || name == '' || dt == 'undefined' || description == '' || poster == '') {
      setMessage("Enter valid details...")
      return
    }
    try {
      setMessage('Please wait...')

      let images
      poster == posterPreview ? images = poster : await imageConvert(poster)

      const res = await userApi.put(`/events/update/${id}`, {
        name, 
        link, 
        description, 
        rules, 
        images, 
        'expireAt': new Date(dt).toISOString()
      })
      if(res.status == 200) {
        setMessage('')
        setEditEvent(false)
        rulesRef.current.value = '' 
        linkRef.current.value = '' 
        eventNameRef.current.value = '' 
        dtRef.current.value = '' 
        descRef.current.value = ''
        rulesRef.current.value = ''
        setPoster('') 
        setPosterPreview('') 
        setChanged(!changed)
      }
      else setMessage('Something went wrong...')
    }
    catch(e) {
      console.log(e)
    }
  }

  return (
    <form className="relative min-h-screen w-full max-w-5xl bg-primary z-30 rounded-lg p-6 flex flex-col justify-center items-center">
      <AiOutlineClose 
        className='text-[1.8rem] text-red-950 absolute top-6 md:top-12 right-6 md:right-12 font-extrabold cursor-pointer' 
        onClick={() => {
        setEditEvent(false)
        setMessage('')
        eventNameRef.current.value = ''
        linkRef.current.value = ''
        rulesRef.current.value = '' 
        descRef.current.value = '' 
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
      {/* <input type="file" 
        accept='image/*' 
        id='poster' 
        className='hidden' 
        onChange={(e) => {
          let reader = new FileReader()
          reader.readAsDataURL(e.target.files[0])
          reader.onload = () => {
            setPosterPreview(reader.result)
          }
          reader.onerror = (error) => {
            console.log(error)
          }
          setPoster(e.target.files[0])
        }}
      />

      <div className="h-[18rem] w-[18rem] rounded-xl m-3 flex justify-center items-center border-2 border-dashed border-ascent">
        <label htmlFor="poster">
          {posterPreview == '' ? 
          <BiImageAdd
            className='text-[12rem] cursor-pointer' 
          />  :
          <img 
            src={posterPreview} 
            alt="Missing" 
            className='h-[18rem] w-[18rem]'
          />
          }
        </label>
      </div> */}
        
      <input 
        type="datetime-local"  
        className='h-[3.8rem] w-[93%] md:w-[72%] p-3 px-6 outline-none rounded-xl m-3 bg-primary border-b-4 border-dotted border-ascent'
        ref={dtRef} 
        defaultValue={dateConvert(date)} 
      />
      <button
        className='p-3 px-12 bg-ascent rounded-xl hover:opacity-80 m-3' 
        onClick={eventUpdate}
      >
        Add Event
      </button>
      <div
        className={`${message != '' ? 'p-3 h-[3.9rem] w-[93%] md:w-[72%] text-primary bg-secondary mt-3 rounded-xl flex justify-center items-center' : 'hidden'}`}
      >{message}</div>
    </form>
  )
}

export default EventUpdateForm