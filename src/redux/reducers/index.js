import { combineReducers } from "redux";
import workers from "./workers";
import dna from "./dna";
import dice from "./dice";

export default combineReducers({ workers, dna, dice });
