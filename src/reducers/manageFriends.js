export function manageFriends(state ={friends: []}, action){
   switch (action.type) {
   case: "ADD_FRIEND":
            return {...state, action.payload};
            
  case: "REMOVE_FRIEND":
            return {...state, action.payload"
  default:
           return state; 
    }
}
