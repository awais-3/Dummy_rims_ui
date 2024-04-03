import { Center, Spinner } from "@chakra-ui/react";
import React from "react";

export default function Loader() {
  return (
    <Center h="100vh">
      <Spinner thickness="4px" speed="0.65s" color="blue.500" size="xl" />
    </Center>
  );
}
