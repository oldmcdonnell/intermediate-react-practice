import { useReducer } from 'react';

function createInitialState(username) {
  const initialTeam = [];
  for (let i = 0; i < 50; i++) {
    initialTeam.push({
      id: i,
      playerName: username,
      playerAttack: 0,
      playerHealth:0, 
      playerSpeed: 0,
    });
  }
  return {
    draft: '',
    team: initialTeam,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'changed_draft': {
      return {
        player: action.updatePlayer
        //draft: action.nextDraft,
        team: state.todos,
      };
    };
    case 'added_todo': {
      return {
        draft: '',
        team: [{
          id: state.team.length,
          text: state.draft
        }, ...state.todos]
      }
    }
  }
  throw Error('Unknown action: ' + action.type);
}

export default function TodoList({ username }) {
  const [state, dispatch] = useReducer(
    reducer,
    username,
    createInitialState
  );
  return (
    <>
      <input
        value={state.draft}
        onChange={e => {
          dispatch({
            type: 'changed_draft',
            updatePlayer: e.target.value
          })
        }}
      />
      <button onClick={() => {
        dispatch({ type: 'added_todo' });
      }}>Add</button>
      <ul>
        {state.todos.map(item => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
}
