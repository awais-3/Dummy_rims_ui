import { Box } from "@chakra-ui/react";
import React from "react";

export default function FormSubHeder({ heading }) {
  return heading ? (
    <Box
      fontSize={{ base: "20px", md: "24px", lg: "26px" }}
      fontWeight="500"
      color={"gray.600"}
      my="8"
      borderBottom={2}
      borderColor={"blue.500"}
      borderStyle={"solid"}
    >
      {heading}
      <Box color="red.500" as="span">
        *
      </Box>
    </Box>
  ) : (
    <Box mt={4}></Box>
  );
}
