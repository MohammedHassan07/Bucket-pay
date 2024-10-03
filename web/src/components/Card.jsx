import React from 'react'
import Button from './Button'

const Card = ({bucketName}) => {
  return (

    <div className="bg-slate-200 border-purple-800 border-2 rounded-lg flex flex-col justify-evenly items-center w-1/6 h-48">

      <div className="">
        <h3>₹0</h3>
      </div>

      <div className="">
        <h4>{bucketName}</h4>
      </div>

      <div className="">

        <div>
        <Button style={''} value={'Pay'}/>
        </div>
      </div>
    </div>

  )
}

export default Card
