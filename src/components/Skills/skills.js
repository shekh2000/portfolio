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
        <span className='skillDesc'>I am a fresher and have experience in various skills as mentioned below</span>
        {/* <div className='skillSets'>
            <img src={html} alt='' className='htmlImg' />
            <img src={javasript} alt='' className='javasriptImg' />
            <img src={git} alt='' className='gitImg' />
            <img src={docker} alt='' className='dockerImg' />
            <img src={mongodb} alt='' className='mongodbImg' />
            <img src={style} alt='' className='styleImg' />
            <img src={react} alt='' className='reactImg' />
        </div> */}
        <div className="skillSets">
        <div className="row">
          <img src={html} alt="" className="htmlImg" />
          <img src={javascript} alt="" className="javascriptImg" />
        </div>
        <div className="row">
          <img src={git} alt="" className="gitImg" />
          <img src={docker} alt="" className="dockerImg" />
        </div>
        <div className="row">
          <img src={mongodb} alt="" className="mongodbImg" />
          <img src={style} alt="" className="styleImg" />
        </div>
        <div className="row">
          <img src={react} alt="" className="reactImg" />
        </div>
      </div>
    </section>
  )
}

export default skills