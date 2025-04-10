import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./routes/appRouter"
import React from "react"


function App() {

  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </React.StrictMode>
    </>
  )
}

export default App
