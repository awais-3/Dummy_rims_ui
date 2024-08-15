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
  Divider,
  Box,
} from "@chakra-ui/react";
import ProcedureForm from "./ProcedureForm";

export default function ProcedureDrawer({
  isOpen,
  onClose,
  type,
  isEditing = false,
  procedure = {},
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
          <DrawerHeader py="2">
            <DrawerCloseButton />
            <Box display="flex " flexDir={"column"}>
              <Box color="blue.500" fontSize="16px">
                Procedure
              </Box>
              {isEditing ? "Update" : "Create"} {type}
            </Box>
          </DrawerHeader>
          <Divider borderColor="blue.500" borderWidth={1} bg="blue" />

          <DrawerBody>
            <ProcedureForm
              type={type}
              procedure={procedure}
              isEditing={isEditing}
              onClose={onClose}
            />
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
