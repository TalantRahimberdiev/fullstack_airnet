
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user: { user_id: -1, firstname: 'trial', lastname: 'trial_2' },
   time: { day: '01', month: 'february', year: '1993' },
}

export const slice_2 = createSlice({
   name: 'user_time',
   initialState,
   reducers: {
      chooseUser: (state, action) => {
         state.user = action.payload
      },
      pickTime: (state, action) => {
         state.time = { ...action.payload }
      },
   },
})

export const { chooseUser, pickTime } = slice_2.actions
export default slice_2.reducer