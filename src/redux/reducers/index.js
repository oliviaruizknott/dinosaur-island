import { combineReducers } from "redux";
import workers from "./workers";
import dna from "./dna";

export default combineReducers({ workers, dna });
