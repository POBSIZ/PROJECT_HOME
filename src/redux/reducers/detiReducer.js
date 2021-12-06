import Constants from "../constants";

const initState = {
    preq: null,
    scoreValue: null,
};

const deti = (state = initState, action) => {
    switch (action.type) {

        case Constants.deti.PREQ:
            return (
                Object.assign({}, state, {
                    preq: action.data,
                })
            ) 

        case Constants.deti.RESULT:
            return (
                Object.assign({}, state, {
                    scoreValue: action.data,
                })
            ) 

        default:
            return state;
    }
};

export default deti;