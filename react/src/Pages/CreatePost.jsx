import React from 'react';
import { useState,useEffect } from 'react'
import axios from 'axios'
import {successMessage,errorMessage} from '../components/AlertMessage'
import {useHistory} from 'react-router-dom'

const CreatePost = () => {
      const history =useHistory()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [image, setImage] = useState()
   const [progress, setProgress] = useState(false)
    useEffect(() => {
       if(image)
          uploadImage()
    },[image])

    const uploadImage = async () => {
         const config = {
        onUploadProgress: function(progressEvent) {
         var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
             console.log(percentCompleted)
            setProgress(percentCompleted)
     }
  }
  
        const fd = new FormData();
        fd.append('file', image)
        fd.append('upload_preset', 'mern-insta')
        fd.append('cloud_name', 'dv5lnanfw')
         axios.post('https://api.cloudinary.com/v1_1/dv5lnanfw/image/upload',fd,config).then(res=>console.log(res.data))
        
    }
    return (
        <>
        <div className="card input-filed"
       style={{
           margin:"30px auto",
           maxWidth:"500px",
           padding:"20px",
           textAlign:"center"
       }}
       >
           <input 
           type="text"
                    placeholder="title"
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
          
            />
           <input
            type="text"
                    placeholder="body"
                    value={body}
                    onChange={e=>setBody(e.target.value)}
            
             />
           <div className="file-field input-field">
            <div className="btn #64b5f6 blue darken-1">
                <span>Uplaod Image</span>
                <input type="file" 
                            onChange={e => {
                            setImage(e.target.files[0])
                        // console.log(image)
                    }} />
                 </div>
                    
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
                    <div style={{ display: 'block' }}>
                        {
                            progress
                        ?<progress value={progress} max="100" style={{padding:"5px"}}></progress>
                        :''
                        }
                </div>
            </div>
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1" >
                    Submit post
            </button>
                
       </div>
        </>
    )
}
export default CreatePost