import React from 'react'

const Button = ({ value, style }) => {
    return (

        <button
            className='border-2 border-purple-800 bg-purple-800 text-white p-1 rounded-full px-3 mx-1'
            onClick={() => { console.log('button') }}>{value}
        </button>
    )
}

export default Button
