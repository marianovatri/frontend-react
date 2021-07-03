

import {
   Navbar, Form,Button, Nav, NavDropdown, FormControl
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {connect} from "react-redux"




function Navigation (props) {

  function search () {

   props.dispatch({type : "SEARCH_POSTS"})
  }


    return (
        
        <>

       


        <Navbar className="mb-3" bg="dark" variant="ligth" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">

      <Link className="nav-link" to="/home">Home</Link>
      <Link className="nav-link" to="/contacto">Contacto</Link>
      <Link className="nav-link" to="/detalle/23456789">Contacto</Link>

      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success" onClick={search}>Search</Button>
    </Form>
  </Navbar.Collapse>
        </Navbar>
       

        </>
    )
}


function mapSlateToProps() {
  return {
    title : state.appName
  }

}

export default connect(mapStateToProps) (Navigation)