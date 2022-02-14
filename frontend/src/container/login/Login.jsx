import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createaccount, loginverify, register_failure, register_success} from '../../redux/actions';
import s from './login.module.css';


export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => {
     dispatch(loginverify(data))
   }
  const nav = useNavigate()
  return (
        <form onSubmit={handleSubmit(onSubmit)} className={`${s.form} d-flex-c `}>
     
        <div className={`${s.input} d-flex align-c`}>
            <p>Email :</p>
            <input type="email"  placeholder="Enter your email address" {...register("email", { required: true })} />
         </div>
            {errors.email && <span className={s.error}>This field is required</span>}
        <div className={`${s.input} d-flex align-c`}>
            <p>Password :</p>
            <input type="password"   placeholder="Enter your Password" {...register("password", { required: true })} />
         </div>
            {errors.password && <span className={s.error}>This field is required</span>}
        
         <button type="submit "  > Login</button>  
         <span id={s.nav}>
         <p>if you haven't register / <Link to="/auth/register">register</Link></p>
         </span>
        </form>
    
  )
}

