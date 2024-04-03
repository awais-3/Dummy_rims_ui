import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function ClientRow({ client, index }) {
  return (
    <Box py="1.5" px="4" display="flex" gap="1">
      <Box fontWeight="semibold">{index + 1}:</Box>
      <Box
        as={Link}
        href={"/partners/1"}
        _hover={{ textDecoration: "underline", color: "blue.500" }}
      >
        {client?.name}
      </Box>
    </Box>
  );
}
