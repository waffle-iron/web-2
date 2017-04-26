import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { combineEpics } from 'redux-observable'
import { responsiveStateReducer } from 'redux-responsive'
import { firebaseStateReducer } from 'react-redux-firebase'

import authentication from './authentication'
import commentStream from './commentStream'
import streamingPoll from './streamingPoll'
import users from './users'
import videoStreamsContainer from './videoStreams'

export const rootEpic = combineEpics(
);

export const rootReducer = combineReducers({
  browser: responsiveStateReducer,
  firebase: firebaseStateReducer,
  authentication,
  users,
  commentStream,
  streamingPoll,
  videoStreamsContainer,
  routing: routerReducer,
});
