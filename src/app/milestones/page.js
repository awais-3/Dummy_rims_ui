import React from "react";
import Navbar from "../Components/Navbar/navbar";
import MilestoneCreate from "../Components/Milestone/MilestoneCreate";
import MilestoneTable from "../Components/Milestone/MilestoneTable";
import { Box } from "@chakra-ui/react";

export default function page() {
  return (
    <div>
      <Navbar />
      <Box p="6">
        <MilestoneCreate />
        <MilestoneTable />
      </Box>
    </div>
  );
}
