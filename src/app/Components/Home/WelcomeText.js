import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function WelcomeText() {
  return (
    <Box py={{ base: 3 }} px={{ base: 4 }}>
      <Text
        fontSize={{ base: "md", sm: "lg", md: "xl", lg: "2xl", xl: "3xl" }}
        fontWeight="bold"
        color="gray.800"
        letterSpacing="wide"
        textTransform="uppercase"
      >
        Welcome Niki Proost,
      </Text>
    </Box>
  );
}
