import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import ClientDrawer from "../ClientDrawer";
import DetailCard from "../../Common/DetailCard";

const fetchClient = async () => {
  return {
    relationshipType: "Type A",
    companyType: "Type A",
    companyName: "Company ABC",
    companyDisplayName: "Company ABC (Display)",
    companyAddress: "123 Street, City",
    companyCountry: "Country X",
    companyTelephoneNumber: "123-456-7890",
    companyEmail: "company@example.com",
    companyVatNumber: "VAT123456",
    contactTitle: "Mr.",
    contactName: "John Doe",
    contactFirstName: "John",
    contactPosition: "Manager",
    contactDepartment: "Sales",
    contactTelephoneNumber: "987-654-3210",
    contactEmail: "john.doe@example.com",
    siteName: "Site XYZ",
    siteType: "Type B",
    siteAddress: "456 Avenue, Town",
    siteCountry: "Country Y",
    siteTelephoneNumber: "345-678-9012",
    siteEmail: "site@example.com",
    siteVatNumber: "VAT654321",
    manufacturingLicenceExpDate: "2024-12-31",
    gmpExpDate: "2025-06-30",
    gdpExpDate: "2025-12-31",
    gmpTerritory: true,
    gmpTerritoryExpDate: "2025-12-31",
  };
};

export default function ClientDetails() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [partners, setPartners] = useState(null);
  const [procedureType, setProcedureType] = useState("Parent");

  // Simulating fetching procedure data
  useEffect(() => {
    const fetchProcedureData = async () => {
      try {
        const fetchedProcedure = await fetchClient();
        setPartners(fetchedProcedure);

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
        {partners && (
          <Flex flexWrap="wrap" gap="4">
            {Object.entries(partners).map(([key, value]) => (
              <DetailCard key={key} title={key} value={value} />
            ))}
          </Flex>
        )}
      </Box>
      <ClientDrawer
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        type={procedureType}
        isEditing={true}
        client={partners}
      />
    </Box>
  );
}
