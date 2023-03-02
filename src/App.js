import { Route, Routes } from 'react-router';
import './App.css';
import Login from './Login/Login';
import Register from './Register/Register';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/Signup-Front-End-30' element = {<Register/>} />
        <Route path='/register' element = {<Register/>} />
        <Route path='/login' element = {<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
