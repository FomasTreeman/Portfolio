function AboutMe (props) {
    return ( 
        <div className="p-5" id="small-print">   
            <h2 className="p-3"> {props.label} </h2>
            <h3> {props.description} </h3>
        </div>    
    );
}

export default AboutMe;