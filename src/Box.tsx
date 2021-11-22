//import React from 'react';

type boxitem={
    title:string;
    data:string;
    theme:string;
}

const Box=({title,data,theme}: boxitem)=>{
    return(
    <div className={theme}>
      <h1>{title}</h1>
        <hr/>
        {data}
    </div>
        
    )
}

export default Box;
