"use client";
import {
  Box,
  Button,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import ProductDrawer from "./ProductDrawer";

export default function ProductCreate() {
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
              Parent Product
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("New")}>
              Product
            </MenuItem>
          </MenuList>
        </Menu>
        <ProductDrawer
          isOpen={isOpen}
          onClose={onClose}
          type={selectedMenuItem}
        />
      </Box>
    </Box>
  );
}
