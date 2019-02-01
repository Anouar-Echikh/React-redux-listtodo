import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Alert
} from "reactstrap";
import { connect } from "react-redux";
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "article ",
      text: "",
      idItem: 0,
      modal: false
    };
  }
  // modal
  toggle = (item, bool) => {
    if (bool)
      this.setState({
        modal: !this.state.modal,
        text: item.text,
        idItem: item.id
      });
    else
      this.setState({
        modal: !this.state.modal
      });
  };

  hundleOnChangeTitle = e => {
    this.setState({ text: e.target.value });
  };
  //////////
  onClickp = e => {
    if (e.target.className === "article")
      this.setState({ class: " article clicked" });
    else this.setState({ class: "article" });
  };

  editItem = () => {
    let item = { id: this.state.idItem, text: this.state.text };
    this.props.updateItem(item);
    console.log(item);
    this.setState({
      modal: !this.state.modal
    });
  };

  removeItem = id => {
    this.props.removeItem(id);

    /* this.setState({
      newtab: this.state.newtab.filter((el, index) => index !== id)
    });*/
  };
  render() {
    const closeBtn = (
      <button className="close" onClick={() => this.toggle(null, false)}>
        &times;
      </button>
    );
    const { el } = this.props;
    return (
      <div className="item-container">
        <p className={this.state.class} onClick={this.onClickp}>
          {el.text}
        </p>
        <Button
          outline
          className="m-2 py-0"
          color="primary"
          onClick={() => this.toggle(el, true)}
        >
          Edit
        </Button>{" "}
        <Button
          outline
          className="m-2 py-0"
          color="danger"
          onClick={() => this.removeItem(el.id)}
        >
          Delete
        </Button>{" "}
        <Modal
          isOpen={this.state.modal}
          toggle={() => this.toggle(null, false)}
          className={this.props.className}
        >
          <ModalHeader toggle={() => this.toggle(null, false)} close={closeBtn}>
            Add new video
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label className="mr-1" for="" sm={2}>
                  Description:
                </Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="title"
                    id=""
                    placeholder="Title"
                    onChange={this.hundleOnChangeTitle}
                    value={this.state.text}
                  />
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.editItem}>
              Save
            </Button>{" "}
            <Button color="secondary" onClick={() => this.toggle(null, false)}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => dispatch({ type: "DELETE_ITEM", id }),
    updateItem: item => dispatch({ type: "UPDATE_ITEM", item })
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Item);
