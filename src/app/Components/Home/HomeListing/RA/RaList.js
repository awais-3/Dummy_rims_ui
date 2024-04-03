import { Box, Divider, Text } from "@chakra-ui/react";
import React from "react";
import RaRow from "./RaRow";

const RA = [
  { name: "Hospital A" },
  { name: "Clinic B" },
  { name: "Pharmacy Chain C" },
  { name: "Healthcare System D" },
  { name: "Medical Group E" },
  { name: "Research Institute F" },
  { name: "Specialist Group G" },
  { name: "Urgent Care Center H" },
  { name: "Telemedicine Provider I" },
  { name: "Government Healthcare Agency J" },
  { name: "Philanthropic Organization K" },
  { name: "Community Health Center L" },
  // { name: "Independent Pharmacy M" },
  // { name: "Mental Health Clinic N" },
  // { name: "Dental Practice O" },
  // { name: "Veterinary Clinic P" },
  // { name: "Nursing Home Q" },
  // { name: "Biotechnology Company R" },
  // { name: "Medical Device Manufacturer S" },
  // { name: "Health Insurance Provider T" },
];

export default function RaList() {
  return (
    <Box flexGrow="1" flex="1" rounded="md">
      <Box
        fontSize={{ base: "18px", md: "20px", lg: "20px" }}
        bg="blue.600"
        textAlign="center"
        color=" white"
        py={{ base: "2", md: "3" }}
        borderTopLeftRadius="md"
        borderTopRightRadius="md"
      >
        Active Procedures
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
