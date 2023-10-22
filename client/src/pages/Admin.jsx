import React from 'react'
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { CiMenuKebab } from 'react-icons/ci'
import Usercard from '../components/Usercard'
import userApi from '../api/app'
 
const Admin = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [category, setCategory] = useState('events')
  const [changed, setChanged] = useState(false)
  const [events, setEvents] = useState([])
  const [users, setUsers] = useState([])

  const [cookies, setCookie] = useCookies(['user'])
  const navigate = useNavigate()

  const signout = () => {
    setCookie('user', undefined)
    navigate('/')
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const userData = await userApi.get('/users')
        setUsers(userData.data)
      }
      catch(e) {
        console.log(e)
      }
    }
    getData()
  }, [changed])

  return (
    <div className="min-h-screen min-w-screen bg-primary">
      <section className="min-h-screen max-w-5xl m-auto">

        <nav className="w-full text-secondary flex justify-between p-4 px-9">
          <span className="font-bold text-[1.2rem] hidden md:flex">KEC AI ASSOCIATION</span>
          <span className="font-bold text-[1.2rem] md:hidden">KEC</span>

          <section className='hidden md:flex'>
            <span className="font-bold text-[1.1rem] cursor-pointer hover:opacity-80">Add User</span>
            <span className="font-bold text-[1.1rem] ml-6 cursor-pointer hover:opacity-80">Add Event</span>
            <span className="font-bold text-[1.1rem] ml-6 cursor-pointer hover:opacity-80" onClick={signout}>Sign Out</span>
          </section>
          <section className='flex md:hidden relative'>
            <CiMenuKebab className='text-[1.2rem] text-ascent cursor-pointer' onClick={() => setShowMenu(!showMenu)}/>
            <section className={`${showMenu ? "w-[9rem] bg-ascent rounded-lg p-2 absolute right-2 top-7 z-30 fkex flex-row justify-between" : 'hidden'}`}>
              <div className="text-primary text-[1.1rem] cursor-pointer p-3">Add User</div>
              <div className="text-primary text-[1.1rem] cursor-pointer p-3 border-solid border-t-2">Add Event</div>
              <div className="text-primary text-[1.1rem] cursor-pointer p-3 border-solid border-t-2" onClick={signout}>Sign Out</div>
            </section>
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
              >EVENTS</span>
            </section>
          </section>

          <section className="w-full flex flex-col items-center">
            {
              users.length == 0 ? (
                <div className="h-[21rem] w-full flex justify-center items-center">
                  <h1 className='font-extrabold text-[1.8rem] md:text-[2.7rem]'>No Users Found...</h1>
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
            }
          </section>
        </main>
      </section>
    </div>
  )
}

export default Admin