import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import userImg from './assets/formal-photo.jpg'
import { FaUserEdit } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { closeSidebar } from './redux/sidebarSlice';

const Sidebar:React.FC=()=>{
    const dispatch=useDispatch()
    const isOpen=useSelector((state:RootState)=>state.sidebar.isOpen)

    const handleResize=()=>{
        dispatch(closeSidebar())
    }

    useEffect(()=>{
        window.addEventListener('resize',handleResize)

        return ()=>{
            window.removeEventListener('resize',handleResize)
        }
    },[dispatch])
    return(
        <div className={`z-20 fixed left-0 top-16 md:top-0 h-full w-56 bg-blue-950 border-r-2 border-blue-700 duration-300 transition-all pt-4 ${isOpen ? 'translate-x-0' : '-translate-x-full'} `} >
            <div className="text-3xl text-blue-500 hidden md:flex mb-4 pl-7 items-center ">
                <FaUserEdit className="text-4xl mr-2" />
                <p className="font-bold">Darkpan</p> 
            </div>
            <div className="flex py-2 pl-5">
                <img src={userImg} alt="" className="w-[48px] rounded-full mr-2" />
                <div>
                    <h2 className="text-white font-bold">Mohammad Jm</h2>
                    <h2 className='text-gray-300'>Admin</h2>
                </div>
            </div>
            
            <Link to='/' className={`flex items-center transition-all duration-300 mr-6  px-4 py-2 rounded-r-full  cursor-pointer ${window.location.pathname ==='/' ? 'border-l-4 border-l-blue-500 bg-black text-blue-500' : 'text-gray-300 hover:border-l-4 hover:border-l-blue-500 hover:bg-black hover:text-blue-500' } `}>
                <div className='p-2 flex justify-center items-center bg-blue-900 rounded-full  mr-2' >
                    <FaTachometerAlt className='text-3xl ' />
                </div>
                <p className="font-semibold text-xl " >Dashboard</p>
            </Link>
            <Link to='/charts' className={`flex items-center transition-all duration-300 mr-6 px-4 py-2 rounded-r-full  cursor-pointer ${window.location.pathname ==='/charts' ? 'border-l-4 border-l-blue-500 bg-black text-blue-500' : 'text-gray-300 hover:border-l-4 hover:border-l-blue-500 hover:bg-black hover:text-blue-500' } `}>
                <div className='p-2 flex justify-center items-center bg-blue-900 rounded-full  mr-2' >
                    <FaChartBar className="text-3xl " />
                </div>
                <p className='font-semibold text-xl ' >Charts</p>
            </Link>
            <Link to='/signup' className={`flex items-center  mr-6  px-4 py-2 rounded-r-full  cursor-pointer ${window.location.pathname ==='/signup' ? 'border-l-4 border-l-blue-500 bg-black text-blue-500' : 'text-gray-300 hover:border-l-4 hover:border-l-blue-500 hover:bg-black hover:text-blue-500' } `}>
                <div className='p-2 flex justify-center items-center bg-blue-900 rounded-full  mr-2' >
                    <FaFileAlt className="text-3xl" />
                </div>
                <p className='font-semibold text-xl' >Sign Up</p>
            </Link>
        </div>
    )
}

export default Sidebar