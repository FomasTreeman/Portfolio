import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import emailjs from "emailjs-com";

function ContactMe() {
    const [MessageValue, setMessageValue] = useState("");
    const [EmailValue, setEmailValue] = useState("");
    const [show, setShow] = useState(false);
    const [sent, setSent] = useState(false);
    var templateParams = {
        message: MessageValue,
        user_email: EmailValue
    };

    function SubmitAlert(props) {
        let vari = "";
        let mess = "";
        props.isSent === false ? vari = "danger" : vari = "success";
        vari === "danger" ? mess = "not sent :(" : mess = "sent!"
        if (sent && show) {
            return (
                <Alert variant={vari} onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Email {mess}</Alert.Heading>
                </Alert>
            );
        }
        return <Button
            variant="primary"
            type="submit"
            onClick={() => setShow(true)}>
            Submit
        </Button>;
    }

    function emailMe(event) {
        event.preventDefault();
        if (MessageValue !== "" && EmailValue !== "") {
            emailjs.send('service_qbfomcj', 'template_ivzdenr', templateParams, 'user_6vE5pYNvceEKBSm3mQVi5').then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setSent(true);
                }, (err) => {
                    console.log('FAILED...', err);
                })
        } else {
            console.log("no message or email");
            setSent(false)
        }
    }

    return (
        <Container className="p-4">
            <Card>
                <Form className="p-4" onSubmit={emailMe}>
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
                    <SubmitAlert isSent={sent} />
                </Form>
            </Card>
        </Container>
    )

}

export default ContactMe;