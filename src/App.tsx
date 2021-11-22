import React from 'react';
import {useState} from 'react' 
import './App.css';
import Box from './Box';



const App =()=>{

function changeTheme(current:string){
  
    setTheme(current);
    current=="theme1"?setBtnColor1('btn btn-dark'):setBtnColor1('btn btn-light')
    current=="theme2"?setBtnColor2('btn btn-dark'):setBtnColor2('btn btn-light')
    
}

const [titles]=useState(['Fruits','Vegetables','Spices']) 
const [theme,setTheme]=useState('theme1')
const [btnColor1,setBtnColor1]=useState('btn btn-dark')
const [btnColor2,setBtnColor2]=useState('btn btn-light')
    
    return(
      <div className="home">

              <h1>Home</h1>
           <button className={btnColor1} onClick={()=>{changeTheme('theme1')}}>Theme1</button> &nbsp;&nbsp;&nbsp;&nbsp;  
           <button className={btnColor2} onClick={()=>{changeTheme('theme2')}}>Theme2</button>

              <hr/>
             {
               titles.map((x,index)=><Box key={index} theme={theme} title={x} data="Later it ll be fixed"></Box>)
             }
      </div>
    )
}
export default App;

/*
 * class component
 * 
 * it is easy to accomodate
 * 
 * data [properties + states]
 * template [html]
 * Event Handling functions
 * Css can be referred from an external file 
 *
 * 
 * In a functional components usually we dont use state & event handling functions
 * 
 * 
 *  /*<Box title="Fruits" data="Fruits will be later"></Box>
              <Box title="Vegetables" data="Vegetables will be later"></Box>
              <Box title="Spices" data="Spices will be later"></Box>*/
 