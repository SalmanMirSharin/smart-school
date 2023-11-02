
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


function createFormData(user) {
  const formData = new FormData();
  for (const key in user) {
    if (user.hasOwnProperty(key)) {
      formData.append(key, user[key]);
    }
  }
  return formData;
}



export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/user/' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
        query: (user)=>{
            return{
                url:'register/',
                method:'POST',
                body: user,
                headers: {
                    'Content-type': 'application/json'
                }
            }
        }
    }),
    loginUser: builder.mutation({
      query: (user)=>{
        return{
          url: 'login/',
          method: 'POST',
          body: user,
          headers:{
            'Content-type': 'application/json'
          }
        }
      }
    }),
    getLoggedUser: builder.query({
      query: (access_token)=>{
        return{
          url: 'profile/',
          method: 'GET',
          headers:{
            'authorization': `Bearer ${access_token}`
          }
        }
      }
    }),
    changeUserPassword: builder.mutation({
      query: ({actualData, access_token})=>{
        return{
          url: 'changepassword/',
          method: 'POST',
          body: actualData,
          headers:{
            'authorization': `Bearer ${access_token}`
          }
        }
      }
    }),
    sendPasswordResetEmail: builder.mutation({
      query: (user)=>{
        return{
          url: 'send-reset-password-email/',
          method: 'POST',
          body: user,
          headers:{
            'Content-type' : 'application/json'
          }
        }
      }
    }),

  }),
})


export const { useRegisterUserMutation,useLoginUserMutation, useGetLoggedUserQuery, useChangeUserPasswordMutation,useSendPasswordResetEmailMutation } = userAuthApi



export const userStudentApi = createApi({
  reducerPath: 'userStudentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/student/' }),
  endpoints: (builder) => ({
  
    studentAdmission: builder.mutation({
      query: (user) => {
     
        const formData = createFormData(user)
    
        return {
          url: 'studentinfo/',
          method: 'POST',
          body: formData,
        };
      },
    }),

  }),
})

export const { useStudentAdmissionMutation } = userStudentApi;
