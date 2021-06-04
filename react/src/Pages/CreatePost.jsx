import React from 'react';
import { useState,useEffect,useContext } from 'react'
import axios from 'axios'
import "../App.css"

import {successMessage,errorMessage} from '../components/AlertMessage'
import {useHistory} from 'react-router-dom'
import {PostContext} from "../App"
const CreatePost = () => {
    const { dispatch } = useContext(PostContext)
    const history =useHistory()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [image, setImage] = useState("")
    const [progress, setProgress] = useState(false)
    const [uploadedImg, setUploadedImg] = useState(false)

    useEffect(() => {
       if(image)
          uploadImage()
    },[image])

    const uploadPost = (e) => {
        // console.log(uploadedImg)
        e.preventDefault();
        axios.post('/posts', { title, body, pic: uploadedImg }, {
            headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
        }).then((res) => {
            dispatch({ type: "ADD_POST", payload: res.data.post })
                successMessage("Congrats You have Uploaded a Post!")
                history.push('/posts')
                        }).catch(error=>errorMessage(error.response.data.error))
    }
    const uploadImage = (e) => {
       
        const config = {
         
        onUploadProgress: function(progressEvent) {
         var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setProgress(percentCompleted)
     }
         }
        const fd = new FormData();
        fd.append('file', image)
        fd.append('upload_preset', 'mern-insta')
        fd.append('cloud_name', 'dv5lnanfw')
         axios.post('https://api.cloudinary.com/v1_1/dv5lnanfw/image/upload',fd,config).then(res=>setUploadedImg(res.data.url))
            
    }
    return (
        <>
          
        <form onSubmit={(e)=>{uploadPost(e)}}>
        <div className="card input-filed"
       style={{
           margin:"30px auto",
           maxWidth:"500px",
           padding:" 0px 20px ",
          
       }} >
            <h2 style={{textAlign:'center'}}>Create Post</h2>
                <label>Title</label>
           <input 
           type="text"
                    placeholder="title"
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
          
                />
                <label>Say Something</label>
                <textarea id="textarea1" className="materialize-textarea"
               
                    onChange={e=>setBody(e.target.value)}
            
                >


                </textarea>
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
                    <div style={{ display: 'block',width:"100%" }}>
                        {
                            progress && <progress value={progress} max="100" style={{ padding: "5px" }}>
                                         <span>{ progress} %</span>
                            </progress>
                        
                        }
                      
                </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className="btn waves-effect btn-primary"  >
                                Submit post
                        </button>
                    </div>
        </div>
        </form>
            <div className="container" style={{display:"flex",justifyContent: "center"}}>
                {
                    uploadedImg &&
                <img src={uploadedImg}
                        alt="upload Img"
                        style={{width:"60%"}}
                />
                }
            </div>
        </>
    )
}
export default CreatePost