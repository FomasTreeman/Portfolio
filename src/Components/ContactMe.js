import { Container, Card, Form, Button } from "react-bootstrap";
import { useState } from "react";

function ContactMe() {

    const [MessageValue, setMessageValue] = useState("");
    const [EmailValue, setEmailValue] = useState("");

    const reply = (event) => {
        // let email = event.target[0].value;
        // let message = event.target[1].value;

    }

    return (
        <Container className="p-4">
            <Card>
                <Form className="p-4" onSubmit={reply}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={EmailValue}
                            onChange={({ target: { value } }) => { setEmailValue(value); }}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Type here.."
                            value={MessageValue}
                            onChange={({ target: { value } }) => { setMessageValue(value); }}
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
        </Container>
    )

}

export default ContactMe;