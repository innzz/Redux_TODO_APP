import { combineReducers } from "redux";
import noteReducer from "./NoteReducer";

const rootReducer = combineReducers({
    noteReducer
});

export default rootReducer;