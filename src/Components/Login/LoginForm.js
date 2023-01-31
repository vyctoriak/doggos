import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Form/Button'
import Input from '../Form/Input'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log('RESPONSE =>', response)
        return response.json()
      })
      .then((json) => {
        console.log('JSON =>', json)
      })
  }

  return (
    <section>
      <h1>Sign in</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="User" type="text" name="username" />
        <Input label="Password" type="password" name="password" />
        <Button type="submit">Login</Button>
      </form>
      <Link to="/login/create">Register</Link>
    </section>
  )
}

export default LoginForm
