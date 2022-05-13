import { Container, Dropdown, DropdownButton, Nav, Navbar, NavDropdown } from "react-bootstrap"
import React, { useEffect, useState } from "react"
import axios from "axios"
import styles from "./TopMenu.module.css"


export const TopMenu = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [topMenu, setTopMenu] = useState<any[]>([])

  useEffect(() => {
    axios.get('http://127.0.0.1:3001/api/topMenu')
      .then(res => {
        const data = res.data;
        setTopMenu(data);
        setLoading(false);
      })
  }, [])

  if (loading) {
    <div>loading</div>
    console.log(loading)
  }
  // else {
  //   console.log("type is: " + typeof topMenu)
  //   console.log("the first element is:" + topMenu[0])
  //   console.log("value is:" + topMenu)
  // }

  return <>
    <Navbar bg="primary" variant="dark" expand="lg" style={{ paddingTop: "4px", paddingBottom: "4px" }}>
      <Container >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse >
          <Nav className="me-auto">
            {
              topMenu.map((m) => (
                (m.subMenu.length === 0) ? (
                  <>
                    <Nav.Link key={`menu-${m.id}`} style={{ "paddingRight": "1rem", "paddingLeft": "1rem", "fontSize": "14px"}}>
                      {m.title}
                    </Nav.Link>
                    <div className="vr" style={{ "height": "8px", "width": "auto" }} />
                  </>
                ) : (
                  <>
                    <NavDropdown
                      title={m.title}
                      menuVariant="light"
                      className={styles["topMenuItem"]}
                      
                    >
                      {
                        m.subMenu.map((sm: any) => (
                          <NavDropdown.Item className={styles["topDropDownItem"]}>
                            {sm.title}
                          </NavDropdown.Item>

                        ))}
                    </NavDropdown>
                    <div className="vr" style={{ "height": "8px", "margin": "auto" }} />
                  </>
                )
              ))
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </>
}