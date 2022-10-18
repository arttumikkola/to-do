import "./ToDoListComponent.css";
import { React, useState } from "react";
import ToDoFormComponent from "../components/todo_form/ToDoFormComponent";
import ToDo from "../todo/ToDo";
import FilterComponent from "../components/filter/FilterComponent";

function ToDoListComponent(props) {
  const [tags, setTags] = useState([]);
  const [filterTag, setFilterTag] = useState("All tasks");

  const todos = props.todos;
  const setTodos = props.setTodos;

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const addTag = (tag) => {
    if (!tag.tag || /^\s*$/.test(tag.tag)) {
      return;
    } else if (tags.some((t) => t.tag === tag.tag)) {
      return;
    }
    const newTags = [tag, ...tags];
    setTags(newTags);
  };

  const updateTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  function sortTodos() {
    const sortedTodos = todos
      .slice()
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    setTodos(sortedTodos);
  }

  function sortTodos2() {
    const sortedTodos2 = todos
      .slice()
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    setTodos(sortedTodos2);
  }

  return (
    <div className="todo">
      <h2 className="text">Add a new todo!</h2>
      <ToDoFormComponent onTagSubmit={addTag} onSubmit={addTodo} tags={tags} />
      <FilterComponent
        setFilterTag={setFilterTag}
        filterTag={filterTag}
        tags={tags}
      />
      <button className="sortAsc" onClick={sortTodos}>
        Sort By Ascending
      </button>
      <button className="sortDesc" onClick={sortTodos2}>
        Sort By Descending
      </button>
      <h2 className="tasks-text">Tasks:</h2>
      <ToDo
        tags={tags}
        todos={
          filterTag === "All tasks"
            ? todos
            : todos.filter((todo) => todo.tag === filterTag)
        }
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default ToDoListComponent;
