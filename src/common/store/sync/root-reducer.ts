import {SET_CLONED_STATE, SET_PATCHED_STATE} from './actions';

export default function(appReducer) {
  // generate root reducer with capability to overwrite / patch the state
  return (state, action) => {
    switch (action.type) {
      case SET_CLONED_STATE:
        console.log('new state:', { ...action.payload.newState });
        return { ...action.payload.newState };
      case SET_PATCHED_STATE:
        // TODO
      default:
        return appReducer(state, action);
    }
  };
}
