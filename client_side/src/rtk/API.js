
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const API = createApi({
   reducerPath: 'user_task',
   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
   tagTypes: ['Tasks'],
   endpoints: (builder) => ({

      users: builder.query({
         query: () => "user/",
         providesTags: ['Tasks']
      }),

      tasks: builder.query({
         query: (id) => `user/task/${id}`,
         providesTags: ['Tasks']
      }),

      tasksByPk: builder.query({
         query: (id) => `user/tasksByPk/${id}`,
         providesTags: ['Tasks']
      }),

      addTask: builder.mutation({
         query: (task) => ({
            url: `user/task/add/`,
            method: "POST",
            body: task
         }),
         invalidatesTags: ['Tasks']
      }),

      updateTask: builder.mutation({
         query: ({ details, ...task }) => ({
            url: `user/task/update/${details}`,
            method: "PUT",
            body: task
         }), invalidatesTags: ['Tasks']
      }),

      removeTask: builder.mutation({
         query: (details) => ({
            url: `/user/task/remove/${details}`,
            method: "DELETE"
         }),
         invalidatesTags: ['Tasks']
      })
   })
})

export const { useUsersQuery, useTasksQuery, useTasksByPkQuery, useAddTaskMutation, useUpdateTaskMutation, useRemoveTaskMutation } = API
