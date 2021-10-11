import { Card, Col, Container } from "react-bootstrap";

const Project = (props) => {

    function Content() {
        if (props.path === "/proj1") {
            return (
                <div>
                    <p className="mx-4 my-2 mt-3">
                        Fugiat pariatur proident minim culpa elit ipsum veniam. Magna commodo id quis ipsum nostrud irure sunt. Aliquip pariatur Lorem qui tempor laborum consectetur do non velit cupidatat id anim nostrud ea. Mollit consequat do laborum incididunt anim non voluptate aute esse sint ad excepteur eiusmod pariatur.
                    </p>
                    <iframe
                        title="hola"
                        className="p-3"
                        src="https://codesandbox.io/embed/practical-sara-wu2i9?fontsize=14&hidenavigation=1&theme=dark&view=preview&hidedevtools=1"
                        style={{ width: "100%", height: "500px", border: "0", "borderRadius": "4px", overflow: "hidden" }}
                        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    ></iframe>
                </div>
            )
        } else {
            console.log(props.path)
            return (
                <div>

                </div>
            );
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
                    <Content />
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