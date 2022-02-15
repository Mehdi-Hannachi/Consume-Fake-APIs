import {combineReducers} from 'redux'
import userReducer from './userReducer'
import postsReducer from './postsReducer'
import commentsReducer from './commentsReducer'

const rootReducer = combineReducers({
    userReducer,postsReducer,commentsReducer
})

export default rootReducer