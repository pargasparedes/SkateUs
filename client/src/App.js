import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage"
import Navbar from './components/navbar';
import Register from './pages/register';
import Login from './pages/login';
import Learn from './pages/learn';
import Test from './pages/test';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/learn' element={<Learn/>} />
        <Route path='/test' element={<Test/>} />
      </Routes>
    </div>
  );
}

export default App;
