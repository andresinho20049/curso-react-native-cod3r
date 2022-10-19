import React, {createContext, useReducer} from 'react';

const users = [
    {
        id: 1,
        name: 'João Silva',
        email: 'josil@empmail.com',
        avatarUrl:
            'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png',
    },
    {
        id: 2,
        name: 'Mariana Aguiar',
        email: 'riamasil@empmail.com',
        avatarUrl:
            'https://cdn.pixabay.com/photo/2016/04/01/12/11/avatar-1300582_960_720.png',
    },
    {
        id: 3,
        name: 'Julio Fragoso',
        email: 'juliafral@empmail.com',
        avatarUrl:
            'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png',
    },
    {
        id: 4,
        name: 'Rafael Monteiro',
        email: 'rafamontee@empmail.com',
        avatarUrl:
            'https://cdn.pixabay.com/photo/2016/11/01/21/11/avatar-1789663_960_720.png',
    },
];

const initialState = { users };
const UsersContext = createContext({});

const actions = {

    createUser(state, action) {
        const user = action.payload;
        user.id = Math.random();
        return {
            ...state,
            users: [...state.users, user]
        }
    },

    updateUser(state, action) {
        const user = action.payload;
        return {
            ...state,
            users: state.users.map(u => u.id === user.id ? user: u)
        }
    },
    deleteUser(state, action) {
        const user = action.payload;
        return {
            ...state,
            users: state.users.filter(u => u.id !== user.id)
        }
    }
}

export const UsersProvider = props => {

    function reducer(state, action) {
        const fn = actions[action.type];
        return fn ? fn(state, action) : state;
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UsersContext.Provider value={{state, dispatch}}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext;