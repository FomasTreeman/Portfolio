import { Card, Col, Container } from "react-bootstrap";
import { useState, useEffect } from 'react';

const Project = (props) => {
    const [Init, setInit] = useState();

    useEffect(() => {
        fetch("https://codesandbox.io/embed/new?codemirror=1",
            { mode: "no-cors" })
            .then(res => { setInit(res) })
    }, []);


    function CodeBox() {
        console.log(Init);
        if (Init !== undefined) {
            console.log(Init);

            return (
                <iframe
                    title="hola"
                    className="p-3"
                    src={Init}
                    style={{ width: "100%", height: "500px", border: "0", "border-radius": "4px", overflow: "hidden" }}
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            );
        } else {
            return <p> loading ... </p>
        }

    }

    return (
        <Container className="p-4 p-sm-3">
            <Col>
                <Card className="shadow-lg">
                    <Card.Header>
                        <Card.Title style={{ padding: "1rem" }}> {props.label} </Card.Title>
                        <Card.Text>
                            {props.description}
                        </Card.Text>
                    </Card.Header>
                    <p className="mx-4 my-2 mt-3">
                        Fugiat pariatur proident minim culpa elit ipsum veniam. Magna commodo id quis ipsum nostrud irure sunt. Aliquip pariatur Lorem qui tempor laborum consectetur do non velit cupidatat id anim nostrud ea. Mollit consequat do laborum incididunt anim non voluptate aute esse sint ad excepteur eiusmod pariatur.
                    </p>
                    <CodeBox />
                    <p className="mx-4 my-2 mt-3">
                        Est enim eiusmod velit duis aliquip officia velit dolor consequat aliquip excepteur excepteur amet dolore. Laboris duis incididunt id labore irure. Consequat nisi officia laboris dolore voluptate veniam ullamco adipisicing labore ut ullamco officia qui. Nisi incididunt pariatur velit reprehenderit labore culpa ut Lorem nisi duis nulla. Cillum proident voluptate ad Lorem sint dolor nostrud laborum et minim. Et enim commodo mollit adipisicing ullamco qui ullamco cupidatat consectetur est ullamco occaecat culpa. Lorem pariatur fugiat sint ad velit est dolore ullamco aliqua fugiat laboris adipisicing fugiat.
                    </p>
                    <Card.Img
                        style={{ padding: "1.5rem" }}
                        src={props.imagePath}
                        rounded="true" />
                </Card>
            </Col>
        </Container>
    );
}

export default Project;