import {types} from "../Reducers/postReducer"

export const useAction = (state, dispatch) => ({
    fetchAllPosts: data => dispatch({ type: types.FETCH_ALL_POSTS, payload: data }),
    likePost: data => dispatch({ type: types.LIKE_THE_POST, payload: { id: data.id, auth_user: data.auth_user } }),
    unlikePost:data=>dispatch({ type:types.UNLIKE_THE_POST, payload: { id: data.id,auth_user: data.auth_user } }),
    createPost: data => {
        const { title, body, pic } = data
        return dispatch({ type: types.CREATE_POST, payload: { title, body, pic } })
    },
    addComment: data => {
        return dispatch({ type: types.ADD_COMMENT, payload: data })
    },
    followUser: data => {
        return dispatch({ type: types.FOLLOW_USER, payload:data})
    }

})