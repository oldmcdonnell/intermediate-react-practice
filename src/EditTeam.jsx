import NumberPicker from "react-widgets/NumberPicker";
import { useContext, useState } from "react"
import { useReducer } from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { act } from "react";
import { TeamContext } from "./main";
import { Container } from "react-bootstrap";



export const initialState = {
  players: []
}
//state will be state.players

export const teamReducer = (state, action) =>{
  switch(action.type) {
    case 'addPlayer':
      console.log('add player', action)
      if (state.players.length < 4){
        return [...state.players, {playerNumber: state.players.length,
        name: action.name,
        health: 4,
        attack: 6,
        speed: 3
        }]
      }
      else {
        return state
      }
    case 'increaseHealth':
      return {players: state.players.map(el =>{
        if (el.playerNumber ===action.who){
          el.health = el.health +1
        }
        return (el)      
      })}
    case 'decreaseHealth':
      console.log('decrease', action)
      return {players: state.players.map(el =>{
        console.log('Array map #', el.playerNumber, action.who)
        if (el.playerNumber === action.who){
          el.health = el.health - 1
        }
        return (el)
      })}
  }
}

const EditTeam = () => {
  const {state, dispatch} = useContext(TeamContext)
  console.log('state', state)
  const [nameText, setNameText] = useState('')

  return (
    <div>
      <Container>
        <Row>
          <div>
          <h4>Input Name</h4>
          <input
            value={nameText}
            onChange={event => setNameText(event.target.value)}
            />
          <button onClick={() => dispatch({type: 'addPlayer', 
                                          name: nameText})}>Submit</button>
          <div></div>


          {state.players.map(player => {
            <div key={player.playerNumber}>
              Player {player.playerNumber}: {player.name}
            <NumberPicker>Attack</NumberPicker>
            <NumberPicker>Health</NumberPicker>
            <NumberPicker>Speed</NumberPicker>
            </div>
          })}
        </Row>
      </Container>
    </div>
  )
}