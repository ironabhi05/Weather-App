import React from "react";

function MiddleCard() {
  const today = new Date().toLocaleDateString();
  return (
    <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg h-full w-full">
      {/* Image Covering the Parent Card */}
      <img
        alt="Weather"
        src="https://plus.unsplash.com/premium_photo-1712328581748-75c46db5ed1d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient & Content */}
      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 h-full flex flex-col justify-end">
        <div className="p-4 sm:p-6">
          <time className="block text-xs text-white/90">Date: {today}</time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-white">
              ☀️ Weather Highlights for the Day
            </h3>
          </a>

          <p className="mt-2 text-sm text-white/95 line-clamp-3">
            "Today's weather is partly cloudy with a mild breeze, making it a
            comfortable day overall. The temperature is around 28°C (82°F), with
            humidity at 60%, creating a slightly warm but pleasant atmosphere.
            Wind speeds are moderate at 10 km/h, bringing a refreshing feel.
            There's a slight chance of rain later in the evening, so carrying an
            umbrella might be a good idea. Enjoy your day!
          </p>
        </div>
      </div>
    </article>
  );
}

export default MiddleCard;
