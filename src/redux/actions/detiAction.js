import Constants from "../constants";

const preq = (preqState) => {
    return {
        type: Constants.deti.PREQ,
        data: preqState,
    };
};

const result = (resultState) => {
    return {
        type: Constants.deti.RESULT,
        data: resultState,
    };
};

const detiAction = {
    preq: preq,
    result: result,
};

export default detiAction;