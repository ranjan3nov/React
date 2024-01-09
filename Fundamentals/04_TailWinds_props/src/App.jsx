import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let obj = {
    id: 1,
  }
  return (
    <>
      <h1 className='bg-green-600 p-5 rounded-md mb-4'>Tailwind test</h1>

      <Card userName="ranjan" myobj={obj} />

      <Card />

    </>
  )
}

export default App
