// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import tasks from "./data/tasks.js";
import HeaderComponents from "./components/Headercomponents.jsx";
import './App.css'

function App() {
  //parte logica
  const arrayIncomplete = tasks.filter((element) => {
    return element.state.includes("in_progress") || element.state.includes("backlog")
  })
  const arrayComplete = tasks.filter((element) => {
    return element.state.includes("completed")
  })

  const incLength = arrayIncomplete.length;
  const compLength = arrayComplete.length;

  const incomplete = arrayIncomplete.map((element) => {
    return <li key={element.id} className="list-unstyled">
      <h6>{element.title} <span className="badge text-bg-warning p-2">{element.state}</span></h6>
      <p>{`Priorità: ${element.priority}`}</p>
      <p>{`Tempo stimato: ${element.estimatedTime}`}</p>
    </li>
  })

  const complete = arrayComplete.map((element) => {
    return <li key={element.id} className="list-unstyled">
      <h6>{element.title} <span className="badge text-bg-success p-2">{element.state}</span></h6>
      <p>{`Priorità: ${element.priority}`}</p>
      <p>{`Tempo stimato: ${element.estimatedTime}`}</p>
    </li>
  })
  //parte HTML
  return (
    <>
      <HeaderComponents />
      <main>
        <h5>Current Tasks <span>{`(${incLength})`}</span></h5>
        <ul>
          {incomplete}
        </ul>
        <hr />
        <h5>Completed Tasks <span>{`(${compLength})`}</span></h5>
        <ul>
          {complete}
        </ul>
      </main>
    </>
  )
}

export default App;
