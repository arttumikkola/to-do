import "./Nav.css";
import { Button, ButtonGroup } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <ButtonGroup justified>
        <Button as={Link} to="/" appearance="primary">
          To-Do
        </Button>
        <Button as={Link} to="/calendar" appearance="primary">
          Calendar
        </Button>
        <Button as={Link} to="/info" appearance="primary">
          Info
        </Button>
      </ButtonGroup>
    </nav>
  );
}

export default Nav;
