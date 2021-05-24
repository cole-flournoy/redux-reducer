export function managePresents(state={numberOfPresents: 0}, action){
  if (action.type === "INCREASE"){
    let newState = {numberOfPresents: state.numberOfPresents + 1}
    return newState
  } else {
    return state
  }
}
