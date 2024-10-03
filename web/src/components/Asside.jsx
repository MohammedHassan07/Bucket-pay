import React from 'react'
import Input from './Input'
import Button from './Button'

const Asside = () => {
    return (
        <div className='h-screen w-1/4 bg-purple-900 text-white flex flex-col justify-start items-center px-11'>

            <div className="">
                <div>
                    <img src="./imges/person.jpg" alt="" />
                </div>
                <div>
                    <p>Customer Name</p>
                </div>
            </div>

            <div>
                <h2>
                    ₹5000
                </h2>
                <h3>Total Amount</h3>
            </div>

            <div>
                <div className='flex'>
                    <div>
                        <Input />
                    </div>
                    <div>
                        <Button value={'Create Bucket'} />
                    </div>
                </div>
            </div>

            <div>
                <Button value={'Transfer Money'} />
            </div>
        </div>
    )
}

export default Asside
