import axios from "axios";
import instance from "./../../shared/api"

const GET = "categories/GET"
const GETLIST = "categories/GETLIST"

export function getCategories(categories){
  return {type: GET, categories }
}
export function getCategory(category){
  return {type: GETLIST, category }
}


const initialState = {
  
};



// middleWare

export const getCategoriesDB = () => async (dispatch) => {
  try {
    const data = await instance.get("categories");
    dispatch(getCategories(data.data));
    console.log(data.data);
  } catch (error) {
    alert("오류가 발생했습니다. 다시 시도해주세요.");
    console.log(error);
  }
};

export const getCategoryDB = () => async (dispatch) => {
  try {
    const data = await instance.get("hotels",{
      params:{
        category: 1
      }
    });
    dispatch(getCategories(data.data));
    console.log(data.data);
  } catch (error) {
    alert("오류가 발생했습니다. 다시 시도해주세요.");
    console.log(error);
  }
};


//reducer

export default function reducer(state = initialState, action={}){
  switch(action.type){
    
    case "categories/GET":{
      return {posts: action.categories}
    }
    case "categories/GETLIST":{
      return {posts: action.category}
    }
    // case "post/ADD":{
    //   const new_post_list = [ action.post_list, ...state.posts];
    //   return {posts: new_post_list}

    // }
    // case "post/MODIFY": {
      
    //   const modify_post = [ ...action.post ];
    //   console.log(modify_post)
    //   return { posts: modify_post };
    // }

    
    // case "post/DELETE":{
    //   console.log(state.posts)
    //   const new_post_list= state.posts.filter((l,i)=>{
    //     console.log(action)
    //     // window.alert('보자')
    //     return action.postID!== l._id
    //   })
    //   return {posts: new_post_list}

    // }

    default:
      return state;
  }
}

