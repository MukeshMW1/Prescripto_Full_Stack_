import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctor from './pages/Doctor'
import About from './pages/About'
import Contact from './pages/Contact'
import MyAppointments from './pages/MyAppoinments'
import MyProfile from './pages/MyProfile'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Footer from './components/Footer'
import Appointment from './pages/Appointment'
const App = () => {
  return (
    <div>
       <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/doctors' element={<Doctor/>}></Route>
      <Route path='/doctors/:speciality' element={<Doctor/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/my-appointments' element={<MyAppointments/>}></Route>
      <Route path='/appointment/:docId' element={<Appointment/>}></Route>
      <Route path='/my-profile' element={<MyProfile/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
