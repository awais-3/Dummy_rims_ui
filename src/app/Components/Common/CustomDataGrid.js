import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { MaterialThemeProviders } from "../../MaterialThemeProvider";
import CustomToolbar from "./CustomToolbar";

export default function CustomDataGrid({
  rows,
  columns,
  pageSizeOptions,
  checkboxSelection,
  loading,
  customClasses,
  additionalOptions,
  onRowSelectionModelChange,
  rowSelectionModel,
  handleDelete,
  getRowId,
}) {
  return (
    <MaterialThemeProviders>
      <div
        className={`mt-8  ${customClasses}`}
        style={{ height: 450, width: "100%" }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: pageSizeOptions[0] },
            },
          }}
          pageSizeOptions={pageSizeOptions}
          checkboxSelection={checkboxSelection}
          rowSelectionModel={rowSelectionModel}
          loading={loading}
          slots={{
            toolbar: CustomToolbar,
          }}
          slotProps={{
            toolbar: {
              selectionModel: rowSelectionModel,
              onDelete: handleDelete,
            },
            loadingOverlay: {
              variant: "skeleton",
              noRowsVariant: "skeleton",
            },
          }}
          onRowSelectionModelChange={onRowSelectionModelChange}
          //   disableMultipleRowSelection
          disableRowSelectionOnClick
          getRowId={getRowId}
          sx={{
            "& .MuiDataGrid-columnHeader": {
              //   backgroundColor: "#2B6CB0",
              //   color: "white",
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: "1px solid #2B6CB0 ",
              borderRadius: "0px",
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: "#2B6CB0",
              color: "white",
            },
            "& .MuiTablePagination-root": {
              backgroundColor: "#2B6CB0",
              color: "white",
            },
          }}
          {...additionalOptions}
        />
      </div>
    </MaterialThemeProviders>
  );
}
