"use client";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import FormBuilderDrawer from "./FormBuilderDrawer";

export default function FormBuilderCreate() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box display="flex" justifyContent="end">
        <Button
          as={Button}
          colorScheme={"blue"}
          leftIcon={<IoMdAddCircleOutline />}
          onClick={onOpen}
        >
          Create
        </Button>

        <FormBuilderDrawer isOpen={isOpen} onClose={onClose} />
      </Box>
    </Box>
  );
}
