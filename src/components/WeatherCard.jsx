function WeatherCard({ data }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h1 className="text-xl font-bold mb-4 text-blue-700">Weather Data</h1>
      <h2 className="text-2xl font-semibold mb-2">City Name: {data.city} </h2>
      <p className="text-lg">Weather Condition: {data.condition} </p>
      <p className="my-4 text-5xl font-bold text-blue-500">
        {data.temperature}&deg;C
      </p>
      <div className="flex justify-between text-gray-600">
        <span>Humidity: {data.humidity}%</span>
        <span>Wind: {data.windSpeed} km/h</span>
      </div>
    </div>
  );
}

export default WeatherCard;
