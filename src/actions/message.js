import { createAction } from 'redux-actions';

export const RECIEVE_MESSAGE = 'RECIEVE_MESSAGE';

export const getMessage = createAction(RECIEVE_MESSAGE);
