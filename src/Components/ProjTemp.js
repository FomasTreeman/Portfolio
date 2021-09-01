import { Card, Col, Container} from "react-bootstrap";

const Project = (props) => {
        return(
            <Container className="p-lg-4 p-sm-3"> 
                <Col id="project-block">
                    <Card>
                        <Card.Header>
                            <Card.Title style={{padding:"1rem"}}> {props.label} </Card.Title>
                            <Card.Text>
                                {props.description}
                            </Card.Text>
                        </Card.Header>
                    <Card.Img 
                        style={{padding:"1.5rem"}} 
                        src={props.imagePath} 
                        rounded="true" />
                    </Card>
                </Col>
            </Container>
        );
    }
    
export default Project;

