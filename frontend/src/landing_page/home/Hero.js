import React from 'react'
import {useState} from "react";
import {Link} from 'react-router-dom';

function Hero() {
    const [hover, setHover] = useState(false);
       const buttonStyle = {
           transform: hover ? "scale(1.05)" : "scale(1)",
          boxShadow: hover ? "0 5px 15px rgba(78, 115, 223, 0.4)" : "none",
       }
    return (
        <div className='container p-5 mb-5'>
             <div className='row text-center'>
                <img src="media/homeHero.png" alt="Hero Image" className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link to="/signup">
                <button className='p-2 btn text-white fs-5 mt-3' style={{ ...buttonStyle, width: "20%", margin: " 0 auto", background: "linear-gradient(135deg, #4e73df, #6f42c1)", transition: "0.3s" ,  borderRadius: "10px", padding:"12px", }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>Sign up for free</button>
                </Link>
             </div>
        </div>
    );
}

export default Hero;