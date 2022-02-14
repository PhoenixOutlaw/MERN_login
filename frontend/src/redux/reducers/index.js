

export const log = (state=false, action) => {
    switch (action.type) {
        case "sign_in":return state=true;
        case "sign_out":return state=false;
        default:return state;

    }
}
export const account = (state={} , action) => {
    switch (action.type) {
        case "register_success" :return state=action.payload;
        case "register_failure" :return state.error=action.error;
        default:return state;
    }
}

