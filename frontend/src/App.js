import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Home } from './container/home/Home';
// import { Login } from './container/login/Login';
import { Auth } from './container/login';
import { Login } from './container/login/Login';
import { Register } from './container/login/Register';
import {useSelector ,useDispatch} from 'react-redux'
import {  sign_out, verify } from './redux/actions';



function App() {
  
  const islogged=useSelector(state => state.logged)
  const nav = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(state => state)
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if(sessionStorage.getItem('token'))
    dispatch(verify({token: token}))
  }, [islogged])
  
  


  
  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={islogged?<Home/>:<Navigate to="/auth" onRender={()=>  alert("Forbidden")} />} />
        <Route path="/auth" element={islogged?<Navigate to="/" />:<Auth/>} >
          <Route path="login"  element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="" element={<Navigate to="/auth/login" />} />
        </Route>
        <Route path="/*" element={islogged?<Navigate to="/" />:<Navigate to="/auth"/>} />
     </Routes>
    </div>
  );
}

export default App;
