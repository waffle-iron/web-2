import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { combineEpics } from 'redux-observable'

import auth from './auth'
import comments from './comments'
import users from './users'
import userVideos from './userVideos'
import videos from './videos'
import videoComments from './videoComments'
import videoStreamsContainer from './videoStreams'

export const rootEpic = combineEpics(
);

export const rootReducer = combineReducers({
  auth,
  comments,
  users,
  userVideos,
  videos,
  videoComments,
  videoStreamsContainer,
  routing: routerReducer,
});
