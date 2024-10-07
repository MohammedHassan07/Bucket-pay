import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Line from '../components/Line'
import { Link } from 'react-router-dom'
import isEmpty from '../utils/isEmpty'
import { makeRequest } from '../utils/networkRequest'

const Login = () => {

  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function handleLogin(e) {
    e.preventDefault()

    console.log(mobile, password)
    const data = { mobile, password }
    if (isEmpty(data)) {

      setError('Values are empty')
      setTimeout(() => { setError('') }, 3000)
    } else {

      const response = await makeRequest('/user/login', data)
      console.log(response)
    }
  }

  function handleOnChange(field, value) {

    switch (field) {

      case 'mobile':
        setMobile(value)
        break

      case 'password':
        setPassword(value)
        break
    }
  }

  return (
    <div className='w-screen h-screen flex justify-center items-start'>

      <form className='flex flex-col gap-5 justify-center items-center mt-16 border-2 rounded-lg border-purple-800 w-2/5 p-14 '>

        <h2 className='text-purple-700 text-2xl'>Registerto BucketPay</h2>

        <Input
          type={'tel'}
          placeHolder={'Mobile'}
          onChange={(value) =>
            handleOnChange('mobile', value)
          } />

        <Input
          type={'password'}
          placeHolder={'Password'}
          onChange={(value) =>
            handleOnChange('password', value)
          } />

        <Button
          value={'Login'}
          className={'border-2 rounded-lg'}
          onClick={handleLogin} />

        <p className='text-purple-900'>{error}</p>

        <Line />

        <div className='text-center'>
          <span>Dont have an account?
            <Link
              to={'/register'}>
              <p
                className='underline text-purple-800'>Register</p>
            </Link>
          </span>
        </div>

      </form>
    </div>
  )
}

export default Login
