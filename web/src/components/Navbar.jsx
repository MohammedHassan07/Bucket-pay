import React from 'react'
import personImg from '../assets/person.jpeg'

const Navbar = () => {
    return (
        <nav className="flex justify-evenly items-center h-14 bg-purple-950 text-white font-normal w-full">

            <div className="">
                <h2 className='font-bold  cursor-pointer text-2xl'>BucketPay</h2>
            </div>

            <div>
                <ul className="flex justify-evenly items-center gap-20 text-sm">
                    <li className='cursor-pointer'>Blogs</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Contact Us</li>
                </ul>
            </div>

            <div>
                {/* <img src={personImg} 
                className='w-12 h-12'
                alt="User image" /> */}
            </div>
        </nav>
    )
}

export default Navbar
