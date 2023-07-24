import React, { Component } from "react";

class ListItem extends Component {
  state = {
    inputValue: "",
  };

  updateHandler = (curIndex) => {
    this.props.updateHandler(curIndex, this.state.inputValue);
  };

  render() {
    const { todos, deleteHandler, editHandler, completeHandler } = this.props;

    return (
      <div className="w-full lg:w-1/2 mx-auto mt-6">
        {todos &&
          todos.map((todo, index) => {
            return (
              <div
                className="w-full bg-slate-300 my-3 p-6 rounded-lg shadow-lg flex items-center"
                key={todo.id}
              >
                <div className="w-1/2 flex">
                  <input
                    type="checkbox"
                    className="mr-3"
                    checked={todo.isComplete && "checked"}
                    onChange={() => completeHandler(index)}
                  />
                  {/* condition ? expiftrue : expiffalse */}
                  {todo.isEdit ? (
                    <input
                      value={this.state.inputValue}
                      onChange={(e) =>
                        this.setState({ inputValue: e.target.value })
                      }
                      className="w-full p-3 bg-white rounded-lg"
                    />
                  ) : (
                    <h1
                      className={
                        todo.isComplete ? "line-through text-lg" : "text-lg"
                      }
                    >
                      {todo.item}
                    </h1>
                  )}
                </div>

                <div className="w-1/2 flex gap-5 justify-end">
                  {todo.isEdit ? (
                    <button
                      className="bg-sky-500 text-white p-3 px-5 rounded-md cursor-pointer hover:bg-sky-400"
                      onClick={() => this.updateHandler(index)}
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      className="bg-sky-500 text-white p-3 px-5 rounded-md cursor-pointer hover:bg-sky-400"
                      onClick={() => {
                        editHandler(index);
                        this.setState({ inputValue: todo.item });
                      }}
                    >
                      Edit
                    </button>
                  )}

                  <button
                    className="bg-red-500 text-white p-3 px-5 rounded-md cursor-pointer hover:bg-red-400"
                    onClick={() => deleteHandler(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default ListItem;
