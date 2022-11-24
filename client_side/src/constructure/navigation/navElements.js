
import { Box, NavLink } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { chooseUser } from '../../redux/slice_2';
import { useUsersQuery } from "../../rtk/API"

export default function NavElements({ users }) {

   const elements = users?.map((user, index) => (
      <NavLink
         component="a" href={`/${user.firstname}_${user.lastname}`}
         variant='subtle'
         key={index}
         label={`${user.firstname} ${user.lastname}`}
         color="teal"
         style={{ fontStyle: 'italic', textDecoration: 'underline' }}
      />
   ))

   return <Box>{elements}</Box>
}