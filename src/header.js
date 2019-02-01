import React, { Component } from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";

import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  getText = e => {
    this.setState({ text: e.target.value });
  };
  addToList = () => {
    /*this.props.getTextFromChild(this.state.text);
    this.setState({ text: "" });*/
    let item = { id: Math.random(), text: this.state.text };
    this.props.addItem(item);
    this.setState({ text: "" });
  };
  render() {
    return (
      <div className="header-container">
        <h1>React-Redux-Listtodo</h1>
        <br />
        <InputGroup className="mb-3">
          <Input type="text" value={this.state.text} onChange={this.getText} />
          <InputGroupAddon addonType="append">
            <Button color="secondary" onClick={this.addToList}>
              Add +{" "}
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch({ type: "ADD_ITEM", item })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
