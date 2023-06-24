import React, {useState} from 'react'
import { AiOutlineAlert, AiOutlineHome, AiOutlineMenu } from 'react-icons/ai'
import './Sidenav.css'
import Button1 from './button'
const Sidenav = () => { 
    const [nav, setnav] = useState(false);
    const handleNav = () => {
      setnav(!nav);
      console.log('state changed');
    };
  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
        {
            nav ? (
                <div className='fixed w-full h-screen bg-black/90 flex flex-col justify-center items-center z-20'>
                    <Button1 Icon={AiOutlineHome} Text='Home' Href="https://twitter.com/?lang=es"/>
                    <Button1 Icon={AiOutlineMenu} Text='Menu' Href="https://www.youtube.com/"/>
                    <Button1 Icon={AiOutlineAlert} Text='Alertaaac' Href="https://www.reddit.com"/>
                </div>
            )
            :
            (
                <div></div>
            )
        }
    </div>
  )
}

export default Sidenav