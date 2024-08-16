"use client";
import React, { useEffect, useState } from "react";
import { Box, IconButton } from "@chakra-ui/react";

import Link from "next/link";
import CustomDataGrid from "../Common/CustomDataGrid";
import { MdDeleteOutline, MdEdit } from "react-icons/md";

import { useSelector, useDispatch } from "react-redux";
import {
  removeProcedure,
  removeProcedures,
} from "../../../lib/redux/slice/procedureSlice";

export default function ProcedureTable() {
  const dispatch = useDispatch();
  const procedures = useSelector((state) => state.procedure.procedures);
  const [selectedRows, setSelectedRows] = React.useState([]);
  const handleDeleteSelectedRows = () => {
    dispatch(removeProcedures(selectedRows));
    setSelectedRows([]);
  };

  const columns = [
    {
      field: "procedureType",
      headerName: "Procedure Type",
      renderCell: (params) => (
        <Link href={`/procedures/${params.row.id}`}>
          <Box
            as="span"
            _hover={{
              textDecoration: "underline",
              color: "blue.500",
            }}
          >
            {params.value}
          </Box>
        </Link>
      ),
    },
    { field: "productCode", headerName: "Product Code", width: 150 },
    { field: "productName", headerName: "Product Name", width: 150 },
    { field: "genericName", headerName: "Generic Name", width: 150 },
    { field: "strength", headerName: "Strength", width: 150 },
    {
      field: "pharmaceuticalForm",
      headerName: "Pharmaceutical Form",
      width: 150,
    },
    { field: "packSize", headerName: "Pack Size", width: 150 },
    { field: "productType", headerName: "Product Type", width: 150 },
    { field: "country", headerName: "Country", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Box display="flex" gap="2">
          <IconButton
            aria-label="edit"
            color="primary"
            // onClick={() => handleEdit(params.row.id)}
          >
            <MdEdit />
          </IconButton>
          <IconButton
            aria-label="delete"
            color="error"
            onClick={() => dispatch(removeProcedure(params.row.id))}
          >
            <MdDeleteOutline />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <div className="w-full">
      <CustomDataGrid
        rows={procedures}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        loading={false}
        handleDelete={handleDeleteSelectedRows}
        customClasses="w-full"
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setSelectedRows(newRowSelectionModel);
        }}
        rowSelectionModel={selectedRows}
        getRowId={(row) => row.id}
      />
    </div>
  );
}
