import React from "react";
import Navbar from "./Home/Navbar";
import styled from "styled-components";
import SearchBox from "./Home/SearchBox";
import WeatherReport from "./WeatherContent/WeatherReport";
import Footer from "./Home/Footer";

function Home() {
  const [weatherInfo, setWeatherInfo] = React.useState("");

  const updatedInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  const stars = React.useMemo(
    () =>
      Array.from({ length: 90 }, (_, i) => ({
        id: `star-${i + 8}`,
        left: `${Math.random() * 90}vw`,
        top: `${Math.random() * 100}vh`,
        animationDuration: `${Math.random() * 3 + 1}s`,
      })),
    []
  );

  return (
    <StyledWrapper>
      <Navbar />
      <div className="Background-Stars ">
        {stars.map((star) => (
          <div
            key={star.id}
            className="twinkling-star"
            style={{
              left: star.left,
              top: star.top,
              animationDuration: star.animationDuration,
            }}
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="search-box">
        <h1 className="my-20 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
          Discover the Weather in <br /> every city you go
        </h1>
        <SearchBox updatedInfo={updatedInfo} />
      </div>
      <div className="weather-content">
        <span className="flex items-center">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-red-900 dark:to-blue-700"></span>
          <span className="shrink-0 px-4 text-gray-900 dark:text-white font-bold">
            Weather Report
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-red-900 dark:to-blue-700"></span>
        </span>
        {weatherInfo ? (
          <WeatherReport weatherInfo={weatherInfo} />
        ) : (
          <p className="text-center text-gray-700 dark:text-gray-300 mt-4">
            Type your city & get weather updates...
          </p>
        )}
      </div>
      <Footer />
    </StyledWrapper>
  );
}

export default Home;

const StyledWrapper = styled.div`
  .weather-content {
    margin-top: 60px;
  }

  .twinkling-star {
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: white;
    border-radius: 50%;
    opacity: 0.8;
    animation: twinkling infinite alternate;
  }

  @keyframes twinkling {
    0% {
      opacity: 0.2;
      transform: scale(0.9);
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
    100% {
      opacity: 0.2;
      transform: scale(0.9);
    }
  }
`;
