import { Box, Center, Flex, SimpleGrid } from "@chakra-ui/react";
import PropertyCard from "./Card";

const PropertyListing = () => {
  return (
    <Box>
      <Center>
        <SimpleGrid
          width={"80%"}
          mt={"200px"}
          columns={4}
          spacing={4}
          flexDirection={"row"}
        >
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </SimpleGrid>
      </Center>
    </Box>
  );
};

export default PropertyListing;
