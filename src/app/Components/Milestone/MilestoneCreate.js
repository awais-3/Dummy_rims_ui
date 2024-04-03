"use client";
import {
  Box,
  Button,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import MilestoneDrawer from "./MilestoneDrawer";

export default function MilestoneCreate() {
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
