import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { useState } from "react";
import { useWeather } from "./hooks/useWeather";

function App() {
  const [city, setCity] = useState("");

  const { data, isLoading, isError, error } = useWeather(city);

  return (
    <div className="min-h-screen bg-blue-50 flex justify-center p-4">
      <div className="w-full max-w-md mt-16 space-y-4">
        <h1 className="text-center text-3xl font-bold text-blue-600">
          Weather App
        </h1>
        <SearchBar onSearch={setCity} />
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {error.message}</p>}

        {data && <WeatherCard data={data} />}
      </div>
    </div>
  );
}

export default App;
