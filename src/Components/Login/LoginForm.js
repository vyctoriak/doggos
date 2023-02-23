import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import Button from '../Form/Button'
import Input from '../Form/Input'
// import { USER_GET } from '../../api'
import { UserContext } from '../../UserContext'
import Error from '../Helper/Error'
import styles from './LoginForm.module.css'
import stylesBtn from '../Form/Button.module.css'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()

  const { userLogin, error, loading } = useContext(UserContext)

  // async function getUser(token) {
  //   const { url, options } = USER_GET(token)
  //   const response = await fetch(url, options)
  //   const json = await response.json()
  //   console.log(json)
  // }

  async function handleSubmit(e) {
    e.preventDefault()

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Sign in / Entrar</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.forgot} to="/login/forgot">
        Forgot your password?
      </Link>
      <div className={styles.register}>
        <h2 className={styles.subtitle}>Register</h2>
        <p>Don't have an account? Register here!</p>
        <Link className={stylesBtn.button} to="/login/create">
          Register
        </Link>
      </div>
    </section>
  )
}

export default LoginForm
