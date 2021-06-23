
import React, { createRef, Component } from "react";
import { MdDelete, MdEdit, MdDone } from "react-icons/md";
import { Button, ListItem } from "../../styled";

class Option extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      handledTitle: this.props.title,
    };
    this.ref = createRef();
    this.handleEdit = () => {
      this.ref.current.disabled = false;
      this.ref.current.focus();
    };
    this.handleChange = (e) => {
      this.setState({ handledTitle: e.target.value });
    };
    this.handleBlur = (placement) => {
      this.ref.current.disabled = true;
      props.handleChange(this.state.handledTitle, props.id);
    };
  }
  render() {
    const { id, handleDelete } = this.props;
    return (
      <>
        <ListItem className={this.state.checked ? "checked" : ""}>
          <input
            ref={this.ref}
            onChange={(e) => this.handleChange(e)}
            onBlur={() => this.handleBlur("topRight")}
            type="text"
            disabled
            value={this.state.handledTitle}
          />
          <Button onClick={() => this.handleEdit(id)}>
            <MdEdit />
          </Button>
          <Button
            onClick={() => handleDelete(id)}
            style={{ background: "red" }}
          >
            <MdDelete />
          </Button>
          <Button onClick={() => this.setState({ checked: true })}>
            <MdDone />
          </Button>
        </ListItem>
      </>
    );
  }
}

export default Option;
