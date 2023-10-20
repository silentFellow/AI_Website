import React from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import MemberCard from '../components/MemberCard'
 
const Admin = () => {
  const [cookies, setCookie] = useCookies(['user'])
  const navigate = useNavigate()

  const signout =() => {
    setCookie('user', undefined)
    navigate('/')
  }

  return (
    <div className='max-w-5xl m-auto'>
      <nav className="h-1/4 flex justify-between items-center bg-secondary p-4">
        <span className="text-primary text-[1.3rem]">{cookies.user}</span>
        <section className="w-1/5 flex justify-between items-center">
          <span className="text-primary text-[1.0rem] cursor-pointer hover:opacity-75">Add User</span>
          <span className="text-primary text-[1.0rem] cursor-pointer hover:opacity-75"
            onClick={signout}
          >Sign Out</span>
        </section>
      </nav>

      <main className="min-h-screen p-2 pt-6">
        <span className="text-ascent text-[1.6rem] font-bold">Members: </span>

        <MemberCard />
      </main>
    </div>
  )
}

export default Admin