"use client";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
  Divider,
} from "@chakra-ui/react";
import UserManagementForm from "./UserManagementForm";

export default function UserManagementDrawer({
  isOpen,
  onClose,
  isEditing,
  user,
}) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="xl"
        closeOnEsc={false}
        closeOnOverlayClick={false}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader py="2">
            <DrawerCloseButton />
            <Box display="flex " flexDir={"column"}>
              <Box color="blue.500" fontSize="16px">
                User
              </Box>
              {isEditing ? "Update" : "Create New"}
            </Box>
          </DrawerHeader>
          <Divider borderColor="blue.500" borderWidth={1} bg="blue" />
          <DrawerBody>
            <UserManagementForm isEditing={isEditing} user={user} />
          </DrawerBody>

          <DrawerFooter
            borderTop={2}
            borderColor={"blue.500"}
            borderStyle={"solid"}
          >
            <Button variant="outline" mr={"95px"} mt="1" onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
