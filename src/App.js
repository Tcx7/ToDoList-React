import Todo from "./components/Todo";
import React, { Component } from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div id="boxID">
        <Todo />
      </div>
    );
  }
}

export default App;
