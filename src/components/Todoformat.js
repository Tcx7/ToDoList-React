import React, { useCallback } from "react";
import Todo from "./Todo";

function TodoFormat(props) {
  return (
    <div>
      <ul>
        <li>ID: {props.propID}</li>
        <li>Task To Complete: {props.propTask}</li>
        <li>
          Start Date:
          {props.propMonth}
          {props.propID}
        </li>
        <li>
          Due Date:{props.propMonth}
          {props.propDuedate}
        </li>
        <button>Mark Complete</button>
        <button id={props.propID} onClick={props.deleteTask}>
          Delete this task
        </button>
      </ul>
    </div>
  );
}

export default TodoFormat;
