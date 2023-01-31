import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginLostPassword from './LoginLostPassword'
import LoginResetPassword from './LoginResetPassword'

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/create" element={<LoginCreate />} />
        <Route path="/forgot-password" element={<LoginLostPassword />} />
        <Route path="/reset" element={<LoginResetPassword />} />
      </Routes>
    </div>
  )
}

export default Login
