import { Tab, Row, Col, Nav, Tabs, Form, Button } from "react-bootstrap";
import styles from "./FilterForm.module.css"
// import FormCheckType from "react-bootstrap/esm/"

interface FormCheckType {
  type: 'checkbox' | 'radio' | 'switch'
}

export const FilterForm = () => {
  const now = new Date()
  const y = now.getFullYear()
  const m = now.getMonth()
  const d = now.getDay()

  return <>
    <Tab.Container id="left-tabs" defaultActiveKey="hotel" >
      <Row >
        <Col sm={2}>
          <Nav variant="pills" className="flex-column" >
            <Nav.Item>
              <Nav.Link eventKey="hotel">酒店</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="flight">机票</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10} style={{ overflow: "hidden" }}>
          <Tab.Content>
            {/* Hotel */}
            <Tab.Pane eventKey="hotel">
              <Tabs defaultActiveKey="domesticHotel" id="domesticHotel-tab" className="mb-3">
                {/* Domestic Hotel */}
                <Tab eventKey="domesticHotel" title="国内酒店">
                  <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formDestination">
                      <Form.Label column sm={2} className={styles["filterFormText"]}>
                        目的地
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Control type="text" placeholder="中文/拼音" className={styles["filterFormPlaceholder"]} />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="checkinDate">
                      <Form.Label column sm={2} className={styles["filterFormText"]}>
                        入住日期
                      </Form.Label>
                      <Col sm={4}>
                        <Form.Control type="date" placeholder={`${y}+ "-" + ${m}+ "-" + ${d}`} className={styles["filterFormPlaceholder"]} />
                      </Col>
                      <Form.Label column sm={2} className={styles["filterFormText"]}>
                        退房日期
                      </Form.Label>
                      <Col sm={4}>
                        <Form.Control type="date" placeholder={`${y}+ "-" + ${m}+ "-" + ${d}`} className={styles["filterFormPlaceholder"]} />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formGridState">
                      <Form.Label column sm={2} className={styles["filterFormText"]}>
                        房间数
                      </Form.Label>
                      <Col sm={4}>
                        <Form.Select defaultValue="Choose..." className={styles["filterFormPlaceholder"]}>
                          <option>1间</option>
                          <option>...</option>
                        </Form.Select>
                      </Col>
                      <Form.Label column sm={2} className={styles["filterFormText"]}>
                        住客数
                      </Form.Label>
                      <Col sm={4}>
                        <Form.Select defaultValue="Choose..." className={styles["filterFormPlaceholder"]}>
                          <option>1成人</option>
                          <option>...</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formGridState">
                      <Form.Label column sm={2} className={styles["filterFormText"]}>
                        酒店级别
                      </Form.Label>
                      <Col sm={4}>
                        <Form.Select defaultValue="Choose..." className={styles["filterFormPlaceholder"]}>
                          <option>不限</option>
                          <option>...</option>
                        </Form.Select>
                      </Col>
                      <Form.Label column sm={2} className={styles["filterFormText"]}>
                        关键词
                      </Form.Label>
                      <Col sm={4}>
                        <Form.Control type="email" placeholder="(选填)酒店名/地标/商圈" className={styles["filterFormPlaceholder"]} />
                      </Col>
                    </Form.Group>

                    <Row>
                      <Col sm={8}></Col>
                      <Col sm={4} style={{ padding: "0", alignContent: "end" }}>
                        <Button variant="primary" type="submit" style={{ marginTop: "1rem", paddingLeft: "3rem", paddingRight: "3rem", backgroundColor: "orange", borderColor: "orange" }}>
                          搜索
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Tab>
                {/* Overseas Hotel */}
                <Tab eventKey="overseasHotel" title="海外酒店">
                  <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formDestination">
                      <Form.Label column sm={3} className={styles["filterFormText"]}>
                        目的地/酒店名称
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control type="text" placeholder="多伦多" className={styles["filterFormPlaceholder"]} />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="checkinDate">
                      <Form.Label column sm={3} className={styles["filterFormText"]}>
                        入住日期
                      </Form.Label>
                      <Col sm={3}>
                        <Form.Control type="date" placeholder={`${y}+ "-" + ${m}+ "-" + ${d}`} className={styles["filterFormPlaceholder"]} />
                      </Col>
                      <Form.Label column sm={3} className={styles["filterFormText"]}>
                        退房日期
                      </Form.Label>
                      <Col sm={3}>
                        <Form.Control type="date" placeholder={`${y}+ "-" + ${m}+ "-" + ${d}`} className={styles["filterFormPlaceholder"]} />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formGridState">
                      <Form.Label column sm={3} className={styles["filterFormText"]}>
                        房间数
                      </Form.Label>
                      <Col sm={3}>
                        <Form.Select defaultValue="Choose..." className={styles["filterFormPlaceholder"]}>
                          <option>1间</option>
                          <option>...</option>
                        </Form.Select>
                      </Col>
                      <Form.Label column sm={3} className={styles["filterFormText"]}>
                        住客数
                      </Form.Label>
                      <Col sm={3}>
                        <Form.Select defaultValue="Choose..." className={styles["filterFormPlaceholder"]}>
                          <option>1成人</option>
                          <option>...</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formGridState">
                      <Form.Label column sm={3} className={styles["filterFormText"]}>
                        关键词（选填）
                      </Form.Label>
                      <Col column sm={9}>
                        <Form.Control type="text" placeholder="机场、火车站、酒店名称或区域" className={styles["filterFormPlaceholder"]} />
                      </Col>
                    </Form.Group>

                    <Row>
                      <Col sm={8}></Col>
                      <Col sm={4} style={{ padding: "0", alignContent: "end" }}>
                        <Button variant="primary" type="submit" style={{ marginTop: "1rem", paddingLeft: "3rem", paddingRight: "3rem", backgroundColor: "orange", borderColor: "orange" }}>
                          搜索
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Tab>
              </Tabs>
            </Tab.Pane>
            {/* Flight */}
            <Tab.Pane eventKey="flight">
              <Tabs defaultActiveKey="allFlight" id="allFlight-tab" className="mb-3">
                <Tab eventKey="allFlight" title="国内/国际机票">
                  <Form>

                    <Row>
                      <Col sm={2}></Col>
                      <Col sm={10} className="mb-3">
                        <Form.Check
                          inline
                          label="单程"
                          name="oneWay"
                          type="radio"
                          id="oneWayFlight"
                          className={styles["filterFormText"]}
                        />
                        <Form.Check
                          inline
                          label="往返"
                          name="round"
                          type="radio"
                          id="roudnFlight"
                          className={styles["filterFormText"]}
                        />
                        <Form.Check
                          inline
                          label="多程"
                          name="multiple"
                          type="radio"
                          id="multipleFlight"
                          className={styles["filterFormText"]}
                        />
                      </Col>
                    </Row>

                    <Form.Group as={Row} className="mb-3" controlId="formGridState">
                      <Form.Label column sm={2} className={styles["filterFormText"]}>
                        出发地
                      </Form.Label>
                      <Col sm={4}>
                        <Form.Control type="email" placeholder="成都" className={styles["filterFormPlaceholder"]} />
                      </Col>
                      <Form.Label column sm={2} className={styles["filterFormText"]}>
                        目的地
                      </Form.Label>
                      <Col sm={4}>
                        <Form.Control type="email" placeholder="多伦多" className={styles["filterFormPlaceholder"]} />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="checkinDate">
                      <Form.Label column sm={2} className={styles["filterFormText"]}>
                        出发日期
                      </Form.Label>
                      <Col sm={4}>
                        <Form.Control type="date" placeholder={`${y}+ "-" + ${m}+ "-" + ${d}`} className={styles["filterFormPlaceholder"]} />
                      </Col>
                      <Form.Label column sm={2} className={styles["filterFormText"]}>
                        返回日期
                      </Form.Label>
                      <Col sm={4}>
                        <Form.Control type="date" placeholder="添加返回日期" className={styles["filterFormPlaceholder"]} />
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="checkinDate">
                      <Form.Label column sm={2} className={styles["filterFormText"]}>
                        乘客类型
                      </Form.Label>
                      <Col sm={4} style={{ paddingTop: "6px", paddingBottom: "6px"}}>
                        <Form.Check
                          inline
                          label="带儿童"
                          name="kid"
                          type="checkbox"
                          id="kid"
                          className={styles["filterFormText"]}
                        />
                        <Form.Check
                          inline
                          label="带婴儿"
                          name="infant"
                          type="checkbox"
                          id="infant"
                          className={styles["filterFormText"]}
                        />
                      </Col>
                      <Col sm={2} />
                      <Col sm={4}>
                        <Form.Select defaultValue="Choose..." className={styles["filterFormPlaceholder"]}>
                          <option>不限舱等</option>
                          <option>经济舱</option>
                          <option>头等/公务舱</option>
                        </Form.Select>
                      </Col>
                    </Form.Group>
                  </Form>
                </Tab>
              </Tabs>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  </>
}