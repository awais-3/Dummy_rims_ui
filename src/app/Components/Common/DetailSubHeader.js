import { Box } from "@chakra-ui/react";
import React from "react";

export default function DetailSubHeader({ heading }) {
  return (
    <Box
      fontSize={{ base: "20px", md: "24px", lg: "26px" }}
      fontWeight="500"
      color="white"
      bg="blue.500"
      my="8"
      py={2}
      px={3}
      borderBottom={2}
      borderColor={"blue.500"}
      borderStyle={"solid"}
    >
      {heading}
      {/* <Box color="red.500" as="span">
        *
      </Box> */}
    </Box>
  );
}
