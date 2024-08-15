"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import Navbar from "../Components/Navbar/navbar";
import MilestoneCreate from "../Components/Milestone/MilestoneCreate";
import MilestoneTable from "../Components/Milestone/MilestoneTable";

const tabIndexes = {
  Product: 0,
  Parent: 1,
};

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [currentFilter, setCurrentFilter] = useState(
    searchParams.get("current_filter") || "Milestones"
  );

  const handleFilterChange = (newFilter) => {
    setCurrentFilter(newFilter);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("current_filter", newFilter);
    router.push(`/milestones?${newSearchParams.toString()}`);
  };

  useEffect(() => {
    if (!searchParams.get("current_filter")) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("current_filter", "Product");
      router.push(`/milestones?${newSearchParams.toString()}`);
    }
  }, []);

  const handleTabClick = (filter) => {
    handleFilterChange(filter);
  };

  return (
    <div>
      <Navbar />
      <Box p="2">
        <MilestoneCreate />
        <MilestoneTable />
        {/* <Tabs
          isFitted
          mt="4"
          index={tabIndexes[currentFilter]}
          onChange={(index) =>
            handleFilterChange(
              index === 0 ? "Milestones" : "Milestone Templates"
            )
          }
        >
          <TabList mb="10px">
            <Tab value="Product" _selected={{ color: "white", bg: "blue.500" }}>
              Milestones
            </Tab>
            <Tab value="Parent" _selected={{ color: "white", bg: "blue.500" }}>
              Milestone Templates
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel p="0">
              {currentFilter === "Milestones" && <MilestoneTable />}
            </TabPanel>
            <TabPanel p="0">
              {currentFilter === "Milestone Templates" && <MilestoneTable />}
            </TabPanel>
          </TabPanels>
        </Tabs> */}
      </Box>
    </div>
  );
}
