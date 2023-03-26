import { Row, Col, Stack, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function NoteList() {
  return (
    <>
      <Row>
        <Col>
          <h1>Notes</h1>
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to="/new">
              <Button variant="primary">Create</Button>
            </Link>
            <Button variant="outline-secondary">Edit tags</Button>
          </Stack>
        </Col>
      </Row>
    </>
  );
}