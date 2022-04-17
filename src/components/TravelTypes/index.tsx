import { Grid } from "@chakra-ui/react";
import { TravelTypeItem } from "./TravelTypeItem";

export function TravelTypes() {
  return (
    <Grid width={"100%"} templateColumns="repeat(5, 1fr)" gap={6}>
      <TravelTypeItem
        alt="Nightlife"
        src="/assets/icons/cocktail.png"
        text="Vida Noturna"
      />
      <TravelTypeItem alt="Surf" src="/assets/icons/surf.png" text="Praia" />
      <TravelTypeItem
        alt="Building"
        src="/assets/icons/building.png"
        text="Moderno"
      />
      <TravelTypeItem
        alt="Museum"
        src="/assets/icons/museum.png"
        text="Clássico"
      />
      <TravelTypeItem
        alt="Earth"
        src="/assets/icons/earth.png"
        text="e mais..."
      />
    </Grid>
  );
}
