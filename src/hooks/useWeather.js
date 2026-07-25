import { useQuery } from "@tanstack/react-query";
import { getWeather, getWeatherByCoords } from "../api/weatherApi";

export function useWeather(query) {
  const isCoords = query && typeof query === "object";

  return useQuery({
    queryKey: isCoords
      ? ["weather", "coords", query.lat, query.lon]
      : ["weather", "city", query],
    queryFn: () =>
      isCoords ? getWeatherByCoords(query.lat, query.lon) : getWeather(query),
    enabled: isCoords ? !!(query.lat && query.lon) : !!query,
    retry: false,
  });
}
