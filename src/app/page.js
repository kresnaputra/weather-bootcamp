"use client";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <header className="text-center my-10">
        <h1 className="text-4xl font-bold">Weather App</h1>
        <p className="text-lg">Get the latest weather updates</p>
      </header>

      <div className="flex flex-col items-center w-full max-w-md p-4 bg-white bg-opacity-10 rounded-lg">
        <input
          type="text"
          placeholder="Enter city"
          className="w-full p-3 text-black rounded-md outline-none"
        />
        <button
          onClick={() => {}}
          className="mt-4 w-full py-2 bg-blue-700 hover:bg-blue-800 rounded-md transition duration-300"
        >
          Get Weather
        </button>
      </div>

      <div className="mt-10 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-2">Lokasi</h2>
        <div className="grid grid-cols-1 gap-4">
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-lg"
            >
              <p className="text-lg font-bold">
                22/11/2022
              </p>
              <img
                src={"//cdn.weatherapi.com/weather/64x64/day/176.png"}
                alt={item}
                className="w-16 h-16"
              />
              <p>description</p>
              <p>
                <span className="font-bold">Max:</span> 26 °C
              </p>
              <p>
                <span className="font-bold">Min:</span> 31 °C
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
