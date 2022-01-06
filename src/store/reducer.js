import { CHANGE_INPUT } from './actionTypes'

const defaultState = {
    inputValue: 'Write Something',
    list: [
        '早8点开会',
        '做需求'
    ]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    // Reducer里只能接受state,不能改变state
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if (action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    return state
}