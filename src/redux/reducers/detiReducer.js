import Constants from "../constants";

const initState = {
};

const deti = (state = initState, action) => {
    switch (action.type) {

        case Constants.deti.PREQ:
            return Object.assign({}, state, {
                isAuthenticated: true,
                accessToken: action.accessToken,
            });

        default:
            return state;
    }
};

export default deti;