"use client";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import MilestoneDrawer from "./ContactDrawer";

export default function ContactCreate() {
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

        <MilestoneDrawer isOpen={isOpen} onClose={onClose} />
      </Box>
    </Box>
  );
}
