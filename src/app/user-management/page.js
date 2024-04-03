import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar/navbar";

import UserManagementCreate from "../Components/UserManagment/UserManagementCreate";
import UserManagementSearchBar from "../Components/UserManagment/UserManagementSearchBar";
import UserManagementTable from "../Components/UserManagment/UserManagementTable";

export default function Procedure() {
  return (
    <Box display="flex" flexDirection="column" minH="100vh">
      <Navbar />
      <Box p="6">
        <UserManagementCreate />
        <UserManagementSearchBar />
        <UserManagementTable />
      </Box>
    </Box>
  );
}
