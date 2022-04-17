import { api } from "../services/api";
import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { Continent } from "../types/continent";
import { useMemo } from "react";

const CONTINENTS_QUERY = "continents";

function mapContinentResponse(continent: ContinentResponse): Continent {
  return {
    title: continent.name,
    subtitle: continent.description,
    alt: continent.name,
    file: continent.file,
  };
}

type ContinentResponse = {
  name: string;
  description?: string;
  file: string;
};

async function getContinents(): Promise<Continent[]> {
  const response: AxiosResponse = await api.get("/continents");
  const { continents }: { continents: ContinentResponse[] } = response.data;
  const mappedData = continents.map((continent) => mapContinentResponse(continent));
  return mappedData;
}

type UseContinentsReturn = {
  continents: Continent[];
  continentsLoading: boolean;
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

  return {
    continents,
    continentsLoading,
  };
}
