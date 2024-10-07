import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Line from '../components/Line'
import isEmpty from '../utils/isEmpty'
import { Link } from 'react-router-dom'
import { makeRequest } from '../utils/networkRequest.js'

const Register = () => {

    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    // function to handle register
    async function handleRegister(e) {
        e.preventDefault()

        console.log(name, mobile, password)

        const data = { name, mobile, password }
        if (isEmpty(data)) {

            setError('Values are Empty')
            setTimeout(() => { setError('') }, 3000)
        } else {

            const response = await makeRequest('/user/register', data)
            console.log(response)
        }
    }

    function handleOnChange(field, value) {

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

        <div className='w-screen h-screen flex justify-center items-start'>

            <form className='flex flex-col gap-5 justify-center items-center mt-16 border-2 rounded-lg border-purple-800 w-2/5 p-14 '>
                <h2 className='text-purple-700 text-2xl'>Register to BucketPay</h2>

                <Input
                    type={'text'}
                    placeHolder={'Name'}
                    onChange={(value) =>
                        handleOnChange('name', value)
                    } />

                <Input
                    type={'tel'}
                    placeHolder={'Mobile'}
                    onChange={(value) =>
                        handleOnChange('mobile', value)} />

                <Input
                    type={'password'}
                    placeHolder={'Password'}
                    onChange={(value) =>
                        handleOnChange('password', value)} />

                <p className='text-purple-900'>{error}</p>
                
                <Button
                    value={'Registe'}
                    className={'border-2 rounded-lg'}
                    onClick={handleRegister} />

                <Line />

                <div className='text-center'>
                    <span>Already have an account?
                        <Link
                            to={'/login'}>
                            <p
                                className='underline text-purple-800'>Login</p>
                        </Link>
                    </span>
                </div>

            </form>
        </div>
    )
}

export default Register
