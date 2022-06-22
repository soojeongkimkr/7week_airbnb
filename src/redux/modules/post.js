import axios from "axios";

const GET = "post/GET"
const GETLIST = "post/GETLIST"
const ADD = "post/ADD"
const MODIFY = "post/MODIFY"
const DELETE = "post/DELETE"

const initialState = {
  
};


// Action creator
export function getPost(post){
  return {type: GET, post}
}
export function getPostList(post_list){
  return {type: GETLIST, post_list}
}
export function addPost(post){
  return {type: ADD, post}
}
export function modifyPost(post){
  return {type: MODIFY, post}
}
export function deletePost(postID){
  return {type: DELETE, postID}
}




// middleWare

export const getPostDB = (id) => async (dispatch) => {
  console.log(id)
  try {
    const data = await axios.get(`http://idontcare.shop/hotel/${id}`);
    dispatch(getPost(data.data));
    console.log(data.data);
  } catch (error) {
    alert("오류가 발생했습니다. 다시 시도해주세요.");
    console.log(error);
  }
};

export const getPostListDB = (id) => async (dispatch) => {
  console.log(id)
  try {
    const data = await axios.get(`http://idontcare.shop/hotel?category=${id}`);
    dispatch(getPost(data.data));
    console.log(data.data);
  } catch (error) {
    alert("오류가 발생했습니다. 다시 시도해주세요.");
    console.log(error);
  }
};

export const addPostDB = (data) => {
  console.log(data)
  return async function (dispatch, getState) {
    await axios
      .post("http://idontcare.shop/hotel", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        window.location.assign(`/`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};


// export const modifyPostDB = (data, postId) => {
//   return async function (dispatch, getState) {
//     console.log(data, postId)
//     // console.log(getState().post.posts)
//     const _data = [...getState().post.posts]
//     console.log(_data)
//     const post_data = await axios
//       .patch(`http://idontcare.shop/api/posts/${postId}` , data, 
//       {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       })
//       .then((response) => {
//         console.log(response);
//         _data.map((v,i)=>{
//           if(v._id === postId){
//             const _v = {...data, _id: v._id}
//             return _v
//           }
          
//           return v;

//         })
//         console.log(_data)
        

//         dispatch(modifyPost(_data));
//       })
//       .catch((error) => {
//         console.log(error);
//         const __data = _data.map((v,i)=>{
//           if(v._id === postId){
//             console.log(v)
//             const _v = {...data, _id: v._id}
//             return _v
//           }
          
//           return v;

//         })
//         console.log(__data)

//         dispatch(modifyPost(__data));
//       });
//   };
// };

// 게시물 삭제
export const deletePostDB = (Id) => {
  
  return function (dispatch) {
     axios
      .delete(`http://idontcare.shop/hotel/${Id}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
      )
      .then((res) => {
        dispatch(deletePost(Id));
        window.location.assign("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };
};



//reducer

export default function reducer(state = initialState, action={}){
  switch(action.type){

    case "post/GET":{
      return {posts: action.post}
    }
    case "post/GETLIST":{
      return {posts: action.post}
    }
    
    case "post/ADD":{
      const new_post_list = [ action.post_list, ...state.posts];
      return {posts: new_post_list}

    }
    case "post/MODIFY": {
      
      const modify_post = [ ...action.post ];
      console.log(modify_post)
      return { posts: modify_post };
    }

    case "post/DELETE":{
      console.log(state.posts)
      const new_post_list= state.posts.filter((l,i)=>{
        console.log(action)
        // window.alert('보자')
        return action.postID !== l.id
      })
      return {posts: new_post_list}

    }

    default:
      return state;
  }
}

