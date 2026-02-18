import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';


function OpenAccount() {
   const [hover, setHover] = useState(false);
   const buttonStyle = {
       transform: hover ? "scale(1.05)" : "scale(1)",
      boxShadow: hover ? "0 5px 15px rgba(78, 115, 223, 0.4)" : "none",
   }
   return (
      <div className='container p-5 '>
         <div className='row text-center'>
            <h5 className='mt-3 '>Open a Zerodha account</h5>
            <p className='mt-3 '>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>

            <Link to="/signup">
            <button className='p-2 btn text-white fs-5 mt-3' style={{ ...buttonStyle, width: "20%", margin: " 0 auto", background: "linear-gradient(135deg, #4e73df, #6f42c1)", transition: "0.3s" ,  borderRadius: "10px", padding:"12px", }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>Sign up for free</button>
            </Link>
         </div>
      </div>
   );
}

export default OpenAccount;