import "./style.css"
import React from "react"
import { useCallback, useState } from "react";
import Input from "./Components/Input/Input";
import propertyState from "./Components/propertyState"


function App() {
const [property, setProperty] = useState<propertyState>(
  {topLeft: "0", topRight:"0", bottomRight:"0", bottomLeft:"0", allEdges: "0"}) 

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setProperty((params) => ({...params, [event.target.name]: event.target.value}))
  },[])

  const {topLeft, topRight, bottomRight, bottomLeft, allEdges} = property
  
  return (
    <div className="border-container">
      <h1>Border Radius</h1>
      <p>border radius</p> 
      <div>
         <div className="input-control">
          <Input  
            type="number"
            name="topLeft"
            state={property.topLeft === "0" ? 
            property.allEdges : property.topLeft} 
            handleChange={handleChange}
            />
            <Input  
            type="number"
            name="topRight"
            state={property.topRight === "0"
            ? property.allEdges :
              property.topRight} 
            handleChange={handleChange}
            />
         </div> 
         <div className="container-css">
           <div className="css-frame" style={{
                borderRadius: allEdges + "px",
                borderTopRightRadius: topRight + "px",
                borderTopLeftRadius: topLeft + "px",
                borderBottomLeftRadius: bottomLeft + "px",
                borderBottomRightRadius: bottomRight + "px",
                }}>
           </div>
           <br />
           <Input  
            type="range"
            name="allEdges"
            state={property.allEdges} 
            handleChange={handleChange}
            />
         </div>
         <div className="input-control">
           <Input  
            type="number"
            name="bottomLeft"
            state={property.bottomLeft === "0" ?
            property.allEdges : 
            property.bottomLeft} 
            handleChange={handleChange}
            />
           <Input  
            type="number"
            name="bottomRight"
            state={property.bottomRight === "0" ? 
            property.allEdges :
            property.bottomRight} 
            handleChange={handleChange}
            />
         </div> 
      </div>
    </div>
  );
}

export default App;
