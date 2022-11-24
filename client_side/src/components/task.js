
import { useSelector } from "react-redux"
import { Badge, Button, Divider, Mark, Text } from '@mantine/core';
import { useTasksQuery } from "../rtk/API";
import Tableau from "./tableau";
import { Link } from "react-router-dom";

export default function Task() {

   const user = useSelector(state => state.reducer_2.user)
   const time = useSelector(state => state.reducer_2.time)
   const { data, isLoading, error } = useTasksQuery(user.user_id)

   return (
      <div>
         <Divider my="lg" color={'dark'} label={<Badge color={'dark'} variant="filled">{user.firstname} {user.lastname} </Badge>} labelPosition="center" />
         <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '5vh' }}>

            <Text order={5}><Mark>{time.day}/{time.month}/{time.year}</Mark></Text>
            <Link to={'new_task/'}><Button variant="outline" compact color={'teal'}>new task</Button></Link>

         </div>
         {
            data && <Tableau tasks={data} />
         }
      </div>
   )
}