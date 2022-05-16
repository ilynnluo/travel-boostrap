import { Row, Col, Container } from "react-bootstrap"
import { FilterForm } from "../filterForm"

export const SearchBanner = () => {
  return <>
    <Container style={{ marginTop: "2rem", marginBottom: "2rem" }}>
      <Row>
        <Col lg={6}>
          <FilterForm />
        </Col>
        <Col lg={6}>
          12345
        </Col>
      </Row>
    </Container>
  </>
}