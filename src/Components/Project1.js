import { Card, Col, Container, Row } from "react-bootstrap";

function Project1 () {
    return(
        <Container className="p-lg-5 p-sm-1"> 
        
        <Row>
            <Col   id="project-block">
                <Card>
                <Card.Header>
                    <Card.Title style={{padding:"1rem"}}>three.js experiment</Card.Title>
                    <Card.Text>
                    My Three.js project
                    </Card.Text>
                </Card.Header>
                <Card.Img 
                    style={{padding:"1.5rem"}} 
                    src="/image.png" 
                    rounded="true" />
                </Card>
            </Col>
        </Row>
        </Container>
    )
}

export default Project1;

