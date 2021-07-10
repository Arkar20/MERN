import {React,useState,useEffect,useContext} from 'react';
import { useParams } from 'react-router-dom'
import LoadingStatus from '../components/LoadingStatus'
import {PostContext} from '../App'

const ProfileLoaded = ({ profile, follow }) => {
    const { actions } = useContext(PostContext)

 
    const handleFollow = async() => {
       actions.followUser(profile.user.id)
    }
    return (
         <>
            
                <div style={{ display: 'flex', justifyContent: 'start',marginTop:"20px"}} className="container">
                    <div className="profile-pic" style={{width:"60%"}}>
                    <img
                        alt="title"
                        src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
                         style={{width:'160px',height:'160px',borderRadius:'50%'}}/>
                </div>
                <div style={{display:"flex",flexDirection:'column',width:'100%'}} >
                    <h3>{profile.user.name}</h3>
                    <h4 className="uppercase">{profile.user.email}</h4>
                    <div style={{display:"flex",flexDirection:'row',justifyContent: 'space-between',width:"60%"}}>
                        <h6>{ profile.posts.length} posts</h6>
                     <h6>{profile.user.followers.length} followers</h6>
                    <h6>{profile.user.following.length} following</h6>
                    </div>

                    {follow && <button className="btn btn-primary" onClick={handleFollow}>Follow</button>}
                 
                </div>
            </div>
            <hr style={{width:'80%'}}></hr>
            <div className="galarry container">
                {
                    profile.posts.map(post =>
                        <img
                        key={post.id}
                        alt={post.title}
                        src={post.pic}
                        className="gallary-img"/>)
               } 
                
               
            </div>
        </>
    )
}

const Profile = () => {
    const { userstate,useractions } = useContext(PostContext) 
    const { userid } = useParams();
    const [visible, setVisible] = useState(true)
    const authuser = JSON.parse(localStorage.getItem("signin_user"))
    

    useEffect(() => {
        useractions.getprofile(userid);
         
        (authuser.id == userid) && setVisible(false)
       
        
    }, [userid])
    
    return (
        userstate
        ?   <ProfileLoaded profile={userstate.profile} follow={visible}/>
        :   <LoadingStatus />

    )
}
export default Profile;