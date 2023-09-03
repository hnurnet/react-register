import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from "./components/register/Register";
import Login from "./components/login/Login";
function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path='/login' element={<Login/>} />
    </Routes>

    </div>
    
    </BrowserRouter>
  );
}

export default App;
