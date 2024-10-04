import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Line from '../components/Line'

const Login = () => {

  const [mobile, setMobile] = useState('')

  const [password, setPassword] = useState('')

  async function handleLogin(e) {
    e.preventDefault()

    console.log(mobile, password)
    if (isEmpty({ mobile, password })) { }
  }

  function handleOnChange(field, value) {

    switch (field) {

      case 'email':
        setMobile(value)
        break

      case 'password':
        setPassword(value)
        break
    }
  }

  return (
    <form>
      <h2>Login to BucketPay</h2>

      <div>
        <Input
          type={'tel'}
          placeHolder={'Enter Your Mobile Number'}
          onChange={(value) => { handleOnChange('mobile', value) }} />
      </div>
      <div>
        <Input
          type={'password'}
          placeHolder={'Enter Your Password'}
          onChange={() => { handleOnChange('password', value) }} />
      </div>
      <div>
        <Button
          onClick={handleLogin} value={'Login'} />
      </div>

      <Line />

      <div>
        <div>
          <span>Don`t Have account?
            <p>Register Here</p>
          </span>
        </div>

      </div>
    </form>
  )
}

export default Login
