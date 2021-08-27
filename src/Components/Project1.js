import { Card, Col, Container } from "react-bootstrap";

function Project1 () {
    return(
        <Container> 
            <Col className="mt-5" md="auto" id="project-block">
                <Card>
                <Card.Header>
                    <Card.Title style={{padding:"1rem"}}>three.js experiment</Card.Title>
                    <Card.Text>
                    My Three.js project
                    </Card.Text>
                </Card.Header>
                <Card.Img 
                    style={{height:"30rem", padding:"1.5rem"}} 
                    src="https://bingvsdevportalprodgbl.blob.core.windows.net/demo-images/3b7d6ad7-ef4d-4a61-a881-a5948a2dfe47.jpeg" 
                    rounded="true" />
                </Card>
            </Col>
        </Container>
    )
}

export default Project1;

