import { Card, Col, Container, Table } from "react-bootstrap";
import  {useState, useEffect } from 'react';

const Project = (props) => {
    const [GitResponse, setGitResponse] = useState();
    let RepoNames = [];

    useEffect(() => {
    fetch("https://api.github.com/users/FomasTreeman/repos")
        .then(res=>{return res.json()})
        .then(data=>{setGitResponse(data)})
    }, []);


    function GetRepoDeets() {
        if (GitResponse !== undefined) {
            RepoNames = GitResponse.map(item => {
                return <tr key={item.name}><td>{item.name}</td><td>{item.pushed_at}</td><td>{item.url}S</td></tr>
            });
            return RepoNames;
        } else {
            return <tr><th> loading ... </th></tr>
        }

    }

    return(
            <Container className="p-lg-4 p-sm-3"> 
                <Col>
                    <Card className="shadow-lg">
                        <Card.Header>
                            <Card.Title style={{padding:"1rem"}}> {props.label} </Card.Title>
                        </Card.Header>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Repo Name</th>
                                <th>Last Updated</th>
                                <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <GetRepoDeets/>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Container>
        );
    }
    
export default Project;

