
import { useUpdateTaskMutation } from "../rtk/API"
import { useState } from "react"
import { Divider, Badge, Checkbox, Button } from "@mantine/core"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

export default function UpdateForm({ task, task_id }) {

   const { user } = useParams()
   const [text, setText] = useState(task.description)
   const [checked, setChecked] = useState(task.completed)
   const navigate = useNavigate()
   const [updateTask] = useUpdateTaskMutation()
   const time = useSelector(state => state.reducer_2.time)
   
   const monthes = 'January February March April May June July August September October November December'.split(' ')
   const currentMonth = monthes.indexOf(time.month) + 1 < 10 ? '0' + (monthes.indexOf(time.month) + 1) : monthes.indexOf(time.month) + 1, currentDay = time.day < 10 ? '0' + time.day : time.day
   const transfered = time.year + '-' + currentMonth + '-' + currentDay
   
   const update = async () => {
      const task = {
         details: task_id,
         description: text,
         time: transfered,
         completed: checked,
      }
      await updateTask(task)
      navigate(`/${user.firstname}_${user.lastname}/task/`)
   }

   return (
      <>
         <Divider my="lg" color={'dark'} label={<Badge color={'dark'} variant="filled">update task</Badge>} labelPosition="center" />
         <center>
            <textarea onChange={e => setText(e.target.value)} rows={10} cols={35} defaultValue={text} />
            <Checkbox label={checked ? 'completed' : 'not completed'} checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />
            <Button onClick={() => update()} variant="outline" color={'cyan'} compact>update</Button>
         </center>
      </>
   )
}
