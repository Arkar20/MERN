import React from 'react';

const Profile = () => {
    return (
        <>
                <div style={{ display: 'flex', justifyContent: 'start',marginTop:"20px"}} class="container">
                    <div class="profile-pic" style={{width:"60%"}}>
                    <img
                        src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
                         style={{width:'160px',height:'160px',borderRadius:'50%'}}/>
                </div>
                <div style={{display:"flex",flexDirection:'column',width:'100%'}} >
                    <h3 class="uppercase">arkar</h3>
                    <div style={{display:"flex",flexDirection:'row',justifyContent: 'space-between',width:"60%"}}>
                     <h6>100 posts</h6>
                     <h6>100 followers</h6>
                    <h6>100 following</h6>
                  </div>
                 
                </div>
                </div>
            <div class="galarry">
                <img />
            </div>
        </>

    )
}
export default Profile;