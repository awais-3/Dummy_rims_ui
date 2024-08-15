import * as React from "react";
import {
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { IconButton } from "@chakra-ui/react";
import { MdDeleteOutline } from "react-icons/md";

function CustomToolbar({ onDelete, selectionModel }) {
  return (
    <GridToolbarContainer sx={{ py: 2 }}>
      <GridToolbarQuickFilter variant="outlined" size="small" />
      <div style={{ flexGrow: 1 }} />
      {selectionModel.length > 0 && (
        <IconButton
          isRound={true}
          variant="solid"
          aria-label="Delete"
          fontSize="24px"
          onClick={onDelete}
          icon={<MdDeleteOutline color="red" fontSize="inherit" />}
        />
      )}
      <GridToolbarExport />
      <GridToolbarColumnsButton />
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
}

export default CustomToolbar;
