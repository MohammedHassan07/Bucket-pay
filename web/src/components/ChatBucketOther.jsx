import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button.jsx'
import Line from '../components/Line.jsx'

const ChatBucketOther = () => {

    const [activeButton, setActiveButton] = useState('Chats')

    async function handleButtonClick(e) {

        // console.log(e.target.textContent)
        setActiveButton(e.target.textContent)
    }
    return (
        <>
            <div>

                <Link to={'/chats'} >
                    <Button
                        value={'Chats'}
                        onClick={handleButtonClick}
                        isActive={activeButton === 'Chats'}
                        className='rounded-3xl border-2' />
                </Link>

                <Link to={'/buckets'}>
                    <Button
                        value={'My Buckets'}
                        onClick={handleButtonClick}
                        isActive={activeButton === 'My Buckets'}
                        className='rounded-3xl border-2' />
                </Link>

                <Link to={'/others'}>
                    <Button
                        value={'Others'}
                        onClick={handleButtonClick}
                        isActive={activeButton === 'Others'}
                        className='rounded-3xl border-2' />
                </Link>
                {/* horizontal line */}
                <Line />

            </div >
        </>

    )
}

export default ChatBucketOther
