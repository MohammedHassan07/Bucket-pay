import React from 'react'

const Button = ({ value, className, onClick, isActive }) => {
    return (

        <button
            className={`border-purple-800 bg-white text-purple-800 p-1 px-3 mx-1 hover:bg-purple-800 hover:text-white ${className}
            ${isActive ? 'bg-purple-800 text-white' : ''}`}
            onClick={() => { onClick(value) }}>
            {value}
        </button>
    )
}

export default Button
