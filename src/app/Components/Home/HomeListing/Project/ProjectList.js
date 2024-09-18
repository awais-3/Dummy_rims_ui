import { Box, Divider, Heading } from "@chakra-ui/react";
import React from "react";
import ProjectRow from "./ProjectRow";

const Projects = [
  { name: "SDCEFIV1A" },
  { name: "STICT5A" },
  { name: "XSC-EFLOT15A" },
  { name: "XSC-NELT5A" },
  { name: "XSK-MAL50A" },
  { name: "XSK-MALJ250A" },
  { name: "LRIVT15A" },
  { name: "XPH-XPLET5A" },
  { name: "XPH-XILC15A" },
];

export default function ProjectList() {
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
      >
        Products
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
