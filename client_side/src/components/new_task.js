
import { useState } from "react"
import { Divider, Badge, Checkbox, Button } from "@mantine/core"
import { useSelector } from "react-redux"
import { useAddTaskMutation } from "../rtk/API"
import { useNavigate } from "react-router-dom"


export default function NewTask() {

   const navigate = useNavigate()

   const [text, setText] = useState('')
   const [checked, setChecked] = useState(false)
   const id = useSelector(state => state.reducer_2.user.user_id)
   const user = useSelector(state => state.reducer_2.user)

   const time = useSelector(state => state.reducer_2.time)
   const monthes = 'January February March April May June July August September October November December'.split(' ')
   const currentMonth = monthes.indexOf(time.month) + 1 < 10 ? '0' + (monthes.indexOf(time.month) + 1) : monthes.indexOf(time.month) + 1, currentDay = time.day < 10 ? '0' + time.day : time.day
   const transfered = time.year + '-' + currentMonth + '-' + currentDay

   const [addTask, result] = useAddTaskMutation()

   const add = async () => {
      const task = {
         user_id: id,
         description: text,
         time: transfered,
         completed: checked,
      }
      await addTask(task)
      navigate(`/${user.firstname}_${user.lastname}/`)
   }

   return (
      <>
         <Divider my="lg" color={'dark'} label={<Badge color={'dark'} variant="filled">new task</Badge>} labelPosition="center" />
         <center>
            <textarea placeholder="enter description of task" onChange={e => setText(e.target.value)} rows={10} cols={35} />
            <Checkbox label={checked ? 'completed' : 'not completed'} checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />
            <Button onClick={() => add()} variant="outline" color={'cyan'} compact>add</Button>
         </center>
      </>
   )
}