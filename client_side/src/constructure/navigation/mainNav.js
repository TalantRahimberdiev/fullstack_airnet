
import { Navbar, Text, ScrollArea, useMantineColorScheme } from "@mantine/core"
import NavElements from "./navElements"
import { useSelector } from 'react-redux'
import { useUsersQuery } from "../../rtk/API"


export default function MainNav() {

   const { data, error, isLoading } = useUsersQuery()
   const { colorScheme } = useMantineColorScheme()
   const dark = colorScheme === 'dark'
   const language = useSelector(state => state.reducer_1.language)
   const opened = useSelector(state => state.reducer_1.opened)

   return (
      <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 250, lg: 250 }}>
         <ScrollArea mx="-xs" px="xs" scrollbarSize={5} scrollHideDelay={0}>
            <Text weight={700} color={dark ? 'cyan.3' : 'cyan.9'} size={'sm'}>{language === 'eng' ? `Пользователи:` : `Users:`}</Text>
            <NavElements users={data} />
         </ScrollArea>
      </Navbar>
   )
}