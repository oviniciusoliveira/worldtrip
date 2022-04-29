import { api } from "../services/api";
import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { useMemo } from "react";
import { CityResponse } from "../types/city";

const CONTINENT_CITIES_QUERY = "continent-cities";

export async function getContinentCities(
  slug: string
): Promise<CityResponse[]> {
  const response: AxiosResponse = await api.get(`/continents/${slug}/cities`);
  const { cities }: { cities: CityResponse[] } = response.data;
  return cities;
}

type UseContinentCitiesReturn = {
  cities: CityResponse[];
  citiesLoading: boolean;
  topVisitedCities: CityResponse[];
};

export function useContinentCities(slug?: string): UseContinentCitiesReturn {
  const continentCitiesQuery = useQuery(
    [CONTINENT_CITIES_QUERY, slug],
    async () => {
      if (slug) {
        return await getContinentCities(slug);
      }
    },
    {
      enabled: !!slug,
    }
  );

  const cities = useMemo(() => {
    return continentCitiesQuery.data ?? [];
  }, [continentCitiesQuery.data]);

  const citiesLoading = useMemo(() => {
    return continentCitiesQuery.isLoading;
  }, [continentCitiesQuery.isLoading]);

  const topVisitedCities = useMemo(() => {
    return cities.filter((city) => city.topVisited);
  }, [cities]);

  return {
    cities,
    citiesLoading,
    topVisitedCities,
  };
}
