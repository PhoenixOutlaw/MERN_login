import React from 'react'
import {  sign_out } from '../../redux/actions';
import {useDispatch} from 'react-redux'

export const Home = () => {
  const style ={
    textAlign: 'center',
    marginTop:"20%",
    fontSize:"50px"
  }
  const btn ={
    marginTop:"10%",
    padding:"10px 30px",
    backgroundColor:"rgb(255 115 92)",
    fontSize:"30px",
    color:"white",
    borderRadius:"50px",
    cursor:"pointer",
    border:"none",
  }
  const dispatch = useDispatch();
  return (
    <div style={style} className="d-flex-c align-c">
       YOUR LOGGED IN
       <button style={btn} onClick={() => {dispatch(sign_out()); sessionStorage.clear()}}>logout</button>
       </div>

  )
}
