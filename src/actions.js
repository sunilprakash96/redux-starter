import * as actions from "./actionTypes";

export const bugAdded=()=>(
    {
        type: actions.BUG_ADDED,
        payload: {
            description: "Bug1"
        }
    }
);

// export const bugRemoved=()=>(
//     {
//         type: actions.BUG_REMOVED,
//         payload:{
//             id: 1
//         }
//     }
// )

export const bugResolved=()=>({
    type: "BUG_RESOLVED",
    payload:{
        id: 1
    }
})