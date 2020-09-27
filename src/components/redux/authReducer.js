const IS_AUTH = 'test/authReducer/IS_AUTH',
    LOGOUT = 'test/authReducer/LOGOUT'


const initialState = {
    isAuth: false
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_AUTH:
            return {
                ...state,
                isAuth: true
            }
        case LOGOUT:
            return {
                ...state,
                isAuth: false
            }
        default:
            return state
    }
}

export const login = () => ({ type: IS_AUTH });
export const logout = () => ({ type: LOGOUT })