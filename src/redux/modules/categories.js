import axios from "axios";

const GET = "categories/GET"

export function getCategories(categories){
  return {type: GET, categories }
}


const initialState = {
  
};



// middleWare

export const getCategoriesDB = () => async (dispatch) => {
  try {
    const data = await axios.get("http://idontcare.shop/categories");
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

