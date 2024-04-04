"use client";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import UserManagementDrawer from "./UserManagementDrawer";

export default function UserManagementCreate() {
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
        <UserManagementDrawer
          isOpen={isOpen}
          onClose={onClose}
          isEditing={false}
        />
      </Box>
    </Box>
  );
}
