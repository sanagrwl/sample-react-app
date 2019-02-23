
export const actionTypes =  [
    'OPEN_DRAWER',
    'CLOSE_DRAWER'
].reduce((acc, t) => {
     acc[t] = t
     return acc;
 }, {})

const openDrawerAction = () => {
    return {
        type: actionTypes.OPEN_DRAWER
    }
}

const closeDrawerAction = () => {
    return {
        type: actionTypes.CLOSE_DRAWER
    }
}

const actions = {
    openDrawerAction,
    closeDrawerAction
}

export default actions;