
const initialState = {
    isLoading : false,
    isAuth : false,
    isError : false,
    token : ''
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        default : {
            return state;
        }
    }
}