import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  templates: [],
};

const formBuilderSlice = createSlice({
  name: "formBuilder",
  initialState,
  reducers: {
    addTemplate: (state, action) => {
      state.templates.push(action.payload);
    },
    removeTemplates: (state, action) => {
      state.templates = state.templates.filter(
        (template) => !action.payload.includes(template.templateName)
      );
    },
    removeTemplate: (state, action) => {
      state.templates = state.templates.filter(
        (template) => template.templateName !== action.payload
      );
    },
  },
});

export const { addTemplate, removeTemplate, removeTemplates } =
  formBuilderSlice.actions;

export default formBuilderSlice.reducer;
