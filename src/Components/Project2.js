import { Card, Col, Container } from "react-bootstrap";

function Project1 () {
    return(
        <Container> 
            <Col className="mt-5" md="auto" id="project-block">
                <Card>
                <Card.Header>
                    <Card.Title style={{padding:"1rem"}}>Kodi experiment</Card.Title>
                    <Card.Text>
                    My kodi project
                    </Card.Text>
                </Card.Header>
                <Card.Img 
                    style={{height:"30rem", padding:"1.5rem"}} 
                    src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" 
                    rounded="true" />
                </Card>
            </Col>
        </Container>
    )
}

export default Project1;

