
import { AppShell, useMantineTheme } from '@mantine/core'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import Glavka from '../components/glavka';

import MainHead from './head/mainHead';
import MainNav from './navigation/mainNav';
import MainFoot from './foot/mainFoot';

export default function Container() {

   const theme = useMantineTheme()

   return (
      <Provider store={store}>
         <AppShell
            styles={{ main: { background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], }, }}
            navbarOffsetBreakpoint="sm" asideOffsetBreakpoint="sm"
            header={<MainHead />}
            navbar={<MainNav />}
            footer={<MainFoot />}
         >
            <Glavka />
         </AppShell>
      </Provider>
   )
}