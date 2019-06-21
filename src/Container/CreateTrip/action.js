import Types from './constants'

export function addTrip (tripData) {
    return {
        type: Types.ADD_TRIP,
        tripData
    }
}

export function filterTrip(filterType) {
    return {
        type: Types.FILTER_TRIP,
        filterType
    }
}
