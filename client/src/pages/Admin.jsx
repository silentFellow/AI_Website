import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { CiMenuKebab } from 'react-icons/ci'
import Usercard from '../components/Usercard'
import userApi from '../api/app'
import { AiOutlineClose } from 'react-icons/ai'
import EventRegisterForm from '../components/eventRegisterForm' 
import Card from '../components/Card'
 
const Admin = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [category, setCategory] = useState('events')
  const [changed, setChanged] = useState(false)
  const [events, setEvents] = useState([])
  const [users, setUsers] = useState([])
  const [addUser, setAddUser] = useState(false)
  const [addEvent, setAddEvent] = useState(false)
  const [message, setMessage] = useState('')

  const unameRef = useRef()
  const passRef = useRef()
  const cPassRef = useRef()

  const [_, setCookie] = useCookies(['user'])
  const navigate = useNavigate()

  const signout = () => {
    setCookie('user', undefined)
    navigate('/')
  }

  const register = async (e) => {
    e.preventDefault()
    const uname = unameRef.current.value
    const pass = passRef.current.value
    const cpass = cPassRef.current.value

    if(uname == '' || pass == '' || cpass == '') {
      setMessage('Enter valid details...')
      return
    }
    else if(pass != cpass) {
      setMessage('Password and confirm password not match.')
      return
    }
    try {
      const res = await userApi.post('/users/add', {
        'userName': uname, 
        'password': pass, 
        'role': 'Admin'
      })
      setMessage(res.data)
      setChanged(!changed)
      if(res.status == 200) {
        setAddUser(false)
        setMessage('')
        unameRef.current.value = ''
        passRef.current.value = ''
        cPassRef.current.value = ''
      }
    }
    catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const userData = await userApi.get('/users')
        const eventData = await userApi.get('/events')
        setUsers(userData.data)
        setEvents(eventData.data)
      }
      catch(e) {
        console.log(e)
      }
    }
    getData()
  }, [changed])

  return (
    <div className="min-h-screen min-w-screen bg-primary">
      <section className="h-screen overflow-auto max-w-5xl m-auto">
        <nav className="w-full text-secondary flex justify-between p-4 px-9">
          <span className="font-bold text-[1.2rem] hidden md:flex">KEC AI ASSOCIATION</span>
          <span className="font-bold text-[1.2rem] md:hidden">KEC</span>

          <section className='hidden md:flex'>
            <span className="font-bold text-[1.1rem] cursor-pointer hover:opacity-80" onClick={() => setAddUser(!addUser)}>Add User</span>
            <span className="font-bold text-[1.1rem] ml-6 cursor-pointer hover:opacity-80" onClick={() => setAddEvent(!addEvent)}>Add Event</span>
            <span className="font-bold text-[1.1rem] ml-6 cursor-pointer hover:opacity-80" onClick={signout}>Sign Out</span>
          </section>
          <section className='flex md:hidden relative'>
            <CiMenuKebab className='text-[1.2rem] text-ascent cursor-pointer' onClick={() => setShowMenu(!showMenu)}/>
            <section className={`${showMenu ? "w-[9rem] bg-ascent rounded-lg p-2 absolute right-2 top-7 z-30 fkex flex-row justify-between" : 'hidden'}`}>
              <div className="text-primary text-[1.1rem] cursor-pointer p-3" onClick={() => setAddUser(!addUser)}>Add User</div>
              <div className="text-primary text-[1.1rem] cursor-pointer p-3 border-solid border-t-2" onClick={() => setAddEvent(!addEvent)}>Add Event</div>
              <div className="text-primary text-[1.1rem] cursor-pointer p-3 border-solid border-t-2" onClick={signout}>Sign Out</div>
            </section>
          </section>

          <section className={`${addUser ? "absolute top-0 left-0 flex justify-center items-center h-screen w-screen z-40" : 'hidden'}`}>
            <form className="relative h-screen w-full max-w-5xl bg-primary z-30 rounded-lg p-6 flex flex-col justify-center items-center">
              <AiOutlineClose 
                className='text-[1.8rem] text-red-950 absolute top-6 md:top-12 right-6 md:right-12 font-extrabold cursor-pointer' 
                onClick={() => {
                  setAddUser(false)
                  setMessage('')
                  unameRef.current.value = ''
                  passRef.current.value = ''
                  cPassRef.current.value = ''
                }}
              />
              <input 
                type="text" 
                placeholder='Enter username...'
                className='h-[3.9rem] w-[93%] md:w-[72%] p-3 px-6 outline-none rounded-xl m-3 bg-primary border-b-4 border-dotted border-ascent' 
                ref={unameRef}
              />
              <input 
                type="password" 
                placeholder='Enter password...'
                className='h-[3.8rem] w-[93%] md:w-[72%] p-3 px-6 outline-none rounded-xl m-3 bg-primary border-b-4 border-dotted border-ascent'
                ref={passRef}
              />
              <input 
                type="password" 
                placeholder='Enter confirm password...'
                className='h-[3.9rem] w-[93%] md:w-[72%] p-3 px-6 outline-none rounded-xl m-3 bg-primary border-b-4 border-dotted border-ascent'
                ref={cPassRef}
              />
              <button
                className='p-3 px-12 bg-ascent rounded-xl hover:opacity-80 m-3' 
                onClick={register}
              >
                Regiter
              </button>
              <div
                className={`${message != '' ? 'p-3 h-[3.9rem] w-[93%] md:w-[72%] text-primary bg-secondary mt-3 rounded-xl flex justify-center items-center' : 'hidden'}`}
              >{message}</div>
            </form>
          </section>

          <section className={`${addEvent ? "absolute top-0 left-0 flex justify-center items-center min-h-screen w-screen z-40 bg-primary" : 'hidden'}`}>
            <EventRegisterForm 
              setAddEvent={setAddEvent} 
              changed={changed} 
              setChanged={setChanged}
            />
          </section>
        </nav>

        <main className='mt-3 px-9'>

          <section className="flex w-full m-auto bg-ascent h-[3rem]">
            <section className="h-full w-1/2 flex justify-center items-center border-dashed border-r-2">
              <span
                className={`${category === 'events' ? "text-white cursor-pointer opacity-80 p-2 px-4 border-solid" : "cursor-pointer opacity-80 p-2 px-4 border-solid"}`}
                onClick={() => setCategory('events')}
              >EVENTS</span>
            </section>
            <section className="h-full w-1/2 flex justify-center items-center">
              <span
                className={`${category === 'users' ? "text-white cursor-pointer opacity-80 p-2 px-4 border-solid" : "cursor-pointer opacity-80 p-2 px-4 border-solid"}`}
                onClick={() => setCategory('users')}
              >USERS</span>
            </section>
          </section>

          <section className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {
              category == 'users' ? (
                users.length == 0 ? (
                  <div className="h-[21rem] w-[200%] flex justify-center items-center">
                    <h1 className='font-extrabold text-[1.8rem] md:text-[2.7rem]'>No users Found...</h1>
                  </div>
                ) : (
                  users.map((user) => (
                    <Usercard 
                      userName={user.userName}
                      role={user.role} 
                      changed={changed}
                      setChanged={setChanged}
                      key={user._id}
                    />
                  ))
                )
              )
              :
              events.length == 0 ? (
                <div className="h-[21rem] w-[200%] flex justify-center items-center">
                  <h1 className='font-extrabold text-[1.8rem] md:text-[2.7rem]'>No events Found...</h1>
                </div>
              ) : (
                events.map((event) => (
                  <Card 
                    key={event._id} 
                    id={event._id} 
                    Name={event.name} 
                    btn={'Update Now'} 
                    img={event.image} 
                    rules={event.rules} 
                    desc={event.description} 
                    link={event.link} 
                    startDate={event.postedAt} 
                    endDate={event.expireAt} 
                    setChanged={setChanged} 
                    changed={changed} 
                  />
                ))
              )
            }
          </section>
        </main>
      </section>
    </div>
  )
}

export default Admin