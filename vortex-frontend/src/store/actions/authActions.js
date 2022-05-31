import * as api from '../../api';

export const authActions = {
    SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
};


export const getActions = (dispatch) => {
    return {
        login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
        register: (userDetails, navigate) => dispatch(register(userDetails, navigate)),
    };
};

const setUserDetails = (userDetails) => {
    return {
        type: authActions.SET_USER_DETAILS, 
        userDetails,
    };
};


const login = (userDetails, navigate) => {
    return async (dispatch) => {
        const response = await api.login(userDetails); //wait for response
        console.log(response);
        if (response.error) { //if response doesn't work just send me error
            console.log(response); //give me some info
        } else {
            const { userDetails } = response?.data;
            localStorage.setItem('user', JSON.stringify(userDetails)); //set a new user in local storage

            dispatch(setUserDetails(userDetails)); 
            navigate("/dashboard"); //after logging me in, push me to /dashboard
        }
    };
};

const register = (userDetails, navigate) => {
    return async (dispatch) => {
        const response = await api.register(userDetails);
        console.log(response);

        if (response.error) {
            //show error message
            console.log(response);
        } else {
            const { userDetails } = response?.data;
            localStorage.setItem('user', JSON.stringify(userDetails));

            dispatch(setUserDetails(userDetails));
            navigate('/dashboard');
        }
    };
};