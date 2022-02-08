import { Component } from "react";

class FormMenu extends Component {
    state = {
        id: '',
        name: '',
        price: '',
        todo:{
            date:'',
            desc:'',
        }
    }
    newTodo = {
        id:0,
        date:'',
        description:'',
    }

    handleChange = (event) => {
        if(event.target.name === 'menuID'){
            this.setState({
                id: event.target.value
            })
        } else if(event.target.name === 'menuName'){
            this.setState({
                name: event.target.value
            })
        } else if(event.target.name === 'menuPrice'){
            this.setState({
                price: event.target.value
            })
        } else if(event.target.name === 'todoDesc'){
            this.newTodo.description = event.target.value
            this.setState({
                todo: this.newTodo,
            })
        } else if(event.target.name === 'todoDate'){
            this.newTodo.date = event.target.value
            this.setState({
                todo: this.newTodo,
            })
        } else if(event.target.name === 'todoID'){
            this.newTodo.id = event.target.value
            this.setState({
                todo: this.newTodo,
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state);
        this.props.addMenu(this.state)
        this.props.changeFormList()
    }

    handleSubmitTodo = (event) => {
        event.preventDefault()
        this.props.addTodo(this.newTodo)
        this.props.changeFormList()
    }

    handleCancel = (event) => {
        this.props.changeFormList()
        event.preventDefault()
    }

    render(){
        return(
            <>
            {/* <div className="col-6 card bg-dark p-4 text-light">
                <form onSubmit={this.handleSubmit}>
                <h3 className="mb-4">Tambah Menu Baru</h3>
                <div className="form-group">
                    <label>Menu ID</label>
                    <input name="menuID" onChange={this.handleChange} className="form-control" placeholder="Enter ID"/>
                    <small className="text-danger"></small><br/>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input name="menuName" onChange={this.handleChange} className="form-control" placeholder="Enter Name"/>
                    <small className="text-danger"></small><br/>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input name="menuPrice" onChange={this.handleChange} type="number" className="form-control" placeholder="Enter Price"/>
                    <small className="text-danger"></small><br/>
                </div>
                <button onClick={this.handleCancel} className="btn btn-warning mx-2 mt-3">Cancel</button>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div> */}
            <div className="col-6 card bg-dark p-4 text-light">
                <form onSubmit={this.handleSubmitTodo}>
                <h3 className="mb-4">Tambah Todo List</h3>
                <div className="form-group">
                    <label>ID</label>
                    <input name="todoID" onChange={this.handleChange} className="form-control" placeholder="Enter ID"/>
                    <small className="text-danger"></small><br/>
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input name="todoDate" onChange={this.handleChange} type="date" className="form-control" />
                    <small className="text-danger"></small><br/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input name="todoDesc" onChange={this.handleChange} className="form-control" placeholder="Enter Description"/>
                </div>
                    <small className="text-danger"></small><br/>
                <button onClick={this.handleCancel} className="btn btn-warning mx-2 mt-3">Cancel</button>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
            </>
        )
    }
}

// export default FormMenu
export default FormMenu