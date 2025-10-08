import React,{ useState } from 'react'
import Logo from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";



const Navbar = () => {

    const [openNav, setOpenNav] = useState(false);
    const [navLinks, setNavLinks] = useState(["Home", "Apps", "Installed Apps"]);

  return (
    <>
        <div className='w-full mx-auto bg-light' >
            <div className='flex justify-between items-center bg-light py-5 w-[95%] mx-auto' >
                <div className='flex items-center justify-center' >
                    <img src={Logo} alt="Logo" className='w-10 h-10'  />   
                    <h1 className='text-violet-500' >HERO.IO</h1>
                </div>
                      <div className='hidden sm:flex gap-6' >
                        {
                            navLinks.map(elem => <a href='/' key={elem} className='text-dark text-lg' >{elem}</a>)
                        }
                    </div>
                    <div className='flex sm:hidden' >
                        <div className='flex items-center gap-3 ' >
                            <h1 className='text-2xl text-violet-500' onClick={() => setOpenNav(!openNav)}  ><TiThMenu /></h1>
                        </div>
                        { openNav && 
                            <div className='flex flex-col absolute top-19 bg-light rounded-sm p-3 gap-3 duration-100 ease-out' >
                                { 
                                    navLinks.map(elem => <a href='/' key={elem} className='text-dark text-lg' >{elem}</a>)
                                }
                            </div>
                        }
                    </div>
                    <a href="https://github.com/Jerome-Mondol" target='_blank'><button className="px-3 py-2 bg-gradient-to-br from-purple-700 to-purple-500 flex justify-center items-center gap-2 rounded-sm" ><FaGithub />Contribute</button></a>
            </div>
        </div> 
    </>
  )
}

export default Navbar
