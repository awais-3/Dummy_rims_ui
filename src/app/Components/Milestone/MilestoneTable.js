"use client";
import React, { useEffect } from "react";
import { Box, Flex, Input, Button, Select, Text } from "@chakra-ui/react";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { IconButton } from "@mui/material";
import CustomDataGrid from "../Common/CustomDataGrid";
import { useDispatch, useSelector } from "react-redux";
import {
  removeMilestone,
  removeMilestones,
} from "../../../lib/redux/slice/milestoneSlice";

export default function MilestoneTable() {
  const dispatch = useDispatch();
  const milestones = useSelector((state) => state.milestone.milestones);
  const [selectedRows, setSelectedRows] = React.useState([]);

  const handleDeleteSelectedRows = () => {
    dispatch(removeMilestones(selectedRows));
    setSelectedRows([]);
  };

  const handleDeleteSingle = (id) => {
    dispatch(removeMilestone(id));
  };

  const columns = [
    {
      field: "milestoneName",
      headerName: "Milestone Name",
      width: 150,
    },
    { field: "milestoneCount", headerName: "Milestone Count", width: 150 },
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
            onClick={() => console.log("Edit milestone", params.row.id)}
          >
            <MdEdit />
          </IconButton>
          <IconButton
            aria-label="delete"
            color="error"
            onClick={() => handleDeleteSingle(params.row.id)}
          >
            <MdDeleteOutline />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <Box py="4">
      <CustomDataGrid
        rows={milestones}
        columns={columns}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        handleDelete={handleDeleteSelectedRows}
        customClasses="w-full"
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setSelectedRows(newRowSelectionModel);
        }}
        rowSelectionModel={selectedRows}
        getRowId={(row) => row.id}
      />
    </Box>
  );
}
