// Reducer NEVER must return undefined!!
// when a reducer gets called MUST NOT do API request or interact with the DOM!!
// NEVER mutate or change the state, only look when working with array or object  

export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return [...state, action.payload];
        default:
            return state;
    }
};
