import Constants from "../constants";

const login = (accessToken) => {
    return {
        type: Constants.auth.LOGIN,
        accessToken: accessToken
    };
};

const logout = () => {
    return {
        type: Constants.auth.LOGOUT
    };
};

const signup = () => {
    return {
        type: Constants.auth.SIGNUP
    };
};

const refresh = () => {
    return {
        type: Constants.auth.REFRESH,
        accessToken: accessToken
    };
};

const authAction = {
    login: login,
    logout: logout,
    signup: signup,
    refresh: refresh,
};

export default authAction;