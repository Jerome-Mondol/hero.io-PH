import React,{ useState } from 'react'
import Logo from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from 'react-router';
import { Link } from 'react-router'


const Navbar = () => {

    const [openNav, setOpenNav] = useState(false);
    const [navLinks, setNavLinks] = useState([
        { 
            title: "Home",
            path: "/"
        }, 
        {
            title: "Apps",
            path: "/apps"
        },
        {
            title: "installation",
            path: "/installed"
        }
    ]);

  return (
    <>
        <div className='w-full mx-auto bg-light' >
            <div className='flex justify-between items-center bg-light py-5 w-[95%] mx-auto' >
                <div className='flex items-center justify-center' >
                    <img src={Logo} alt="Logo" className='w-10 h-10'  />   
                    <Link to={'/'} ><h1 className='text-violet-500'>HERO.IO</h1></Link>
                </div>
                      <div className='hidden sm:flex gap-6' >
                        {
                            navLinks.map(({ path, title }) => <NavLink to={path} key={path} className={({isPending, isActive}) => isPending ? "text-violet-400" : isActive ? "text-violet-600 underline" : "text-dark"}  >{title}</NavLink>)
                        }
                    </div>
                    <div className='flex sm:hidden' >
                        <div className='flex items-center gap-3 ' >
                            <h1 className='text-2xl text-violet-500' onClick={() => setOpenNav(!openNav)}  ><TiThMenu /></h1>
                        </div>
                        { openNav && 
                            <div className='flex flex-col absolute top-19 bg-light rounded-sm p-3 gap-3 duration-100 ease-out' >
                                { 
                                    navLinks.map(({ path, title }) => <NavLink to={path} key={path} className={({isPending, isActive}) => isPending ? "text-violet-400" : isActive ? "text-violet-600 underline" : "text-dark"}  >{title}</NavLink>)
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
