import React from 'react';
import p1 from '../../../assets/images/about_us/1.jpg'
import p2 from '../../../assets/images/about_us/2.jpg'
import p3 from '../../../assets/images/about_us/3.jpg'
import p4 from '../../../assets/images/about_us/4.jpg'
import p5 from '../../../assets/images/about_us/5.jpg'
import p6 from '../../../assets/images/about_us/6.jpg'

const About = () => {
    return (
        <div className="hero my-100 py-10">
           
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={p1} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" /> 
                     <img src={p2}  alt="" className="absolute right-5 top-1/3 w-3/5 border-8 rounded-lg shadow-2xl" />
                    <img src={p3} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={p4}  alt="" className="absolute right-5 top-5/2 w-3/5 border-8 rounded-lg shadow-2xl" /> 
                </div>
                <div className='w-1/2'>
                <img src={p5} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={p6}  alt="" className="absolute right-5 top-8/2 w-3/5 border-8 rounded-lg shadow-2xl" />
                    <img src={p4} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    
                    
                </div>
            </div>
        </div>
    );
};

export default About;