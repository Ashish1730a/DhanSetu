import React from 'react'
function RightImage({imageURL, productName, productDesctiption, learnMore}) {
    return ( 
        <div className="container ">
            <div className="row align-items-center"> 
                <div className="col-6 p-5">
                    <h4>{productName}</h4>
                    
                    <p >{productDesctiption}</p>
                    <div>
                    <a href={learnMore} style={{ textDecoration: "none"}} >Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className="col-6 mt-5">
                    <img src={imageURL} className='img-fluid'/>
                </div>
            </div>
        </div>
     );
}

export default RightImage;