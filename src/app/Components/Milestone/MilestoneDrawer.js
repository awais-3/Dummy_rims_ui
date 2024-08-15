"use client";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Divider,
  Box,
} from "@chakra-ui/react";
import MilestoneForm from "./MilestoneForm";

export default function MilestoneDrawer({ isOpen, onClose, type, isEditing }) {
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
          <DrawerHeader py="2">
            <DrawerCloseButton />
            <Box display="flex " flexDir={"column"}>
              <Box color="blue.500" fontSize="16px">
                {type}
              </Box>
              {isEditing ? "Update" : "Create New"}
            </Box>
          </DrawerHeader>
          <Divider borderColor="blue.500" borderWidth={1} bg="blue" />

          <DrawerBody>
            <MilestoneForm type={type} onClose={onClose} />
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
