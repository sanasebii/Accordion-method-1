import React from 'react'
import './App.css'
import {accordionData} from './component/content.jsx';
import Accordion from './component/Accordion.jsx';
function App() {
  return (
    <div>
      <h1>React Accordion</h1>
     
        {accordionData.map(({title,content})=>(
          <Accordion title={title} content={content} />
        ))}
      </div>
     
  );
}

export default App