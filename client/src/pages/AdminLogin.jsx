import React from 'react'

const AdminLogin = () => {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <section className="flex p-2">
        <input 
          type="text" 
          placeholder='Enter your emain...'
          className=''
        />
        <input 
          type="password" 
          placeholder='Enter password...'
          className=''
        />

        <button 
          type='submit' 
          className=''
        >
          Login
        </button>
      </section>
    </main>
  )
}

export default AdminLogin