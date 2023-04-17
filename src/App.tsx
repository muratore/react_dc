import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'
import Title from './components/Title'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Title title='Olá você conseguiu'/>
     <Input placeholder='Nome' name='name' id='name'/>
     <Input placeholder='Sobrenome' name='lastName' id='lastName'/>
    </div>
  )
}

export default App
