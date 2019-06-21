const initialState = {
    tripData: []
}

export default function trip(state = initialState, action)  {
    switch (action.type) {
        case 'ADD_TRIP':
            return {
                ...state,
                tripData: [...state.tripData, action.tripData]
            }
        default:
            return state;
    }
}
