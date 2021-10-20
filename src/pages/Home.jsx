import { Link } from "react-router-dom"
import { Form, Container, Row, Col, Button, InputGroup, FormControl, Card } from "react-bootstrap"

function Home() {
  return (
    <>
      <Container className="pt-3">

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Lucky Find"
          />
          <Button className="SearchBTN">
            Search
          </Button>
        </InputGroup>
        <Row className="px-2">
          <div className="col p-1">
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Services</Card.Title>
                <Row className="py-1">
                  <Col className="text-center">
                    <Button className="SrvButton m-1">Travel</Button>
                  </Col>
                  <Col className="text-center">
                    <Link to="/about">
                      <Button className="SrvButton m-1">EyeMessanger</Button>
                    </Link>
                  </Col>
                </Row>
                <Row className="py-1">
                  <Col className="text-center">
                    <Button className="SrvButton m-1">EyeMail</Button>
                  </Col>
                  <Col className="text-center">
                    <Button className="SrvButton m-1">AjnaChat</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

          </div>
          <div className="col p-1">
            <Card>
              <Card.Body>
                <Card.Title className="text-center">
                  Ads
                </Card.Title>
              </Card.Body>
            </Card>
          </div>

        </Row>
      </Container>
    </>
  )
}

export default Home
