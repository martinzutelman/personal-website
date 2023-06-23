import React from "react"
import './Sidenav.css'
import { AiOutlineHome } from 'react-icons/ai'

const Button1  = ({Icon, Text, Href}) => {
    const IconComponent = Icon || AiOutlineHome;
    return(
        <a href={Href} className='button1'>
        <IconComponent size={20}/>
        <span className='pl-4'>{Text}</span>
        </a>
    );
};
export default Button1;