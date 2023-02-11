import React from 'react'
import './Footer.css'
import insta from './insta.jpg'
import facebook from './facebook.png'
import youtube from './youtube.png'
import linkedin from './Linkedin.jpg'
import whatsapp from './whatsapp.jpg'
import { Link } from 'react-router-dom'



const Footer = () => {
    return (
        <>
        
        <div className='footer'> 
        <h3 className='contactme'>social media</h3>        
<Link  to='https://www.instagram.com/piyushchandra07/'><img className='insta' src={insta} /></Link>
<Link  to='https://www.facebook.com/piyush.chandra.58910'><img className='facebook' src={facebook} /></Link>
<Link  to='https://www.youtube.com/@1mystic486'><img className='youtube' src={youtube} /></Link>
<Link  to='https://www.linkedin.com/in/piyush-chandra-16418722b/'><img className='linkedin' src={linkedin} /></Link>
<Link  to='https://bit.ly/3kOtgwK'><img className='whatsapp' src={whatsapp} /></Link>
        </div>
        </>
    )
}

export default Footer;
