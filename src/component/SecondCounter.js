import { Component } from "react";
import { connect } from "react-redux";

class SecondCounter extends Component {
    render() {
        return(
            <>
            SECOND COUNTER
            <br/>
            {this.props.number}
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

export default connect(mapStateToProps)(SecondCounter)