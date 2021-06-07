import axios from 'axios'
import { types } from "../Reducers/postReducer"
import { successMessage, errorMessage } from '../components/AlertMessage'
const history=require('../App')

export const applyMiddlware = dispatch => action => {
    
    switch (action.type) {
        case (types.FETCH_ALL_POSTS):
            return axios.get('/posts').then(res => {
               return dispatch({ type: types.FETCH_ALL_POSTS, payload: res.data.posts })
            }).catch(err => console.error(err))
          
        case (types.LIKE_THE_POST):
            dispatch({type:types.LIKE_THE_POST,payload:{id:action.payload.id,auth_user:action.payload.auth_user}})
            return axios.put('/posts/like', { post_id: action.payload.id }, {
            headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
             })
        case (types.UNLIKE_THE_POST):
            dispatch({type:types.UNLIKE_THE_POST,payload:{id:action.payload.id,auth_user:action.payload.auth_user}})
         
            return axios.put('/posts/unlike', { post_id: action.payload.id }, {
            headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).catch(err =>
            dispatch({type:types.LIKE_THE_POST,payload:{id:action.payload.id,auth_user:action.payload.auth_user}})
            )
        case (types.CREATE_POST):
          return   axios.post('/posts',action.payload, {
            headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
        }).then((res) => {
            dispatch({ type: types.CREATE_POST, payload: res.data.post })
            successMessage("Congrats You have Uploaded a Post!")
            return history.push('/posts')
        }).catch(error => {
            errorMessage(error.response.data.error)
            return history.push('/post')
       
        })
        case (types.ADD_COMMENT):
            console.log(action.payload.id)
            return   axios.put(`/api/posts/${action.payload.id}/comment`,{body:action.payload.comment} , {
            headers: {"Authorization":`Bearer ${localStorage.getItem('token')}`}
            }).then(res =>
                {console.log(res.data.result)
                successMessage("Comment added successfully")
               return dispatch({type:types.ADD_COMMENT,payload:res.data.result})}
        )
        default:
            return null;
        }
        
}
