import React from 'react';
import {useState} from 'react' 
import './App.css';
import Box from './Box';



const App =()=>{

   
const [titles]=useState(['Fruits','Vegetables','Spices']) 
const [theme,setTheme]=useState('theme2')
const [btnColor1,setBtnColor1]=useState('btn btn-dark')
const [btnColor2,setBtnColor2]=useState('btn btn-light')
    
    return(
      <div className="home">

              <h1>Home</h1>
           <button className={btnColor1}>Theme1</button> &nbsp;&nbsp;&nbsp;&nbsp;  
           <button className={btnColor2}>Theme2</button>

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
 