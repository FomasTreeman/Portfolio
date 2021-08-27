import {
  Nav, 
  Navbar, 
  NavDropdown, 
  Form, 
  FormControl, 
  Button
} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import AboutMe from './Components/AboutMe';
import Project1 from './Components/Project1'
import Project2 from './Components/Project2'


function App() {

  const search = (event) => {
    const form = event.currentTarget;
    form.preventDefault();
    console.log("bla");
  };

  return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Concert+One&family=Josefin+Slab:ital@1&family=Zilla+Slab&display=swap');
      </style>

      {/* Navigation */}
      <Router>
        <Navbar bg="info" expand="lg" sticky="top" >
          <Navbar.Brand href="#" bg="success">Toms portfolio</Navbar.Brand>
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
            >
              <NavDropdown title="My projects :)" id="small-print" >
                <NavDropdown.Item>
                  <Nav.Link as={Link}  to="/proj1"> 3D PROJECT </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link as={Link} to="/proj2"> Smart Brains Udemy course project </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Nav.Link as={Link} to="/about"> About me </Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex"  id="small-print">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button type="submit" onSubmit={search} variant="outline-dark">Search</Button>
            </Form>
        </Navbar>


      {/* Route Change */}
      
        <Switch>
          <Route path="/about">
            <AboutMe/>
          </Route>
          <Route path="/proj1">
            <Project1/>
          </Route>
          <Route path="/proj2">
            <Project2/>
          </Route>
        </Switch>
      </Router>
      
          
      {/* Item/blog */}
      <br></br>

      {/* <AlertDismissible show='show' setShow='setShow'/> */}

      {/* Footer */}
    
    </div>
  );
}

export default App;