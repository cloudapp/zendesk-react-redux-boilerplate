import { createAction } from 'redux-actions';

import TicketEditor from '../helpers/editor';


export const INSERT_MESSAGE = 'INSERT_MESSAGE';
export const MESSAGE_FAILED = 'MESSAGE_FAILED';

export const putMessage = createAction(INSERT_MESSAGE);
export const failMessage = createAction(MESSAGE_FAILED);

export const insertMessage = (message) => (dispatch, getState) => {
  TicketEditor.insertMessage(
    message,
    () => dispatch(putMessage()),
    () => dispatch(failMessage())
  );
}
