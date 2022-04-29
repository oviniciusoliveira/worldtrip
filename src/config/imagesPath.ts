const imagesPrefix = "/assets/images";

const continentsPrefix = `${imagesPrefix}/continents`;

export const imagesPath = {
  continents: {
    europe: {
      imageFile: `${continentsPrefix}/europe/europe.jpg`,

      countries: {
        unitedKingdom: {
          flag: `${continentsPrefix}/europe/countries/flags/united-kingdom.jpg`,
        },
        france: {
          flag: `${continentsPrefix}/europe/countries/flags/france.jpg`,
        },
        italy: {
          flag: `${continentsPrefix}/europe/countries/flags/italy.jpg`,
        },
        czechRepublic: {
          flag: `${continentsPrefix}/europe/countries/flags/czech-republic.jpg`,
        },
        netherlands: {
          flag: `${continentsPrefix}/europe/countries/flags/netherlands.jpg`,
        },
      },

      cities: {
        rome: {
          imageFile: `${continentsPrefix}/europe/cities/rome.jpg`,
        },
        paris: {
          imageFile: `${continentsPrefix}/europe/cities/paris.jpg`,
        },
        london: {
          imageFile: `${continentsPrefix}/europe/cities/london.jpg`,
        },
        praga: {
          imageFile: `${continentsPrefix}/europe/cities/praga.jpg`,
        },
        amsterdam: {
          imageFile: `${continentsPrefix}/europe/cities/amsterdam.jpg`,
        },
      },
    },
    asia: {
      imageFile: `${imagesPrefix}/asia.jpg`,
    },
    africa: {
      imageFile: `${imagesPrefix}/africa.jpg`,
    },
    oceania: {
      imageFile: `${imagesPrefix}/oceania.jpg`,
    },
    southAmerica: {
      imageFile: `${imagesPrefix}/south-america.jpg`,
    },
    northAmerica: {
      imageFile: `${imagesPrefix}/north-america.jpg`,
    },
  },
};
