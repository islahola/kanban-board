import React, { useContext } from 'react'
import Board from './components/Board'
import Heading from './components/Heading'
import {DataContext} from './context/store'
import "./sass/App.scss"

const App = () => {
  const {store} = useContext(DataContext)
  return (
    <div className="App">
      <Heading/>
      <div className="container">
        {store.listIds.map(id=>{
          const data = store.lists[id]
          return <Board key={id} data={data}/>
        })}
      </div>
    
    </div>
  )
}

export default App
