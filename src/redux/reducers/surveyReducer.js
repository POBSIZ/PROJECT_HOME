import Constants from "../constants";

const initState = {
    list: null,
};

const survey = (state = initState, action) => {
    switch (action.type) {
        case Constants.survey.CREATE:
            // console.log('reducer', action.surList)
            return {
                ...state, 
                list: action.surList
            };
        default:
            return state;
    }
};

export default survey;