"use client";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "../../Components/Navbar/navbar";
import UserManagementDetails from "../../Components/UserManagment/EditUserManagement/UserManagementDetails";

export default function Page() {
  const { id } = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [currentFilter, setCurrentFilter] = useState(
    searchParams.get("current_filter") || "Project Details"
  );

  const handleFilterChange = (newFilter) => {
    setCurrentFilter(newFilter);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("current_filter", newFilter);
    router.push(`/user-management/1/?${newSearchParams.toString()}`);
  };

  return (
    <Box h="100vh">
      <Navbar />
      <Box display="flex" h="91vh">
        {/* Sidebar */}
        <Box bg="gray.200" w="20%">
          <Tabs
            isFitted
            flexDirection="column"
            index={currentFilter === "Project Details" ? 0 : 1}
            onChange={(index) =>
              handleFilterChange(index === 0 ? "Project Details" : "Document")
            }
          >
            <TabList mb="1em" flexDirection={"column"} p="4" mt="4">
              <Tab
                value="Project Details"
                _selected={{ color: "white", bg: "blue.500" }}
                py="4"
              >
                User Details
              </Tab>
              {/* <Tab
                value="Document"
                _selected={{ color: "white", bg: "blue.500" }}
                py="4"
              >
                Document
              </Tab> */}
            </TabList>
          </Tabs>
        </Box>

        {/* Main Content */}
        <Box flex="1" p="4">
          <Tabs index={currentFilter === "Project Details" ? 0 : 1}>
            <TabPanels>
              <TabPanel>
                <UserManagementDetails />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}
