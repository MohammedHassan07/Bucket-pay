import React from 'react'
import personImg from '../assets/person.jpeg'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
    return (
        <nav className="flex justify-around items-center h-14 bg-purple-950 text-white font-normal w-full">

            <div className="">
                <h2 className='font-bold  cursor-pointer text-2xl'>BucketPay</h2>
            </div>

            <div>
                <ul className="flex justify-evenly items-center gap-20 text-sm">
                    <Link
                        to={'/'}>
                        <li
                            className='cursor-pointer'>Home</li>
                    </Link>
                    <Link to={'/about'}>
                        <li
                            className='cursor-pointer'>About</li>
                    </Link>
                    <Link to={'contact'}>
                        <li
                            className='cursor-pointer'>Contact Us</li>
                    </Link>
                </ul>
            </div>

            <div>
                {/* <img src={personImg} 
                className='w-12 h-12'
                alt="User image" /> */}

                <Button value={'Log out'} className={'border-2 rounded-lg'}/>
            </div>
        </nav>
    )
}

export default Navbar
