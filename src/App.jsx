import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import ChatRoom from './pages/ChatRoom'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './routes/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

function App() {
  const [count, setCount] = useState(0)

  return (
  
  
         <AuthProvider>
         <Navbar/>
          <Routes>

            <Route path='/' element={ <Login/> }></Route>
            <Route path='/chat' element={ <PrivateRoute><ChatRoom/></PrivateRoute> }></Route>
          </Routes>
    
         </AuthProvider>
    
 
  )
}

export default App
