import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginLostPassword from './LoginLostPassword'
import LoginResetPassword from './LoginResetPassword'
import { UserContext } from '../../UserContext'

const Login = () => {
  const { login } = useContext(UserContext)
  if (login === true) return <Navigate to="/conta" />

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
