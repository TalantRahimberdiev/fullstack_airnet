
import { Routes, Route } from "react-router-dom"
import User from "./user"
import Task from "./task"
import NewTask from "./new_task"
import UpdateTask from "./update_task"

export default function Glavka() {
   return (
      <div>
         <Routes>
            <Route path=":user/" element={<User />} />
            <Route path=":user/task/" element={<Task />} />
            <Route path=":user/task/new_task/" element={<NewTask />} />
            <Route path=":user/task/update/:task_id/" element={<UpdateTask />} />
         </Routes>
      </div>
   )
}