// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import tasks from "./data/tasks.js";
import HeaderComponents from "./components/Headercomponents.jsx";

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
      <h6>{element.title} <span className="badge text-bg-warning p-2 mx-3">{element.state}</span></h6>
      <p className="mymg">{`Priorità: ${element.priority}`}</p>
      <p>{`Tempo stimato: ${element.estimatedTime}`}</p>
    </li>
  })

  const complete = arrayComplete.map((element) => {
    return <li key={element.id} className="list-unstyled">
      <h6>{element.title} <span className="badge text-bg-success p-2 mx-3">{element.state}</span></h6>
      <p className="mymg">{`Priorità: ${element.priority}`}</p>
      <p>{`Tempo stimato: ${element.estimatedTime}`}</p>
    </li>
  })
  //parte HTML
  return (
    <>
      <HeaderComponents />
      <main className="container">
          <h5 className="fw-bold">Current Tasks <span>{`(${incLength})`}</span></h5>
          {incomplete}
        <hr />
        <h5 className="fw-bold">Completed Tasks <span>{`(${compLength})`}</span></h5>
          {complete}
      </main>
    </>
  )
}

export default App;
