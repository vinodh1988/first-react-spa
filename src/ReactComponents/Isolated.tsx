import { useEffect, useState } from "react";
import PubSub from 'pubsub-js';

const Isolated=()=>{
    useEffect(()=>{
        PubSub.subscribe("message-generated",(msg,data)=>{
            console.log( msg, data );
            setMessage(data)
        })
    })
    const [message,setMessage]=useState("Redux Message will be updated here too....!")
    
    return(
        <div className="alert alert-light">
                    {message}
        </div>
    )
}

export default Isolated;