import NumberPicker from "react-widgets/NumberPicker";
import { useState } from "react"
import { useReducer } from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { act } from "react";




const initialState = {
  team: [{playerName:"A", 
  playerId:0,
  playerAttack:0, 
  playerHealth:0, 
  playerSpeed:0},
  {playerName:"Z",
  playerId:1,
  playerAttack:0, 
  playerHealth:0, 
  playerSpeed:0}
  ]
}

function reducer(state, action){
  console.log(action)
  switch(action.type){
    case 'addPlayer':
        return {team: [...state.team, {name:action.playerName,
        playerAttack:action.playerAttack,
      playerHealth:action.playerHealth,
    playerSpeed:action.playerSpeed}]}
      case 'playerAttackPlus':
        return {team: [...state.team, {playerAttack: state.team.playerAttack+1} ]}
        console.log("player attack plus")
        console.log(state.playerAttack)
      case 'playerAttackMinus':
        return { playerAttack: state.playerAttack -1 }
      default:
        return state
  }
}

function EditTeam() {
  const [nameText, setNameText] = useState("")
  const [playerAttack, setPlayerAttack] = useState(0)
  const [playerHealth, setPlayerHealth] = useState(0)
  const [playerSpeed, setPlayerSpeed] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
    return (
      <div className="p-5">
          {state.team.map((members, index) => {
            console.log(members)
            return (
            <>
              <div key={index}>{members.name}</div>
                <input type="text" value={nameText} onChange={event=> setNameText(event.target.value)}></input>
                <button onClick={() => dispatch({type:"addPlayer", playerName:nameText})}>Submit</button>
                <label>Attack</label>
                <NumberPicker
                max={10}
                min={1}
                defaultValue={0}
                value={playerAttack}
                onChange={value => setPlayerHealth(playerHealth)}
                />
                <NumberPicker
                max={10}
                min={1}
                defaultValue={0}
                value={playerAttack}
                onChange={value => setPlayerSpeed(playerSpeed)}
                />
                <NumberPicker
                max={10}
                min={1}
                defaultValue={0}
                value={playerAttack}
                onChange={value => setPlayerAttack(playerAttack)}
                />
            </>
          )
})}
      </div>
    )
  }
  
  
  export default EditTeam