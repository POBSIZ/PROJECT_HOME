import Constants from "../constants";

const create = (_surList) => {
    return {
        type: Constants.survey.CREATE,
        surList: _surList
    };
};

const surveyAction = {
    create: create,
};

export default surveyAction;