import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { useHistory } from "react-router-dom";
import Project from './components/ProjTemp';
import AboutMe from './components/AboutMe';
// import AlertDismissible from
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Nav, 
  Navbar, 
  NavDropdown, 
  Form,
  Button
} from 'react-bootstrap'


function App() {
  let history = useHistory();
  const [searchValue, setSearchValue] = React.useState();
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
      description:"Tempor irure officia esse proident pariatur in. Non sint amet do mollit ullamco amet ut. Voluptate laboris excepteur sunt et dolor eu aliqua cillum ad pariatur elit duis deserunt laborum.",
      path:"/about"
    },
  ];
  const projects = paths.filter(proj => proj.path !== "/about");


  const searchSubmit = () => {
    switch (searchValue) 
    {
      case "about": 
        return history.push(paths[3].path);
      case "3d":
        return history.push(paths[0].path);
      case "brains":
        return history.push(paths[1].path);
      case "kodi":
        return history.push(paths[2].path);
      // default:
      //   throw AlertDismissible();
      default:
        throw Error;
    };
  }


  return (
    <div>

    {/* //////////////////////////////////////////////////////////////////// */}
      {/* Navigation */}
    {/* //////////////////////////////////////////////////////////////////// */}

      <Router>
        <Navbar bg="info" expand="sm" sticky="top" >
          <Navbar.Brand href="/" bg="success">Toms portfolio</Navbar.Brand>
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
            >
              <NavDropdown title="My paths :)" id="small-print" >
                {
                  paths.map((element, index) => {
                    if (element.path === "/about") {
                      return (
                        <div className="p-0"> 
                          <NavDropdown.Divider />
                          <Nav.Link as={Link} className="m-0 p-0 pl-3" id="dropdownItemAbout" key={index} to={element.path}>{element.label}</Nav.Link>
                        </div>
                      );
                    } else {
                      return <Nav.Link as={Link} className="pl-3" id="dropdownItem" key={index} to={element.path}>{element.label}</Nav.Link>  
                    }
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

    {/* //////////////////////////////////////////////////////////////////// */}
      {/* Route Change */}
    {/* //////////////////////////////////////////////////////////////////// */}
      
        <Switch>
          {
            projects.map((element) => {
              return (
              <Route path={element.path}>
                <Project 
                  label={element.title}  
                  description={element.description} 
                  imagePath={element.imagePath} 
                />
              </Route>
              )
            })
          }
          <Route path="/about">
            <AboutMe label={paths[3].label} description={paths[3].description} />
          </Route>
        </Switch>
      </Router>
      
      {/* Item/blog */}

      {/* <AlertDismissible show='show' setShow='setShow'/> */}

      {/* Footer */}
    
    </div>
  );
}

export default App;