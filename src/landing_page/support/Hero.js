import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className=" p-3" id="supportWrapper">
        <h3 className="">Support Portal</h3>
        <a href="" className="fs-5">Track Tickets</a>
      </div>
      <div className="row p-2 ">
        <div className="col-6 p-5 " >
          <h4 className="mb-3 ">Search for an answer or browse help topic to create a ticket</h4>
          <input
            type="text"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
          className="mb-3"/> <br/>
          <a href="" style={{marginRight: "25px", textDecoration: "none"}}>Track account opening</a>
          <a href="" style={{marginRight: "25px", textDecoration: "none"}}>Track segment activation</a> <br />
          <a href="" style={{marginRight: "25px", textDecoration: "none"}}>Intraday margins</a>
          <a href="" style={{marginRight: "25px", textDecoration: "none"}}>Kite user manual</a>
        </div>
        <div className="col-6 p-5 " style={{lineHeight: "2.2"}}>
          <h5 className="mb-3">Featured</h5>
          <ol>
          
            <li> <a href="" style={{textDecoration: "none"}}>Current Takeovers and Delisting - January 2024</a></li>
          
            <li> <a href="" style={{textDecoration: "none"}}>Latest Intraday lerages - MIS & CO</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
