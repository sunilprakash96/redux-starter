import store from "./customStore";
store.state=1;
console.log(store);


// import store from "./store";
// import {bugAdded, bugRemoved,bugResolved} from './actions';
// // console.log("Store", store);
// store.subscribe(()=>{
//     console.log("Store",store.getState());
// })

// store.dispatch(bugAdded());

// // store.dispatch(bugRemoved());

// store.dispatch(bugResolved());


