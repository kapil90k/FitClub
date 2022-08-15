import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import motion from "framer-motion";

function Hero() {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="hero__left">
        <Header />

        <div className="the-best-ad">
          {/* <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "9px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div> */}
          <div></div>
          <span>The best fitness club in town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build body and live up your
              life to the fullest
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* Hero buttons */}

        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="hero__right">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={Heart} />
          <span>Heart Rate</span>
          <span>116 BPM</span>
        </div>
        <img src={hero_image} className="hero-image" />
        <img src={hero_image_back} className="hero-image-back" />
        <div className="calories">
          <img src={Calories} />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
