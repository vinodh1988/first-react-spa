import axios from "axios"
import { useEffect, useState } from "react"

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
    useEffect(()=>{
         peopleRead()
    },[]
        
    )
        const [peopleData,setPeopleData] =useState([])
    return(
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

    )
}

export default People;