import React from 'react'
import Card from './Card.jsx'
import Line from './Line.jsx'
import Button from './Button.jsx'

const Main = () => {
    return (
        <>

            <div className='p-6'>

                <div>

                    <Button value={'My Bucket'}/>

                    <Button value={'Others'}/>

                </div>

                <Line />        {/* horizontal line */}

                <Card bucketName={'bucketName'}/>
            </div>
        </>
    )
}

export default Main
