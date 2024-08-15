"use client";
import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import CustomDataGrid from "../Common/CustomDataGrid";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  addTemplate,
  removeTemplate,
  removeTemplates,
} from "../../../lib/redux/slice/formBuilderSlice";

export default function FormBuilderTable() {
  const dispatch = useDispatch();
  const templates = useSelector((state) => state.formBuilder.templates);
  const [selectedRows, setSelectedRows] = React.useState([]);

  const handleDeleteSelectedRows = () => {
    console.log("Delete selected templates:", selectedRows);
    dispatch(removeTemplates(selectedRows));
    setSelectedRows([]);
  };

  const columns = [
    {
      field: "templateName",
      headerName: "Builder Name",
    },
    { field: "totalSelectedFields", headerName: "Fields Count", width: 150 },
    { field: "createdBy", headerName: "Created By", width: 150 },
    { field: "usedInCount", headerName: "Used in (Count)", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <Box display="flex" gap="2">
          <IconButton
            aria-label="edit"
            color="primary"
            // onClick={() => handleEdit(params.row.templateName)}
          >
            <MdEdit />
          </IconButton>
          <IconButton
            aria-label="delete"
            color="error"
            onClick={() => dispatch(removeTemplate(params.row.templateName))}
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
        rows={templates}
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
        getRowId={(row) => row.templateName}
      />
    </div>
  );
}
