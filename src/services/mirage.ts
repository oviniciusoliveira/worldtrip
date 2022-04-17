import { createServer, Model } from "miragejs";
import { Continent } from "../types/continent";

export function makeServer() {
  return createServer({
    timing: 750,

    models: {
      continent: Model.extend<Partial<Continent>>({}),
    },

    seeds(server) {
      server.create("continent", {
        name: "Europe",
        description: "The continent of Europe",
        file: "europe.jpg",
      } as any);

      server.create("continent", {
        name: "América do Norte",
        file: "north-america.jpg",
      } as any);

      server.create("continent", {
        name: "América do Sul",
        file: "south-america.jpg",
      } as any);

      server.create("continent", {
        name: "Ásia",
        file: "asia.jpg",
      } as any);

      server.create("continent", {
        name: "África",
        file: "africa.jpg",
      } as any);

      server.create("continent", {
        name: "Oceania",
        file: "oceania.jpg",
      } as any);
  
    },

    routes() {
      this.namespace = "api";

      this.get("/continents");

      this.namespace = "";
      this.passthrough();
    },
  });
}
