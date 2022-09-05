import React from 'react'
import {deleteTaskRequest } from '../api/tasks.api'
import { useNavigate } from 'react-router-dom';
export default function TaskCard({id, title ,description, done, create}) {
    const navigate = useNavigate()
    const deleteElement = async() =>{
        try{
            await deleteTaskRequest(id);
        }catch(err){
            console.log(err)
        }
    }
    const goEdit = () =>{
        navigate(`edit/${id}`)
    }
    return (
      <li >
          <h2>{title}</h2>
          <p>{description}</p>
          <span>{done === 1 ? "✔️" : "❌"}</span>
          <span>{create}</span>
          <button onClick={deleteElement} style={{margin: "0 5px "}}>Delete</button>
          <button onClick={goEdit} style={{margin: "0 5px "}}>Edit</button>
      </li>
  )
}
