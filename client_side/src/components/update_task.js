
import { useTasksByPkQuery } from "../rtk/API"
import { useParams } from "react-router-dom"
import UpdateForm from "./update_form"

export default function UpdateTask() {

   const { task_id } = useParams()
   const { data } = useTasksByPkQuery(task_id)

   return data && <UpdateForm task={data[0]} task_id={task_id} />
}