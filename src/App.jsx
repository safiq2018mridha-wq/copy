import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { useWeather } from "./hooks/useWeather";

function App() {
  const [city, setCity] = useState("");
  const [coords, setCoords] = useState(null);
  const [geoDenied, setGeoDenied] = useState(false);

  // ask once on first load, then let the query key do the rest
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => setCoords({ lat: coords.latitude, lon: coords.longitude }),
      () => setGeoDenied(true), // always handle the denied callback
    );
  }, []);

  // prefer an explicit city search over geolocation once the user types one
  const query = city ? city : coords;

  const { data, isLoading, isError, error } = useWeather(query);

  return (
    <div className="min-h-screen bg-blue-50 flex justify-center p-4">
      <div className="w-full max-w-md mt-16 space-y-4">
        <h1 className="text-center text-3xl font-bold text-blue-600">
          Weather App
        </h1>
        <SearchBar onSearch={setCity} />
        {geoDenied && !city && (
          <p className="text-center text-sm text-gray-500">
            Location access denied — search for a city instead.
          </p>
        )}
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {error.message}</p>}
        {data && <WeatherCard data={data} />}
      </div>
    </div>
  );
}

export default App;
