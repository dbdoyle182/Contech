import React, { Component } from "react";
import { FlatButton, RaisedButton, Dialog } from "material-ui";
import CodeSandbox from "../CodeSandbox";

class Modal extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={this.handleClose}
      />
    ];

    return (
      <div>
        <RaisedButton label="Code" onClick={this.handleOpen} />
        <Dialog
          title="Code Sandbox"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <CodeSandbox />
        </Dialog>
      </div>
    );
  }
}

export default Modal;
