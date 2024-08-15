import { createSlice } from "@reduxjs/toolkit";
import { ProcedureListData } from "../../../app/assets/Data/ProcedureListData";

const initialState = {
  procedures: ProcedureListData || [],
};

const procedureSlice = createSlice({
  name: "procedure",
  initialState,
  reducers: {
    setProcedures: (state, action) => {
      state.procedures = action.payload;
    },
    addProcedure: (state, action) => {
      state.procedures.push(action.payload);
    },
    removeProcedure: (state, action) => {
      state.procedures = state.procedures.filter(
        (procedure) => procedure.id !== action.payload
      );
    },
    removeProcedures: (state, action) => {
      state.procedures = state.procedures.filter(
        (procedure) => !action.payload.includes(procedure.id)
      );
    },
  },
});

export const {
  setProcedures,
  removeProcedure,
  removeProcedures,
  addProcedure,
} = procedureSlice.actions;

export default procedureSlice.reducer;
