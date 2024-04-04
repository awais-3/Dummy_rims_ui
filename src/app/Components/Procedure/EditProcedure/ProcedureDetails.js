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

  newProcedure["General Information"]["procedureType"] = "Type A";
  newProcedure["General Information"]["country"] = "Country X";
  newProcedure["General Information"]["authorisationStatus"] = "Approved";
  newProcedure["General Information"]["maNumber"] = "MA12345";
  newProcedure["General Information"]["maHolder"] = "Autofilled Company";
  newProcedure["General Information"]["maDate"] = "2023-01-15";
  newProcedure["General Information"]["maExpiryDate"] = "2028-01-15";
  newProcedure["General Information"]["parentMANumber"] = "ParentMA6789";
  newProcedure["General Information"]["parentMADate"] = "2020-06-30";

  newProcedure["Product Information"]["productCode"] = "P123";
  newProcedure["Product Information"]["productType"] = "Type A";
  newProcedure["Product Information"]["productName"] = "Product XYZ";
  newProcedure["Product Information"]["genericName"] = "Generic XYZ";
  newProcedure["Product Information"]["strength"] = "10mg";
  newProcedure["Product Information"]["pharmaceuticalForm"] = "Tablet";
  newProcedure["Product Information"]["packSize"] = "30 tablets";
  newProcedure["Product Information"]["pght"] = "Details of PGHT";
  newProcedure["Product Information"]["shelfLife"] = "2 years";
  newProcedure["Product Information"]["storageConditions"] =
    "Store in cool, dry place";

  newProcedure["Procedure Milestones"]["dossierSent"] = "2023-03-15";
  newProcedure["Procedure Milestones"]["dossierSubmitted"] = "2023-04-20";
  newProcedure["Procedure Milestones"]["samplesSent"] = "2023-05-25";
  newProcedure["Procedure Milestones"]["samplePONumber"] = "PO123456";
  newProcedure["Procedure Milestones"]["payment"] = "2023-06-30";
  newProcedure["Procedure Milestones"]["paymentReference"] = "Ref123456";
  newProcedure["Procedure Milestones"]["milestonesOverview"] = "In progress";

  newProcedure["Manufacturer"]["manufacturingSiteFinishedProduct"] = "Site A";
  newProcedure["Manufacturer"]["manufacturingSiteFPAddress"] = "Address A";
  newProcedure["Manufacturer"]["manufacturingSiteFPTelephoneNumber"] =
    "123-456-7890";
  newProcedure["Manufacturer"]["manufacturingSiteFPEmail"] =
    "sitea@example.com";
  newProcedure["Manufacturer"]["manufacturingSiteFPGMPExpiryDate"] =
    "2025-12-31";
  newProcedure["Manufacturer"]["manufacturingSiteFPMLExpiryDate"] =
    "2026-12-31";
  newProcedure["Manufacturer"]["batchReleaseSiteFinishedProduct"] = "Site B";
  newProcedure["Manufacturer"]["batchReleaseSiteFPAddress"] = "Address B";
  newProcedure["Manufacturer"]["batchReleaseSiteFPTelephoneNumber"] =
    "987-654-3210";
  newProcedure["Manufacturer"]["batchReleaseSiteFPEmail"] = "siteb@example.com";
  newProcedure["Manufacturer"]["batchReleaseSiteFPGMPExpiryDate"] =
    "2025-12-31";
  newProcedure["Manufacturer"]["batchReleaseSiteFPMLExpiryDate"] = "2026-12-31";
  newProcedure["Manufacturer"]["apiManufacturer"] = "Manufacturer X";
  newProcedure["Manufacturer"]["apiManufacturerAddress"] =
    "Manufacturer Address";
  newProcedure["Manufacturer"]["api"] = "API Details";
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
