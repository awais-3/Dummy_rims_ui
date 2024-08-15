import { Box, Input } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar/navbar";
// import ProcedureSidebar from "../Components/Procedure/ProcedureSlidbar";
// import ProcedureSearchBar from "../Components/Procedure/ProcedureSearchBar";
import ProcedureTable from "../Components/Procedure/ProcedureTable";
import ProcedureCreate from "../Components/Procedure/ProcedureCreate";

export default function Procedure() {
  return (
    <Box>
      <Navbar />
      {/* <ProcedureSidebar> */}
      <Box
        mt="20px"
        display={"flex"}
        gap="25px"
        flexDir={"column"}
        padding={"20px"}
      >
        <ProcedureCreate />
        {/* <ProcedureSearchBar /> */}
        <ProcedureTable />
      </Box>
      {/* </ProcedureSidebar> */}
    </Box>
  );
}
