import { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../redux/globalActionType";

class FirstCounter extends Component {
    render() {
        return(
            <>
            FIRST COUNTER
            <br/>
            {this.props.number}
            <br/>
            <button onClick={this.props.handlePlus}>+</button>
            <button onClick={this.props.handleMinus}>-</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // nama atribut bebas, bisa sama
        number : state.globalNumber
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus : () => dispatch({type:ActionType.PLUS}),
        handleMinus : () => dispatch({type:ActionType.MINUS}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FirstCounter)