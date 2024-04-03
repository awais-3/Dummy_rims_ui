import React from "react";
import Navbar from "../Components/Navbar/navbar";
import MilestoneCreate from "../Components/Milestone/MilestoneCreate";
import MilestoneTable from "../Components/Milestone/MilestoneTable";
import { Box } from "@chakra-ui/react";
import ContactCreate from "../Components/Contact/ContactCreate";
import ContactTable from "../Components/Contact/ContactTable";

export default function page() {
  return (
    <div>
      <Navbar />
      <Box p="4">
        <ContactCreate />
        <ContactTable />
      </Box>
    </div>
  );
}
