const initialState = {
  post: {
    mainPosts: [
      {
        id: 1,
        User: { id: 1, nickname: "sirri" },
        content: "첫번째 개시글 #해시태그 #해시태그2",
        image: "dd",
      },
    ],
    imagePaths:[],
    postAdded:false,
  },
};
const ADD_POST ='ADD_POST';
export const addPost = {
    type:ADD_POST,
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
        return{
            ...state,
            mainPost:[dummyPost,...state.mainPost],

        }
        default:
          return state;
}
};

export default reducer;
