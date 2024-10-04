import Asside from "../components/Asside.jsx"
import Buckets from './Buckets.jsx'
import ChatBucketOther from '../components/ChatBucketOther.jsx'
import { Outlet } from "react-router-dom"

const Home = () => {

 
    return (
        <>

            <div className='flex'>

                <Asside />

                <div className='p-6 w-screen'>

                    {/* chat, bucket buttons */}
                    <ChatBucketOther />

                    {/* main */}
                    <div className='flex justify-center items-center flex-wrap gap-5 pt-6'>
                       <Outlet />
                    </div>
                </div>
            </div >


        </>
    )
}

export default Home
