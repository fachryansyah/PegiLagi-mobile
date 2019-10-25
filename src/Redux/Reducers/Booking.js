const initialState = {
    passangers:{
        adults: 1,
        kids: 0,
        babies: 0
    },
    listPassanger: []
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PASSANGER':
            return {
                ...state,
                passangers: state.passangers
            }
        case 'SET_PASSANGER':
            return {
                ...state,
                passangers: action.payload
            }
        case 'ADD_PASANGER':
            return {
                ...state,
                listPassanger: [...state.listPassanger, action.payload]
            }
        case 'UPDATE_PASSANGER':
            let passangers = state.listPassanger
            passangers[action.payload.index].name = action.payload.name
            passangers[action.payload.index].title = action.payload.titel
            console.log(passangers)
            return {
                ...state,
                listPassanger: passangers
            }
        case 'RESET_BOOKING':
            return {
                passangers:{
                    adults: 1,
                    kids: 0,
                    babies: 0
                },
                listPassanger: []
            }
        default:
            return state
    }
}

export default auth