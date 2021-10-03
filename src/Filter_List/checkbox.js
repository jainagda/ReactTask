import React from 'react';
import "./checkbox.css";
import data from "../Data/ExerciseData.json";
import { useEffect, useState } from "react";
import Card from "../Cards/Card";

function Checkbox1(){

    const [value, setValue] = useState(""); // search by Name
    
    const [head, setHead] = useState(false);
    const [face, setFace] = useState(false);
    const [jaw, setJaw] = useState(false);
    const [neck, setNeck] = useState(false);
    const [Flexors, setFlexors] = useState(false);
    const [extensors, setExtensors] = useState(false);
    const [shoulder, setShoulder] = useState(false);
    const [triceps,setBenchPress ] = useState(false);
    const [benchpress, setTriceps] = useState(false);
    const [tagName, setTagName] = useState([]);

    useEffect(()=>{
        if (head===false){
           setTagName((prevState) =>prevState.filter((tagName)=>tagName !=="head"));
        }
    },[head]);

    useEffect(()=>{
        if (face===false){
            
           setTagName((prevState) =>prevState.filter((tagName)=>tagName !=="face"));
           
        }
    },[face]);

    useEffect(()=>{
        if (jaw===false){
           setTagName((prevState) =>prevState.filter((tagName)=>tagName !=="jaw"));
        }
    },[jaw]);

    useEffect(()=>{
        if (neck===false){
           setTagName((prevState) =>prevState.filter((tagName)=>tagName !=="neck"));
        }
    },[neck]);

    useEffect(()=>{
        if (Flexors===false){
           setTagName((prevState) =>prevState.filter((tagName)=>tagName !=="Flexors"));
        }
    },[Flexors]);
    
    useEffect(()=>{
        if (extensors===false){
           setTagName((prevState) =>prevState.filter((tagName)=>tagName !=="extensors"));
        }
    },[extensors]);
    
    useEffect(()=>{
        if (shoulder===false){
           setTagName((prevState) =>prevState.filter((tagName)=>tagName !=="shoulder"));
        }
    },[shoulder]);
    
    useEffect(()=>{
        if (triceps===false){
           setTagName((prevState) =>prevState.filter((tagName)=>tagName !=="triceps"));
        }
    },[triceps]);

    useEffect(()=>{
        if (benchpress===false){
           setTagName((prevState) =>prevState.filter((tagName)=>tagName !=="benchpress"));
        }
    },[benchpress]);

    const handeleClick = (tag)=>{
        setTagName((prevState) => [...prevState,tag]);
        setHead((prev)=> !prev);
    };

    const handeleClick2 = (tag)=>{
        setTagName((prevState) => [...prevState,tag]);
        setFace((prev)=> !prev);
    };
    
    const handeleClick3 = (tag)=>{
        setTagName((prevState) => [...prevState,tag]);
        setJaw((prev)=> !prev);
    };
    
    const handeleClick4 = (tag)=>{
        setTagName((prevState) => [...prevState,tag]);
        setNeck((prev)=> !prev);
    };
    
    const handeleClick5 = (tag)=>{
        setTagName((prevState) => [...prevState,tag]);
        setFlexors((prev)=> !prev);
    };
    
    const handeleClick6 = (tag)=>{
        setTagName((prevState) => [...prevState,tag]);
        setExtensors((prev)=> !prev);
    };
    
    const handeleClick7 = (tag)=>{
        setTagName((prevState) => [...prevState,tag]);
        setShoulder((prev)=> !prev);
    };
    
    const handeleClick8 = (tag)=>{
        setTagName((prevState) => [...prevState,tag]);
        setBenchPress((prev)=> !prev);
    };
    
    const handeleClick9 = (tag)=>{
        setTagName((prevState) => [...prevState,tag]);
        setTriceps((prev)=> !prev);
    };
    

    return (
    <section>
       <div id="navbar">
        <div id="logo"> 
        <label>L O G O</label>
     <input id="search1"class="search-area" type='text' placeholder="Search..." 
        value={value} 
        onChange={(event)=>{
        setValue(event.target.value);
         }}
    required/>

    <button  className="rest" onClick = {()=>setValue("")}>RESET</button>
    <i id="bell1" class="fa fa-bell"> LOGIN/SIGNUP</i>
    </div>                     
    
    </div>
    <div className="box">

    {tagName.length ===0?
    data.filter((val)=>{

       return val.name.toLowerCase().includes(value.toLowerCase())

    }).map((val)=><Card name ={val.name} image ={val.Image}/> )
:data.filter((val)=>{
let values = null;
 if (tagName.includes(val.tags) === true ){
     values= val
 }
 return values

 }).map((val)=><Card name ={val.name} image ={val.Image}/> )

}      </div>
     <div id="id1">
                        <ul id="mainmenu">
                              <li  className="submenu101" id="filter1"><h4>filter 1</h4>
                                <div id="submenu1">
                                    <ul id="ul2">
                                    <li id="change" height="25px" padding-top ="5px" color="white"><span font-size="20px"margin-left= "10px"font-weight="bolder" color ="white"> </span> Filter 1</li>
                    
                                       <li  className="heading"><input type="checkbox" name="head" className="chbx" Checked={head}
                                        onChange={()=> handeleClick("head")}/>Head </li>
                                       <li  className="chbx2"><input type="checkbox"className="chbx"
                                       defaultChecked={face}
                                       onChange={()=>handeleClick2("face")}/>Face</li>
                                       <li  className="chbx2"><input type="checkbox" className="chbx"
                                        defaultChecked={jaw}
                                        onChange={()=>handeleClick3("jaw")}/> Jaw</li>
                                    
                                       <li  className="heading" ><input type="checkbox"  className="chbx"
                                       Checked={neck}
                                       onChange={()=> handeleClick4("neck")}/><label> Neck</label></li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx"
                                        defaultChecked={Flexors}
                                        onChange={()=>handeleClick5("flexors")}/>Flexors</li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx" 
                                        defaultChecked={extensors}
                                        onChange={()=>handeleClick6("extensors")}
                                        />Extensors</li>

                                       <li  className="heading" ><input type="checkbox"  className="chbx"
                                       Checked={shoulder}
                                       onChange={()=> handeleClick7("shoulder")}/><label>Shoulder</label></li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx"
                                        defaultChecked={benchpress}
                                        onChange={()=>handeleClick8("benchpress")}/> Bench Press</li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx" 
                                       defaultChecked={triceps}
                                        onChange={()=>handeleClick9("triceps")}/> triceps</li>
                                    </ul>    
                             </div>
                    
                            </li>
                            <li  className="submenu101" id="filter1"><h4>filter 2</h4>
                            <div id="submenu1">
                                    <ul id="ul2">
                                    <li id="change" height="25px" background-color="darkcyan" padding-top ="5px" color="white"><span font-size="20px"margin-left= "10px"font-weight="bolder" color ="white"> </span> Filter 1</li>
                        
                                       <li  className="heading"><input type="checkbox" name="head" className="chbx" Checked={head}
                                        onChange={()=> handeleClick("head")}/>Head </li>
                                       <li  className="chbx2"><input type="checkbox" name="jaw" className="chbx"
                                       defaultChecked={face}
                                       onChange={()=>handeleClick2("face")}/>Face</li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx"
                                        defaultChecked={jaw}
                                        onChange={()=>handeleClick3("jaw")}/> Jaw</li>
                                    
                                       <li  className="heading" ><input type="checkbox"  className="chbx"
                                       Checked={neck}
                                       onChange={()=> handeleClick4("neck")}/><label> Neck</label></li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx"
                                        defaultChecked={Flexors}
                                        onChange={()=>handeleClick5("flexors")}/>Flexors</li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx" 
                                        defaultChecked={extensors}
                                        onChange={()=>handeleClick6("extensors")}
                                        />Extensors</li>

                                       <li  className="heading" ><input type="checkbox"  className="chbx"
                                       Checked={shoulder}
                                       onChange={()=> handeleClick7("shoulder")}/><label>Shoulder</label></li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx"
                                        defaultChecked={benchpress}
                                        onChange={()=>handeleClick8("benchpress")}/> Bench Press</li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx" 
                                       defaultChecked={triceps}
                                        onChange={()=>handeleClick9("triceps")}/> triceps</li>
                                    </ul>    
                             </div>
                    
                            </li>
                            <li  className="submenu101" id="filter1"><h4>filter 3</h4>
                            <div id="submenu1">
                                    <ul id="ul2">
                                    <li id="change" height="25px" background-color="darkcyan" padding-top ="5px" color="white"><span font-size="20px"margin-left= "10px"font-weight="bolder" color ="white"> </span> Filter 1</li>
                        
                                       <li  className="heading"><input type="checkbox" name="head" className="chbx" Checked={head}
                                        onChange={()=> handeleClick("head")}/>Head </li>
                                       <li  className="chbx2"><input type="checkbox" name="jaw" className="chbx"
                                       defaultChecked={face}
                                       onChange={()=>handeleClick2("face")}/>Face</li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx"
                                        defaultChecked={jaw}
                                        onChange={()=>handeleClick3("jaw")}/> Jaw</li>
                                    
                                       <li  className="heading" ><input type="checkbox"  className="chbx"
                                       Checked={neck}
                                       onChange={()=> handeleClick4("neck")}/><label> Neck</label></li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx"
                                        defaultChecked={Flexors}
                                        onChange={()=>handeleClick5("flexors")}/>Flexors</li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx" 
                                        defaultChecked={extensors}
                                        onChange={()=>handeleClick6("extensors")}
                                        />Extensors</li>

                                       <li  className="heading" ><input type="checkbox"  className="chbx"
                                       Checked={shoulder}
                                       onChange={()=> handeleClick7("shoulder")}/><label>Shoulder</label></li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx"
                                        defaultChecked={benchpress}
                                        onChange={()=>handeleClick8("benchpress")}/> Bench Press</li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx" 
                                       defaultChecked={triceps}
                                        onChange={()=>handeleClick9("triceps")}/> triceps</li>
                                    </ul>    
                             </div>
                    
                            </li>
                            <li  className="submenu101" id="filter1"><h4>filter 4</h4>
                            <div id="submenu1">
                                    <ul id="ul2">
                                    <li id="change" height="25px" background-color="darkcyan" padding-top ="5px" color="white"><span font-size="20px"margin-left= "10px"font-weight="bolder" color ="white"> </span> Filter 1</li>
                        
                                       <li  className="heading"><input type="checkbox" name="head" className="chbx" Checked={head}
                                        onChange={()=> handeleClick("head")}/>Head </li>
                                       <li  className="chbx2"><input type="checkbox" name="jaw" className="chbx"
                                       defaultChecked={face}
                                       onChange={()=>handeleClick2("face")}/>Face</li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx"
                                        defaultChecked={jaw}
                                        onChange={()=>handeleClick3("jaw")}/> Jaw</li>
                                    
                                       <li  className="heading" ><input type="checkbox"  className="chbx"
                                       Checked={neck}
                                       onChange={()=> handeleClick4("neck")}/><label> Neck</label></li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx"
                                        defaultChecked={Flexors}
                                        onChange={()=>handeleClick5("flexors")}/>Flexors</li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx" 
                                        defaultChecked={extensors}
                                        onChange={()=>handeleClick6("extensors")}
                                        />Extensors</li>

                                       <li  className="heading" ><input type="checkbox"  className="chbx"
                                       Checked={shoulder}
                                       onChange={()=> handeleClick7("shoulder")}/><label>Shoulder</label></li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx"
                                        defaultChecked={benchpress}
                                        onChange={()=>handeleClick8("benchpress")}/> Bench Press</li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx" 
                                       defaultChecked={triceps}
                                        onChange={()=>handeleClick9("triceps")}/> triceps</li>
                                    </ul>    
                             </div>
                    
                            </li>
                            <li  className="submenu101" id="filter1"><h4>filter 5</h4>
                            <div id="submenu1">
                                    <ul id="ul2">
                                    <li id="change" height="25px" background-color="darkcyan" padding-top ="5px" color="white"><span font-size="20px"margin-left= "10px"font-weight="bolder" color ="white"> </span> Filter 1</li>
                        
                                       <li  className="heading"><input type="checkbox" name="head" className="chbx" Checked={head}
                                        onChange={()=> handeleClick("head")}/>Head </li>
                                       <li  className="chbx2"><input type="checkbox" name="jaw" className="chbx"
                                       defaultChecked={face}
                                       onChange={()=>handeleClick2("face")}/>Face</li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx"
                                        defaultChecked={jaw}
                                        onChange={()=>handeleClick3("jaw")}/> Jaw</li>
                                    
                                       <li  className="heading" ><input type="checkbox"  className="chbx"
                                       Checked={neck}
                                       onChange={()=> handeleClick4("neck")}/><label> Neck</label></li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx"
                                        defaultChecked={Flexors}
                                        onChange={()=>handeleClick5("flexors")}/>Flexors</li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx" 
                                        defaultChecked={extensors}
                                        onChange={()=>handeleClick6("extensors")}
                                        />Extensors</li>

                                       <li  className="heading" ><input type="checkbox"  className="chbx"
                                       Checked={shoulder}
                                       onChange={()=> handeleClick7("shoulder")}/><label>Shoulder</label></li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx"
                                        defaultChecked={benchpress}
                                        onChange={()=>handeleClick8("benchpress")}/> Bench Press</li>
                                       <li  className="chbx2"><input type="checkbox"  className="chbx" 
                                       defaultChecked={triceps}
                                        onChange={()=>handeleClick9("triceps")}/> triceps</li>
                                    </ul>    
                             </div>
                    
                            </li>
                        </ul>
                    </div>
            </section>
    )
}
export default Checkbox1;




// https://codesandbox.io/s/cranky-robinson-pwdk5?file=/src/App.js