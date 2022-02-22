import React,{useState} from 'react'

const Todolistt=(props)=>{

    const [line,setline]=useState(false)

    const cutit=()=>{
        setline(true)
    };

const Updateitem=()=>{
    return(
        console.log("updated")
    );
}
    return(
        <div>
       
        <li style={{textDecoration : line ? "line-through" : "none" }}>{props.listarray}</li>
        <button onClick={cutit}>Delete Item</button>



        <button onClick={Updateitem} >Update Item</button>
        </div>
    );
}

export default Todolistt;

 //<li>{props.listarray}</li>
// <button onClick={()=>{
//     props.onselect(props.id);
// }}> Delete Item</button>