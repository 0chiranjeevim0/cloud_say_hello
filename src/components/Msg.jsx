import React from "react";



function Msg(props){




    return(
        <div className="mt-5">
            <h1 className="text-center text-xl capitalize">{`${props.name} says hello`}</h1>
        </div>
    )
};


export default Msg;