import { combineReducers } from 'redux';
import { reducer as recommendReducer } from '../application/Recommend/store';

const rootReducer = combineReducers({
  recommend: recommendReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
