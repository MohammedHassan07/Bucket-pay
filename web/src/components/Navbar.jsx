import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex justify-evenly items-center h-14 bg-purple-950 text-white font-normal w-full">

            <div className="">
                <h2 className='font-bold  cursor-pointer'>BucketPay</h2>
            </div>

            <div>
                <ul className="flex justify-evenly items-center gap-20">
                    <li>Blogs</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div>
                <img src="../assets/person.jpeg" alt="User image" />
            </div>
        </nav>
    )
}

export default Navbar
