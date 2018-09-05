import { connect } from "react-redux";
import React, { Component } from "react";
 
// Map Redux state to component props
function mapStateToProps(state) {
  return {
    countValue: state.count
  }
}
 
// Action
var increaseAction = { type: "increase" };
var decreaseAction = { type: "decrease" };
 
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    increaseCount: function() {
      return dispatch(increaseAction);
    },
    decreaseCount: function() {
      return dispatch(decreaseAction);
    }
  }
}

class Counter extends Component {
  render() {
    return (
      <div className="container">
        <button className="buttons"
                onClick={this.props.decreaseCount}>-</button>
        <span>{this.props.countValue}</span>
        <button className="buttons"
                onClick={this.props.increaseCount}>+</button>
      </div>
    );
  }
};
 
// The HOC
var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
 
export default connectedComponent;