import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import React from 'react'

const App = () => {
  const isSubscribed = false;
  return (
    <>
      {isSubscribed ? <p>Subscribe kr diya hu</p> : <p>Nahi kiya hu</p>}
    </>
  )
}

export default App