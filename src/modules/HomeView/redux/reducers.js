import { AsyncStorage } from 'react-native';
import { persistCombineReducers } from 'redux-persist';
import { reducer as oidcReducer } from 'redux-oidc';

import authReducer from './auth/reducer';
import eventsReducer from './events/reducer';
import hearingsReducer from './hearings/reducer';
import feedReducer from './feed/reducer';
import promotionReducer from './promotions/reducer';

const persistConfig = {
  key: "root",
  storage: AsyncStorage
}

export default persistCombineReducers(persistConfig, {
  OIDC: oidcReducer,
  auth: authReducer,
  events: eventsReducer,
  hearings: hearingsReducer,
  feed: feedReducer,
  promotions: promotionReducer,
});
