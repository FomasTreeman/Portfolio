import { Button } from "react-bootstrap";
import React from 'react';

function AboutMe (props) {
    const [response, setResponse] = React.useState();

    fetch("https://api.nomics.com/v1/currencies/ticker?key=7d5c5259f3e27e6e749ca9a2af23388fb95c8961&ids=BTC&interval=1d&convert=GBP")
        .then(res=>{return res.json()})
        .then(data=>{return setResponse(data[0].price)})
        .then(response=>(console.log(response)))
    
    return ( 
        <div className="p-5" id="small-print">   
            <h2 className="p-3"> {props.label} </h2>
            <Button> Want to see BTC -> GBP prices? </Button>
            <h3> {response} </h3>
        </div>    
    );
}

export default AboutMe;