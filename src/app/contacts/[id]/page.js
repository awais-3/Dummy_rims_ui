"use client";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from "../../Components/Navbar/navbar";
import ContactDetails from "../../Components/Contact/EditContact/ContactDetails";

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
    router.push(`/products/1/?${newSearchParams.toString()}`);
  };

  return (
    <Box h="100vh">
      <Navbar />
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        minHeight={{ base: "auto", md: "91vh" }}
      >
        {/* Sidebar */}
        <Box
          bg={{ base: "white", md: "gray.200" }}
          w={{ base: "100%", md: "20%" }}
        >
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
                Milestone Details
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
        <Box flex={{ base: "", md: 1 }} p="4">
          <Tabs index={currentFilter === "Project Details" ? 0 : 1}>
            <TabPanels>
              <TabPanel>
                <ContactDetails />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}
