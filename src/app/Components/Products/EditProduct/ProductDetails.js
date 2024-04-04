import {
  Box,
  Button,
  useDisclosure,
  Flex,
  Heading,
  Text,
  Grid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductDrawer from "../ProductDrawer";
import DetailCard from "../../Common/DetailCard";
import DetailSubHeader from "../../Common/DetailSubHeader";

const fetchProcedure = async () => {
  return {
    "General Information": {
      parentProduct: "Parent Product A",
      productCode: "PC123",
      productName: "Product A",
      productType: "Type A",
      atcCode: "ATC123",
      manufacturer: "Manufacturer A",
      activeSubstanceEN: "Active Substance EN A",
      activeSubstanceFR: "Active Substance FR A",
      activeSubstanceManufacturer: "Active Substance Manufacturer A",
      strength: "10mg",
      pharmaceuticalForm: "Tablet",
      remarks: "Some remarks here",
      shelfLife: 2,
      countriesOfApplication: ["Country 1", "Country 2"],
      pght: "Details of PGHT",
      maCountryOfOrigin: "Country X",
    },
    Presentation: {
      storageConditions: 25,
      storageConditionsAfterOpen: 30,
      container: "Container A",
      material: "Material A",
      closure: "Closure A",
      packSize: "30 tablets",
      administrationDevice: "Device A",
    },
  };
};

export default function ProjectDetails() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [product, setProduct] = useState(null);
  const [productType, setProductType] = useState("New");

  useEffect(() => {
    const fetchProcedureData = async () => {
      try {
        const fetchedProduct = await fetchProcedure();
        setProduct(fetchedProduct);

        if (fetchedProduct && fetchedProduct.type) {
          // setProductType(fetchedProduct.type);
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
      <Box bg="gray.100" mt="4" p="8" borderRadius="md" boxShadow="md">
        {product &&
          Object.entries(product).map(([sectionName, sectionData]) => (
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
      <ProductDrawer
        isOpen={isOpen}
        onClose={onClose}
        type={productType}
        product={product}
        isEditing={true}
      />
    </Box>
  );
}
