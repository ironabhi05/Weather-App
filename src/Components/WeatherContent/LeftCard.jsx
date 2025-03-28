import React from "react";
import styled from "styled-components";

function LeftCard({ weatherInfo }) {
  return (
    <StyledWrapper>
      <div className="w-full text-white p-3 rounded-xl shadow-lg flex flex-row gap-4">
        {/* First Card - Wind */}
        <div className="wind-card flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-10 h-10 text-blue-300 z-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 10h7M5 10h2m1 0h3m-5 6h3m5 0h4M3 16h2m9-6a2 2 0 11-4 0 2 2 0 014 0zm-6 6a2 2 0 104 0 2 2 0 00-4 0z"
            />
          </svg>
          <h2>{weatherInfo.wind_speed} km/h</h2>
        </div>

        {/* Second Card - Temperature */}
        <div className="temp-card flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-10 h-10 text-red-400 z-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8V4m0 0a4 4 0 00-4 4v5.5a4.5 4.5 0 109 0V8a4 4 0 00-4-4z"
            />
          </svg>
          <h2>{weatherInfo.temperature}&#176;C</h2>
        </div>
      </div>

      {/* Button & Description */}
      <div className="w-full ps-3">
        <a className="text-blue-800 cursor-pointer">Show more</a>
        <p className="text-sm text-white mt-2">
          Get complete weather information every day.
        </p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  .wind-card {
    width: 130px;
    height: 170px;
    position: relative;
    display: flex;
    place-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
    margin-top: -20px; /* Move Wind Card up */
  }
  .temp-card {
    width: 130px;
    height: 170px;
    position: relative;
    display: flex;
    place-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
    margin-top: 20px; /* Move Temp Card down */
  }

  .wind-card h2,
  .temp-card h2 {
    z-index: 2;
    color: white;
    font-size: 1.2em;
    margin-top: 8px;
  }

  .wind-card::before,
  .temp-card::before {
    content: "";
    position: absolute;
    width: 100px;
    background-image: linear-gradient(
      180deg,
      rgb(4, 80, 221),
      rgb(182, 9, 182)
    );
    height: 130%;
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .wind-card::after,
  .temp-card::after {
    content: "";
    position: absolute;
    background: #07182e;
    inset: 2px; /* Keep same inset value */
    border-radius: 15px;
    z-index: 1;
  }
`;

export default LeftCard;
