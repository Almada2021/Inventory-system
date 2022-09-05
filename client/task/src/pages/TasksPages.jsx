import React, {useEffect} from 'react'
import { useState, useMemo } from 'react';
import {getTaskRequest} from "../api/tasks.api"
import TaskCard from '../components/TaskCard';
function TasksPages() {
  const [tasks, setTasks] = useState([])
  useMemo(() =>{
    async function loadTask(){
      const response = await getTaskRequest();
      setTasks(response.data[0]);
    }
    loadTask()
    console.log("hello")
  }
  ,[tasks])
  return (
    <div>
      <h1>
        Tasks App
      </h1>
      <ul>
        {tasks.length > 0 ?
          tasks.map(({id, title, description, done, createAt }) =>{
            return(
              <TaskCard key={id} id={id} title={title} description={description} done={done} create={createAt}></TaskCard>
            )
          })
          : null
        }   
      </ul>
    </div>
  )
}

export default TasksPages