import { createStore } from 'redux'

const initialState = {
    domainList: [],
    loading:false,
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case "SET_DOMAIN_LIST":
    return { ...state, domainList:payload }
  case "SET_LOADING":
    return {...state, loading:payload}
  default:
    return state
  }
}


const store = createStore(reducer)

export default store