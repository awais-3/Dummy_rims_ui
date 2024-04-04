import { Box, Text } from "@chakra-ui/react";

const DetailCard = ({ label, value }) => (
  <Box display={"flex"} gap={2} mt={2} flexWrap={"wrap"}>
    <Text fontWeight="bold" color="gray.700" mb="1" textTransform={"uppercase"}>
      {label}:
    </Text>
    <Text color="gray.600">{value}</Text>
  </Box>
);

export default DetailCard;
