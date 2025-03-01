import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface User{
   userId?:number;
    username:string;
    email:string;
    profilePictureUrl?:string;
    cognitoId?:string;
    teamId?:number;
}

export interface Attachment{
    id:number;
    fileURL:string;
    fileName:string;
    taskId:number;
    uploadedById:number;
}

export enum Priority{
    Urgent="Urgent",
    High="High",
    Medium="Medium",
    Low="Low",
    Backlog="Backlog"
}
export enum Status {
    ToDo = "To Do",
    WorkInProgress = "Work In Progress",
    UnderReview = "Under Review",
    Completed = "Completed",
}
export interface SearchResults {
    tasks?: Task[];
    projects?: Project[];
    users?: User[];
  }
  export interface Team {
    teamId: number;
    teamName: string;
    productOwnerUserId?: number;
    projectManagerUserId?: number;
  }
  
export interface Project{
    id:number;
    name:string;
    description?:string;
    startDate?:string;
    endDate?:string;
}
export interface Attachment {
    id: number;
    fileURL: string;
    fileName: string;
    taskId: number;
    uploadedById: number;
  }
export interface Task{
    id:number;
    title:string;
    description?:string;
    status?:Status;
    priority?:Priority;
    tags?:string;
    startDate?:string;
    dueDate?:string;
    points?:number;
    projectId:number;
    authorUserId:number;
    assignedUserId?:number;


    author?:User;
    assignee?:User;
    comments?:Comment[];
    attachments?:Attachment[];
}
export interface User {
    userId?: number;
    username: string;
    email: string;
    profilePictureUrl?: string;
    cognitoId?: string;
    teamId?: number;
  }
export const api=createApi({
    baseQuery:fetchBaseQuery({baseUrl:process.env.NEXT_PUBLIC_API_BASE_URL}),
    reducerPath:"api",
    tagTypes:["Projects","Tasks","Users","Teams"],
    endpoints:(builder)=>({
        getProjects:builder.query<Project[],void>({
            query:()=>`projects`,
            providesTags:["Projects"]
        }),
        createProject:builder.mutation<Project,Partial<Project>>({
            query:(project)=>({
                url:`projects`,
                method:"POST",
                body:project
            }),
            invalidatesTags:["Projects"]
        }),
        getTasks: builder.query<Task[], { projectId: number }>({
            query: ({ projectId }) => `tasks?projectId=${projectId}`,
            providesTags: (result) =>
              result
                ? result.map(({ id }) => ({ type: "Tasks" as const, id }))
                : [{ type: "Tasks" as const }],
          }),
        createTask:builder.mutation<Task,Partial<Task>>({
            query:(task)=>({
                url:`tasks`,
                method:"POST",
                body:task
            }),
            invalidatesTags:["Tasks"]
        }),
        updateTaskStatus:builder.mutation<Task,{taskId:number,status:string}>({
            query:({taskId,status})=>({
                url:`tasks/${taskId}/status`,
                method:"PATCH",
                body:{status}
            }),
            invalidatesTags: (result, error, { taskId }) => [
                { type: "Tasks", id: taskId },
              ],
                    
        }),
        getTeams: builder.query<Team[], void>({
            query: () => "teams",
            providesTags: ["Teams"],
          }),
          getTasksByUser: builder.query<Task[], number>({
            query: (userId) => `tasks/user/${userId}`,
            providesTags: (result, error, userId) =>
              result
                ? result.map(({ id }) => ({ type: "Tasks", id }))
                : [{ type: "Tasks", id: userId }],
          }),
        search: builder.query<SearchResults, string>({
            query: (query) => `search?query=${query}`,
          }),
          getUsers: builder.query<User[], void>({
            query: () => "users",
            providesTags: ["Users"],
          }),
    })
});
export const {useGetProjectsQuery,useCreateProjectMutation,useGetTasksQuery,useGetTasksByUserQuery,useGetTeamsQuery,useCreateTaskMutation,useUpdateTaskStatusMutation,useSearchQuery,useGetUsersQuery}=api;