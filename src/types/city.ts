export type CityResponse = {
  id: string;
  name: string;
  country: {
    name: string;
    flag: string;
  };
  imageFile: string;
  topVisited: boolean;
};
