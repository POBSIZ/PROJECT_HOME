import Constants from "../constants";

const initState = {
    isAuthenticated:false,
    accessToken:null,
    // userData:{}
};

const auth = (state = initState, action) => {
    switch (action.type) {

        case Constants.auth.LOGIN:
            return Object.assign({}, state, {
                isAuthenticated: true,
                accessToken: action.accessToken,
            });

        case Constants.auth.LOGOUT:
            return Object.assign({}, state, {
                isAuthenticated: false,
                accessToken: null,
            });

        case Constants.auth.SIGNUP:
            return Object.assign({}, state, {
                isAuthenticated: true,
                accessToken: action.accessToken,
            });

        case Constants.auth.REFRESH:
            return Object.assign({}, state, {
                isAuthenticated: true,
                accessToken: action.accessToken,
            });

        default:
            return state;
    }
};

export default auth;