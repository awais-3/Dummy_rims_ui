import { Box, Divider } from "@chakra-ui/react";
import React from "react";
import ClientRow from "./ClientRow";

const Clients = [
  { name: "DAFRA" },
  { name: "LUX" },
  { name: "S KANT" },
  { name: "Pharmevo" },
  { name: "Scilife" },
  { name: "Swiss" },
  { name: "Bilim" },
  { name: "" },
  { name: "" },
];

export default function ClientList() {
  return (
    <Box flexGrow="1" flex="1" rounded="md">
      <Box
        fontSize={{ base: "18px", md: "20px", lg: "20px" }}
        bg="blue.600"
        fontWeight={600}
        textAlign="center"
        color=" white"
        py={{ base: "2", md: "3" }}
        borderTopLeftRadius="md"
        borderTopRightRadius="md"
        textTransform="uppercase"
      >
        Partners
      </Box>
      <Box
        maxH="600px"
        overflowY="auto"
        border="1px solid"
        borderColor="gray.300"
      >
        {Clients?.map((client, index) => (
          <div key={index}>
            <ClientRow client={client} key={index} index={index} />
            <Divider mt="1" />
          </div>
        ))}
      </Box>
    </Box>
  );
}
