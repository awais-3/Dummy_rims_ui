"use client";
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import CustomDataGrid from "../Common/CustomDataGrid";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { removeParentProduct } from "../../../lib/redux/slice/parentProductSlice";

export default function ParentProductTable() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.parentProduct.products);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleDelete = () => {
    selectedRows.forEach((parentProductCode) => {
      dispatch(removeParentProduct(parentProductCode));
    });
    setSelectedRows([]);
  };

  const handleEdit = (parentProductCode) => {
    console.log("Edit product with code:", parentProductCode);
  };

  const handleDeleteSingle = (parentProductCode) => {
    dispatch(removeParentProduct(parentProductCode));
  };

  const columns = [
    {
      field: "productCode",
      headerName: "Parent Product Code",
      renderCell: (params) => (
        <Link href={`/products/${params.row.productCode}`}>
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
    { field: "productName", headerName: "Product Name", width: 200 },
    {
      field: "activeSubstanceEN",
      headerName: "Active Substance EN",
      width: 200,
    },
    {
      field: "maHolder",
      headerName: "MA Holder",
      width: 200,
    },
    {
      field: "activeSubstanceFR",
      headerName: "Active Substance FR",
      width: 200,
    },
    { field: "ATCCode", headerName: "ATC Code", width: 200 },
    { field: "productType", headerName: "Product Type", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Box display="flex" gap="2">
          <IconButton
            aria-label="edit"
            color="primary"
            onClick={() => handleEdit(params.row.productCode)}
          >
            <MdEdit />
          </IconButton>
          <IconButton
            aria-label="delete"
            color="error"
            onClick={() => handleDeleteSingle(params.row.productCode)}
          >
            <MdDeleteOutline />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <CustomDataGrid
      rows={products}
      columns={columns}
      pageSizeOptions={[5, 10]}
      checkboxSelection
      loading={false}
      handleDelete={handleDelete}
      customClasses="w-full h-[500px]"
      onRowSelectionModelChange={(newRowSelectionModel) => {
        console.log(newRowSelectionModel);
        setSelectedRows(newRowSelectionModel);
      }}
      rowSelectionModel={selectedRows}
      getRowId={(row) => row.productCode}
    />
  );
}
