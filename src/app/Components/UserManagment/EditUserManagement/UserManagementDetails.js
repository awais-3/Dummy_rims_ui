import UserManagementDrawer from "../UserManagementDrawer";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import DetailSubHeader from "../../Common/DetailSubHeader";
import DetailCard from "../../Common/DetailCard";
const fetchProcedure = async () => {
  const newProcedure = {};

  newProcedure["User Information"] = {};

  newProcedure["User Information"]["firstName"] = "Nikki";
  newProcedure["User Information"]["lastName"] = "Proast";
  newProcedure["User Information"]["role"] = "Admin";
  newProcedure["User Information"]["contact"] = "+23 42321 3212";
  return newProcedure;
};

export default function UserManagementDetails() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [procedure, setProcedure] = useState(null);

  // Simulating fetching procedure data
  useEffect(() => {
    const fetchProcedureData = async () => {
      try {
        const fetchedProcedure = await fetchProcedure();
        setProcedure(fetchedProcedure);

        if (fetchedProcedure && fetchedProcedure.type) {
          // setProcedureType(fetchedProcedure.type);
        }
      } catch (error) {
        console.error("Error fetching procedure data:", error);
      }
    };

    fetchProcedureData();
  }, []);
  return (
    <Box>
      <Box textAlign={"right"}>
        <Button onClick={onOpen}>Edit</Button>
      </Box>
      <Box bg="gray.100" mt="4" p="8">
        {procedure &&
          Object.entries(procedure).map(([sectionName, sectionData]) => (
            <Box key={sectionName} mb="4">
              <Heading as="h2" size="md" mt="8" mb={3}>
                <DetailSubHeader heading={sectionName} />
              </Heading>
              <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                gap={3}
                bg={"white"}
                py="4"
                px={6}
              >
                {Object.entries(sectionData).map(([fieldName, fieldValue]) => (
                  <DetailCard
                    key={fieldName}
                    label={fieldName}
                    value={fieldValue}
                  />
                ))}
              </Grid>
            </Box>
          ))}
      </Box>
      <UserManagementDrawer
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        isEditing={true}
        user={procedure}
      />
    </Box>
  );
}
