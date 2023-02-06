import React from 'react'
import {TreeGridComponent} from "@syncfusion/ej2-react-treegrid"
import data from "./data/dummyData"

const App = () => {
  return (
    <TreeGridComponent dataSource={data}>

    </TreeGridComponent>
  )
}

export default App

