"use client";
import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import CustomDataGrid from "../Common/CustomDataGrid";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../../lib/redux/slice/productSlice";

export default function ProductTable() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const isLoading = useSelector((state) => state.product.isLoading);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleDelete = () => {
    selectedRows.forEach((productCode) => {
      dispatch(removeProduct(productCode));
    });
    setSelectedRows([]);
  };

  const handleEdit = (productCode) => {
    console.log("Edit product with code:", productCode);
  };

  const handleDeleteSingle = (productCode) => {
    dispatch(removeProduct(productCode));
  };

  const columns = [
    {
      field: "productCode",
      headerName: "Product Code",
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
    { field: "parentProduct", headerName: "Parent Product", width: 200 },
    { field: "manufacturer", headerName: "Manufacturer", width: 200 },
    { field: "strength", headerName: "Strength", width: 200 },
    { field: "countryOfOrigin", headerName: "Country Of Origin", width: 200 },
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
      loading={isLoading}
      handleDelete={handleDelete}
      customClasses="w-full h-[500px]"
      onRowSelectionModelChange={(newRowSelectionModel) => {
        setSelectedRows(newRowSelectionModel);
      }}
      rowSelectionModel={selectedRows}
      getRowId={(row) => row.productCode}
    />
  );
}
