import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import friendsReducer from '../reducers/friends';
import listsReducer from '../reducers/lists';
import eventsReducer from '../reducers/events';
import authReducer from '../reducers/auth';




// Store creation
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      // filters: filtersReducer,
      // auth: authReducer,
      friends: friendsReducer,
      lists: listsReducer,
      events: eventsReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
