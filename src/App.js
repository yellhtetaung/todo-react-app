import React from "react";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import ListItem from "./components/ListItem";

class App extends React.Component {
  state = {
    todos: null,
    inputValue: "",
  };

  addHandler = () => {
    if (this.state.todos) {
      const id = this.state.todos.length + 1;
      this.setState({
        todos: [
          ...this.state.todos,
          { id, item: this.state.inputValue, isEdit: false, isComplete: false },
        ],
        inputValue: "",
      });
    } else {
      this.setState({
        todos: [
          {
            id: 1,
            item: this.state.inputValue,
            isEdit: false,
            isComplete: false,
          },
        ],
        inputValue: "",
      });
    }
  };

  deleteHandler = (id) => {
    const result = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: result });
  };

  onChangeText = (value) => {
    this.setState({ inputValue: value });
  };

  editHandler = (curIndex) => {
    const todo = [...this.state.todos];
    todo[curIndex].isEdit = true;
    this.setState({ todos: todo });
  };

  completeHandler = (curIndex) => {
    const todo = [...this.state.todos];
    todo[curIndex].isComplete = true;
    this.setState({ todos: todo });
  };

  updateHandler = (curIndex, value) => {
    const todo = [...this.state.todos];
    todo[curIndex].item = value;
    todo[curIndex].isEdit = false;
    this.setState({ todos: todo });
  };

  render() {
    return (
      <div className="container mx-auto mt-6">
        <Header title="Todo List" />
        <AddForm
          placeholder="Enter New Task"
          btnTitle="Add Task"
          addHandler={this.addHandler}
          inputValue={this.state.inputValue}
          onChangeText={this.onChangeText}
        />
        <ListItem
          todos={this.state.todos}
          deleteHandler={this.deleteHandler}
          editHandler={this.editHandler}
          updateHandler={this.updateHandler}
          completeHandler={this.completeHandler}
        />
      </div>
    );
  }
}

export default App;
