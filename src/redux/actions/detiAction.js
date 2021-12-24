import Constants from "../constants";

const preq = () => {
    return {
        type: Constants.deti.PREQ,
    };
};

const detiAction = {
    preq: preq,
};

export default detiAction;