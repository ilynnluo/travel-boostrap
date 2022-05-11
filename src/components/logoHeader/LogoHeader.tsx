import React from "react";
import styles from "./LogoHeader.module.css";
import { InputGroup, FormControl, Button, Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image"

export const LogoHeader = () => {
  return <>
    <Container style={{ paddingTop: "30px", paddingBottom: "30px"}}>
      <Row style={{ alignItems: "center" }}>
        <Col className="col-2">LOGO</Col>
        <Col className="col-5">
          <InputGroup size="sm">
            <FormControl
              placeholder="搜索旅行地/酒店/旅游/景点门票/交通"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{ fontSize: "12px" }}
            />
            <Button className="btn btn-primary" style={{ padding: "6px 18px 8px 18px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Button>
          </InputGroup>
        </Col>
        <Col>
          <Row>
            <Col className="col-11" >
              <Row><span className={styles["logoHeaderTel"]}>境内：95010</span></Row>
              <Row><span className={styles["logoHeaderTel"]}>（或）400-830-6666</span></Row>
            </Col>
            <Col className="col-1" style={{ padding: "2px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-caret-down-fill text-black-50" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </>
}