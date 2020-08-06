import {createStore} from 'redux'

import shopReducer from '../reducers/reducer'

export const store = createStore(shopReducer)