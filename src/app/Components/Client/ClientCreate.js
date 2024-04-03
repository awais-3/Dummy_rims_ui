"use client";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import ClientDrawer from "./ClientDrawer";

export default function ClientCreate() {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box display="flex" justifyContent="end">
        <Button
          colorScheme={"blue"}
          leftIcon={<IoMdAddCircleOutline />}
          onClick={onOpen}
        >
          Create
        </Button>
        <ClientDrawer isOpen={isOpen} onClose={onClose} />
      </Box>
    </Box>
  );
}
