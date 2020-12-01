export function manageFriends(state ={friends: []}, action){
   case:
            return {...state,     [action.payload.id]: action.payload};
}
