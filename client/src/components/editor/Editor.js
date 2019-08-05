import React, { Component } from "react";
import EditorNavBar from "./EditorNavBar";
import EditorBody from "./EditorBody";

import "bootstrap/dist/css/bootstrap.min.css";

class Editor extends Component {
  render() {
    return (
      <div className="Editor">
        <EditorNavBar />
        <EditorBody />
      </div>
    );
  }
}

export default Editor;
