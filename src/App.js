import React, { Component } from "react";
import TodoApp from "./components/TodoApp/TodoApp";

export default class App extends Component {
  render() {
    let content;
    let isLoggedIn = true; 
    (isLoggedIn) ? content = <TodoApp /> : content = null;
      
    return <div>{content}</div>;
  }
}
