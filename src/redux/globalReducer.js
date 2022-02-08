import ListMenu from "../todo/ListTodo"
import ActionType from "./globalActionType"

const globalState = {
    globalNumber: 0,
    menu:[
        {
            id: '001',
            name : 'Ayam Geprek',
            price : 25000
        },
        {
            id: '002',
            name : 'Ayam Bakar',
            price : 30000
        },
        {
            id: '003',
            name : 'Ayam Goreng',
            price : 20000
        },
    ],todoList:[
        {
            id: 1,
            date: "2015-03-25",
            description:'Bangun',
        },
        {
            id: 2,
            date: "2015-03-25",
            description:'Bangun',
        },
        {
            id: 3,
            date: "2015-03-25",
            description:'Bangun',
        },
        {
            id: 4,
            date: "2015-03-25",
            description:'Bangun',
        },
    ],
}

const rootReducer = (state = globalState, action) => {
    if(action.type === ActionType.PLUS){
        return {
        ...state,
        globalNumber : state.globalNumber + 1
        }
    }
    if(action.type === ActionType.MINUS){
        return {
        ...state,
        globalNumber : state.globalNumber -1
        }
    }
    if(action.type === ActionType.AddMenu){
        console.log(action.newMenu)
        return {
            ...state,
            menu : [...state.menu, action.newMenu],
        }
    }
    if(action.type === ActionType.DELETE){
        return {
            ...state,
            todoList : state.todoList.filter(todo => todo.id !== action.id)
        }
    }
    if(action.type === ActionType.ADDTODO){
        return {
            ...state,
            todoList : [...state.todoList, action.newTodo],
        }
    }
return state
}

export default rootReducer