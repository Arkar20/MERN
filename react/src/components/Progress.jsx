import React from "react";

const Progress = ({ progress }) => {
    return(
               <div style={{ display: 'block',width:"100%" }}>
                        {
                            progress && <progress value={progress} max="100" style={{ padding: "5px" }}>
                                         <span>{ progress} %</span>
                                  </progress>
                        
                        }
                      
                </div>
    )
}
export default Progress