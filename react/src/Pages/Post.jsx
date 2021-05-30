import React from 'react';
import {Link} from 'react-router-dom'
import { useEffect,useState } from "react"
import axios from 'axios';


const Post = () => {

    const [posts, setPosts] = useState(false)

    useEffect(() => {
        axios.get('/posts').then(res => {
            console.log(res.data.posts)
            setPosts(res.data.posts)
        })
    },[])
    return (
        <>
            {
                posts
                    ?
                    
                    posts.map(post => (
                         <div className="home">
                       <div className="card home-card">
                    <h5 style={{ padding: "5px" }}>
                          
                    </h5>
                            <div className="card-image">
                                <img alt="post-img" src="https://images.unsplash.com/photo-1621946453621-a6ed338d8922?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                            </div>
                            <div className="card-content">
                            <i className="material-icons" style={{color:"red"}}>favorite</i>
                                <h6>4 likes</h6>
                                <h6>Minim eu minim fugiat cillum Lorem magna ex pariatur excepteur dolore.</h6>
                                <p>Cupidatat aliqua in aliquip et est dolore tempor do tempor reprehenderit anim aliquip. In fugiat nulla est est duis. Adipisicing ad incididunt quis eiusmod excepteur in excepteur commodo elit minim reprehenderit aute consequat. Reprehenderit cupidatat commodo occaecat sunt. Ad veniam id non do magna amet Lorem irure minim anim laborum ex. Ex officia dolor velit veniam labore nulla amet nisi deserunt do sunt minim. Id consequat nisi voluptate irure fugiat laborum id.</p>
                                <form>
                                  <input type="text" placeholder="add a comment" />  
                                </form>
                                
                            </div>
                        </div> 
                 </div>
                    ))
                   
                    :'loading'
            }
           
                    

                
            
                   </>
    )
}
export default Post;