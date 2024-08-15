import { combineReducers } from "redux";
import productReducer from "./slice/productSlice";
import parentProductReducer from "./slice/parentProductSlice";
import formBuilderReducer from "./slice/formBuilderSlice";
import procedureReducer from "./slice/procedureSlice";
import milestoneReducer from "./slice/milestoneSlice";

const rootReducer = combineReducers({
  product: productReducer,
  parentProduct: parentProductReducer,
  formBuilder: formBuilderReducer,
  procedure: procedureReducer,
  milestone: milestoneReducer,
});

export default rootReducer;
