import React, { useState } from "react";
import "./ToDo.css";
import ToDoFormComponent from "../components/todo_form/ToDoFormComponent";
import { RiCloseCircleLine, RiCheckFill } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { Card } from "react-bootstrap";

function ToDo({ todos, completeTodo, removeTodo, updateTodo, tags }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    date: "",
    tag: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    console.log(value);
    setEdit({
      id: null,
      text: "",
      date: "",
      tag: "",
    });
  };

  if (edit.id) {
    return (
      <ToDoFormComponent edit={edit} onSubmit={submitUpdate} tags={tags} />
    );
  }
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <Card>
        <Card.Body>
          Task: {todo.text} {todo.date && <>Date: {todo.date}</>}
          {todo.tag && <>Tag: {todo.tag}</>}
          <div className="icons">
            <RiCloseCircleLine
              onClick={() => removeTodo(todo.id)}
              className="delete-icon"
            />
            <TiEdit
              onClick={() =>
                setEdit({
                  id: todo.id,
                  text: todo.text,
                  date: todo.date,
                  tag: todo.tag,
                })
              }
              className="edit-icon"
            />
            <RiCheckFill
              key={todo.id}
              onClick={() => completeTodo(todo.id)}
              className="complete-icon"
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  ));
}
export default ToDo;
