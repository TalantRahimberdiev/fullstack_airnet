
import { Divider, Badge, Button, Group } from '@mantine/core';
import { useParams, Link } from 'react-router-dom'
import { DatePicker } from '@mantine/dates'
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { chooseUser, pickTime } from '../redux/slice_2';
import { useUsersQuery } from '../rtk/API';

export default function User() {
   const { data, error, isLoading } = useUsersQuery()
   const dispatch = useDispatch()
   const [time, setDate] = useState(new Date())
   const { user } = useParams()

   const id = data?.find(obj => obj.firstname === user.slice(0, user.indexOf('_'))).id

   return (
      <>
         <Divider my="lg" color={'dark'} label={<Badge color={'dark'} variant="filled">{user}</Badge>} labelPosition="center" />
         <DatePicker placeholder="выберите дату" label="Календарь" value={time} onChange={setDate} />

         {
            time && (
               <Group position='center' mt={'xl'}>
                  <Link to={'task'}
                     onClick={() => {
                        dispatch(chooseUser({ user_id: id, firstname: user.slice(0, user.indexOf('_')), lastname: user.slice(user.indexOf('_') + 1) }))
                        dispatch(pickTime({ day: time.getDate(), month: time.toLocaleString('en-US', { month: 'long' }), year: time.getFullYear() }))
                     }}>
                     <Button variant='outline' compact color={'teal'} >{time.getDate()}/{time.getMonth()}/{time.getFullYear()}</Button>
                  </Link>
               </Group>
            )
         }
      </>
   )
}