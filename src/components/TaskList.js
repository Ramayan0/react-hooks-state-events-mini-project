import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  const taskArray = tasks.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      onDelete={onDelete}
    />
  ));
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskArray}
    </div>
  );
}

export default TaskList;
