import { Container } from "react-bootstrap";
import print from "../Images/Graphics/print.jpeg";

function Me() {
  return (
    <Container>
      <img
        style={{
          width: "25rem",
          height: "25rem",
          "border-radius": "50%",
        }}
        src={print}
        alt="self-portrait"
      ></img>
      <p style={{ display: "inline" }}>
        I am a peacekeeper who is calm and approachable. My background in
        construction has helped me hone skills in problem-solving,
        collaboration, and time management. I am bringing these skills into this
        role, which I find attractive due to its intellectually stimulating
        work. As a software developer, I relish the opportunity to create
        groundbreaking technologies that solve complex problems and improve
        people's lives. I am fascinated by the constantly evolving tech industry
        and thrive in fast-paced environments that challenges me to learn and
        apply new technologies. I look forward to sharing my unique perspective
        and learning from others as I embark on a successful and rewarding
        career in software development.
      </p>
    </Container>
  );
}

export default Me;
