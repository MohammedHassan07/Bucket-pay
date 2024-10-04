import React, { useState } from 'react'
import Line from '../components/Line.jsx'
import Button from '../components/Button.jsx'
import Asside from "../components/Asside.jsx"
import Navbar from "../components/Navbar.jsx"
import Buckets from './Buckets.jsx'

const Main = () => {

    const [activeButton, setActiveButton] = useState('Chats')

    async function handleButtonClick(e) {

        console.log(e.target.textContent)
        setActiveButton(e.target.textContent)
    }
    return (
        <>




            <Navbar />

            <div className='flex'>

                <Asside />

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

                    {/* main */}


                    <div className='flex justify-center items-center flex-wrap gap-5 pt-6'>
                        <Buckets />

                    </div>
                </div>
            </div >


        </>
    )
}

export default Main
