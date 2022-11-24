
import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

export default function DarkLight() {
   const { colorScheme, toggleColorScheme } = useMantineColorScheme()
   const dark = colorScheme === 'dark'

   return (
      <ActionIcon variant="outline" color={dark ? 'yellow' : 'blue'} onClick={() => toggleColorScheme()} title="Toggle color scheme">{dark ? <BsFillSunFill size={18} /> : <BsFillMoonFill size={18} />}</ActionIcon>
   )
}