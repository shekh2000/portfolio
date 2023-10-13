import React from 'react'
import './intro.css'
import bg from '../../assets/background_img.jpeg'
import btnImg from '../../assets/gmail.png'
import { Link } from 'react-scroll';



const Intro = () => {
  return (
    // <img src={btnImg} alt = 'Hire me' />
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello, mera chahaane waalo</span><br/>
                <span className='introText'>I' m <span className='introName'>Deepak Singh</span><br/>Web Developer</span>
                <p className='introPara'>As a computer engineer, I thrive on the symphony of algorithms and circuits,<br/> sculpting the future of technology with precision and innovation.</p>
                <Link><button className='btn'><img src={btnImg} alt = 'Hire me' className='btnImg'/>Hire Me</button></Link>
            </div>
            <img src={bg} alt='Profile' className='bg' />
        </section>
    )
}

export default Intro