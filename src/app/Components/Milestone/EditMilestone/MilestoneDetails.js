import { Box, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import EditMilestoneDrawer from "./EditMilestoneDrawer";

export default function MilestoneDetails() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Box textAlign={"right"}>
        <Button onClick={onOpen}>Edit</Button>
      </Box>
      <Box h="500px" bg="gray.100" mt="4"></Box>
      <EditMilestoneDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  );
}
