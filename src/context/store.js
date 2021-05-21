import React,{createContext,useState} from 'react'

const cards =[
    {
        id : 'card-1',
        title : "learning how to code"
    },
    {
        id : 'card-2',
        title : "learning how to react"
    },
    {
        id : 'card-3',
        title : "learning how to dom"
    }
]
const initialState ={
    lists:{
        "list-1":{
            id : "list-1",
            title:"Backlog",
            card:cards
        },
        "list-2":{
            id : "list-2",
            title:"onPrograss",
            card:[]
        },
    },
    listIds:[]
}
export const DataContext = createContext()
export const DataProvider = (props) =>{
    const [store, setStore] = useState(initialState)
    return (
        <DataContext.Provider  value="oke">
            {props.children}
        </DataContext.Provider>
    )
}