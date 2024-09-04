		



// import { configureStore } from "@reduxjs/toolkit";
// import myreducer from "./ColorSlice";

// const store = configureStore({
//     reducer:{
//         mycolor:myreducer,
//     }
// })
// export default store;

// ==========================================================================


import { configureStore } from "@reduxjs/toolkit";
import myans from "./CounterSlice"

const store=configureStore({
    reducer:{
        mycounter:myans,
    }
})
export default store;

// ================================================================================

// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./todoSlice";

// const store=configureStore({
//     reducer:{
//         todo:todoReducer,
//     }
// })
// export default store;

