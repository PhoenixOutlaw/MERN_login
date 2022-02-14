import React, { useState } from 'react'
import {Login } from './Login'
import login from '../../assets/login/login.jpg'
import s from './login.module.css'
import { Register } from './Register'
import { Outlet } from 'react-router-dom'


export const Auth = () => {
  return (
    <div className={` d-flex align-c justify-c ${s.index_cnt}` }>
        <img src={login} alt="" />
        <div className={`${s.cnt} d-flex-c margin-a`}>
          <p>Lorem</p>
           <Outlet/>
        </div>
    </div>
  )
}
