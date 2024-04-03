import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import ProcedureDrawer from "../ProcedureDrawer";

const fetchProcedure = async () => {
  return {
    procedureType: "Type A", // Dropdown
    country: "Country X", // Dropdown
    authorisationStatus: "Approved", // Dropdown
    maNumber: "MA12345", // Text
    maHolder: "Autofilled Company", // Autofilled (uneditable)
    maDate: "2023-01-15", // Date
    maExpiryDate: "2028-01-15", // Date
    parentMANumber: "ParentMA6789", // Text
    parentMADate: "2020-06-30", // Date
    varApprovalDate: "2023-02-20", // Date
    varDetails: "Details of VAR", // Text
    remarks: "Some remarks here", // Text
    teamMembers: ["John Doe", "Jane Smith"], // Multi-select Dropdown
    productCode: "P123", // Dropdown
    productType: "Type A", // Autofilled (editable + comment)
    productName: "Product XYZ", // Autofilled (uneditable)
    genericName: "Generic XYZ", // Autofilled (uneditable)
    strength: "10mg", // Autofilled (uneditable)
    pharmaceuticalForm: "Tablet", // Autofilled (uneditable)
    packSize: "30 tablets", // Autofilled (uneditable)
    pght: "Details of PGHT", // Autofilled (editable + comment)
    shelfLife: "2 years", // Autofilled (uneditable)
    storageConditions: "Store in cool, dry place", // Autofilled (uneditable)
    dossierSent: "2023-03-15", // Date
    dossierSubmitted: "2023-04-20", // Date
    samplesSent: "2023-05-25", // Date
    samplePONumber: "PO123456", // Text
    payment: "2023-06-30", // Date
    paymentReference: "Ref123456", // Text
    milestonesOverview: "In progress", // Dropdown
    manufacturingSiteFinishedProduct: "Site A", // Autofilled (uneditable)
    manufacturingSiteFPAddress: "Address A", // Autofilled (uneditable)
    manufacturingSiteFPTelephoneNumber: "123-456-7890", // Autofilled (uneditable)
    manufacturingSiteFPEmail: "sitea@example.com", // Autofilled (uneditable)
    manufacturingSiteFPGMPExpiryDate: "2025-12-31", // Autofilled (uneditable)
    manufacturingSiteFPMLExpiryDate: "2026-12-31", // Autofilled (uneditable)
    batchReleaseSiteFinishedProduct: "Site B", // Autofilled (uneditable)
    batchReleaseSiteFPAddress: "Address B", // Autofilled (uneditable)
    batchReleaseSiteFPTelephoneNumber: "987-654-3210", // Autofilled (uneditable)
    batchReleaseSiteFPEmail: "siteb@example.com", // Autofilled (uneditable)
    batchReleaseSiteFPGMPExpiryDate: "2025-12-31", // Autofilled (uneditable)
    batchReleaseSiteFPMLExpiryDate: "2026-12-31", // Autofilled (uneditable)
    apiManufacturer: "Manufacturer X", // Autofilled (uneditable)
    apiManufacturerAddress: "Manufacturer Address", // Autofilled (uneditable)
    api: "API Details", // Autofilled (uneditable)
    apiManufacturerGMPExpiryDate: "2025-12-31", // Autofilled (uneditable)
    apiManufacturerMLExpiryDate: "2026-12-31", // Autofilled (uneditable)
    batchReleaseSiteFPEmail: "apimanufacturer@example.com", // Autofilled (uneditable)
  };
};

export default function ProcedureDetails() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [procedure, setProcedure] = useState(null);
  const [procedureType, setProcedureType] = useState("Parent"); // Default value, change as needed

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
        {procedure && (
          <Flex flexWrap="wrap" gap="4">
            {Object.entries(procedure).map(([key, value]) => (
              <DetailCard key={key} title={key} value={value} />
            ))}
          </Flex>
        )}
      </Box>
      <ProcedureDrawer
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        type={procedureType}
        isEditing={true} // Assuming you'll always be editing when opening the drawer
        procedure={procedure}
      />
    </Box>
  );
}

const DetailCard = ({ title, value }) => (
  <Box bg="white" p="4" borderRadius="md" boxShadow="md" flex="1 0 250px">
    <Heading size="sm" mb="2" color="gray.700" textTransform={"uppercase"}>
      {title}
    </Heading>
    <Text color="gray.600">{value}</Text>
  </Box>
);
