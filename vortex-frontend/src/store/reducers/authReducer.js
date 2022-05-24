const initState = {
    userDetails: null //user details by default are null to prevent foolery
}


const reducer = (state = initState, action) => { // Initial state of site
    switch (action.type) {
        case 'DUMMY':
            return {
                ...state,
            };
            default: 
                return state;
    }
};
export default reducer;