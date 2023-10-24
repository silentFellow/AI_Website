import React from 'react'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { AiOutlineArrowLeft, AiOutlineLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import userApi from '../api/app'

const AdminLogin = () => {

  const navigate = useNavigate()
  const [_, setCookie] = useCookies(["user"])

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
      <button className="absolute left-0 md:left-10 top-0 md:top-10 flex text-tertiary text-2xl px-4 py-2">
        <AiOutlineLeft className="my-1" />
        <Link to="/">Back</Link>
      </button>

      <section className="flex flex-col justify-center items-center rounded-md">
        <h3 className="mb-9 text-3xl text-secondary">Login</h3>
        <input
          type="text"
          placeholder="Enter your email..."
          className="appearance-none relative block w-full px-3 py-3 border-[1.5px] border-gray-800 placeholder:text-ascent text-gray-900 rounded-md focus:outline-none focus:ring-indigo-800 focus:border-indigo-500 focus:z-10 sm:text-sm"
          ref={emailRef}
        />
        <input
          type="password"
          placeholder="Enter password..."
          className="appearance-none relative block w-[21rem] my-3 px-3 py-3 border-[1.5px] border-gray-800 placeholder:text-ascent text-gray-900 rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          ref={passRef}
        />

        <section
          className={`${
            message == ""
              ? "hidden"
              : "w-[21rem] flex justify-center items-center bg-secondary text-primary my-2 p-3"
          }`}
        >
          <span>{message}</span>
        </section>

        <button
          type="submit"
          className="bg-secondary placeholder:text-ascent text-primary p-3 px-5 rounded-md my-3 hover:opacity-90 w-[9rem]"
          onClick={login}
        >
          Login
        </button>
      </section>
    </main>
  );
}

export default AdminLogin