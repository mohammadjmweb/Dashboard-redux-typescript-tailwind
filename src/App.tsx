import './App.css'
import React , {useEffect} from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import Footer from './Footer'
import {Routes,Route,useLocation} from 'react-router-dom'
import Charts from './Charts'
import SignUp from './SignUp'

const App:React.FC=()=>{

    const location=useLocation()

    useEffect(()=>{
        console.log('Current path:',location.pathname)
    },[location])

    return(
        
                <div className='bg-black flex'>
                    <Sidebar/>
                    <div className='w-full flex flex-col'>
                        <Header/>
                        <Routes>
                            <Route path='/' element={<Dashboard  />} />
                            <Route path='/charts' element={<Charts  />} />
                            <Route path='/signup' element={<SignUp />} />
                        </Routes>
                        <Footer />
                    </div>
                </div> 
            
    )
}
export default App