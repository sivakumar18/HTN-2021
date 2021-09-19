import React from 'react';
import "./Tiles.css";

function ProgressTile({text1, text2}) {
  if (text2 === "IN PROGRESS") {
      return (
        <div className="ProgressTile INPROGRESS">
          <div className="LeftText">{text1}</div>
          <div className="RightText ACTIVE">{text2}</div>
        </div>
      )
    }
     return (
       <div className="ProgressTile NOTACTIVE">
         <div className="LeftText">{text1}</div>
         <div className="RightText INCOMPLETE">{text2}</div>
       </div>
     )
}

export default ProgressTile;
