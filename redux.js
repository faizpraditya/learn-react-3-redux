// store, wadah untuk menyimpan value / global state
// reducer, untuk melakukan update store
// dispatching action, proses pemanggilan reducer
// subscription, listening ketika store terjadi perubahan

// jangan pernah melakukan mutating object di reducer
// return{name:action.name,age:action.age}

// kelebihan redux dibanding session storage karena ada subscribe (rerendering lagi)

// import { createStore } from "redux";

const redux = require('redux')

const createStore = redux.createStore

const initialState = {
    name: 'Mason',
    age: 20,
}

const rootReducer = (state = initialState, action) => {
    if(action.type === "ADD_AGE") {
        return{
            // kalau ga dikasih ...state namenya ilang
            ...state,
            age: state.age+1
        }
    }
    if(action.type === "CHANE_NAME") {
        return{
            ...state,
            name: action.newName,
        }
    }
    return state
}

const store = createStore(rootReducer)

// jika ada dispatch, subscribe terpanggil
store.subscribe(() => {
    console.log("STORE CHANGED", store.getState());
})

store.dispatch(
    {
        type : "ADD_AGE"
    }
)

store.dispatch(
    {
        type : "CHANGE_NAME",
        newName : "Fahmi",
    }
)
