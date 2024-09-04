import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Counter from "./Pages/Counter";
import Theme from "./Pages/ThemeChange";
import Todo from "./Pages/Todolist";
import Contact from "./Pages/Contact";
const App=()=>{
    return(
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/theme" element={<Theme/>}/>
          <Route path="/todo" element={<Todo/>}/>
          <Route path="/contact" element={<Contact/>}/>
  
          </Route>
  
        </Routes>
  
      </BrowserRouter>
      </>
    )
  }
  export default App;
  
// -----------------------2nd--------------------------------------------
// import { useState } from "react";
// import { changecolor } from "./ColorSlice";
// import { useDispatch,useSelector } from "react-redux";
// const App=()=>{
//     const myclr=useSelector((state)=>state.mycolor.bgcolor)
//     const mydis=useDispatch();
//     const [clr,setClr]=useState("")
//     return(
//         <>
//         <h1>Change Color</h1>
//         Enter Your Color:
//         <input type="text" value={clr} onChange={(e)=>{setClr(e.target.value)}}/>
//         <button onClick={()=>{mydis(changecolor(clr))}}>Change Color</button>
//         <div style={{width:"500px",height:"300px",backgroundColor:myclr}}></div>
//         </>
//     )
// }
// export default App;

// =======================3rd===============================================================

// import { useSelector,useDispatch } from "react-redux";
// import { myinc,mydec } from "./CounterSlice";

// const App=()=>{
//   const counter=useSelector((state)=>state.mycounter.cnt);
//   const mydis= useDispatch();
//   return(
//     <>
//     <h1>Welcome to Counter App</h1>
//     <button onClick={()=>{mydis(myinc())}}>Increment</button>
//     <h1>{counter}</h1>
//     <button onClick={()=>{mydis(mydec())}}>Decrement</button>
//     </>
//   )
// }
// export default App;

// ===============================================================================
// import { useSelector,useDispatch } from "react-redux";
// import { addTask,taskComplete,delTask,taskUncomp,editSave} from "./todoSlice";
// import { useState } from "react";
// const App=()=>{
//     const mywork=useSelector((state)=>state.todo.task);
//     const[val,setVal]=useState("");
//     const [mybtn,setMybtn]=useState(true);
//     const [edtID,setEdtID]=useState("");

//     const dispatch=useDispatch();
//     console.log(mywork)
//     const addmyTask=()=>{
//         dispatch(addTask({id: Date.now(),work:val,complete:false}));
//         setVal("")
//     }
//     const recDel=(id)=>{
//        dispatch(delTask(id))
//     }
//     const workComp=(id)=>{
//         dispatch(taskComplete(id))
//     }
//     const workUncomp=(id)=>{
//         dispatch(taskUncomp(id));
//     }
//     const workEdit=(id,work)=>{
//         setVal(work)
//         setMybtn(false)
//         setEdtID(id)
//     }
//     const editdataSave=(myid,mywork)=>{
//         dispatch(editSave({id:myid, work:mywork}))
//         setMybtn(true);
//         setVal("")
//     }
//     let sno=0
//     const ans=mywork.map((key)=>{
//         sno++;
//         return(
//             <>
//             <tr>
//                 <td>{sno}</td>
//                 <td>{key.complete? <span style={{color:"red",textDecoration:"line through"}}>
//                     {key.work}</span>:key.work}</td>
//                <td> <button onClick={()=>{recDel(key.id)}}>Delete</button></td>
//                <td>
//                 <button onClick={()=>{workComp(key.id)}}>Complete Task</button>
//                </td>
//                <td>
//                 <button onClick={()=>{workUncomp(key.id)}}>UnComplete Task</button>
//                </td>
//                <td>
//                 <button onClick={()=>{workEdit(key.id,key.work)}}>Edit</button>
//                </td>
//             </tr>
//             </>
//         )
//     })
//     return(
//         <>
//         <h1>To Do App</h1>
//         Enter Task:
//         <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
//         {mybtn? (<button onClick={addmyTask}>
//             Add
//             </button>):(
//                 <button onClick={()=>{editdataSave(edtID,val)}}>Edit Save</button>
//             )}
        
       
//         <hr size="4" color="blue"/>
//         <table border="1" width="400">
//             <tr>
//                 <th>Sno</th>
//                 <th>Your Task</th>
//                 <th></th>
//                 <th></th>
//             </tr>
//             {ans}
//         </table>
//         </>
//     )
// }
// export default App;

