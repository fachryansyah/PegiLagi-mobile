
export const getPassanger = () => {
    return {
        type: 'GET_PASSANGER',
        payload: {}
    }
}

export const setPassanger = (passanger) => {
    return {
        type: 'SET_PASSANGER',
        payload: passanger
    }
}

export const addPassanger = (passanger) => {
    return {
        type: 'ADD_PASANGER',
        payload: passanger
    }
}

export const updatePassanger = (passanger) => {
    return {
        type: 'UPDATE_PASSANGER',
        payload: passanger
    }
}

export const resetBooking = () => {
    return {
        type: 'RESET_BOOKING',
        payload: {}
    }
}