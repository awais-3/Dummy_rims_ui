"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";

import Navbar from "../Navbar/navbar";
import ProductCreate from "./ProductCreate";
import ParentProductTable from "./ParentProductTable";
import ProductTable from "./ProductTable";

const tabIndexes = {
  Product: 0,
  Parent: 1,
};

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [currentFilter, setCurrentFilter] = useState(
    searchParams.get("current_filter") || "Product"
  );

  const handleFilterChange = (newFilter) => {
    setCurrentFilter(newFilter);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("current_filter", newFilter);
    router.push(`/products?${newSearchParams.toString()}`);
  };

  useEffect(() => {
    if (!searchParams.get("current_filter")) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("current_filter", "Product");
      router.push(`/products?${newSearchParams.toString()}`);
    }
  }, []);

  const handleTabClick = (filter) => {
    handleFilterChange(filter);
  };

  return (
    <div>
      <Navbar />
      <Box p="2">
        <ProductCreate />
        <Tabs
          isFitted
          mt="4"
          index={tabIndexes[currentFilter]}
          onChange={(index) =>
            handleFilterChange(index === 0 ? "Product" : "Parent")
          }
        >
          <TabList mb="10px">
            <Tab value="Product" _selected={{ color: "white", bg: "blue.500" }}>
              Product
            </Tab>
            <Tab value="Parent" _selected={{ color: "white", bg: "blue.500" }}>
              Parent Product
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel p="0">
              {currentFilter === "Product" && <ProductTable />}
            </TabPanel>
            <TabPanel p="0">
              {currentFilter === "Parent" && <ParentProductTable />}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
}
