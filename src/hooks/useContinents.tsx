import { api } from "../services/api";
import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { Continent, ContinentResponse } from "../types/continent";
import { useMemo } from "react";

const CONTINENTS_QUERY = "continents";

function mapContinentResponse(continent: ContinentResponse): Continent {
  return {
    title: continent.title,
    subtitle: continent.subtitle,
    alt: continent.title,
    file: continent.imageFile,
    slug: continent.slug,
    description: continent.description,
    countriesCount: continent.countriesCount,
    languagesCount: continent.languagesCount,
    citiesCount: continent.citiesCount,
  };
}

export async function getContinents(): Promise<Continent[]> {
  const response: AxiosResponse = await api.get("/continents");
  const { continents }: { continents: ContinentResponse[] } = response.data;
  const mappedData = continents.map((continent) =>
    mapContinentResponse(continent)
  );
  return mappedData;
}

type UseContinentsReturn = {
  continents: Continent[];
  continentsLoading: boolean;
  getContinentBySlug: (slug: string) => Continent;
};

export function useContinents(): UseContinentsReturn {
  const continentsQuery = useQuery(
    [CONTINENTS_QUERY],
    async () => await getContinents()
  );

  const continents = useMemo(() => {
    return continentsQuery.data ?? [];
  }, [continentsQuery.data]);

  const continentsLoading = useMemo(() => {
    return continentsQuery.isLoading;
  }, [continentsQuery.isLoading]);

  const getContinentBySlug = (slug: string) => {
    const continent = continents.find((continent) => continent.slug === slug);
    return continent;
  };

  return {
    continents,
    continentsLoading,
    getContinentBySlug,
  };
}
