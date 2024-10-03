import React from 'react'
import Button from './Button'

const Card = ({bucketName}) => {
  return (

    <div className="bg-slate-200 border-purple-800 border-2 rounded-lg flex flex-col justify-evenly items-center w-1/6 h-48 hover:cursor-pointer">

      <div className="text-3xl text-purple-800">
        <h3>₹0</h3>
      </div>

      <div className="text-lg">
        <h4>{bucketName}</h4>
      </div>

      <div className="">

        <div>
        <Button value={'Pay'} className="w-28 rounded-lg"/>
        </div>
      </div>
    </div>

  )
}

export default Card
