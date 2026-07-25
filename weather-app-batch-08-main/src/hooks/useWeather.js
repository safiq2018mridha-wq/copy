import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api/weatherApi";

export function useWeather(city) {
  return useQuery({
    queryKey: ["weather", city],
    queryFn: () => getWeather(city),

    enabled: !!city,
    retry: false,
  });
}