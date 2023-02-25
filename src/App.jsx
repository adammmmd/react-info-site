import React from "react"
import Nav from "./components/Nav"
import Main from "./components/Main"

function App() {
  const [lightMode, setLightMode] = React.useState(true)

  function toggleDarkMode() {
    setLightMode(prevMode => !prevMode)
  }


  return (
    <div className="container">
      <Nav lightMode={lightMode} toggleDarkMode={toggleDarkMode}/>
      <Main lightMode={lightMode} />
    </div>
  )
}

export default App
