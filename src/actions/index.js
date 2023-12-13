export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const CHANGE_MEMORY = "CHANGE_MEMORY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});

}
export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}
export const changeOperation = (symbol) => {
    return({type:CHANGE_OPERATION, payload: symbol});
}
export const clearDisplay = (clear) => {
    return({type: CLEAR_DISPLAY, payload: clear});

}
export const change_memory = () => {
    return ({type: CHANGE_MEMORY});
}
export const clear_memory = () => {
    return ({type: CLEAR_MEMORY});
}