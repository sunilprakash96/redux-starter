import {reducer} from "./reducer";
function createStore(reducer){
    let state;

    function dispatch(action){
        store=reducer(state, action);
    }

    function getState(){
        return {state};
    }

    return {getState};
}

export default createStore();