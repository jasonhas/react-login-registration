import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Page404() {
  return (
    <div>
      <Header/>
      <main className='mx-auto text-center'>
        <h1>Ouch!!</h1>
        <p>We can't find that...</p>
      </main>
      <Footer/>
    </div>
  )
}

export default Page404
