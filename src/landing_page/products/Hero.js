import React from 'react'

function Hero() {
    return ( 
        <div className="container  border-bottom">
            <div className='text-center mt-5 p-3'>
                <h3 >Zerodha Products</h3>
                <h5 className='text-muted mt-3 fs-6'>Sleek, modern, and intuitive trading platforms</h5>
                <p className='mt-2'>Check out our <a href="" style={{textDecoration: "none"}}> investment offerings  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;