import React,{useState} from 'react'
 

const Accordion=({title, content})=> {
    const [active, setActive]= useState(false);
  return (
   <div className="accordion_item">
   <div className="accordion_title" onClick={()=>setActive(!active)}>
   <div>{title}</div>
   <div>{active?"-":"+"}</div>
   </div>
   {active && <div className="accordion_content">{content}</div>}
   </div>
  )
}

export default Accordion