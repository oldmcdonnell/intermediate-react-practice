import { Link } from "react-router-dom"
import EditTeam from "./EditTeam"

const Title = () => {
  return (
    <h1>
      Team Members
    </h1>
  )
}

function App() {
  return (
    <div className="p-5">
      <Link to='/about'>About</Link>
      <Title />
      <EditTeam />
    </div>
  )
}


export default App
