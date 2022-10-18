import Calendar from "react-calendar";
import React, { useState } from "react";
import "./CalendarComponent.css";

function CalendarComponent({ todos }) {
  const [value, onChange] = useState(new Date());

  return (
    <div className="calendar_div">
      <Calendar
        className="calendar"
        onChange={onChange}
        value={value}
        tileClassName={({ date }) => {
          date.setHours(date.getHours() + 2);
          if (todos.find((x) => x.date === date.toISOString().split("T")[0])) {
            return "highlight";
          }
        }}
      />
    </div>
  );
}

export default CalendarComponent;
