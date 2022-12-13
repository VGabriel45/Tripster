import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Text,
  Image,
  Stack,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";

const PropertyCard = () => {
  return (
    <Flex>
      <Card>
        <Card maxW="sm">
        <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              objectFit={"cover"}
            />
          <CardBody>
            <Stack mt="3" spacing="1">
              <Heading size="md">Living room Sofa</Heading>
              <Heading size="sm">25 - 30 Dec</Heading>
              <Text color="blue.600" fontSize="2xl">
                $450 per night
              </Text>
            </Stack>
          </CardBody>
          <Divider />
        </Card>
      </Card>
    </Flex>
  );
};

export default PropertyCard;
