import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Project from './Components/ProjTemp';
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';
import Table from './Components/Table'
import Home from './Components/Home'
import Graphics from './Components/Graphics'
import paths from './Components/Paths'
import styled, { keyframes } from 'styled-components';
import { tada } from 'react-animations';
import { CSSTransition } from "react-transition-group";
import ParticlesBg from 'particles-bg'
import { Search } from 'react-bootstrap-icons';
// TODO: import AlertDismissible from 
import {
  Route,
  Link,
  useHistory,
  Redirect
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
  const [searchValue, setSearchValue] = useState("");

  // React.useEffect(() => {
  //   fetch("/users")
  //       .then(res=>{console.log(res); return res.json()})
  //       .then(data=>{console.log(data)})
  //   }, []);

  let projects = paths.filter((path, i) => i < 3);

  const searchSubmit = (event) => {
    let matchingElement = null;
    if (searchValue && searchValue.length > 1) {
      matchingElement = paths.find(element => {
        return element.label.toLowerCase().includes(searchValue.toLowerCase());
      })
    }
    matchingElement ? history.push(matchingElement.path) : event.preventDefault();
  }

  function DropdownList() {
    var items = [];
    for (let i = 4; i > 0; i--) {
      items.push(<Nav.Link key={i} as={Link} className="p-1 pl-0 m-auto" to={paths[paths.length - i].path}>{paths[paths.length - i].label}</Nav.Link>)
    }
    return <div>{items}</div>
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
          <Navbar.Brand as={Link} to={paths[3].path} bg="success" id="navigation-brand">
            <BrandName> Tom's Portfolio </BrandName>
          </Navbar.Brand>
          <Navbar.Toggle className="px-2" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="pr-3" style={{ maxHeight: '100px' }}>
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
                  <DropdownList/>
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
                        path={element.path}
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
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/graphics">
          <Graphics />
        </Route>
        <Route path="/status">
          <Table label={paths[paths.length - 3].label} />
        </Route>
        <Route path="/about">
          <AboutMe label={paths[paths.length - 2].label} />
        </Route>
        <Route path="/contact">
          <ContactMe label={paths[paths.length - 1].label} />
        </Route>
        <Route exact path="/" render={() => (
          <Redirect to="/proj1" />
        )} />

      </Container>

      {/* <AlertDismissible show='show' setShow='setShow'/> */}

      {/* Footer */}

      {/* BG */}

      <ParticlesBg type="circle" bg={{ position: "fixed", zIndex: -1, top: 0, left: 0 }} />
    </div>
  );
}

export default App;