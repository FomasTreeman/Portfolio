import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Project from './components/ProjTemp';
import AboutMe from './components/AboutMe';
// import AlertDismissible from
import {
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import {
  Nav, 
  Navbar, 
  NavDropdown, 
  Form,
  Button
} from 'react-bootstrap'


function App() {
  const history = useHistory();
  const [searchValue, setSearchValue] = React.useState("");
  const paths = [
    {
      label:"3D Project", 
      title:"My three.js experiment", 
      description:"My Three.js project", 
      imagePath:"/image.png", 
      path:"/proj1"
    },
    {
      label:"Smart Brains Udemy course project",
      title:"Face Recognition App", 
      description:"My udemy course project", 
      imagePath:"/image1.png", 
      path:"/proj2"},
    {
      label:"Kodi Project", 
      title:"Kodi experiment", 
      description:"My kodi project", 
      imagePath:"/image2.jpeg", 
      path:"/proj3"},
    {
      label:"About me", 
      path:"/about"
    },
  ];
  const projects = paths.filter(proj => proj.path !== "/about");


  const searchSubmit = (event) => {
    let matchingElement = null;
    if (searchValue && searchValue.length > 1) {
        matchingElement = paths.find(element => {
        return element.label.toLowerCase().includes(searchValue.toLowerCase());
      })
    }
    matchingElement ? history.push(matchingElement.path) : event.preventDefault();
  }


  return (
    <div>

    {/* //////////////////////////////////////////////////////////////////// */}
      {/* Navigation */}
    {/* //////////////////////////////////////////////////////////////////// */}

        <Navbar bg="info" expand="sm" sticky="top" >
          <Navbar.Brand href="/" bg="success" className="text-warning" >Toms portfolio</Navbar.Brand>
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
            >
              <NavDropdown title="My projects :)" id="small-print" className="mt-2" >
                {
                  paths.map((element, index) => {
                    if (element.path === "/about") {
                      return (
                        <div key="-1" className="p-0"> 
                          <NavDropdown.Divider />
                          <Nav.Link as={Link} className="m-0 p-0 pl-3" id="dropdownItemAbout" to={element.path}>{element.label}</Nav.Link>
                        </div>
                      );
                    } else {
                      return <Nav.Link key={index} as={Link} className="pl-3" id="dropdownItem" to={element.path}>{element.label}</Nav.Link>  
                    }
                  })

                }
              </NavDropdown>
            </Nav>
            <Form className="d-flex" id="small-print" onSubmit={searchSubmit} >
              <Form.Control
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                value={searchValue}
                onChange={({target:{value}}) => {setSearchValue(value);}}
              />
              <Button type="submit" variant="outline-warning">Search</Button>
            </Form>
        </Navbar>

    {/* //////////////////////////////////////////////////////////////////// */}
      {/* Route Change */}
    {/* //////////////////////////////////////////////////////////////////// */}
      
        <Switch>
          {
            projects.map((element) => {
              return (
                <Route key={element.path} path={element.path}>
                  <Project key={element.path}
                    label={element.title}  
                    description={element.description} 
                    imagePath={element.imagePath} 
                  />
                </Route>
              )
            })
          }
          <Route path="/about">
            <AboutMe label={paths[3].label}/>
          </Route>
        </Switch>
      
      {/* Item/blog */}

      {/* <AlertDismissible show='show' setShow='setShow'/> */}

      {/* Footer */}
    
    </div>
  );
}

export default App;