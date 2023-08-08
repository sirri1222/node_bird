const initialState = {
    name:'sirri',
    age:'28',
    password:'babo'
};
const rootReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'CHANGE_NICKMANE':
            return{
                ...state,
                name: action.date,
            }
    }
}