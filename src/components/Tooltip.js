import React,{useState} from "react";

const Tooltip = ({text,children})=>{

    const [isHovered,setIsHovered] = useState(false);

    return(
        <div className="tooltip" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
              {children}
              {
                isHovered && <span className="tooltiptext">{text}</span>
              }
             
        </div>
    )
}

export default Tooltip;