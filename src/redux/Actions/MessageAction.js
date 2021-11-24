export const messageAction=()=>{
    let messages=[
        "React JS is super fun",
        "React JS has Class Components",
        "React Hooks makes life easy",
        "Event handling can be done using action",
        "CSS is good for the look and feel"
    ]
     let message=messages[Math.round(Math.random()*4)]
     console.log("Running")
     console.log(message)
    return {
        type: 'MESSAGE_ACTION',
        data: message
    }
}