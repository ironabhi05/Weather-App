import React from "react";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import MiddleCard from "./MiddleCard";

function WeatherReport({ weatherInfo }) {

  return (
    <div className="weather-content grid grid-cols-1 gap-6 lg:grid-cols-7 lg:gap-2 m-4">
      <div className="h-80 rounded bg-gray-900 lg:col-span-2">
        <LeftCard weatherInfo={weatherInfo} />
      </div>
      <div className="h-80 rounded lg:col-span-3">
        <MiddleCard/>
      </div>
      <div className="h-80 rounded lg:col-span-2">
        <RightCard weatherInfo={weatherInfo}/>
      </div>
    </div>
  );
}

export default WeatherReport;
