import { useEffect, useState } from "react";
import PubSub from 'pubsub-js';

const Isolated=({data}:any)=>{
    useEffect(()=>{
        PubSub.subscribe("message-generated",(msg,data)=>{
            console.log( msg, data );
            setMessage(data)
        })
    })
    const [message,setMessage]=useState(data)
    
    return(
        <div className="alert alert-light">
                    {message}
        </div>
    )
}

export default Isolated;