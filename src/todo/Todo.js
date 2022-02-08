import { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../redux/globalActionType";
import FormMenu from "./FormTodo";
import ListMenu from "./ListTodo";

class Menu extends Component {
    state = {
        addForm : false,
    }

    changeFormList = () => {
        this.setState({
            addForm : !this.state.addForm
        })
    }

    render(){
        return(
            <>
                {
                    this.state.addForm ? <FormMenu
                        changeFormList = {this.changeFormList}
                        addMenu = {this.props.addMenu}
                        // addData = {this.props.addData}
                        addTodo = {this.props.addTodo}
                        todoList = {this.props.todoList}
                    /> : <ListMenu
                        changeFormList = {this.changeFormList}
                        menu = {this.props.menu}
                        todoList = {this.props.todoList}
                        deleteList = {this.props.deleteList}
                    /> 
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // nama atribut bebas, bisa sama
        number : state.globalNumber,
        menu : state.menu,
        todoList : state.todoList,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMenu : (newMenuForm) => dispatch({
            type : ActionType.AddMenu,
            newMenu : newMenuForm
        }),
        deleteList : (idForm) => dispatch({
            type : ActionType.DELETE,
            id : idForm
        }),
        addTodo : (newTodoForm) => dispatch({
            type : ActionType.ADDTODO,
            newTodo : newTodoForm
        }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu)
// export default Menu