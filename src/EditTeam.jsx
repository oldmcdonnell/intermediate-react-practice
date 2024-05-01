import NumberPicker from "react-widgets/NumberPicker";
import { useContext, useState } from "react"
import { useReducer } from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { act } from "react";
import { NewPlayerContext } from "./main";



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
        return {team: [...state.team, {name:action.playerName}]}
    console.log()
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
  const {newPlayerArray, setNewPlayerArray} = useContext(NewPlayerContext)

  const [nameText, setNameText] = useState("")
  const [playerAttack, setPlayerAttack] = useState(0)
  const [playerHealth, setPlayerHealth] = useState(0)
  const [playerSpeed, setPlayerSpeed] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleNumberChange = (type, value) =>{
    dispatch({type :type, numberValue: value})
  }

  const handleSubmit = () => {
    setNewPlayerArray([...newPlayerArray, {playerName:name, 
      playerHealth:state.health,
      playerAttack:state.attack,
       playerSpeed:state.speed }])
  }

  console.log(state)
    return (
      <div className="p-5">
          {state.team.map((members, index) => {
            console.log(members)
            return (
            <>
              <div key={index}>{members.name}</div>
                <input type="text" value={nameText} onChange={event=> setNameText(event.target.value)}>

                </input>
                <button onClick={() => dispatch({type:"addPlayer", playerName:nameText})}>Submit</button>
                <label>Attack</label>
                <NumberPicker
                max={10}
                min={1}
                defaultValue={0}
                value={playerAttack}
                onChange={event => setPlayerHealth(event.target.value)}
                />
                
                <NumberPicker
                max={10}
                min={1}
                defaultValue={0}
                value={attack}
                onChange={event => setPlayerSpeed(event.target.value)}
                />
                <NumberPicker
                max={10}
                min={1}
                defaultValue={0}
                value={attack}
                onChange={event => setPlayerAttack(event.target.value)}
                />
            </>
          )
})}
      </div>
    )
  }
  
  
  export default EditTeam