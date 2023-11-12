import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [category , setCategory] = useState("All")

  function handleAddTasks(newTasks){
    setTasks([...tasks, newTasks])
  }

  function handleDeleteTasks(deletedTaskText){
    setTasks(tasks.filter((task) => task.text !==deletedTaskText))
  }


    const taskToDisplay = tasks.filter((task) => {
    if (category === "All"){
      return true;
    } else {
      return task.category === category
    }
    })

    function handleChange(e){
      setCategory(e.target.value)
    }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories = {CATEGORIES}
      selectedCategory = {category}
      onSelectCategory = {setCategory}/>
      <NewTaskForm 
      categories = {CATEGORIES.filter((categs) => categs !== "All")}
      taskSumit ={handleAddTasks}
      handlechange={handleChange}/>
      <TaskList 
      onDeleteTask = {handleDeleteTasks}
      tasks = {taskToDisplay}/>
    </div>
  );
}

export default App;
