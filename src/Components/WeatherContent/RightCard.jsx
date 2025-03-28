import React from "react";
import styled from "styled-components";

function RightCard({ weatherInfo }) {
  return (
    <StyledWrapper>
      <div className="card h-80">
        <img
          src="https://uiverse.io/astronaut.png"
          alt="universe"
          className="image"
        />
        <div className="heading">
          City: {weatherInfo.city},{weatherInfo.country}
        </div>
        <div className="icons">
          <div className="stats-wrapper">
            <p className="heading">Wind speed</p>
            <div className="bottom-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="wind-speed-icon"
              >
                <path d="M3 10a1 1 0 011-1h10a3 3 0 100-6 1 1 0 110-2 5 5 0 110 10H4a1 1 0 01-1-1zm2 8a1 1 0 011-1h12a3 3 0 100-6 1 1 0 110-2 5 5 0 110 10H6a1 1 0 01-1-1zm5 4a1 1 0 011-1h5a3 3 0 100-6 1 1 0 110-2 5 5 0 110 10h-5a1 1 0 01-1-1z" />
              </svg>
              <p className="count">{weatherInfo.wind_speed}km/h</p>
            </div>
          </div>
          <div className="stats-wrapper">
            <p className="heading">Humidity</p>
            <div className="bottom-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="humidity-icon"
              >
                <path d="M12 3.1c-.3 0-.5.1-.7.3-1 .8-7.3 6.3-7.3 11.3 0 4.4 3.6 8 8 8s8-3.6 8-8c0-5-6.3-10.5-7.3-11.3-.2-.2-.4-.3-.7-.3zM12 20c-2.8 0-5-2.2-5-5 0-3.3 3.4-6.9 5-8.4 1.6 1.5 5 5.1 5 8.4 0 2.8-2.2 5-5 5zm0-4c-1.1 0-2 .9-2 2h2v-2zm0-3c-2.2 0-4 1.8-4 4h2c0-1.1.9-2 2-2v-2z" />
              </svg>
              <p className="count">{weatherInfo.humidity}%</p>
            </div>
          </div>
          <div className="stats-wrapper">
            <p className="heading">Feels Like</p>
            <div className="bottom-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="feels-like-icon"
              >
                <path d="M12 2a1 1 0 011 1v9.27a4.5 4.5 0 11-2 0V3a1 1 0 011-1zm-3.5 15.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zM6 7a1 1 0 011 1v4a1 1 0 11-2 0V8a1 1 0 011-1zm10-1a1 1 0 011 1v4a1 1 0 11-2 0V7a1 1 0 011-1zm-9 13a1 1 0 01.7 1.71l-1.5 1.5a1 1 0 01-1.42-1.42l1.5-1.5A1 1 0 017 19zm10 0a1 1 0 01.7 1.71l-1.5 1.5a1 1 0 01-1.42-1.42l1.5-1.5A1 1 0 0117 19z" />
              </svg>
              <p className="count">{weatherInfo.feels_like}</p>
            </div>
          </div>
        </div>
        <p>
          <i>{weatherInfo.description}</i>
        </p>
      </div>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div`
  /* HOLD THE ASTRONAUT */

  .card {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #07182e;
    color: white;
    border-radius: 4px;
    overflow: hidden;
    z-index: 1;
    row-gap: 0.5em;
  }
  .card img {
    width: 8em;
    margin-right: 1em;
    animation: move 10s ease-in-out infinite;
    z-index: 5;
  }
  .icons svg {
    width: 20px;
    height: 20px;
  }

  .card::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    inset: -3px;
    border-radius: 10px;
    background: radial-gradient(#858585, transparent, transparent);
    transform: translate(-5px, 250px);
    transition: 0.4s ease-in-out;
    z-index: -1;
  }
 
  .card::after {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: 20px;
    background: rgb(23, 23, 23, 0.7);
    transition: all 0.4s ease-in-out;
    z-index: -1;
  }

  .heading {
    z-index: 2;
    transition: 0.4s ease-in-out;
  }


  .heading::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 220px 118px #fff, 280px 176px #fff, 40px 50px #fff,
      60px 180px #fff, 120px 130px #fff, 180px 176px #fff, 220px 290px #fff,
      520px 250px #fff, 400px 220px #fff, 50px 350px #fff, 10px 230px #fff;
    z-index: -1;
    transition: 1s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0s;
  }
  .icons::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 140px 20px #fff, 425px 20px #fff, 70px 120px #fff, 20px 130px #fff,
      110px 80px #fff, 280px 80px #fff, 250px 350px #fff, 280px 230px #fff,
      220px 190px #fff, 450px 100px #fff, 380px 80px #fff, 520px 50px #fff;
    z-index: -1;
    transition: 1.5s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0.4s;
  }
  .icons::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 490px 330px #fff, 420px 300px #fff, 320px 280px #fff,
      380px 350px #fff, 546px 170px #fff, 420px 180px #fff, 370px 150px #fff,
      200px 250px #fff, 80px 20px #fff, 190px 50px #fff, 270px 20px #fff,
      120px 230px #fff, 350px -1px #fff, 150px 369px #fff;
    z-index: -1;
    transition: 2s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0.8s;
  }


  .image:active {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }
  .image:active + .heading::before {
    box-shadow: 240px 20px #9b40fc, 240px 25px #9b40fc, 240px 30px #9b40fc,
      240px 35px #9b40fc, 240px 40px #9b40fc, 242px 45px #9b40fc,
      246px 48px #9b40fc, 251px 49px #9b40fc, 256px 48px #9b40fc,
      260px 45px #9b40fc, 262px 40px #9b40fc;
    animation: none;
    filter: blur(0);
    border-radius: 2px;
    width: 0.45em;
    height: 0.45em;
    scale: 0.65;
    transform: translateX(9em) translateY(1em);
  }
  .image:active ~ .icons::before {
    box-shadow: 262px 35px #9b40fc, 262px 30px #9b40fc, 262px 25px #9b40fc,
      262px 20px #9b40fc, 275px 20px #9b40fc, 275px 24px #9b40fc,
      275px 28px #9b40fc, 275px 32px #9b40fc, 275px 36px #9b40fc,
      275px 40px #9b40fc, 275px 44px #9b40fc, 275px 48px #9b40fc;
    animation: none;
    filter: blur(0);
    border-radius: 2px;
    width: 0.45em;
    height: 0.45em;
    scale: 0.65;
    transform: translateX(9em) translateY(1em);
  }
  .image:active ~ .icons::after {
    box-shadow: 238px 60px #9b40fc, 242px 60px #9b40fc, 246px 60px #9b40fc,
      250px 60px #9b40fc, 254px 60px #9b40fc, 258px 60px #9b40fc,
      262px 60px #9b40fc, 266px 60px #9b40fc, 270px 60px #9b40fc,
      274px 60px #9b40fc, 278px 60px #9b40fc, 282px 60px #9b40fc,
      234px 60px #9b40fc, 234px 60px #9b40fc;
    animation: none;
    filter: blur(0);
    border-radius: 2px;
    width: 0.45em;
    height: 0.45em;
    scale: 0.65;
    transform: translateX(9em) translateY(1.25em);
  }

  .heading::after {
    content: "";
    top: -8.5%;
    left: -8.5%;
    position: absolute;
    width: 7.5em;
    height: 7.5em;
    border: none;
    outline: none;
    border-radius: 50%;
    background: #f9f9fb;
    box-shadow: 0px 0px 100px rgba(193, 119, 241, 0.8),
      0px 0px 100px rgba(135, 42, 211, 0.8), inset #9b40fc 0px 0px 40px -12px;
    transition: 0.4s ease-in-out;
    z-index: -1;
  }
 

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    column-gap: 2em;
    z-index: 1;
  }

  .image:active ~ .icons .instagram::before,
  .image:active ~ .icons .x::before,
  .image:active ~ .icons .discord::before {
    animation: none;
    opacity: 0;
  }

  @keyframes shootingStar {
    0% {
      transform: translateX(0) translateY(0);
      opacity: 1;
    }
    50% {
      transform: translateX(-55em) translateY(0);
      opacity: 1;
    }
    70% {
      transform: translateX(-70em) translateY(0);
      opacity: 0;
    }
    100% {
      transform: translateX(0) translateY(0);
      opacity: 0;
    }
  }

  @keyframes move {
    0% {
      transform: translateX(0em) translateY(0em);
    }
    25% {
      transform: translateY(-1em) translateX(-1em);
      rotate: -10deg;
    }
    50% {
      transform: translateY(1em) translateX(-1em);
    }
    75% {
      transform: translateY(-1.25em) translateX(1em);
      rotate: 10deg;
    }
    100% {
      transform: translateX(0em) translateY(0em);
    }
  }

  @keyframes glowing-stars {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
       .stats-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100px;
    height: 90px;
    border-radius: 20px;
    background-color: rgb(255, 255, 255);
    padding: 15px;
    box-shadow:
      20px 20px 60px #e6e6e6,
      -20px -20px 60px #f3f3f3;
  }
  .heading {
    font-size: 0.3em;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .bottom-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .bottom-wrapper .star {
    width: 30px;
    fill: gold;
  }
  .bottom-wrapper .tag {
    width: 27px;
    fill: rgb(141, 214, 32);
  }
  .bottom-wrapper .thumb {
    width: 27px;
    fill: blueviolet;
  }
  .bottom-wrapper p {
    font-size: 1.2em;
    font-weight: 400;
  }`;

export default RightCard;
