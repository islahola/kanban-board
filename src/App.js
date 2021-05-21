import React, { useContext } from 'react'
import Heading from './components/Heading'
import {DataContext} from './context/store'

const App = () => {
  const val = useContext(DataContext)
  return (
    <div className="App">
      {val}
      <Heading/>
    </div>
  )
}

export default App
