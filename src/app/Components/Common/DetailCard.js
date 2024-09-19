import { Box, Text } from "@chakra-ui/react";

const formatLabel = (label) => {
  return label
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2") 
    .replace(/_/g, " ") // Replace underscores with spaces (if any)
    .toLowerCase() // Convert all to lowercase first
    .replace(/\b(\w)/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
};

const DetailCard = ({ label, value }) => (
  <Box display={"flex"} gap={2} mt={2} flexWrap={"wrap"}>
    <Text fontWeight="700" color="black" mb="1">
      {formatLabel(label)}:
    </Text>
    <Text color="gray.700" fontWeight={500}>
      {value}
    </Text>
  </Box>
);

export default DetailCard;
