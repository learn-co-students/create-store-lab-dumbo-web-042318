export default function manageUsers(state = {
    users: []
}, action) {
    switch (action.type) {
        case 'ADD_USER': 
            // console.log(action)
            // console.log([...state.users, action.user])
            return Object.assign({}, state, {users: [...state.users, action.user]})
        default:
            return state
    }
}
