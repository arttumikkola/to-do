import "./InfoComponent.css";

function InfoComponent() {
  return (
    <div>
      <h3 className="info">This app is developed by Arttu Mikkola.</h3>
      <h3 className="instructions_headline">Instructions:</h3>
      <p className="instructions">
        On the To-Do page you can add new tasks to to be completed. First, you
        write a description about the task to the textbox that says "Add a
        todo".
        <br /> Then next to the textbox you can add a date for the task, if you
        want to. Then from the "Tags" dropdown you can select a tag for the
        task.
        <br /> Next to the drop down is "Add todo" button which adds the task to
        the todo-list. Next to that is a textbox which says "Add a tag".
        <br /> With that you can add new tags that you can use later. Below
        every displayed task there is three buttons: <br />
        The one with the "x" deletes the task. <br />
        The one with the pen lets you edit the task. <br />
        The one with the checkmark marks the task completed.
        <br />
        <br />
        In the calendar page is a calendar which shows every date red that has
        an task.
      </p>
    </div>
  );
}

export default InfoComponent;
