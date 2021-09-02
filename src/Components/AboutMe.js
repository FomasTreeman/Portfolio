import { Button, Modal, Row, Container } from "react-bootstrap";
import  {useState, useEffect } from 'react';

function AboutMe (props) {
    const [response, setResponse] = useState();
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetch("https://api.nomics.com/v1/currencies/ticker?key=7d5c5259f3e27e6e749ca9a2af23388fb95c8961&ids=BTC&interval=1d&convert=GBP")
            .then(res=>{return res.json()})
            .then(data=>{return setResponse(data[0].price)})
    }, [])
        

    return (
        <Container id="small-print">   
            <Row className="p-5 d-flex justify-content-center" >
                <h2 > {props.label} </h2>
            </Row>
            <Row className="d-flex justify-content-center">
                <Button onClick={handleShow} > Want to see BTC {"->"} GBP prices? </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>BTC to GBP Price</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex justify-content-center p-4 " >{response}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Row>
        </Container>    
    );
}

export default AboutMe;