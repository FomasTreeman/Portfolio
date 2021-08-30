import {
  Nav, 
  Navbar, 
  NavDropdown, 
  Form,
  Button
} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import AboutMe from './Components/AboutMe';
import Project1 from './Components/Project1'
import Project2 from './Components/Project2'
import React from 'react';
import { useHistory } from "react-router-dom";

function App() {
  let history = useHistory();
  const [searchValue, setSearchValue] = React.useState("xxx");
  const paths = [
    {label:"3D Project", path:"/proj1"},
    {label:"Smart Brains Udemy course project", path:"/proj2"},
    {label:"About me", path:"/about"},
  ];

  const searchSubmit = (event) => {
    
    if (searchValue <= 3) {
      return history.push(paths[searchValue-1].path);
    }
    event.preventDefault();
  };


  // const searchOnChange = (event) => {
  //   console.log(event.target.value);
  //   setSearchValue(event.target.value);
  // };

  // const searchOnChange = ({target}) => {
  //   console.log(target.value);
  //   setSearchValue(target.value);
  // };

  const searchOnChange = ({target:{value}}) => {
    console.log(value);
    setSearchValue(value);
  };

  return (
    <div>
      
      {/* Navigation */}
      <Router>
        <Navbar bg="info" expand="lg" sticky="top" >
          <Navbar.Brand href="/" bg="success">Toms portfolio</Navbar.Brand>
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
            >
              <NavDropdown title="My projects :)" id="small-print" >
              {
                paths.map((element, index) => {
                  return <NavDropdown.Item key={index} href={element.path}>{element.label}</NavDropdown.Item>
                })
              }
             </NavDropdown>
            </Nav>
            <Form className="d-flex" id="small-print" onSubmit={searchSubmit}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                value={searchValue}
                onChange={({target:{value}}) => {setSearchValue(value);}}
              />
              <Button type="submit" variant="outline-dark">Search</Button>
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