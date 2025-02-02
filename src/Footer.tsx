import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'

const Footer:React.FC=()=>{
    const isOpen=useSelector((state:RootState)=>state.sidebar.isOpen)
    return (
        <div className='grid grid-cols-1 px-6 mt-6' >
            <footer className={`bg-blue-950 text-white transition-all duration-300 p-4 border-b-transparent border-2 border-blue-700 rounded-t-xl ${isOpen ? 'md:ml-56' : 'md:ml-0'}`}>
                <div className='flex justify-between'>
                    <h2>© Your Site Name, All Right Reserved.</h2>
                    <div className='flex flex-col'>
                        <h2>Designed By HTML Codex</h2>
                        <h2>Distributed By: ThemeWagon</h2>
                    </div>
                </div>
            </footer>
        </div>)
}

export default Footer