// import React, { useState } from 'react'

// function App() {
//   const[text,setText]=useState('')
//   const[todo,setTodo]=useState([])
//   const[edit,setEdit]=useState(null)
//   const[textedit,setTextedit]=useState('')
//   const handlesend = ()=>{
//       setTodo([...todo,text])
//       setText("")
//   }
//   const handlesedit = () =>{
//     setEdit((pre)=>pre === true)
//   }
//   const handleupdate =()=>{
//     setTodo([...todo,textedit])
//     setEdit((pre)=>pre === false)
//   }
//   console.log(text)
//   console.log(textedit)
//   return (
//     <div>
//       <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
//       <button onClick={handlesend}>send</button>
      
//       <div>
//         <ul>
//           {
//             todo.map((i,k)=>(
//               <li key={k}>
                
//                     {
//                       edit === k ? (<><input type="text" value={todo} onChange={(e)=>setTextedit(e.target.value)}/>
//                       <button onClick={handleupdate}>update</button></>) : (<>{i}<button onClick={handlesedit}>edit</button></>)
//                     }
//               </li>
//             ))
           
//             }
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default App