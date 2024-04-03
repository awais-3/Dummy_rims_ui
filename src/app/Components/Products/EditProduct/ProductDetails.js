import {
  Box,
  Button,
  useDisclosure,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductDrawer from "../ProductDrawer";
import DetailCard from "../../Common/DetailCard";

const fetchProcedure = async () => {
  return {
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
    storageConditions: 25,
    storageConditionsAfterOpen: 30,
    container: "Container A",
    material: "Material A",
    closure: "Closure A",
    packSize: "30 tablets",
    administrationDevice: "Device A",
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
        {product && (
          <Flex flexWrap="wrap" gap="4">
            <DetailCard title="Parent Product" value={product.parentProduct} />
            <DetailCard title="Product Code" value={product.productCode} />
            <DetailCard title="Product Name" value={product.productName} />
            <DetailCard title="Product Type" value={product.productType} />
            <DetailCard title="ATC Code" value={product.atcCode} />
            <DetailCard title="Manufacturer" value={product.manufacturer} />
            <DetailCard
              title="Active Substance (EN)"
              value={product.activeSubstanceEN}
            />
            <DetailCard
              title="Active Substance (FR)"
              value={product.activeSubstanceFR}
            />
            <DetailCard
              title="Active Substance Manufacturer"
              value={product.activeSubstanceManufacturer}
            />
            <DetailCard title="Strength" value={product.strength} />
            <DetailCard
              title="Pharmaceutical Form"
              value={product.pharmaceuticalForm}
            />
            <DetailCard title="Remarks" value={product.remarks} />
            <DetailCard
              title="Shelf Life"
              value={`${product.shelfLife} months`}
            />
            <DetailCard
              title="Countries of Application"
              value={product.countriesOfApplication.join(", ")}
            />
            <DetailCard title="PGHT" value={product.pght} />
            <DetailCard
              title="MA Country of Origin"
              value={product.maCountryOfOrigin}
            />
            <DetailCard
              title="Storage Conditions"
              value={`${product.storageConditions}°C`}
            />
            <DetailCard
              title="Storage Conditions After Open"
              value={`${product.storageConditionsAfterOpen}°C`}
            />
            <DetailCard title="Container" value={product.container} />
            <DetailCard title="Material" value={product.material} />
            <DetailCard title="Closure" value={product.closure} />
            <DetailCard title="Pack Size" value={product.packSize} />
            <DetailCard
              title="Administration Device"
              value={product.administrationDevice}
            />
          </Flex>
        )}
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
