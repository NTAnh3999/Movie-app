export const initialState = {
    movieLists: [],
};

export default function appReducer(state, action) {
    switch (action.type) {
        case "GET_POPULAR":
            return {
                movieLists: [...action.payload],
            };

        case "GET_TOP_RATED":
            return {
                movieLists: [...action.payload],
            };

        case "GET_SEARCH_RESULTS":
            return {
                movieLists: [...action.payload],
            };
        default:
            throw new Error("Action invalid");
    }
}
