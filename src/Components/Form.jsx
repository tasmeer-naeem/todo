import React,{useState} from "react";
import Todolistt from "./Todolistt";

const Form=()=>{
    const [currentval,updatedval]=useState("")                  //hooks method

    const [currentarray,addmoreiteminarray]=useState([])

const changetext=(event)=>{
    updatedval(event.target.value)
   
};
//console.log(currentval)
const submitt=()=>{
    addmoreiteminarray((olditem)=>{
        return [...olditem,currentval];            //array method
    });
    updatedval("");
 //console.log(currentval)
};

/*const deleteitem=(id)=>{
    addmoreiteminarray((olditem)=>{
        return olditem.filter((arrEle,index)=>{
            return index !== id;
        })
    })
    console.log("deleted")
};*/

const deleteitem=()=>{
    
};
    return(
        <div>
        <input  type="text" placeholder="add item"  onChange={changetext} value={currentval} />
        <button  onClick={submitt}  >Add Item</button>
        <ol>
        {
            currentarray.map((crntval,index)=>{          //map method
                return (
                    <Todolistt 
                    key={index}
                    id={index}                       //props method
                    listarray={crntval} 
                    onselect={deleteitem}                   
                    />     
                    
                    )               
            })
        }
        </ol>
        </div>
    );
}
//console.log(submit)
export default Form;