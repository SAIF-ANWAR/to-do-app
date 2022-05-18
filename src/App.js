
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Shared.js/Login';
import Navbar from './pages/Shared.js/Navbar';
import RequireAuth from './pages/Shared.js/RequireAuth';
import SignUp from './pages/Shared.js/SignUp';
import ToDo from './pages/ToDo/ToDo';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/todo" element={
          <RequireAuth>
            <ToDo></ToDo>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>

    </div>
  );
}

export default App;
