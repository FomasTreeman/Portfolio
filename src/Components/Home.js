import { Container } from "react-bootstrap";
import paths from "./Paths";
import Project from "./ProjTemp";
// import Me from "./Me";

let projects = paths.filter((_, i) => i < paths.length - 5);

function Home() {
  return (
    <Container fluid className="justify-content-center">
      {/* <Me /> */}
      {projects.map((element) => {
        return (
          <Project
            key={element.path}
            path={element.path}
            label={element.title}
            description={element.description}
            imagePath={element.imagePath}
          />
        );
      })}
    </Container>
  );
}

export default Home;
