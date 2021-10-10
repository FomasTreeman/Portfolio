import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Project from './Components/ProjTemp';
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';
import Table from './Components/Table'
import Home from './Components/Home'
import styled, { keyframes } from 'styled-components';
import { tada } from 'react-animations';
import { CSSTransition } from "react-transition-group";
import ParticlesBg from 'particles-bg'
import { Search } from 'react-bootstrap-icons';
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


/** ////////////////////////////////////
* ?  Animation}
 */////////////////////////////////////

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
      label: "Smart Brains Udemy",
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
    {
      label: "Contact me",
      path: "/contact"
    }
  ];

  // React.useEffect(() => {
  //   fetch("/users")
  //       .then(res=>{console.log(res); return res.json()})
  //       .then(data=>{console.log(data)})
  //   }, []);

  let projects = paths.filter((path, i) => { return isProject(path, i) });

  function isProject(path, index) {
    if (index < 3) {
      return path
    }
  };

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
        /** ////////////////////////////////////
        * !  Navigation}
        */////////////////////////////////////
      }

      <Navbar id="navigation" className="justify-content-center" bg="info" expand="sm" sticky="top" >
        <Container fluid className="pr-0">
          <Navbar.Brand href="/Home" bg="success" id="navigation-brand">
            <BrandName> Tom's Portfolio </BrandName>
          </Navbar.Brand>
          <Navbar.Toggle className="px-2"/>
          <Navbar.Collapse className="justify-content-end">
            <Nav
              className="pr-3"
              style={{ maxHeight: '100px' }}
            >
              <NavDropdown title="My projects " id="small-print" align="end">
                {
                  projects.map((element, index) => {
                    return (
                      <Nav.Link
                        key={index}
                        as={Link}
                        className="px-3"
                        id="dropdownItem"
                        to={element.path}
                      >
                        {element.label}
                      </Nav.Link>
                    )
                  })
                }

                <div key="-1" className="m-0 p-0 pl-3">
                  <NavDropdown.Divider />
                  <Nav.Link as={Link} id="dropdownItemAbout" to={paths[paths.length - 3].path}>{paths[paths.length - 3].label}</Nav.Link>
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
              <Button type="submit" variant="outline-secondary">
                <Search />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      {
        /** ////////////////////////////////////
        * !  Route Change}
        */////////////////////////////////////
      }

      {/* was <Switch> switch prevents an exit animation as it changes the url before exiting stage */}
      <Container>
        <Route path="/Home">
          <Home />
        </Route>
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
          <Table label={paths[paths.length - 3].label} />
        </Route>
        <Route path="/about">
          <AboutMe label={paths[paths.length - 2].label} />
        </Route>
        <Route path="/contact">
          <ContactMe label={paths[paths.length - 1].label} />
        </Route>
      </Container>

      {/* <AlertDismissible show='show' setShow='setShow'/> */}

      {/* Footer */}

      {/* BG */}

      <ParticlesBg type="circle" bg={true} />
    </div>
  );
}

export default App;