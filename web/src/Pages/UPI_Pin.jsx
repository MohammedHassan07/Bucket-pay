import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import isEmpty from '../utils/isEmpty'

const UPI_Pin = () => {

    const [UPI_value, setUPI_Value] = useState('')
    const [error, setError] = useState('')

    function handleOnChange(value) {

        setUPI_Value(value)
    }

    function handleCreateUPI(e) {
        e.preventDefault()

        // console.log(UPI_value)

        const data = { UPI_value }
        const UPI = Number(UPI_value)

        if (isEmpty(data) || typeof (UPI) !== 'number') {

            setError('UPI Pin should be number')
            setTimeout(() => { setError('') }, 3000)

        } else if (UPI_value.toString().length !== 6) {

            setError('The UPI Pin should be exacatly 6 digit')
            setTimeout(() => { setError('') }, 3000)
        } else {

            // console.log('upi', UPI_value)
            
        }
    }
    return (
        <div className='w-screen h-screen flex justify-center items-start'>

            <form className='flex flex-col gap-5 justify-center items-center mt-16 border-2 rounded-lg border-purple-800 w-2/5 p-14 '>

                <h2 className='text-purple-700 text-2xl'>Create Your UPI Pin</h2>

                <Input
                    type={'number'}
                    placeHolder={'Create 6 Digit UPI pin'}
                    onChange={(value) =>
                        handleOnChange(value)
                    } />

                <p className='text-purple-900'>{error}</p>

                <Button
                    value={'Create PIN'}
                    className={'border-2 rounded-lg'}
                    onClick={handleCreateUPI} />


            </form>
        </div>
    )
}

export default UPI_Pin
