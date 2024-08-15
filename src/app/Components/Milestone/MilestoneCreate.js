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

  const [selectedMenuItem, setSelectedMenuItem] = React.useState(null);

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
            <MenuItem onClick={() => handleMenuItemClick("Milestone Template")}>
              Milestone Template
            </MenuItem>
            {/* <MenuItem onClick={() => handleMenuItemClick("Milestone")}>
              Milestone
            </MenuItem> */}
          </MenuList>
        </Menu>

        <MilestoneDrawer
          isOpen={isOpen}
          onClose={onClose}
          type={selectedMenuItem}
        />
      </Box>
    </Box>
  );
}
