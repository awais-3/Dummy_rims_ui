"use client";

import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function ProcedureSidebar({ children }) {
  return (
    <Box display="flex" flex="1">
      <SidebarContent display={{ base: "none", md: "block" }} />
      <Box flex="1" p="4" display="flex" flexDir={"column"}>
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ ...rest }) => {
  return (
    <Box
      bg={"white"}
      borderRight="1px"
      borderRightColor={"gray.200"}
      w={{ base: "full", md: 60 }}
      {...rest}
    >
      <Flex mx="8" mt="4">
        <Text fontSize="2xl" fontWeight="bold">
          Filters
        </Text>
      </Flex>
    </Box>
  );
};
