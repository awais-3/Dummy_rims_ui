import React from "react";
import Navbar from "../Components/Navbar/navbar";
import FormBuilderCreate from "../Components/Formbuilder/FormBuilderCreate";
import FormBuilderTable from "../Components/Formbuilder/FormBuilderTable";
import { Box } from "@chakra-ui/react";

export default function page() {
  return (
    <div>
      <Navbar />
      <Box p="6">
        <FormBuilderCreate />
        <FormBuilderTable />
      </Box>
    </div>
  );
}
