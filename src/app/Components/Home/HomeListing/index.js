import React from "react";
import ProjectList from "./Project/ProjectList";
import ClientList from "./Client/ClientList";
import RaList from "./RA/RaList";
import { Box, Flex } from "@chakra-ui/react";

export default function Index() {
  return (
    <Flex
      gap="6"
      py={{ base: 3 }}
      px={{ base: 4 }}
      flexDirection={{ base: "column", md: "row" }}
      alignItems="stretch"
    >
      <ProjectList />
      <ClientList />
      <RaList />
    </Flex>
  );
}
