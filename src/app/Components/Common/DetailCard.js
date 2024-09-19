import { Box, Text } from "@chakra-ui/react";

const DetailCard = ({ label, value }) => (
  <Box display={"flex"} gap={2} mt={2} flexWrap={"wrap"}>
    <Text fontWeight="600" color="gray.600" mb="1" textTransform={"uppercase"}>
      {label}:
    </Text>
    <Text color="black" fontWeight={700}>
      {value}
    </Text>
  </Box>
);

export default DetailCard;
