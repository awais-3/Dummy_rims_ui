import { Box, Input } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar/navbar";
import ClientSidebar from "../Components/Client/ClientSidebar";
import ClientCreate from "../Components/Client/ClientCreate";
import ClientSearchBar from "../Components/Client/ClientSearchBar";
import ClientTable from "../Components/Client/ClientTable";

export default function Procedure() {
  return (
    <Box display="flex" flexDirection="column" minH="100vh">
      <Navbar />
      <ClientSidebar>
        <ClientCreate />
        <ClientSearchBar />
        <ClientTable />
      </ClientSidebar>
    </Box>
  );
}
