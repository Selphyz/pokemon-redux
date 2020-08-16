import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import RootReducer from "./reducers/rootReducer";

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default Store;