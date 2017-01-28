import _ from 'lodash';

import { client } from '../index.js';

const ERROR_MESSAGE = 'cannot use the client without zendesk';
const INSERT = 'ticket.editor.insert';

export default class TicketEditor {

  static insertMessage(message, success, failure) {
    try {
      client.invoke(INSERT, message);
      if (_.isFunction(success)) {
        success();
      }
    } catch(error) {
      if (_.isFunction(failure)) {
        console.log(ERROR_MESSAGE);
        failure();
      }
    }
  }
}
