import React from 'react'

function LeftImage({imageURL, productName, productDesctiption, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className="container ">
            <div className="row align-items-center">
                <div className="col-6 mt-5">
                    <img src={imageURL} className='img-fluid'/>
                </div>
                <div className="col-6 p-5">
                    <h4>{productName}</h4>
                    
                    <p >{productDesctiption}</p>
                    <div >
                     <a href={tryDemo} style={{textDecoration: "none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{marginLeft: "60px", textDecoration: "none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                   <div className='mt-3'>
                    <a href={googlePlay} ><img src="media/googlePlayBadge.svg" /></a>
                    <a href={appStore} className='ms-3'><img src="media/appstoreBadge.svg" /></a>
                   </div>
                </div>
            </div>
        </div>
     );
}

export default LeftImage;