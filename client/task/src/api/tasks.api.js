import axios from "axios";
export const getTaskRequest = async () => await axios.get("http://localhost:4000/tasks");
export const createTaskRequest = async( task ) => await axios.post('http://localhost:4000/tasks', task);
export const deleteTaskRequest =  async (id) => await axios.delete(`http://localhost:4000/tasks/${id}`);
export const editTaskRequest =  async (id, content) => await axios.put(`http://localhost:4000/tasks/${id}`, content);
