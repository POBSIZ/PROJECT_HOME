import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import storage from 'redux-persist/lib/storage/session';

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth", "deti"],
    // blacklist: ["survey"]
};

import auth from "./authReducer";
import test from "./testReducer";
import survey from "./surveyReducer";
import deti from "./detiReducer";

const rootReducer = combineReducers({ 
    test, 
    auth,
    survey,
    deti,
});

export default persistReducer(persistConfig, rootReducer);