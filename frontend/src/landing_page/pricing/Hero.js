import React from "react";

function Hero() {
  return (
    <div className="container ">
      <div className="row p-5  border-bottom text-center">
        <h3>Charges</h3>
        <p className="text-muted fs-5" style={{ fontWeight: "600" }}>
          List of all charges and taxes
        </p>
      </div>
      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
          <img src="/media/pricingEquity.svg" alt="" />
          <h4>Free equity delivery</h4>
          <p className="text-muted" style={{ fontSize: "13px" }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="/media/intradayTrades.svg" alt="" />
          <h4>Intraday and F&O trades</h4>
          <p className="text-muted" style={{ fontSize: "13px" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="/media/pricingEquity.svg" alt="" />
          <h4>Free direct MF</h4>
          <p className="text-muted" style={{ fontSize: "13px" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
