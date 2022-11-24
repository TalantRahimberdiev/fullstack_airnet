
import { Table, Button, Text, } from '@mantine/core';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRemoveTaskMutation } from '../rtk/API';

export default function Tableau({ tasks }) {

   const [removeTask] = useRemoveTaskMutation()
   const navigate = useNavigate()
   const user = useSelector(state => state.reducer_2.user)
   const time = useSelector(state => state.reducer_2.time)
   const monthes = 'January February March April May June July August September October November December'.split(' ')
   const currentMonth = monthes.indexOf(time.month) + 1 < 10 ? '0' + (monthes.indexOf(time.month) + 1) : monthes.indexOf(time.month) + 1, currentDay = time.day < 10 ? '0' + time.day : time.day
   const transfered = time.year + '-' + currentMonth + '-' + currentDay

   const rows = tasks.filter(task => task.time === transfered).map((element, index) => (
      <tr key={index}>
         <td><Button onClick={() => navigate(`/${user.firstname}_${user.lastname}/task/update/${element.id}/`)} variant="subtle" color="dark"><Text underline >{element.user_id}</Text></Button></td>
         <td>{element.description}</td>
         <td>{element.completed ? 'yes' : 'no'}</td>
         <td><Button onClick={() => removeTask(element.id)} variant="subtle" color="dark"><Text underline >delete</Text></Button></td>
      </tr>
   ))

   return (
      <Table>
         <thead>
            <tr>
               <th>update</th>
               <th>description</th>
               <th>completed</th>
               <th>remove</th>
            </tr>
         </thead>
         <tbody>{rows}</tbody>
      </Table>
   )
}