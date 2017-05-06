import { actionTypes } from '../actions/auth'

const initalState = {
  user: null
}

const reducer = (state=initalState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_AUTH:
      return {
        user: action.user
      }
    default:
      return state
  }
}

export default reducer