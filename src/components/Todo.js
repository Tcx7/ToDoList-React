import React from "react";
import TodoFormat from "./Todoformat";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      data: [],
      idCount: 1,
      dueDate: 4,
      month: "Jan",
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateList = this.updateList.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  // handleChange will simply update the inputValue
  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  updateList(e) {
    e.preventDefault();
    let newData = {
      id: this.state.idCount,
      task: this.state.inputValue,
      idCount: this.state.idCount,
      dueDate: this.state.dueDate,
      month: this.state.month,
    };
    this.setState({
      inputValue: "",
      data: [...this.state.data, newData],
      idCount: this.state.idCount + 1,
      dueDate: this.state.dueDate + 1,
    });
  }

  onDeleteHandler(index) {
    index.preventDefault();

    let findIndex = this.state.data
      .map((elem) => {
        return elem.id;
      })
      .indexOf(Number(index.target.id));

    let deleteTask = [...this.state.data];
    deleteTask.splice(findIndex, 1);
    this.setState({
      data: deleteTask,
    });
  }

  render() {
    let formattedData = this.state.data.map((elem) => (
      <TodoFormat
        propID={elem.id}
        propTask={elem.task}
        propDuedate={elem.dueDate}
        propMonth={elem.month}
        deleteTask={this.onDeleteHandler}
        data={this.state.data}
      />
    ));

    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="add something here"
            value={this.state.inputValue}
            onChange={this.handleChange}
          ></input>
          <button onClick={this.updateList}>submit here</button>
        </form>
        {formattedData}
      </div>
    );
  }
}

export default Todo;
