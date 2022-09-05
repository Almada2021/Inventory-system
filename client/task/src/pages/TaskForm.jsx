import React from 'react'
import {Form, Formik} from "formik"
import { createTaskRequest, editTaskRequest } from '../api/tasks.api'
import { useParams } from 'react-router-dom'
export default function TaskForm() {
    const {id} = useParams()

    return (
    <div>
        
        {/* FORMIK mantiene el estado y form crea el formulario */}
        <Formik initialValues={{
            title: "",
            description: "",    
        }}
        onSubmit={async(val, actions) => {
            if(id === undefined){
                try {
                    const response =await createTaskRequest( val)
                    actions.resetForm()
                }catch(err){
                    console.log(err)
                }
            }else{
                try {
                    const responseEdit = await editTaskRequest(id, val)
                    actions.resetForm()
                }catch(err){
                    console.log(err)
                }
            }  
          
        }}
        >
            {({handleChange, handleSubmit, values, isSubmitting}) => (
                     <Form onSubmit={handleSubmit}>
                        <label>title</label>
                        <input 
                            onChange={handleChange} 
                            type="text" 
                            name="title" 
                            placeholder="Write a title"
                            value={values.title}
                        />
                        <label>description</label>
                        <textarea 
                            onChange={handleChange}
                            name="description"
                            rows="3"
                            placeholder="Write a description"
                            value={values.description}
                        />
                        <button type='submit' disabled={isSubmitting}>{isSubmitting ? "Saving..."  :"save..."}</button>
                     </Form>
                )

            }
        </Formik>
    </div>
  )
}
