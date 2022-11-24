
import { MediaQuery, Burger, useMantineTheme, ActionIcon, useMantineColorScheme } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';
import DarkLight from "./darkLight";
import { useSelector, useDispatch } from 'react-redux';
import { changeBurger, changeLanguage } from '..//..//redux/slice_1';

const title = {
   'eng': [`Full-stack JavaScript developer (task)`],
   'ру': [`Full-stack JavaScript разработчик (тестовое задание)`],
};

export default function Heading() {

   const theme = useMantineTheme()
   const matches = useMediaQuery('(min-width: 700px)')
   const { colorScheme } = useMantineColorScheme()
   const dark = colorScheme === 'dark'
   const currentLanguage = useSelector(state => state.reducer_1.language)
   const dispatch = useDispatch()
   const opened = useSelector(state => state.reducer_1.opened)

   return (
      <div style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-around' }}>

         <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger opened={opened} onClick={() => dispatch(changeBurger())} size="sm" color={theme.colors.gray[6]} mr={'5px'} />
         </MediaQuery>
         <h4
            style={{ flexGrow: 8, textAlign: "center", color: dark ? 'white' : 'black' }} size={'sm'}>{matches ? title[currentLanguage === 'ру' ? 'eng' : 'ру'][0] : title[currentLanguage === 'ру' ? 'eng' : 'ру'][1]}
         </h4>

         <ActionIcon
            style={{ flexGrow: 0, marginRight: '13px', width: '37px' }} variant="outline" color={dark ? 'yellow' : 'dark'} onClick={() => dispatch(changeLanguage())}>{currentLanguage}
         </ActionIcon>

         <DarkLight style={{ flexGrow: 0 }} />
      </div>
   )
}