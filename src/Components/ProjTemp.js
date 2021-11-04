import { Card, Col, Container } from "react-bootstrap";

const Project = (props) => {

    function Content() {
        switch (props.path) {
            case ("/proj1"):
                return (
                    <div>
                        <p className="mx-4 my-2 mt-3">
                            This is my first use of 3D software, i have had experience with adobe illustrator and photoshop through a Graphic Design course i took at college, but they were 2D. I have yet to play more with animation and 3D modelling, but at the moment i'm focusing on broadening my skill set to find what i enjoy and thrive at. But here is that first attempt at 3D 'modelling' using three.js library.
                        </p>
                        <iframe
                            title="hola"
                            className="p-3"
                            src="https://codesandbox.io/embed/threejs-m7f77?fontsize=14&codemirror=1&hidenavigation=1&theme=dark&view=preview&hidedevtools=1"
                            style={{ width: "100%", height: "500px", border: "0", "borderRadius": "4px", overflow: "hidden" }}
                            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                        ></iframe>
                    </div>
                )
            case ("/proj2"):
                return (
                    <div>
                        <Card.Img
                            style={{ padding: "1.2rem", width: "20vw", float: "right" }}
                            src={props.imagePath[0]}
                            rounded="true" />
                        <p className="mx-4 my-2 mt-3" style={{ overflow: "auto" }}>
                            This was a paid course through udemy by Andrei Neagoie a Zero To Mastery class for full stack developers. There were a few projects but the final "show-off" project was a web app that used a machine learning API that we used to recognise the location of a face in an image and outline it. This application also used a server to store users and their details. Therefore having a signin, register and logout feature. The skills I used and learned were PostgreSQL, React (therefore JS/ES, HTML, CSS) and express for the API we created for the user to signin and out etc.
                        </p>
                        <Card.Img
                            style={{ padding: "1.2rem", "padding-bottom": 0 }}
                            src={props.imagePath[1]}
                            rounded="true" />
                        <p className="mx-4 mb-2" style={{ opacity: "0.5", "font-size": "0.8em"}}>
                            This app was not deployed 
                        </p>
                    </div>
                );
            case ("/proj3"):
                return (
                    <div>
                        <p className="mx-4 my-2 mt-3">
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaazsxdcfgvhfdseazsxdcfvgbhjnkhgftdrtsezstxrdytcfuvgibuhijnomkpjnoihubgyvftcdrxsezxdrcftvgybhunijmokmjinbytvre4w3xecr7tvyb8unimominuby7tv6rce5xw4zx5ecrvt7bynumi
                        </p>
                    </div>
                )
            default:
        }
    }

    return (
        <Container className="pt-3">
            <Col>
                <Card className="shadow-lg">
                    <Card.Header>
                        <Card.Title style={{ padding: "1rem" }}> {props.label} </Card.Title>
                        <Card.Text>
                            {props.description}
                        </Card.Text>
                    </Card.Header>
                    <Content />
                </Card>
            </Col>
        </Container>
    );
}

export default Project;