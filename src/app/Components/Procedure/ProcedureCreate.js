"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { IoMdAddCircleOutline } from "react-icons/io";
import ProcedureDrawer from "./ProcedureDrawer";

export default function ProcedureCreate() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
    onOpen();
  };

  return (
    <Box>
      <Box display="flex" justifyContent="end">
        <Menu>
          <MenuButton
            as={Button}
            colorScheme={"blue"}
            leftIcon={<IoMdAddCircleOutline />}
          >
            Create
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleMenuItemClick("Parent")}>
              Parent Procedure
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("New")}>New</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("Renewal")}>
              Renewal/Variation
            </MenuItem>
          </MenuList>
        </Menu>
        <ProcedureDrawer
          isOpen={isOpen}
          onClose={onClose}
          type={selectedMenuItem}
        />
      </Box>
    </Box>
  );
}
