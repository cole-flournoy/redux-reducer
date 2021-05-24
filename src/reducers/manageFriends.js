export function manageFriends(state={friends: []}, action){
  if (action.type === "ADD_FRIEND"){
    let newState = {friends: [...state.friends, action.friend]}
    return newState
  } else if (action.type === "REMOVE_FRIEND"){
    let newState = {friends: state.friends.filter(e => e.id !== action.id)}
    return newState
  } else {
    return state
  }
}
