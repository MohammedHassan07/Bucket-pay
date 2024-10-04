import React from 'react'
import Input from './Input'
import Button from './Button'
import personImg from '../assets/person.jpeg'

const Asside = () => {

    // function to create bucket
    function handleCreateBucket() {
        console.log('create bucket')

    }
    return (
        <div className='h-screen w-1/4 bg-purple-900 text-white flex flex-col justify-start items-center px-11 pt-11'>

            <div className="flex flex-col justify-center items-center">

                <div className='rounded-full'>
                    <img
                        src={personImg}
                        className='w-24 h-24 rounded-full'
                        alt="userImage" />
                </div>
                <div className='mt-3'>
                    <p className='text-3xl'>Potter</p>
                </div>
            </div>

            <div className='mt-3'>
                <h2
                    className='text-2xl text-center'>
                    ₹5000
                </h2>

                <h3
                    className='mt-2'>Total Amount</h3>
            </div>

            <div className='mt-6'><div>

                <Input placeHolder={'Enter Bucket Name'} />
            </div>
                <div className='flex justify-center items-center'>

                    <div>

                        {/* both are same with little bit difference */}

                        {/* <Button value={'Transfer Money'} className='text-purple-800 bg-white hover:text-white hover:bg-purple-800 border-2 rounded-lg'/> */}

                        <Button
                            value={'Transfer Money'}
                            className='mt-4 border-2 rounded-lg' />
                    </div>

                    <div>
                        
                        <Button
                            value={'Create Bucket'}
                            className='mt-4 border-2 rounded-lg'
                            onClick={handleCreateBucket} />
                    </div>


                </div>
            </div>

            <div>


            </div>
        </div>
    )
}

export default Asside
