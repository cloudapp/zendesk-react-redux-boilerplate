import { handleActions } from 'redux-actions';
import _ from 'lodash';

const defaultState = {
  welcomeMessage: 'Waiting to get message...'
};

const messages = handleActions({
  RECIEVE_MESSAGE: (state, action) => ({
    ...state,
    welcomeMessage: 'Random Message',
  }),
}, defaultState);

export default messages;
