import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");
  //adding task
  function displayTask(newTask) {
    const newArray = [...tasks, newTask];
    setTasks(newArray);
  }

  //display filterd task according to category
  const taskToDisplay = tasks.filter((task) => {
    if (category === "All") {
      return true;
    } else {
      return task.category === category;
    }
  });
  //function to handle deleting text
  function deleteTask(deleteText) {
    const newTaskArray = tasks.filter((task) => task.text !== deleteText);
    setTasks(newTaskArray);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        clikedCategory={setCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.filter((element) => element !== "All")}
        onTaskFormSubmit={displayTask}
      />
      <TaskList onDelete={deleteTask} tasks={taskToDisplay} />
    </div>
  );
}

export default App;
