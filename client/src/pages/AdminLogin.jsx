import React from 'react'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import userApi from '../api/app'

const AdminLogin = () => {

  const navigate = useNavigate()
  const [_, setCookie] = useCookies(["user"]);

  const emailRef = useRef()
  const passRef = useRef()
  const [message, setMessage] = useState('')

  const login = async () => {
    const userName = emailRef.current.value
    const password = passRef.current.value

    try {
      if(userName == '' || password == '') {
        setMessage("Enter all details.")
        return
      }
      setMessage('Please wait...')
      const res = await userApi.get(`/users/login/${userName}`)
      console.log(res)
      if(res.data.password === password) {
        setCookie('user', res.data.userName)
        navigate('/admin/details')
      }
      else {
        setMessage("ID or password don't match")
      }
    }
    catch(e) {
      setMessage("Something went wrong")
      console.log(e)
    }
    finally {
      setTimeout(() => setMessage(''), 3000)
    }
  }

  return (
    <main className="h-screen w-screen flex justify-center items-center bg-primary">
      <section className="flex flex-col justify-center items-center rounded-md">
        <input 
          type="text" 
          placeholder='Enter your emain...'
          className='bg-secondary placeholder:text-ascent text-primary p-3 px-5 rounded-md my-3 w-[21rem]'
          ref={emailRef}
        />
        <input 
          type="password" 
          placeholder='Enter password...'
          className='bg-secondary placeholder:text-ascent text-primary p-3 px-5 rounded-md my-3 w-[21rem]'
          ref={passRef}
        />

        <section className={`${message == '' ? 'hidden' : "w-[21rem] flex justify-center items-center bg-secondary text-primary my-2 p-3"}`}>
          <span>{message}</span>
        </section>

        <button 
          type='submit' 
          className='bg-secondary placeholder:text-ascent text-primary p-3 px-5 rounded-md my-3 hover:opacity-90 w-[9rem]'  
          onClick={login}
        >
          Login
        </button>
      </section>
    </main>
  )
}

export default AdminLogin