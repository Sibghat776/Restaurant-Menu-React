import { useState } from 'react'
import './App.css'
import Head from './Components/Head'
import Main from './Components/Main'

function App() {

  return (
    <>
      <div style={{
        padding: "0px 10%"
      }}>
        <Head />
        <Main />
      </div>
    </>
  )
}

export default App
