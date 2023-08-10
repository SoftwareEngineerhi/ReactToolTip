// =====import style, useState ======== 
import { useState } from 'react';
import './ToolTip.css';
//=== make functional Component ToolTip accept props
function ToolTip(props){
    // =====set variable using useState Hook=====
    const[showToolTip,setShowTooltip]=useState(false);
    // setting up a style object so that we can style it according to position
    let style;
    switch (props.position){
        // for top
        case 'top': style = {
            bottom: '100%',
            left: '100%',
            marginLeft: '-150px'
            }
            break;
        // for right
        case 'right': style = {
            top: '-1px',
            left: '111%', 
            padding: '1px'  
            }
            break;
        // for left
        case 'left': style = {
            top: '-5%',
            right: '111%'
            }
            break;
        // for bottom
        case 'bottom': style = {
            top: '130%',
            left: '100%',
            marginLeft: '-150px'
            }
            break;
        default:
            break;
    }

    // ====Event Handling Function====
function handleMouseEnter(){
    setShowTooltip(true);
}
function handleMouseLeave(){
    setShowTooltip(false);
  };

    return (
        <div>
            <div className="toolTip">
              {/* =============Button for Hover over Text======= */}
                <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Hover over me!</button>
                
              {/* ==============if showToolTip True Then show ToolTip Text========================= */}
                {showToolTip && <span className={`toolTipText ${props.position}`} style={style}>Thanks for hovering! I'm a tooltip</span>}
            
        </div>
        </div>
    );
    }

export default ToolTip;