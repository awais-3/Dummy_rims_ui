import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  milestones: [],
};

const milestoneSlice = createSlice({
  name: "milestone",
  initialState,
  reducers: {
    setMilestones: (state, action) => {
      state.milestones = action.payload;
    },
    addMilestone: (state, action) => {
      state.milestones.push(action.payload);
    },
    removeMilestone: (state, action) => {
      state.milestones = state.milestones.filter(
        (milestone) => milestone.id !== action.payload
      );
    },
    removeMilestones: (state, action) => {
      state.milestones = state.milestones.filter(
        (milestone) => !action.payload.includes(milestone.id)
      );
    },
  },
});

export const {
  setMilestones,
  removeMilestone,
  removeMilestones,
  addMilestone,
} = milestoneSlice.actions;

export default milestoneSlice.reducer;
