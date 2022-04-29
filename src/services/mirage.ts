import {
  createServer,
  Model,
  Response,
  hasMany,
  RestSerializer,
  belongsTo,
} from "miragejs";
import { imagesPath } from "../config/imagesPath";

export function makeServer() {
  const server = createServer({
    serializers: {
      application: RestSerializer,
    },

    models: {
      continent: Model.extend({
        city: hasMany(),
      }),
      city: Model.extend({
        continent: belongsTo(),
      }),
    },

    seeds(server) {
      const europeContinent = server.create("continent", {
        title: "Europa",
        subtitle: "The continent of Europe",
        imageFile: imagesPath.continents.europe.imageFile,
        slug: "europe",
        description:
          "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
        countriesCount: 50,
        languagesCount: 60,
        citiesCount: 27,
      } as any);

      const northAmericaContinent = server.create("continent", {
        title: "América do Norte",
        imageFile: imagesPath.continents.northAmerica.imageFile,
        slug: "north-america",
        countriesCount: 50,
        languagesCount: 60,
        citiesCount: 27,
      } as any);

      const southAmericaContinent = server.create("continent", {
        title: "América do Sul",
        imageFile: imagesPath.continents.southAmerica.imageFile,
        slug: "south-america",
        countriesCount: 50,
        languagesCount: 60,
        citiesCount: 27,
      } as any);

      const asiaContinent = server.create("continent", {
        title: "Ásia",
        imageFile: imagesPath.continents.asia.imageFile,
        slug: "asia",
        countriesCount: 50,
        languagesCount: 60,
        citiesCount: 27,
      } as any);

      const africaContinent = server.create("continent", {
        title: "África",
        imageFile: imagesPath.continents.africa.imageFile,
        slug: "africa",
        countriesCount: 50,
        languagesCount: 60,
        citiesCount: 27,
      } as any);

      const oceaniaContinent = server.create("continent", {
        topVisited: true,
        title: "Oceania",
        imageFile: imagesPath.continents.oceania.imageFile,
        slug: "oceania",
        countriesCount: 50,
        languagesCount: 60,
        citiesCount: 27,
      } as any);

      server.create("city", {
        topVisited: true,
        name: "Londres",
        imageFile: imagesPath.continents.europe.cities.london.imageFile,
        continent: europeContinent,
        country: {
          name: "Reino Unido",
          flag: imagesPath.continents.europe.countries.unitedKingdom.flag,
        },
      } as any);

      server.create("city", {
        topVisited: true,
        name: "Paris",
        imageFile: imagesPath.continents.europe.cities.paris.imageFile,
        continent: europeContinent,
        country: {
          name: "França",
          flag: imagesPath.continents.europe.countries.france.flag,
        },
      } as any);

      server.create("city", {
        topVisited: true,
        name: "Roma",
        imageFile: imagesPath.continents.europe.cities.rome.imageFile,
        continent: europeContinent,
        country: {
          name: "Itália",
          flag: imagesPath.continents.europe.countries.italy.flag,
        },
      } as any);

      server.create("city", {
        topVisited: true,
        name: "Praga",
        imageFile: imagesPath.continents.europe.cities.praga.imageFile,
        continent: europeContinent,
        country: {
          name: "República Tcheca",
          flag: imagesPath.continents.europe.countries.czechRepublic.flag,
        },
      } as any);

      server.create("city", {
        topVisited: true,
        name: "Amsterdã",
        imageFile: imagesPath.continents.europe.cities.amsterdam.imageFile,
        continent: europeContinent,
        country: {
          name: "Holanda",
          flag: imagesPath.continents.europe.countries.netherlands.flag,
        },
      } as any);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/continents");
      this.get("/cities");

      this.get("/continents/:slug/cities", function (schema, request) {
        const slug = request.params.slug;

        const allContinents = this.serialize(
          schema.all("continent")
        ).continents;

        const continentFromSlug = allContinents.find(
          (continent) => continent.slug === slug
        );

        if (!continentFromSlug) {
          return new Response(
            404,
            {},
            {
              error: "Continent not found",
            }
          );
        }

        const allCities = this.serialize(schema.all("city")).cities;

        const citiesFromContinent = allCities.filter(
          (city) => city.continent === continentFromSlug.id
        );

        return new Response(
          200,
          {},
          {
            cities: citiesFromContinent,
          }
        );
      });

      this.namespace = "";
      this.passthrough();
    },
  });

  return server;
}
