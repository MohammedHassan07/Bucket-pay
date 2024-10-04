import React, { useState } from 'react'
import Input from '../Input'
import Button from '../Button'

const Register = () => {

    const [name, setName] = useState('')

    const [email, setEmail] = useState('')

    const [mobile, setMobile] = useState('')

    const [password, setPassword] = useState('')

    // function to handle register
    async function handleRegister(e) {
        e.preventDefault()

    }

    function handelOnChange(field, value) {

        switch (field) {
            case 'name':
                setName(value)

            case 'email':
                setName(value)

            case 'password':
                setName(value)

            case 'mobile':
                setName(value)
        }
    }

    return (

        <form>

            <Input placeHolder={'Name'} value={name} onChange={handelOnChange('name', name)} />

            <Input placeHolder={'Email'} value={email} onChange={handelOnChange('email', email)} />

            <Input placeHolder={'Password'} value={password} onChange={handelOnChange('password', password)} />

            <Input placeHolder={'Mobile'} value={mobile} onChange={handelOnChange('mobile', mobile)} />

            <Button onClick={handleRegister} />
        </form>
    )
}

export default Register
