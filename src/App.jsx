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
// import React from 'react'
// import { useState } from 'react'

// function App() {
//   const [text, setText] = useState('')
//   const [todo, setTodo] = useState([])
//   const [editIndex, setEditIndex] = useState(null) 
//   const [textedit, setTextedit] = useState('')
//   const handleSend =()=>{
//     setTodo([...todo,text])
//     setText("")
//   }
//   const handleEdit = (index) =>{
//      setEditIndex(index)
//      setTextedit(todo[index])
//   }
//   const handleUpdate =(index)=>{
//     setTodo([...todo,textedit])
//     setEditIndex(null)
//     setTodo((pre)=>pre.filter((i,k)=> !k == index) )
//   }
//   return (
//     <div>
//     <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
//     <button onClick={handleSend}>send</button>

//     <ul>
//       {
//         todo.map((i,k)=>(
//           <li key={k}>
//           {
//            editIndex === k ? <><input type="text" value={textedit} onChange={(e)=>setTextedit(e.target.value)}/>
//             <button onClick={()=>handleUpdate(k)}>update</button></>
//            :<>{i} <button onClick={()=>handleEdit(k)}>edit</button></>
//           }
//           </li>
//         ))
//       }
//     </ul>
//     </div>
//   )
// }

// export default App
import React, { useState } from 'react'

function App() {
  const[text,setText]=useState('')
  const[todo,setTodo]=useState([])
  const[edit,setEdit]=useState(null)
  const[textEdit,setTextEdit]=useState('')
  const handleSend=()=>{
    setTodo([...todo,text])
    setText("")
  }
  const handleEdit =(index)=>{
     setEdit(index)
     setTextEdit(todo[index])
  }
  const update = (index)=>{
    setTodo([...todo,textEdit])
    setEdit(null)
    setTodo((pre)=>pre.filter((_,k)=>k !== index))
  }
  console.log(todo)
  let number = todo[3]
  return (
    <div>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
      <button onClick={handleSend}>send</button>
      <ul>
        {
          todo.map((i,k)=>(
            <li key={k}>
                  {
                    edit === k ? 
                    <>
                    <input type="text" value={textEdit} onChange={(e)=>setTextEdit(e.target.value)}/>
                    <button onClick={()=>update(k)}>update</button>
                    </>:<>{i}<button onClick={()=>handleEdit(k)}>edit</button>  </>
                  }
            </li>
          ))
        }
      </ul>
      <h2>{number}</h2>
    </div>
  )
}

export default App