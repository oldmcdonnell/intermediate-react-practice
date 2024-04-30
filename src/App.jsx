import { Link } from "react-router-dom"
import EditTeam from "./EditTeam"
import Todo from './Todo'

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
      {/* <Todo /> */}
      <Link to='/Todo'>Todo</Link>
    </div>
  )
}


export default App
