import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Line from '../components/Line'
import isEmpty from '../utils/isEmpty'

const Register = () => {

    const [name, setName] = useState('')

    const [mobile, setMobile] = useState('')

    const [password, setPassword] = useState('')

    // function to handle register
    async function handleRegister(e) {
        e.preventDefault()

        console.log(name, mobile, password)
        if (isEmpty({ name, mobile, password })) {}

    }

    function handelOnChange(field, value) {

        switch (field) {
            case 'name':
                setName(value)
                break

            case 'password':
                setPassword(value)
                break

            case 'mobile':
                setMobile(value)
                break
        }
    }

    return (

        <form>
            <h2>Registerto BucketPay</h2>

            <div>
                <Input
                    type={'text'}
                    placeHolder={'Name'}
                    onChange={(value) =>
                        handelOnChange('name', value)
                    } />
            </div>

            <div>
                <Input
                    type={'password'}
                    placeHolder={'Password'}
                    onChange={(value) =>
                        handelOnChange('password', value)} />
            </div>
            <div>
                <Input
                    type={'tel'}
                    placeHolder={'Mobile'}
                    onChange={(value) =>
                        handelOnChange('mobile', value)} />
            </div>

            <div>
                <Button onClick={handleRegister} />
            </div>
            <div>
                <p>Error</p>
            </div>

            <Line />

            <div>
                <div>
                    <span>Already have an account?
                        <p>Login</p>
                    </span>
                </div>
            </div>
        </form>
    )
}

export default Register
