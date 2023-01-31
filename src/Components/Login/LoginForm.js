import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import Button from '../Form/Button'
import Input from '../Form/Input'
import { TOKEN_POST, USER_GET } from '../../api'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      getUser(token)
    }
  }, [])

  async function getUser(token) {
    const { url, options } = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json()
    console.log(json)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      })

      const response = await fetch(url, options)
      const json = await response.json()
      window.localStorage.setItem('token', json.token)
      getUser(json.token)
    }
  }

  return (
    <section>
      <h1>Sign in / Entrar</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        <Button>Login</Button>
      </form>
      <Link to="/login/create">Register</Link>
    </section>
  )
}

export default LoginForm
