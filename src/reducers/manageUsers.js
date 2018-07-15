export default function manageUsers(state = { users: []
}, action){
  console.log(action);
  switch(action.type) {

    case 'ADD_USER':
      let newUsers = [...state.users, action.user]
      return {users: newUsers};

    default:
      return state;
  }
}
