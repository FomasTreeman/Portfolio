import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Project from './Components/ProjTemp';
import AboutMe from './Components/AboutMe';
import styled, { keyframes } from 'styled-components';
import { tada } from 'react-animations';
import { CSSTransition } from "react-transition-group";
import Table from './Components/Table'
// TODO: import AlertDismissible from 
import {
  Route,
  Link,
  useHistory
} from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button
} from 'react-bootstrap'


  /** 
  * ?  Animation}
  * ! FIXME``s:
  */

const tadaAnimation = keyframes`${tada}`;

  // function call using `` instead of $()
let BrandName = styled.p`
  animation: 1s ${tadaAnimation};
  animation-iteration-count: infinite;
  margin: 0;
  `;


/** ////////////////////////////////////
 * ! COMPONENT
 */////////////////////////////////////
  
function App() {
  const history = useHistory();
  const [searchValue, setSearchValue] = React.useState("");
  const paths = [
    {
      label: "3D Project",
      title: "My three.js experiment",
      description: "My Three.js project",
      imagePath: "/image.png",
      path: "/proj1"
    },
    {
      label: "Smart Brains Udemy course project",
      title: "Face Recognition App",
      description: "My udemy course project",
      imagePath: "/image1.png",
      path: "/proj2"
    },
    {
      label: "Kodi Project",
      title: "Kodi experiment",
      description: "My kodi project",
      imagePath: "/image2.jpeg",
      path: "/proj3"
    },
    {
      label: "Project status",
      path: "/status"
    },
    {
      label: "About me",
      path: "/about"
    },
  ];

  React.useEffect(() => {
    fetch("/users")
        .then(res=>{console.log(res); return res.json()})
        .then(data=>{console.log(data)})
    }, []);

  // let projects = paths.filter(element => element.path !== "/about" || element.path !== "/status");

  let projects = paths.filter(element => element.path !== "/about");
  projects = projects.filter(element => element.path !== "/status");

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

      {
        /** 
        * !  Navigation}
        */
      }

      <Navbar bg="info" expand="sm" sticky="top" >
        <Navbar.Brand href="/" bg="success" >
          <BrandName> Tom's Portfolio </BrandName>
        </Navbar.Brand>
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
        >
          <NavDropdown title="My projects :)" id="small-print" className="mt-2" >
            {
              projects.map((element, index) => {
                return (
                  <Nav.Link 
                    key={index} 
                    as={Link} 
                    className="pl-3" 
                    id="dropdownItem" 
                    to={element.path}>{element.label}
                  </Nav.Link>
                )
              })
            }

            <div key="-1" className="m-0 p-0 pl-3">
              <NavDropdown.Divider />
              <Nav.Link as={Link} id="dropdownItemAbout" to={paths[paths.length - 2].path}>{paths[paths.length - 2].label}</Nav.Link>
              <Nav.Link as={Link} id="dropdownItemAbout" to={paths[paths.length - 1].path}>{paths[paths.length - 1].label}</Nav.Link>
            </div>
          </NavDropdown>
        </Nav>
        <Form className="d-flex" id="small-print" onSubmit={searchSubmit} >
          <Form.Control
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
            value={searchValue}
            onChange={({ target: { value } }) => { setSearchValue(value); }}
          />
          <Button type="submit" variant="outline-secondary">Search</Button>
        </Form>
      </Navbar>

      {
        /** 
        * !  Route Change}
        */
      }

      {/* was <Switch> switch prevents an exit animation as it changes th eurl before exiting stage */}
      <Container className="container">
        {
          projects.map((element) => {
            return (
              <Route key={element.path} path={element.path}>
                {/* needs explaining */}
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    // {/* needs explaining */}
                    unmountOnExit
                  >
                    <div className="projCard">
                      <Project 
                        key={element.path}
                        label={element.title}
                        description={element.description}
                        imagePath={element.imagePath}
                      />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            )
          })
        }
        <Route path="/status">
          <Table label={paths[paths.length - 2].label} />
        </Route>
        <Route path="/about">
          <AboutMe label={paths[paths.length - 1].label} />
        </Route>
      </Container>

      {/* Item/blog */}

      {/* <AlertDismissible show='show' setShow='setShow'/> */}

      {/* Footer */}

    </div>
  );
}

export default App;