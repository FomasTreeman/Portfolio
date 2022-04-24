import { useState } from "react"
import { Search } from 'react-bootstrap-icons';
import {
    Container,
    Nav,
    Navbar,
    NavDropdown,
    Form,
    Button,
} from 'react-bootstrap'
import {
    useHistory,
    Link
} from 'react-router-dom';


function NavigationBar(props) {
    const history = useHistory();
    const [searchValue, setSearchValue] = useState("");
    
    let paths = props.paths;
    let projects = props.projects;

    function DropdownList() {
        var items = [];
        for (let i = 5; i > 0; i--) {
            items.push(<Nav.Link key={i} as={Link} className="p-1 pl-0 m-auto" to={paths[paths.length - i].path}>{paths[paths.length - i].label}</Nav.Link>)
        }
        return <div>{items}</div>
    }

    const searchSubmit = (event) => {
        let matchingElement = null;
        if (searchValue && searchValue.length > 1) {
            matchingElement = paths.find(element => {
                return element.label.toLowerCase().includes(searchValue.toLowerCase());
            })
        }
        matchingElement ? history.push(matchingElement.path) : event.preventDefault();
    }


    return (
        <Navbar id="navigation" className="justify-content-center p-2" expand="always" sticky="top" >
            <Container fluid className="justify-content-center">
                <Navbar.Toggle className="px-2" id="toggler">
                    Thomas Freeman
                </Navbar.Toggle>
                <Navbar.Collapse className="justify-content-center">
                    <Nav className="pr-3" style={{ maxHeight: '100px' }}>
                        <NavDropdown title="My projects " id="small-print" align="end">
                            {
                                projects.map((element, index) => {
                                    return (
                                        <Nav.Link
                                            key={index}
                                            as={Link}
                                            className="px-3"
                                            id="dropdownItem"
                                            to={element.path}
                                        >
                                            {element.label}
                                        </Nav.Link>
                                    )
                                })
                            }
                            <div key="-1" className="m-0 p-0 pl-3">
                                <NavDropdown.Divider />
                                <DropdownList />
                            </div>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex" id="small-print" onSubmit={searchSubmit} >
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                            value={searchValue}
                            onChange={({ target: { value } }) => { setSearchValue(value); }}
                        />
                        <Button type="submit" variant="outline-secondary">
                            <Search />
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar