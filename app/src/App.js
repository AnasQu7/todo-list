import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoute';
import Todo from './Routes/Todo';
import Signup from './Routes/Signup';
import Login from './Routes/Login';

function App() {
  return (
      <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<PrivateRoute><Todo/></PrivateRoute>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </>
  );
}

export default App;
