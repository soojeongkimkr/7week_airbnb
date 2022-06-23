import instance from "./../../shared/api"
import axios from "axios";

import {db} from "../../shared/firebase";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'

const GET = "post/GET"
const GETLIST = "post/GETLIST"
const LOADF = "post/LOADF"
const ADD = "post/ADD"
const ADDF = 'post/ADDF'
const MODIFY = "post/MODIFY"
const DELETE = "post/DELETE"

// 초기값
// API: 숙소 목록 조회
const initialState = {
  // list: [
  //     { title: "MV, 몰디브1", mainImage: "https://a0.muscache.com/im/pictures/373443ec-b377-4181-b753-3a2f3508c2b3.jpg?im_w=720", price: "884,276"},
  //     { title: "MV, 몰디브2", mainImage: "https://a0.muscache.com/im/pictures/fa2ed873-e726-4e6d-ab1a-28bc7c69d805.jpg?im_w=720", price: "184,276"},
  //     { title: "MV, 몰디브3", mainImage: "https://a0.muscache.com/im/pictures/2f15fd34-ad65-4b22-a276-50c298cbae3e.jpg?im_w=720", price: "284,276"},
  //     { title: "MV, 몰디브4", mainImage: "https://a0.muscache.com/im/pictures/miso/Hosting-555632030522710376/original/c8b5a0c1-0468-4402-a772-2b93d75366df.jpeg?im_w=720", price: "384,276"},
  //     { title: "MV, 몰디브1", mainImage: "https://a0.muscache.com/im/pictures/373443ec-b377-4181-b753-3a2f3508c2b3.jpg?im_w=720", price: "884,276"},
  //     { title: "MV, 몰디브2", mainImage: "https://a0.muscache.com/im/pictures/fa2ed873-e726-4e6d-ab1a-28bc7c69d805.jpg?im_w=720", price: "184,276"},
  //     { title: "MV, 몰디브3", mainImage: "https://a0.muscache.com/im/pictures/2f15fd34-ad65-4b22-a276-50c298cbae3e.jpg?im_w=720", price: "284,276"},
  //     { title: "MV, 몰디브4", mainImage: "https://a0.muscache.com/im/pictures/miso/Hosting-555632030522710376/original/c8b5a0c1-0468-4402-a772-2b93d75366df.jpeg?im_w=720", price: "384,276"},
  // ]
}

// Action creator
export function getPost(post){
  return {type: GET, post}
}
export function getPostList(post_list){
  return {type: GETLIST, post_list}
}

export function loadPostF(post_list){
  return {type:LOADF, post_list}
}

export function addPostF(post_list){
  return {type:ADDF, post_list}
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



export const loadPostFB = () => {
  return async function (dispatch){
    const post_data = await getDocs(collection(db, "img"));
    let post_list = [];
    post_data.forEach((v)=> {
      post_list.push({...v.data()})
    })
    console.log(post_list)

    dispatch(loadPostF(post_list));
  }
  
};




export const addPostFB = (post_list) => {
  return async function (dispatch){
    const user_data = await addDoc(collection(db, 'img'), post_list);
    // const post_data = { id: user_data.id, date: Date.now(), ...post_list}

    dispatch(addPostF(user_data))
    // console.log(user_data)
  }
}

export const addPostDB = (data) => {
  console.log(data)
  return async function (dispatch, getState) {
    await instance
      .post("hotel", data, {
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


    case "post/LOADF":{
      return {posts: action.post_list}
    }
    case "post/ADDF":{
      const new_post_list = [ action.post_list, ...state.posts];
      return {posts: new_post_list}
    }

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