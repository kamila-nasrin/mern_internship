
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Greet from './components/Greet'
import Mapping from './components/Mapping'
import API from './components/API'
import Blog from './components/Blog'
import Poke from './components/Poke'

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/sign' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/s' element={<StateBasics />}></Route>
        <Route path='/c' element={<Counter />}></Route>
        <Route path='/greet' element={<Greet />}></Route>
        <Route path='/mapping' element={<Mapping />}></Route>
        <Route path='/api' element={<API />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/poke' element={<Poke />}></Route>
      </Routes>
      
  

    </>
  )
}

export default App
