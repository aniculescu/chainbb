import { combineReducers } from 'redux'

import account from './account'
import breadcrumb from './breadcrumb'
import post from './post'
import preferences from './preferences'
import search from './search'
import subscriptions from './subscriptions'
import state from './state'
import status from './status'

const forumReducer = combineReducers({
  account,
  breadcrumb,
  post,
  preferences,
  search,
  subscriptions,
  state,
  status
})

export default forumReducer
