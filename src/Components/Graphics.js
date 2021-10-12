import { Container, Col, Row, Image } from "react-bootstrap";
import t from "../Images/Graphics/t.JPG"
import o from "../Images/Graphics/o.JPG"
import m from "../Images/Graphics/m.JPG"
import print from "../Images/Graphics/print.jpeg"
import col from "../Images/Graphics/col.JPG"
import rearrange from "../Images/Graphics/rarng.png"
import mira from "../Images/Graphics/mira.jpeg"

var tom = [t, o, m];
var otherImgs = [print, col, rearrange, mira]


// * why doesnt this work
// function Imgs(arrayI) {
//     arrayI.map((image) => {
//         return (
//             <Col>
//                 <Image style={{ "max-width": "500px" }} src={image} alt="image" thumbnail />
//             </Col>
//         )
//     })
// }


function Graphics() {

    return (
        <Container fluid >
            <Row className="p-3">
                {
                    tom.map((image, index) => {
                        return (
                            <Col key={index}>
                                <Image src={image} alt="image" thumbnail/>
                            </Col>
                        )
                    })
                }
            </Row>
            <Row className="p-3">
            {
                    otherImgs.map((image, index) => {
                        return (
                            <Col key={index}>
                                <Image src={image} alt="image" thumbnail />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>

    )
}

export default Graphics;