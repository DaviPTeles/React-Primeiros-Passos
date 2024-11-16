import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Form } from './form'
import { Header } from './components/Header'
import { NewForm } from './components/NewForm'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ 
      height: "100vh", 
      background: "#1AC0C6",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <main style={{
        background: "#FFFFFF",
        width: "394px",
        borderRadius: "12px",
        padding: "36px",
        gap: "48px",
        display: "flex",
        flexDirection: "column",
        opacity: "75%"}}>
        <Header title={'Hello There'} size={'16px'}/>
        <NewForm/>
        <Footer/>
      </main>
    </div>
  )
}

export default App
