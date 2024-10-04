import React from 'react'

const Button = ({ value, className, onClick, isActive }) => {
    return (

        <button
            className={`border-purple-800 p-1 px-3 mx-1 hover:bg-purple-800 hover:text-white shadow-lg ${className}
            ${isActive ? 'bg-purple-800 text-white' : 'bg-white text-purple-800'}`}
            onClick={(e) => { onClick(e) }}>
            {value}
        </button>
    )
}

export default Button
