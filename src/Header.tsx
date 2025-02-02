import React from 'react'
import {FiMenu} from 'react-icons/fi'
import {FaAngleDown} from 'react-icons/fa6'
import { FaEnvelope } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import userImg from './assets/formal-photo.jpg'
import { FaUserEdit } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { RootState, toggleMenu } from './redux/store';
import { toggleSidebar } from './redux/sidebarSlice';

const Header:React.FC=()=>{
    const dispatch=useDispatch()
    const isOpen=useSelector((state:RootState)=>state.sidebar.isOpen)
    const activeMenu=useSelector((state:RootState)=>state.menu.activeMenu)

    const handleToggleMenu=(menuIndex:number)=>{
        dispatch(toggleMenu(menuIndex))
    }

    return(
        <div className={`flex justify-between items-center p-4 bg-gray-900 transition-all duration-300 text-white h-[64px] z-20 sticky top-0 border-b-2 border-blue-700 ${isOpen ? 'md:ml-56' : 'md:ml-0'}`}>
            <div className="flex items-center">
                <FaUserEdit className="text-4xl text-blue-500 block md:hidden mr-2 " />
                <div className='cursor-pointer text-gray-500 text-2xl bg-black rounded-full p-2 mr-4 hover:text-gray-700 ' onClick={()=>dispatch(toggleSidebar())}> <FiMenu /> </div>
                <input type="search" name="" id="" className='bg-black outline-none px-2 py-1 rounded-lg hidden md:block '/>
            </div>
               
            <div className='flex justify-between items-center text-white'>
                <div className='relative'>
                    <button onClick={()=>handleToggleMenu(1)} className='flex items-center outline-none hover:text-gray-300'>
                        <div className='p-2 bg-black rounded-full' >
                            <FaEnvelope className=' text-xl ' />
                        </div>
                        <p className='text-lg hidden lg:block ml-2'>Messages</p> 
                        {activeMenu === 1 ? (
                            <FaAngleDown className='mx-2 transition-all duration-300 rotate-180'/>
                        ) : (
                            <FaAngleDown className='mx-2 transition-all duration-300'/>
                        )}
                    </button>
                    {activeMenu === 1 && (
                        <div className="absolute top-[51px] left-[-32px] w-[250px] bg-gray-900 border-2 border-gray-700 rounded-b-lg border-t-transparent ">
                            <div className="flex p-2 hover:bg-black ">
                                    <img className="w-[70px] h-[70px] mr-2 rounded-full" src={userImg} alt="" />
                                    <div className="flex flex-col">
                                        <h2 className="text-white font-bold ">Jane sent you a message</h2>
                                        <h2 className="text-gray-400">15 minutes ago</h2>
                                    </div>
                            </div>
                            <hr />
                            <div className="flex p-2 hover:bg-black">
                                <img className="w-[70px] h-[70px] mr-2 rounded-full" src={userImg} alt=""/>
                                <div className="flex flex-col">
                                    <h2 className="text-white font-bold ">Joun sent you a message</h2>
                                    <h2 className="text-gray-400">15 minutes ago</h2>
                                </div>
                            </div>
                            <hr />
                            <div className="flex p-2 hover:bg-black">
                                <img className="w-[70px] h-[70px] mr-2 rounded-full" src={userImg} alt=""/>
                                <div className="flex flex-col">
                                    <h2 className="text-white font-bold ">Jack sent you a message</h2>
                                    <h2 className="text-gray-400">15 minutes ago</h2>
                                </div>
                            </div>
                            <hr />
                            <h2 className="text-gray-400 text-center py-2 hover:bg-black rounded-b-lg"> all messages</h2>
                        </div>
                    )}
                </div>
                <div className="relative">
                    <button onClick={()=>handleToggleMenu(2)} className='flex items-center outline-none hover:text-gray-300 '>
                        <div className='p-2 bg-black rounded-full' >
                            <FaBell className='text-xl'/>
                        </div>
                        <p className='text-lg hidden lg:block ml-2'>Notifications</p> 
                        {activeMenu === 2 ? (
                            <FaAngleDown className='mx-2 transition-all duration-300 rotate-180'/>
                        ) : (
                            <FaAngleDown className='mx-2 transition-all duration-300'/>
                        )}
                    </button>
                    {activeMenu === 2 && (
                        <div className="absolute top-[51px] right-0 w-[160px] bg-gray-900 border-2 border-gray-700 rounded-b-lg border-t-transparent ">
                            <div className="flex flex-col hover:bg-black p-2">
                                <h2 className="text-white font-bold ">profile updated</h2>
                                <h2 className="text-gray-400">15 minutes ago</h2>
                            </div>
                            <hr />
                            <div className="flex flex-col hover:bg-black p-2">
                                <h2 className="text-white font-bold">New user added</h2>
                                <h2 className="text-gray-400">15 minutes ago</h2>
                            </div>
                            <hr />
                            <div className="flex flex-col hover:bg-black p-2">
                                <h2 className="text-white font-bold ">Password changed</h2>
                                <h2 className="text-gray-400">15 minutes ago</h2>
                            </div>
                            <hr />
                        <h2 className="text-gray-400 text-center py-2 hover:bg-black rounded-b-lg"> See all notifications</h2>
                    </div> 
                    )}
                </div>
                <div className='relative'>
                    <button onClick={()=>handleToggleMenu(3)} className='flex items-center outline-none hover:text-gray-300'>
                        <img src={userImg} alt="Avatar" className='w-11 h-11 rounded-full' />
                        <p className='text-lg hidden lg:block ml-2'>Profile</p> 
                        {activeMenu === 3 ? (
                            <FaAngleDown className='ml-2 transition-all duration-300 rotate-180'/>
                        ) : (
                            <FaAngleDown className='ml-2 transition-all duration-300'/>
                        )}
                    </button>
                    {activeMenu === 3 && (
                        <div className="absolute top-[55px] right-0 w-[150px] bg-gray-900 border-2 border-gray-700 rounded-b-lg border-t-transparent py-2">
                            <h2 className="text-gray-400 hover:bg-black px-2 text text-center">My Profile</h2>
                            <h2 className="text-gray-400 hover:bg-black px-2 text text-center">Settings</h2>
                            <h2 className="text-gray-400 hover:bg-black px-2 text text-center">Log Out</h2>
                        </div> 
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header