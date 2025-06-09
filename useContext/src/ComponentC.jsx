import ComponentD from "./ComponentD";

function ComponentC(props){
    return(
        <div className="box">
            <h1>Component C</h1>
            <ComponentD user={props.user}/>
        </div>
    );
}

export default ComponentC