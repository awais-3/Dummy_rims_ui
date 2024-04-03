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
import ClientForm from "./ClientForm";

export default function ClientDrawer({ isOpen, onClose, isEditing, client }) {
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader py="2">
            <Box display="flex " flexDir={"column"}>
              <Box color="blue.500" fontSize="16px">
                Client
              </Box>
              {isEditing ? "Update" : "Create"}
            </Box>
          </DrawerHeader>
          <Divider borderColor="blue.500" borderWidth={1} bg="blue" />

          <DrawerBody>
            <ClientForm client={client} isEditing={isEditing} />
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
