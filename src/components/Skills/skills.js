import React from 'react'
import './skills.css'
import html from '../../assets/html.png';
import javascript from '../../assets/javasript.png';
import git from '../../assets/git.png';
import docker from '../../assets/docker.png';
import mongodb from '../../assets/mongodb.png';
import style from '../../assets/style.png';
import react from '../../assets/react.png';

const skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What i do</span>
        <span className='skillDesc'>I am a fresher, and have worked on multiple project during my acadmics, and have experience in various skills as mentioned below.I have also worked in AI/ML and have good grasp on computer science fundamentals.</span>
        <div className='skill_upper_part'>
            <img src={html} alt='' className='htmlImg' />
            <img src={javascript} alt='' className='javascriptImg' />
            <img src={git} alt='' className='gitImg' />
            <img src={docker} alt='' className='dockerImg' />
            </div>

        <div className='skill_lower_part'> 
            <img src={mongodb} alt='' className='mongodbImg' />
            <img src={style} alt='' className='styleImg' />
            <img src={react} alt='' className='reactImg' />
            </div>
    </section>
  )
}

export default skills