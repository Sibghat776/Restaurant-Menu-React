import { useState } from 'react'
import './App.css'
import Head from './Components/Head'
import Main from './Components/Main'
import Buttons from './Components/Buttons'

function App() {
  let [btnText, setBtnText] = useState("")
  return (
    <>
      <div style={{
        padding: "0px 10%"
      }}>
        <Head />
        <Buttons setBtnText={setBtnText}/>
        <Main btnText={btnText}/>
      </div>
    </>
  )
}

export default App
