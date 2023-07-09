import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    // <div className="App">
    //   <h1>THis is app</h1>
    // </div>
    <>
    
      <Navbar></Navbar>
      <div className="container">

        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
