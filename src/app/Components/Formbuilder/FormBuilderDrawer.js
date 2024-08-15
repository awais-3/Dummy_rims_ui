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
import FormBuilderForm from "./FormBuilderForm";

export default function FormBuilderDrawer({ isOpen, onClose }) {
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
                Form Builder
              </Box>
              Create New
            </Box>
          </DrawerHeader>
          <Divider borderColor="blue.500" borderWidth={1} bg="blue" />

          <DrawerBody>
            <FormBuilderForm onClose={onClose} />
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
