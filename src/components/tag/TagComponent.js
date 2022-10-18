import { React } from "react";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function TagComponent(props) {
  return (
    <div className="dropdown">
      <Dropdown onSelect={(eventKey) => props.setSelectedTag(eventKey)}>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          {props.selectedTag || "Tags"}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {props.tags &&
            props.tags.map((tag, index) => (
              <Dropdown.Item key={index} eventKey={tag.tag} value={tag.value}>
                {tag.tag}
              </Dropdown.Item>
            ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default TagComponent;
