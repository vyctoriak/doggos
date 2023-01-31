import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import Button from '../Form/Button'
import Input from '../Form/Input'
import { TOKEN_POST } from '../../api'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  function handleSubmit(e) {
    e.preventDefault()

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      })

      fetch(url, options)
        .then((response) => {
          console.log('RESPONSE =>', response)
          return response.json()
        })
        .then((json) => {
          console.log('JSON =>', json)
        })
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
