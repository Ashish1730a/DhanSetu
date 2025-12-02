import React from "react";

function Brokerage() {
  return (
    <div className="container ">
      <div className="row p-5 mt-5 text-cente border-top">
        <div className="col-8 p-4 ">
          <a href="" style={{ textDecoration: "none" }}>
            <h6 style={{ Color: "blue" }} className="text-center mb-2">Brokerage calculator</h6>
          </a>
          <ul className="text muted " style={{ fontSize: "13px", textAlign: "left", lineHeight: "2.5" }}>
            <li >Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST
            per order. Digital contract notes will be sent via e-mail.</li> 
            <li >Physical
            copies of contract notes, if required, shall be charged at ₹20 per
            contract note. Courier charges apply.</li>
            <li >For NRI account (NON-PIS),
            0.5% or ₹100 per executed order for equity (whichever is lower).</li>
            <li > For
            NRI account (PIS), 0.5% or ₹200 per executed order for equity
            (whichever is lower).</li>
            <li > If the account is in debit balance, any orders
            placed will be charged ₹40 per executed order instead of ₹20 per
            executed order.</li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h6 style={{ Color: "blue" }}>List of charges</h6>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
