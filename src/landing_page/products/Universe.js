import React from "react";

function Universe() {
  return (
    <div className="container p-5">
      <div className="row text-center align-items-center">
        <h4>The DhanSetu Universe</h4>
        <p></p>

        <div className="col-4 mt-5">
          <img
            src="media/zerodhaFundhouse.png"
            className="img-fluid"
            style={{ width: "50%" }}
          />
          <p
            className="text-small text-muted mt-2"
            style={{ fontSize: "12px" }}
          >
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="media/sensibullLogo.svg"
            className="img-fluid"
            style={{ width: "60%" }}
          />
          <p
            className="text-small text-muted mt-2"
            style={{ fontSize: "12px" }}
          >
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="media/tijori.svg"
            className="img-fluid"
            style={{ width: "60%" }}
          />
          <p className="text-small text-muted mt-4" style={{ fontSize: "12px" }}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-4 mt-5">
          <img
            src="media/streakLogo.png"
            className="img-fluid"
            style={{ width: "60%" }}
          />
          <p className="text-small text-muted mt-2" style={{ fontSize: "12px" }}>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img src="media/smallcaseLogo.png" className="img-fluid" style={{width: "60%"}}/>
          <p className="text-small text-muted mt-2" style={{ fontSize: "12px" }}>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img src="media/dittoLogo.png" className="img-fluid" style={{width: "40%"}}/>
          <p className="text-small text-muted mt-2" style={{ fontSize: "12px" }}>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button
          className="p-2 btn text-white fs-5 mb-3 mt-3"
          style={{
            width: "20%",
            margin: " 0 auto",
            backgroundColor: "#1976D2",
          }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
