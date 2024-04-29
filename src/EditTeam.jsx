import { useState } from "react"
import { useReducer } from 'react'

//const [teamMember, setTeamMember] = useState({})

const teamMember = []

const initialState = {
  ...teamMember
  playerName: "",
  playerAttack: 0,
  playerHealth: 0,
  playerSpeed:0,
}

const [state, dispatch] = useReducer(countReducer, initialCountState)

setTeamMember([
  ...teamMember,
  playerName = "bob",
  playerAttack = 3,
  playerHealth = 2,
  playerSpeed = 1,
])

const playerName = () => {
  console.log(playerName)
  return teamMember.playerName
}


const playerAttack = () => {
  //number from 1-5
  return teamMember.playerAttack
}

const playerHealth = () => {
    //number from 1-5

    console.log(playerHealth)
    return teamMember.playerHealth

}

const playerSpeed = () => {
    //number from 1-5
    return teamMember.playerSpeed
}

const playerAttributes = () => { 
//max attributees of speed, attack, and health is 10
return <div>
  Player Name: {playerName}
  Attack: {playerAttack}
  Speed: {playerSpeed}
  Health: {playerHealth}
</div>
}


// const teamMembers = () => {
//     let teamArray = []
// }

function EditTeam() {
    return (
      <div className="p-5">
        <playerAttributes />
        <Link to='/about'>About</Link>
        <Title />
      </div>
    )
  }
  
  
  export default EditTeam