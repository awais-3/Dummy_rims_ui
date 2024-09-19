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
import ProcedureDrawer from "../ProcedureDrawer";
import DetailSubHeader from "../../Common/DetailSubHeader";
import DetailCard from "../../Common/DetailCard";
const fetchProcedure = async () => {
  const newProcedure = {};

  newProcedure["General Information"] = {};
  newProcedure["Product Information"] = {};
  newProcedure["Procedure Milestones"] = {};
  newProcedure["Manufacturer"] = {};

  newProcedure["General Information"]["procedureType"] = "NEW";
  newProcedure["General Information"]["country"] = "Mali";
  newProcedure["General Information"]["authorisationStatus"] = "PENDING";
  newProcedure["General Information"]["maNumber"] = "";
  newProcedure["General Information"]["maHolder"] = "DAFRA PHARMA GmbH";
  newProcedure["General Information"]["maDate"] = "";
  newProcedure["General Information"]["maExpiryDate"] = "";
  newProcedure["General Information"]["parentMANumber"] = "";
  newProcedure["General Information"]["parentMADate"] = "";

  newProcedure["Product Information"]["productCode"] = "SDCEFIV1";
  newProcedure["Product Information"]["productType"] = "LISTE 1";
  newProcedure["Product Information"]["productName"] = "DAFRACEF IV";
  newProcedure["Product Information"]["genericName"] = "Cefriaxone";
  newProcedure["Product Information"]["strength"] = "1000mg";
  newProcedure["Product Information"]["pharmaceuticalForm"] =
    "Powder for solution for injection + solvent";
  newProcedure["Product Information"]["packSize"] = "1 vial";
  newProcedure["Product Information"]["pght"] = "865";
  newProcedure["Product Information"]["shelfLife"] = "3 years";
  newProcedure["Product Information"]["storageConditions"] =
    "Store in cool, dry place";

  newProcedure["Procedure Milestones"]["dossierSent"] = "";
  newProcedure["Procedure Milestones"]["dossierSubmitted"] = "";
  newProcedure["Procedure Milestones"]["samplesSent"] = "";
  newProcedure["Procedure Milestones"]["samplePONumber"] = "";
  newProcedure["Procedure Milestones"]["payment"] = "";
  newProcedure["Procedure Milestones"]["paymentReference"] = "";
  newProcedure["Procedure Milestones"]["milestonesOverview"] =
    "Dossier prepared";

  newProcedure["Manufacturer"]["manufacturingSiteFinishedProduct"] =
    "ANFARM HELLAS";
  newProcedure["Manufacturer"]["manufacturingSiteFPAddress"] = "Address A";
  newProcedure["Manufacturer"]["manufacturingSiteFPTelephoneNumber"] =
    "123-456-7890";
  newProcedure["Manufacturer"]["manufacturingSiteFPEmail"] =
    "sitea@example.com";
  newProcedure["Manufacturer"]["manufacturingSiteFPGMPExpiryDate"] =
    "2025-12-31";
  newProcedure["Manufacturer"]["manufacturingSiteFPMLExpiryDate"] =
    "2026-12-31";
  newProcedure["Manufacturer"]["batchReleaseSiteFinishedProduct"] =
    "ANFARM HELLAS";
  newProcedure["Manufacturer"]["batchReleaseSiteFPAddress"] = "Address B";
  newProcedure["Manufacturer"]["batchReleaseSiteFPTelephoneNumber"] =
    "987-654-3210";
  newProcedure["Manufacturer"]["batchReleaseSiteFPEmail"] = "siteb@example.com";
  newProcedure["Manufacturer"]["batchReleaseSiteFPGMPExpiryDate"] =
    "2025-12-31";
  newProcedure["Manufacturer"]["batchReleaseSiteFPMLExpiryDate"] = "2026-12-31";
  newProcedure["Manufacturer"]["apiManufacturer"] = "ACS DOBFAR";
  newProcedure["Manufacturer"]["apiManufacturerAddress"] =
    "Manufacturer Address";
  newProcedure["Manufacturer"]["api"] = "Ceftriaxone";
  newProcedure["Manufacturer"]["apiManufacturerGMPExpiryDate"] = "2025-12-31";
  newProcedure["Manufacturer"]["apiManufacturerMLExpiryDate"] = "2026-12-31";

  return newProcedure;
};

export default function ProcedureDetails() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [procedure, setProcedure] = useState(null);
  const [procedureType, setProcedureType] = useState("Renewal"); // Default value, change as needed

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
      <ProcedureDrawer
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        type={procedureType}
        isEditing={true}
        procedure={procedure}
      />
    </Box>
  );
}
