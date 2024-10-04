import React, { useState } from 'react'
import Card from '../Card.jsx'
import Line from '../Line.jsx'
import Button from '../Button.jsx'

const Main = () => {

    const [activeButton, setActiveButton] = useState('Chats')

    async function handleButtonClick(value) {

        console.log(value)
        setActiveButton(value)
    }
    return (
        <>

            <div className='p-6'>

                {/* chat, bucket buttons */}
                <div>

                    <Button
                        value={'Chats'}
                        onClick={handleButtonClick}
                        isActive={activeButton === 'Chats'}
                        className='rounded-3xl border-2' />

                    <Button
                        value={'My Buckets'}
                        onClick={handleButtonClick}
                        isActive={activeButton === 'My Buckets'}
                        className='rounded-3xl border-2' />

                    <Button
                        value={'Others'}
                        onClick={handleButtonClick}
                        isActive={activeButton === 'Others'} 
                        className='rounded-3xl border-2' />


                </div>

                <Line />        {/* horizontal line */}

                <div className='flex justify-center items-center flex-wrap gap-5 pt-6'>

                    <Card bucketName={'bucketName'} />
                    <Card bucketName={'bucketName'} />
                    <Card bucketName={'bucketName'} />
                    <Card bucketName={'bucketName'} />
                    <Card bucketName={'bucketName'} />
                    <Card bucketName={'bucketName'} />
                    <Card bucketName={'bucketName'} />
                    <Card bucketName={'bucketName'} />
                    <Card bucketName={'bucketName'} />
                    <Card bucketName={'bucketName'} />
                </div>
            </div>
        </>
    )
}

export default Main
