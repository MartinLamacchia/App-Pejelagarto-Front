import './App.css'
import { Routes, Route } from "react-router-dom";
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
  )
}

export default App
