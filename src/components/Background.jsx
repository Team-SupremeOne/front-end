import React from 'react';
import video from '../assets/videoBg.mp4'
import Nav from '../components/Nav';
import Slider from '../components/Slider'

function Main () {
    return (
        
        <div className='main'>
            <video  src={video} autoPlay loop muted/>
        <div className='content'>
            

            <Nav />
            <Slider />
        </div>
        </div>
    );
}

export default Main;