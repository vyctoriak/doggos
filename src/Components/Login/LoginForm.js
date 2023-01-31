import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/login/create">Register</Link>
    </section>
  )
}

export default LoginForm
