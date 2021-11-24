import axios from "axios"
import { useEffect, useState,useRef, MutableRefObject } from "react"
import Box from "./Box"

type Person={
    sno:number;
    name:string;
    city:string;
}
/*
const items:Person[]=[
    {sno:1,name:"Raj",city:"Chennai"},
    {sno:2,name:"Harry",city:"Mumbai"}
]
*/
const People=()=>{
    const person=useRef<HTMLInputElement>(null)
    function addPerson(){
     //let item=  person.current;
     let content=person.current?.value
     let result:any=content?.split(",")
     addPersonCall({sno:Number(result[0]),name:result[1],city:result[2]});
     person.current?.focus()
     
     //console.log(item)
    }
    async function peopleRead(){
          try{
              let response =
                await axios.get("http://localhost:8000/api/people")
                setPeopleData(response.data)
            }
          catch(e){
              setPeopleData([])
          }
    }

    async function addPersonCall(obj:Person){
        try{
          const response= await axios.post("http://localhost:8000/api/people",obj)
          peopleRead();
        }
        catch(e){
            alert("Not able to insert")
        }

    }
    useEffect(()=>{
         peopleRead()
    },[]
        
    )
        const [peopleData,setPeopleData] =useState([])
    return(
        <div>
        <div className="alert alert-info">
            Person Data <input type="text" ref={person}></input>
            <br/>
            <button onClick={addPerson} className="btn btn-dark">Add Person</button>
        </div>
        <table className="table">
                <thead>
                    <tr>
                    <th>Sno</th>
                    <th>Name</th>
                    <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        peopleData.map((x:Person)=>{
                        return(
                            <tr key={x.sno}>
                                <td>{x.sno}</td>
                                <td>{x.name}</td>
                                <td>{x.city}</td>
                            </tr>
                        )
                        })
                    }
                </tbody>
        </table>
        </div>
    )
}

export default People;