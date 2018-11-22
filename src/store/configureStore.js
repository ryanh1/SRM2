import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import friendsReducer from '../reducers/friends';
import listsReducer from '../reducers/lists';
import eventsReducer from '../reducers/events';
import authReducer from '../reducers/auth';
import accountReducer from '../reducers/account';
import locationsReducer from '../reducers/locations';
import guidesReducer from '../reducers/guides';


// Store creation
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      // filters: filtersReducer,
      friends: friendsReducer,
      lists: listsReducer,
      events: eventsReducer,
      auth: authReducer,
      account: accountReducer,
      locations: locationsReducer,
      guides: guidesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
