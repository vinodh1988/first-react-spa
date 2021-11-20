//import React from 'react';

type boxitem={
    title:string;
    data:string;
}

const Box=({title,data}: boxitem)=>{
    return(
    <div className="box">
        <h1>{title}</h1>
        <hr/>
        {data}
    </div>
        
    )
}

export default Box;
