import Constants from "../constants";

const increment = (count) => {
    return {
        type: Constants.test.INCREMENT,
        payload: count + 1,
    };
};

const decrement = (count) => {
    return {
        type: Constants.test.DECREMENT,
        payload: count - 1,
    };
};

const testAction = {
    increment: increment,
    decrement: decrement,
};

export default testAction;