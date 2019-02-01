import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./item";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // fuction will run automaticaly when it receive props
  /*componentWillReceiveProps = nextprops => {
    let arr = this.state.newtab.concat(nextprops);
    console.log(arr);
    this.setState({ newtab: arr });
  };*/

  render() {
    //const {getText}=this.props;
    return (
      <div className="list-container">
        {this.props.list.map((el, index) => (
          <Item key={index} el={el} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    list: store.reducer
  };
};

export default connect(mapStateToProps)(List);
