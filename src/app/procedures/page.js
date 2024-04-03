import { Box, Input } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar/navbar";
import ProcedureSidebar from "../Components/Procedure/ProcedureSlidbar";
import ProcedureSearchBar from "../Components/Procedure/ProcedureSearchBar";
import ProcedureTable from "../Components/Procedure/ProcedureTable";
import ProcedureCreate from "../Components/Procedure/ProcedureCreate";

export default function Procedure() {
  return (
    <Box display="flex" flexDirection="column" minH="100vh">
      <Navbar />
      <ProcedureSidebar>
        <ProcedureCreate />
        <ProcedureSearchBar />
        <ProcedureTable />
      </ProcedureSidebar>
    </Box>
  );
}
