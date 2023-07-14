import { combineReducers, createStore } from "redux";
import mainReduser from "./mainReduser";
const reducers = combineReducers({
    mainPage: mainReduser
})
const store = createStore(reducers)

export default store