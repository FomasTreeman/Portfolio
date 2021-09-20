import { Card, Col, Container } from "react-bootstrap";
// import { flipInX, flipOutX } from 'react-animations';
// import { useState } from "react";

const Project = (props) => {
    
    // const flipInAnimation = keyframes`${flipInX}`;
    // const flipOutAnimation = keyframes`${flipOutX}`;
    
    // console.log(props.match);

    // // if (props.match =
    // const StyledCard = styled(Card)`
    //     animation: 1s ${flipInAnimation};
    //     `

    return(
            <Container className="p-lg-4 p-sm-3">  
                <Col>
                    <Card className="shadow-lg">
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

