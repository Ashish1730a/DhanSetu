import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row  ">
        <h3 className=" text-center " style={{ fontWeight: "500" }}>
          People
        </h3>
      </div>
      <div className="row p-5  text-muted">
        <div
          className="col-6 p-5 text-center"
          style={{ fontSize: "14px", margin: "0 auto" }}
        >
          <img
            src="media/Ashish-removebg-preview.png"
            alt="Owner imgage"
            style={{
              borderRadius: "100%",
              width: "60%",
              height: "auto",
              margin: "0 auto",
              display: "block",
            }}
          />
          <h4 className="text-center mt-3">Ashish Thakur</h4>
          <h6 className="text-center">Founder, CEO</h6>
        </div>
        <div className="col-6 p-5" style={{ fontSize: "14px" }}>
          <p>
            Ashish Thakur founded DhanSetu in 2025 to simplify investing for
            millions of Indians. With a strong passion for markets and
            technology, he set out to build a platform that is transparent,
            intuitive, and built for long-term trust.
          </p>

          <p>
            He continues to lead DhanSetu’s product and vision while staying
            deeply involved in shaping the future of digital investing.
          </p>

          <p>
            Outside work, Ashish finds his calm in basketball and exploring new
            ideas.
          </p>
          <p >Connect on <a href="https://www.instagram.com/lucifer__1731/" style={{textDecoration: "none"}}>Instagram</a>   / <a href="linkedin.com/in/ashish-kumar-a1bba32a6" style={{textDecoration: "none"}}>LinkedIn</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
