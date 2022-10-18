import { React } from "react";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FilterComponent.css";

function FilterComponent(props) {
  return (
    <div className="dropdown">
      <Dropdown onSelect={(eventKey) => props.setFilterTag(eventKey)}>
        <Dropdown.Toggle id="dropdown-basic">
          {props.filterTag || "All tasks"}
        </Dropdown.Toggle>
        <Dropdown.Menu eventKey={props.tags}>
          <Dropdown.Item eventKey="All tasks">All tasks</Dropdown.Item>
          {props.tags.map((tag, index) => (
            <Dropdown.Item eventKey={tag.tag} value={tag.value}>
              {tag.tag}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default FilterComponent;
