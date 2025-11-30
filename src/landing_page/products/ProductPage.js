import React from "react";
import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftImage
        imageURL="media/kite.png"
        productName="Kite"
        productDesctiption="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=" "
        learnMore=" "
        googlePlay=" "
        appStore=" "
      />
      <RightImage />
      <LeftImage
        imageURL="media/coin.png"
        productName="Coin"
        productDesctiption="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
        learnMore=" "
        googlePlay=" "
        appStore=" "
      /> 
      <RightImage />
      <LeftImage
        imageURL="media/varsity.png"
        productName="Varsity mobile"
        productDesctiption="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=" "
        learnMore=" "
        googlePlay=" "
        appStore=" "
      />
      
      <RightImage />
      <Universe />
    </>
  );
}

export default ProductPage;
