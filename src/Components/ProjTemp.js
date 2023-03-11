import { Card, Col, Container } from "react-bootstrap";
import video from "../Images/weather-demo.mov";

const Project = (props) => {
  function Content() {
    switch (props.path) {
      case "/proj1":
        return (
          <div>
            <p className="mx-4 my-2 mt-3">
              This is my first use of 3D software, i have had experience with
              adobe illustrator and photoshop through a Graphic Design course i
              took at college, but they were 2D. I have yet to play more with
              animation and 3D modelling, but at the moment i'm focusing on
              broadening my skill set to find what i enjoy and thrive at. But
              here is that first attempt at 3D 'modelling' using three.js
              library.
            </p>
            <iframe
              title="hola"
              className="p-3"
              src="https://codesandbox.io/embed/threejs-m7f77?fontsize=14&codemirror=1&hidenavigation=1&theme=dark&view=preview&hidedevtools=1"
              style={{
                width: "100%",
                height: "500px",
                border: "0",
                borderRadius: "4px",
                overflow: "hidden",
              }}
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
          </div>
        );
      case "/proj2":
        return (
          <div>
            <p className="mx-4 my-2 mt-3">
              This is a simulation to replicate the behaviour of flocks of
              birds. It follows three rules; separation, alignment, cohesion.
              Separation - each bird attempts to maintain even spacing among its
              neighbouring birds. Alignment - each bird tries to gradually
              follow the same vector as neighbouring birds. Cohesion - each bird
              ties to move towards the average position of other neighbouring
              birds (countering separation to create an average position).
            </p>
          </div>
        );
      case "/proj3":
        return (
          <div>
            <p className="mx-4 my-2 mt-3">
              This is a TV show recommendation service that I made for my home
              media centre, that is triggered by an Alexa skill. This uses a
              relational database schema. It logs all watched items (Live TV and
              locally installed), and recommends the next thing to watch
              according to what you’ve viewed previously.
            </p>
          </div>
        );
      case "/proj4":
        return (
          <div>
            <Card.Img
              style={{ padding: "1.2rem", width: "20vw", float: "right" }}
              src={props.imagePath[0]}
              rounded="true"
            />
            <p className="mx-4 my-2 mt-3" style={{ overflow: "auto" }}></p>
            <Card.Img
              style={{ padding: "1.2rem", "padding-bottom": 0 }}
              src={props.imagePath[1]}
              rounded="true"
            />
            <p
              className="mx-4 mb-2"
              style={{ opacity: "0.5", "font-size": "0.8em" }}
            >
              This app was not deployed
            </p>
          </div>
        );
      case "/proj5":
        return (
          <div className="mx-4 my-2 mt-3">
            <p> Weather </p>
            <video
              style={{ float: "right" }}
              src={video}
              className="video"
              controls="controls"
              autoplay="true"
              resizeMode={"contain"}
            />
            <p>
              A website for fetching weather forecast by week, hour and day.
            </p>
            <a href="https://github.com/fac27/Weather-TM">
              github.com/fac27/Weather-TM
            </a>
          </div>
        );
      case "/proj6":
        return (
          <div className="mx-4 my-2 mt-3">
            <p>
              IN DEVELOPEMENT! This is a simple messaging app. IN DEVELOPMENT!
            </p>
          </div>
        );
      case "/proj7":
        return (
          <div className="mx-4 my-2 mt-3">
            <p style={{ fontWeight: "italic" }}>
              Automates bets using a friends 'laying system' web scraping tips
              and then making the respective bets.
            </p>
            <p>
              {" "}
              Node.js, headless server + headless browser, Docker, Cypress, PM2
            </p>
          </div>
        );
      default:
    }
  }

  return (
    <Container className="pt-3 mx-a">
      <Col>
        <Card className="shadow-lg">
          <Card.Header>
            <Card.Title style={{ padding: "1rem" }}> {props.label} </Card.Title>
            <Card.Text>{props.description}</Card.Text>
          </Card.Header>
          <Content />
        </Card>
      </Col>
    </Container>
  );
};

export default Project;
