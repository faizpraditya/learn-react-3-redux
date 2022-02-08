import { Component } from "react";

class ListMenu extends Component {
    delete = (id) => {
        console.log(id)
        this.props.deleteList(id)
    }
    render(){
        return(
            <>
            <div className="card bg-dark p-4 d-block">
                {/* <button onClick={this.props.changeFormList} className="btn btn-primary mb-3">+ Tambah Menu</button>
                <table className="table table-hover table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.menu.map((food, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{food.name}</td>
                                    <td>Rp {food.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table> */}
                <button onClick={this.props.changeFormList} className="btn btn-primary mb-3">+ Tambah Todo List</button>
                <table className="table table-hover table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.todoList.map((todo, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{todo.id}</th>
                                    <td>{todo.date}</td>
                                    <td>{todo.description}</td>
                                    <td><button className="btn btn-danger" onClick={()=>this.delete(todo.id)}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}

export default ListMenu