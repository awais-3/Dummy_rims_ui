import { Box, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import ContactDrawer from "../ContactDrawer";

export default function ContactDetails() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Box textAlign={"right"}>
        <Button onClick={onOpen}>Edit</Button>
      </Box>
      <Box h="500px" bg="gray.100" mt="4"></Box>
      <ContactDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  );
}
