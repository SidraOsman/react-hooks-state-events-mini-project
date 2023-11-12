import React, { useState } from "react";

function NewTaskForm({taskSubmit , categories , handlechange}) {
  const [text , setText] = useState("")
  const [category , setCategory] = useState("Code")

  function handleSubmit(e){
    e.preventDefault()
    taskSubmit({text , category});
    setText("");
    setCategory("Code")
  }

  function handleTextChange(e){
    setText(e.target.value)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handlechange}>
          {categories.map((categs) => {
            <option key={categs}>{categs}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
