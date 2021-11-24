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
//ref creation for form element
    const person:any=useRef<HTMLInputElement>()

    const [sno,setSno]=useState("")
    const [name,setName]=useState("")
    const [city,setCity]=useState("")

    //function for reading ref
    function addPerson(){
     //let item=  person.current;
     let content=person.current?.value
     let result:any=content?.split(",")
     addPersonCall({sno:Number(result[0]),name:result[1],city:result[2]});
     person.current?.focus()
     person.current.value=""
    }

    //function for get Rest call
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

    async function controlledStore(){
        addPersonCall({sno:Number(sno),name:name,city:city})
        setSno("")
        setName("")
        setCity("")
    }

    //function for post Rest call
    async function addPersonCall(obj:Person){
        try{
          const response= await axios.post("http://localhost:8000/api/people",obj)
          peopleRead();
        }
        catch(e){
            alert("Not able to insert")
        }

    }
    //hook that runs after first rendering
    useEffect(()=>{
         peopleRead()
    },[]
        
    )

    useEffect(()=>{
        console.log(sno,name,city)
    })
        const [peopleData,setPeopleData] =useState([])
    return(
        <div>
          <div className="alert alert-info">
             <table>
                 <tr> 
                    <td>Sno</td>
                    <td><input type="text" value={sno}
                    onChange={(e)=>{setSno(e.target.value)}}/></td>
                 </tr> 
                 <tr> 
                    <td>Name</td>
                    <td><input type="text" value={name}
                    onChange={(e)=>{setName(e.target.value)}}/></td>
                 </tr> 
                 <tr> 
                    <td>City</td>
                    <td><input type="text" value={city}
                    onChange={(e)=>{setCity(e.target.value)}}/></td>
                 </tr> 
                 <tr> 
                     <td><button className="btn btn-success" onClick={controlledStore}>Add Person</button></td>
                 </tr>    
            </table>  
          </div>
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