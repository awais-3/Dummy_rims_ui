import { Box, Divider, Heading } from "@chakra-ui/react";
import React from "react";
import ProjectRow from "./ProjectRow";

const Projects = [
  { name: "Atorvastatin" },
  { name: "Metformin" },
  { name: "Levothyroxine" },
  { name: "Lisinopril" },
  { name: "Amlodipine" },
  { name: "Metoprolol" },
  { name: "Albuterol" },
  { name: "Losartan" },
  { name: "Omeprazole" },
  { name: "Sertraline" },
  { name: "Hydrochlorothiazide" },
  { name: "Rosuvastatin" },
  // { name: "Montelukast" },
  // { name: "Escitalopram" },
  // { name: "Simvastatin" },
  // { name: "Bupropion" },
  // { name: "Pantoprazole" },
  // { name: "Acetaminophen; Hydrocodone" },
  // { name: "Furosemide" },
];

export default function ProjectList() {
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
        Active Products
      </Box>
      <Box
        maxH="600px"
        overflowY="auto"
        border="1px solid"
        borderColor="gray.300"
      >
        {Projects?.map((project, index) => (
          <div key={index}>
            <ProjectRow index={index} project={project} key={index} />
            <Divider mt="1" />
          </div>
        ))}
      </Box>
    </Box>
  );
}
