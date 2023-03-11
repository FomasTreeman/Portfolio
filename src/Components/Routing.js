import Project from "./ProjTemp";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Table from "./Table";
import Home from "./Home";
import Graphics from "./Graphics";
import { CSSTransition } from "react-transition-group";
import { Container } from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";

function Routing(props) {
  let paths = props.paths;
  let projects = props.projects;

  return (
    <Container>
      {/* was <Switch> switch prevents an exit animation as it changes the url before exiting stage */}
      {projects.map((element) => {
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
        );
      })}
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
      <Route exact path="/" render={() => <Redirect to="/proj1" />} />
    </Container>
  );
}

export default Routing;
