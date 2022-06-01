import { authActions } from "../actions/authActions";

const initState = {
  userDetails: null, //user details by default are null to prevent foolery
};

const reducer = (state = initState, action) => {
  // Initial state of site
  switch (action.type) {
    case authActions.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.userDetails,
      };
    default:
      return state;
  }
};
export default reducer;
