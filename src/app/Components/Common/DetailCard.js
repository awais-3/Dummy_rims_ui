import { Box, Heading, Text } from "@chakra-ui/react";

const DetailCard = ({ title, value }) => (
  <Box bg="white" p="4" borderRadius="md" boxShadow="md" flex="1 0 250px">
    <Heading size="sm" mb="2" color="gray.700">
      {title}
    </Heading>
    <Text color="gray.600">{value}</Text>
  </Box>
);

export default DetailCard;
