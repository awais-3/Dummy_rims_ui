import { Box, Divider, Text } from "@chakra-ui/react";
import React from "react";
import RaRow from "./RaRow";

const RA = [
  { name: "N – SDCEFIV1A – MALI" },
  { name: "V – SCETIM1B – DRC" },
  { name: "N – XSC-NELTA – DRC" },
  { name: "N – LRIVT15A – RW" },
  { name: "V – XPH-XPLET5A – BJ" },
  { name: "V – XPH-XPLET5A – CG" },
  { name: "N – SDCEFIV1A – CM" },
  { name: "N – SDCEFIV1A – BJ" },
  { name: "N – XSC-NELTA – KE" },
];

export default function RaList() {
  return (
    <Box flexGrow="1" flex="1" rounded="md">
      <Box
        fontSize={{ base: "18px", md: "20px", lg: "20px" }}
        fontWeight={600}
        bg="blue.600"
        textAlign="center"
        color=" white"
        py={{ base: "2", md: "3" }}
        borderTopLeftRadius="md"
        borderTopRightRadius="md"
        textTransform="uppercase"
      >
        Procedures
      </Box>
      <Box
        maxH="600px"
        overflowY="auto"
        border="1px solid"
        borderColor="gray.300"
      >
        {RA?.map((ra, index) => (
          <div key={index}>
            <RaRow ra={ra} key={index} index={index} />
            <Divider mt="1" />
          </div>
        ))}
      </Box>
    </Box>
  );
}
