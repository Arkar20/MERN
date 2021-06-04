import React from 'react';
import '../App.css'

const Icon = ({ likesno, liked, action }) => {
 
  
    return (
        <>
            <i className={liked?'react material-icons':'material-icons'}
                style={{ color: liked ? 'red' : '',transition:"all 0.3s" }}
                onClick={()=>action()}
            >favorite</i>
            <h6>{ likesno}</h6>
            </>
    )
}
export default Icon