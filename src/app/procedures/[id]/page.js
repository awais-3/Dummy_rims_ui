"use client";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/navbar";
import ProcedureDetails from "../../Components/Procedure/EditProcedure/ProcedureDetails";
import ProcedureTimeline from "../../Components/Procedure/ProcedureTimeline/ProcedureTimeline";
import { useSelector } from "react-redux";

export default function Page() {
  const { id } = useParams();
  const router = useRouter();
  const [seletectProcedure, setseletectedProcedure] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const selectedProcedure = procedures.find(
      (procedure) => String(procedure.id) === id
    );
    setseletectedProcedure(selectedProcedure);
  }, [id]);

  const procedures = useSelector((state) => state.procedure.procedures);

  const [currentFilter, setCurrentFilter] = useState(
    searchParams.get("current_filter") || "Project Details"
  );

  const handleFilterChange = (newFilter) => {
    setCurrentFilter(newFilter);
    // const newSearchParams = new URLSearchParams(searchParams);
    // newSearchParams.set("current_filter", newFilter);
    // router.push(`/procedures/1/?${newSearchParams.toString()}`);
  };

  return (
    <Box>
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
              handleFilterChange(index === 0 ? "Project Details" : "Timeline")
            }
          >
            <TabList mb="1em" flexDirection={"column"} p="4" mt="4">
              <Tab
                value="Project Details"
                _selected={{ color: "white", bg: "blue.500" }}
                py="4"
              >
                Procedure Details
              </Tab>
              <Tab
                value="Timeline"
                _selected={{ color: "white", bg: "blue.500" }}
                py="4"
              >
                Timeline
              </Tab>
            </TabList>
          </Tabs>
        </Box>

        {/* Main Content */}
        <Box flex={{ base: "", md: 1 }} p="4">
          <Tabs index={currentFilter === "Project Details" ? 0 : 1}>
            <TabPanels>
              <TabPanel>
                <ProcedureDetails />
              </TabPanel>
              <TabPanel>
                <ProcedureTimeline procedure={seletectProcedure} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}
