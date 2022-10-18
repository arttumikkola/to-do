import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import ToDoListComponent from "./todo_list/ToDoListComponent";
import CalendarComponent from "./components/calendar/CalendarComponent";
import InfoComponent from "./components/info/InfoComponent";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<ToDoListComponent todos={todos} setTodos={setTodos} />}
        />
        <Route
          path="calendar/*"
          element={<CalendarComponent todos={todos} />}
        />
        <Route path="info/*" element={<InfoComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
