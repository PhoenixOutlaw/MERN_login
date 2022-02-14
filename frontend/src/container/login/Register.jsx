import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import s from './login.module.css';
import { createaccount } from '../../redux/actions';


export const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => {
     if(data.password===data.repassword)
      dispatch(createaccount({email: data.email, password: data.password}))
     else alert("password does not match");
 }
  return (
        <form onSubmit={handleSubmit(onSubmit)} className={`${s.form} d-flex-c `}>
     
        <div className={`${s.input} d-flex align-c`}>
            <p>Email :</p>
            <input type="email"   placeholder="Enter your email address" {...register("email", { required: true })} />
         </div>
            {errors.email && <span className={s.error}>This field is required</span>}
        <div className={`${s.input} d-flex align-c`}>
            <p>Password :</p>
            <input type="password"   placeholder="Enter your Password" {...register("password", { required: true })} />
         </div>
            {errors.password && <span className={s.error}>This field is required</span>}
        
        <div className={`${s.input} d-flex align-c`}>
            <p>Re-Password :</p>
            <input type="password"   placeholder="Enter your Password again" {...register("repassword", { required: true })} />
         </div>
            {errors.password && <span className={s.error}>This field is required</span>}
        
         <button type="submit " > Register</button>  
         <span id={s.nav}>
         <p>if you already have a account / <Link to="/auth/login"> Login</Link></p>
         </span> 
        </form>
    
  )
}

