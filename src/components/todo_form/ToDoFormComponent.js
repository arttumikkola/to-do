import "./ToDoFormComponent.css";
import TagComponent from "../tag/TagComponent";
import React, { useState } from "react";

function ToDoFormComponent(props) {
  const [input, setInput] = useState((props.edit && props.edit.text) || "");

  const [dateInput, setDateInput] = useState(
    (props.edit && props.edit.date) || ""
  );

  const [tagInput, setTagInput] = useState("");

  const [selectedTag, setSelectedTag] = useState(
    (props.edit && props.edit.tag) || undefined
  );

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateInput(e.target.value);
  };

  const handleTagChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      date: dateInput,
      tag: selectedTag,
    });

    setSelectedTag("");
    setInput("");
    setDateInput("");
  };

  const handleTagSubmit = (e) => {
    e.preventDefault();

    props.onTagSubmit({
      id: Math.floor(Math.random() * 10000),
      tag: tagInput,
    });

    setTagInput("");
  };

  return (
    <div className="d-flex justify-content-center">
      <form className="todo-list" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="task-input"
          onChange={handleChange}
        />
        <input
          type="date"
          placeholder="Add a date"
          value={dateInput}
          name="date"
          className="date-input"
          onChange={handleDateChange}
          min="2021-12-20"
        />
        <TagComponent
          tags={props.tags}
          setSelectedTag={setSelectedTag}
          selectedTag={selectedTag}
        />
        <button className="todo-button">Add todo</button>
      </form>
      <form className="tag-list" onSubmit={handleTagSubmit}>
        <input
          type="tag"
          placeholder="Add a tag"
          value={tagInput}
          name="tag"
          className="tag-input"
          onChange={handleTagChange}
        />
        <button className="tag-button">Add tag</button>
      </form>
    </div>
  );
}

export default ToDoFormComponent;
