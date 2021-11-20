import React from 'react';
import './App.css';
import Box from './Box';

const App =()=>{
    return(
      <div className="home">
              <h1>Home</h1>
              <hr/>
              <Box title="Fruits" data="Fruits will be later"></Box>
              <Box title="Vegetables" data="Vegetables will be later"></Box>
              <Box title="Spices" data="Spices will be later"></Box>
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
 * */